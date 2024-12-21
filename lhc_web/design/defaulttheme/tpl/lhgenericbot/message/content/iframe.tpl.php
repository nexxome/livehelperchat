<div class="meta-message meta-message-html-<?php echo $messageId?>" <?php if (isset($metaMessage['iframe_options']['hide_op']) && $metaMessage['iframe_options']['hide_op'] == 1) : ?>id="msg-<?php echo $messageId?>"<?php endif;?> >

<inlineiframe <?php if (isset($metaMessage['payload_js_source'])) : ?>data-js-body="<?php echo htmlspecialchars($metaMessage['payload_js_source'], ENT_QUOTES);?>"<?php endif; ?> data-body='<?php echo htmlspecialchars($metaMessage['body_html'], ENT_QUOTES);?>' <?php if (isset($metaMessage['iframe_url'])) : ?>data-url='<?php echo json_encode($metaMessage['iframe_url'], JSON_HEX_APOS)?>'<?php endif; ?> <?php if (isset($metaMessage['body_form'])) : ?>data-form='<?php echo erLhcoreClassSystem::getHost() . erLhcoreClassDesign::baseurl('form/formwidget') . '/' .  $metaMessage['body_form']?>'<?php endif; ?> <?php if (isset($metaMessage['style'])) : ?>data-style='<?php echo htmlspecialchars($metaMessage['style'], ENT_QUOTES)?>'<?php endif; ?> <?php if (isset($metaMessage['iframe_options'])) : ?>data-iframe='<?php echo json_encode($metaMessage['iframe_options'], JSON_HEX_APOS)?>'<?php endif; ?> <?php if (isset($metaMessage['payload_js'])) : ?>data-js='<?php echo json_encode($metaMessage['payload_js'], JSON_HEX_APOS)?>'<?php endif; ?> <?php if (isset($metaMessage['payload_css'])) : ?>data-css='<?php echo json_encode($metaMessage['payload_css'], JSON_HEX_APOS)?>'<?php endif; ?> data-id="<?php echo $messageId?>" />

</div>
