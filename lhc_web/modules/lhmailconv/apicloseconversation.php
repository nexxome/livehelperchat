<?php

header ( 'content-type: application/json; charset=utf-8' );

try {

    if (!isset($_SERVER['HTTP_X_CSRFTOKEN']) || !$currentUser->validateCSFRToken($_SERVER['HTTP_X_CSRFTOKEN'])) {
        throw new Exception('Invalid CSRF token!');
    }

    $db = ezcDbInstance::get();
    $db->beginTransaction();

    $conv = erLhcoreClassModelMailconvConversation::fetchAndLock($Params['user_parameters']['id']);

    if ($conv instanceof erLhcoreClassModelMailconvConversation && erLhcoreClassChat::hasAccessToWrite($conv) )
    {
        erLhcoreClassMailconvWorkflow::closeConversation(['conv' => & $conv, 'user_id' => $currentUser->getUserID()]);

        $messages = erLhcoreClassModelMailconvMessage::getList(array('sort' => 'udate ASC', 'filter' => ['conversation_id' => $conv->id]));

        erLhcoreClassChat::prefillGetAttributesObject($conv,
            erLhcoreClassMailconv::$conversationAttributes,
            erLhcoreClassMailconv::$conversationAttributesRemove
        );

        erLhcoreClassChat::prefillGetAttributes($messages,
            erLhcoreClassMailconv::$messagesAttributes, 
            erLhcoreClassMailconv::$messagesAttributesRemove
        );

        $db->commit();

        echo json_encode(['conv' => $conv, 'messages' =>  array_values($messages)]);

    } else {
        throw new Exception(erTranslationClassLhTranslation::getInstance()->getTranslation('module/mailconv','No permission to write conversation.'));
    }

} catch (Exception $e) {

    erLhcoreClassLog::write(print_r($e,true));

    http_response_code(400);
    echo json_encode(array(
        'error' => $e->getMessage()
    ));
}


exit;

?>