<?php

class erLhcoreClassChatArcive
{

    /**
     * @desc returns archive chat object if id is found
     * @param $chatId
     * @return array|null
     * @throws ezcDbHandlerNotFoundException
     */
    public static function fetchChatById($chatId, $useCache = true, $trowException = true) {
        $chatsId[$chatId] = array();
        self::setArchiveAttribute($chatsId);

        if ($chatsId[$chatId]['archive'] == 1 && is_numeric($chatsId[$chatId]['archive_id'])) {
            $archive = erLhcoreClassModelChatArchiveRange::fetch($chatsId[$chatId]['archive_id']);

            if ($archive instanceof erLhcoreClassModelChatArchiveRange) {
                $archive->setTables();
                $chat = erLhcoreClassModelChatArchive::fetch($chatId, $useCache, $trowException);
                return array('archive' => $archive, 'chat' => $chat);
            }
        }

        return null;
    }

    /**
     * @desc Returns pending messages for archive chat
     * @param $chat_id
     * @param $message_id
     * @return array
     * @throws ezcDbHandlerNotFoundException
     */
    public static function getPendingMessages($chat_id, $message_id)
    {
        $db = ezcDbInstance::get();
        $stmt = $db->prepare("SELECT " . erLhcoreClassModelChatArchiveRange::$archiveMsgTable .".* FROM " . erLhcoreClassModelChatArchiveRange::$archiveMsgTable ." INNER JOIN ( SELECT id FROM " . erLhcoreClassModelChatArchiveRange::$archiveMsgTable ." WHERE chat_id = :chat_id AND id > :message_id ORDER BY id ASC) AS items ON " . erLhcoreClassModelChatArchiveRange::$archiveMsgTable .".id = items.id");
        $stmt->bindValue( ':chat_id',$chat_id,PDO::PARAM_INT);
        $stmt->bindValue( ':message_id',$message_id,PDO::PARAM_INT);
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $stmt->execute();
        $rows = $stmt->fetchAll();

        return $rows;
    }

    /**
     * @param array $chatsId
     * @return array
     * @throws ezcDbHandlerNotFoundException
     */
    public static function setArchiveAttribute(array & $chatsId)
    {
        if (empty($chatsId)) {
            return;
        }

        $db = ezcDbInstance::get();

        $stmt = $db->prepare('SELECT id FROM lh_chat WHERE id IN ( ' . implode(',', array_keys($chatsId)) . ' )');
        $stmt->execute();
        $chatsLiveId = $stmt->fetchAll(PDO::FETCH_COLUMN);

        $archivedChats = array();

        foreach ($chatsId as $chatId => & $data) {
            if (in_array($chatId, $chatsLiveId)) {
                $data['archive'] = false;
            } else {
                $data['archive'] = true;
                $archivedChats[] = $chatId;
            }
        }

        $archivesRanges = array();

        foreach ($archivedChats as $archiveChatId) {

            if (empty($archivesRanges) || ($archiveId = self::isInRange($archiveChatId, $archivesRanges)) === null) {
                $stmt = $db->prepare('SELECT id,first_id,last_id FROM lh_chat_archive_range WHERE :chat_id_1 <= last_id && :chat_id_2 >= first_id LIMIT 1');
                $stmt->bindValue(':chat_id_1', $archiveChatId);
                $stmt->bindValue(':chat_id_2', $archiveChatId);
                $stmt->execute();
                $dataArchive = $stmt->fetch(PDO::FETCH_ASSOC);

                if (is_array($dataArchive)) {
                    $archivesRanges[] = $dataArchive;
                    $archiveId = $dataArchive['id'];
                } else {
                    $archiveId = null;
                }
            }

            if (is_numeric($archiveId)) {
                $chatsId[$archiveChatId]['archive_id'] = $archiveId;
            } else {
                $chatsId[$archiveChatId]['archive_id'] = null;
            }
        }

        return $chatsId;
    }

    public static function isInRange($chatId, $ranges)
    {
        foreach ($ranges as $range) {
            if ($chatId >= $range['first_id'] && $chatId <= $range['last_id']) {
                return $range['id'];
            }
        }

        return null;
    }
}