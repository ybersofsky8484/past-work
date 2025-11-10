WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.component.expander', location = 'aui.chunk.881954ef95b325b3f190--9e61c4091290be56a1ba.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.component.expander"],{ufFX:function(e,t,r){"use strict";r.r(t);var a=r("+x/D"),n=Object(a.default)(document),i=function(e){var t={};return t.$trigger=Object(a.default)(e.currentTarget),t.$content=n.find("#"+t.$trigger.attr("aria-controls")),t.triggerIsParent=0!==t.$content.parent().filter(t.$trigger).length,t.$shortContent=t.triggerIsParent?t.$trigger.find(".aui-expander-short-content"):null,t.height=t.$content.css("min-height"),t.isCollapsible=!1!==t.$trigger.data("collapsible"),t.replaceText=t.$trigger.attr("data-replace-text"),t.replaceSelector=t.$trigger.data("replace-selector"),t},c=function(e){if(e.replaceText){var t=e.replaceSelector?e.$trigger.find(e.replaceSelector):e.$trigger;e.$trigger.attr("data-replace-text",t.text()),t.text(e.replaceText)}},g={"aui-expander-invoke":function(e){var t=Object(a.default)(e.currentTarget),r=n.find("#"+t.attr("aria-controls")),i=!1!==t.data("collapsible");"true"===r.attr("aria-expanded")&&i?t.trigger("aui-expander-collapse"):t.trigger("aui-expander-expand")},"aui-expander-expand":function(e){var t=i(e);"true"!==t.$content.attr("aria-expanded")&&(t.$content.attr("aria-expanded","true"),t.$trigger.attr("aria-expanded","true"),t.$content.get(0).removeAttribute("hidden"),c(t),t.triggerIsParent&&t.$shortContent.hide(),t.$trigger.trigger("aui-expander-expanded"))},"aui-expander-collapse":function(e){var t=i(e);"true"===t.$content.attr("aria-expanded")&&(c(t),t.$content.attr("aria-expanded","false"),t.$trigger.attr("aria-expanded","false"),t.triggerIsParent&&t.$shortContent.show(),0===t.$content.outerHeight()&&t.$content.get(0).setAttribute("hidden",""),t.$trigger.trigger("aui-expander-collapsed"))},"click.aui-expander":function(e){Object(a.default)(e.currentTarget).trigger("aui-expander-invoke",e.currentTarget)}};n.on(g,".aui-expander-trigger")}},[["ufFX","runtime","aui.splitchunk.0d131bcbf1","aui.splitchunk.739b9ec8cc"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'templates/sharepage/share-dialog.soy' */
// This file was automatically generated from share-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Share.Dialog.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Share == 'undefined') { Confluence.Templates.Share = {}; }
if (typeof Confluence.Templates.Share.Dialog == 'undefined') { Confluence.Templates.Share.Dialog = {}; }


Confluence.Templates.Share.Dialog.shareContentPopup = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui share-content-popup top-label"><h3>' + soy.$$escapeHtml(opt_data.heading) + '</h3><fieldset class="top-label" style="margin-top:10px"><div class="field-group top-label"><label for="share-link-input">' + soy.$$escapeHtml('Share link') + '</label><div class="share-copy-link"><input id="share-link-input" type="text" class="text" readonly><button id="share-link-copy-button" type="button" class="aui-button">' + soy.$$escapeHtml('Copy') + '</button></div></div></fieldset>' + ((opt_data.mailServerConfigured) ? '<hr style="margin-top:12px;"/><fieldset class="top-label"><div class="field-group top-label"><label for="share-invite-users-input">' + soy.$$escapeHtml(opt_data.peopleHeading) + '</label><div class="autocomplete-user-target"><input id="share-invite-users-input" class="text autocomplete-sharepage" data-max="10" data-dropdown-target=".autocomplete-user-target" data-none-message="' + soy.$$escapeHtml('No matches') + '" placeholder="' + soy.$$escapeHtml('User name, group or email') + '"/></div><ul class="recipients" style="display:none;"></ul></div></fieldset><fieldset class="top-label"><div class="field-group top-label"><label for="share-note-input">' + soy.$$escapeHtml('Include a message') + '</label><textarea class="textarea" id="share-note-input" placeholder="' + soy.$$escapeHtml(opt_data.notePlaceholder) + '"></textarea></div></fieldset><div class="field-group button-panel"><div class="progress-messages-icon"></div><div class="progress-messages"></div><input class="button submit disabled" type="submit" value="' + soy.$$escapeHtml(opt_data.submitButtonText) + '" role="button" aria-disabled="true"/><a class="close-dialog" href="#">' + soy.$$escapeHtml('Cancel') + '</a></div>' : '') + '</form><div class="restriction-warning-container"><div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.shareContentPopup.soyTemplateName = 'Confluence.Templates.Share.Dialog.shareContentPopup';
}


Confluence.Templates.Share.Dialog.copied = function(opt_data, opt_ignored) {
  return '<div class="copied share-custom-message"><div class="message-icon custom-icon icon-success"></div><div class="message-text">' + soy.$$escapeHtml('Copied to clipboard') + '</div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.copied.soyTemplateName = 'Confluence.Templates.Share.Dialog.copied';
}


Confluence.Templates.Share.Dialog.recipientSelectionError = function(opt_data, opt_ignored) {
  return '<div class="recipientSelectionError share-custom-message"><div class="message-icon aui-icon aui-icon-small aui-iconfont-error" style="color: #d2544c;"></div><div class="message-text">' + ((opt_data.copyOption == 'invite') ? soy.$$escapeHtml('Enter the name or email of the people you want to invite') : soy.$$escapeHtml('Enter the name or email of the people you want to add')) + '</div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientSelectionError.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientSelectionError';
}


Confluence.Templates.Share.Dialog.recipientUser = function(opt_data, opt_ignored) {
  return '<li data-userkey="' + soy.$$escapeHtml(opt_data.userKey) + '" style="display: none" class="recipient-user"><img src="' + soy.$$escapeHtml(opt_data.thumbnailLink.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"/><span class="title" title="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.title) + '</span><span class="remove-recipient" tabindex="0" role="button" aria-label="' + soy.$$escapeHtml(AJS.format('Remove {0} from recipients',opt_data.title)) + '"></span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientUser.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientUser';
}


Confluence.Templates.Share.Dialog.recipientEmail = function(opt_data, opt_ignored) {
  return '<li data-email="' + soy.$$escapeHtml(opt_data.email) + '" style="display: none" class="recipient-email"><img src="' + soy.$$escapeHtml(opt_data.icon) + '" title="' + soy.$$escapeHtml(opt_data.email) + '"/><span class="title" title="' + soy.$$escapeHtml(opt_data.email) + '">' + soy.$$escapeHtml(opt_data.email) + '</span><span class="remove-recipient" tabindex="0" role="button" aria-label="' + soy.$$escapeHtml(AJS.format('Remove {0} from recipients',opt_data.email)) + '"></span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientEmail.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientEmail';
}


Confluence.Templates.Share.Dialog.recipientGroup = function(opt_data, opt_ignored) {
  return '<li data-group="' + soy.$$escapeHtml(opt_data.title) + '" style="display: none" class="recipient-group"><span><img src="' + soy.$$escapeHtml(opt_data.thumbnailLink.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"/><span>' + soy.$$escapeHtml(opt_data.title) + '</span><span class="remove-recipient" tabindex="0" role="button" aria-label="' + soy.$$escapeHtml(AJS.format('Remove {0} from recipients',opt_data.title)) + '"></span></span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientGroup.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientGroup';
}


Confluence.Templates.Share.Dialog.restrictionWarning = function(opt_data, opt_ignored) {
  return '' + ((opt_data.type != '') ? '<div class="restriction-warning"><div class="aui-icon aui-icon-small aui-iconfont-locked red"></div><div class="share-dialog-' + soy.$$escapeHtml(opt_data.type) + '-message">' + soy.$$escapeHtml(opt_data.message) + ' <a id="restriction-open-button" href="#">' + soy.$$escapeHtml('Change') + '</a></div></div>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.restrictionWarning.soyTemplateName = 'Confluence.Templates.Share.Dialog.restrictionWarning';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/util/resolve-entity-id.js' */
define("confluence/share-page/util/resolve-entity-id",["confluence/meta"],function(b){return function(a){return"function"===typeof a?a():"string"===typeof a||"number"===typeof a?parseInt(a):b.get("content-id")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/util/show-message.js' */
define("confluence/share-page/util/show-message",["jquery","confluence/legacy"],function(h,k){return function(c,g,l,m,e,a){var b=c.next("."+g),f=h(k.Templates.Share.Dialog[g](l));if(b.length){e&&"function"===typeof e&&e();b.hasClass("show")?(b.addClass("existing"),setTimeout(function(){b.removeClass("existing");a&&"function"===typeof a&&a()},200)):(b.addClass("show"),a&&"function"===typeof a&&a());var d=b}else c.after(f),setTimeout(function(){f.addClass("show")},5),d=f;m||(clearTimeout(d.data("timeout")),
c=setTimeout(function(){d.removeClass("show")},2E3),d.data("timeout",c))}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/util/find-recipients.js' */
define("confluence/share-page/util/find-recipients",["jquery"],function(d){return{findAllRecipients:function(b){return b.find(".recipients li")},findUsers:function(b){var a=[];b.find(".recipients li[data-userKey]").each(function(e,c){a.push(d(c).attr("data-userKey"))});return a},findEmails:function(b){var a=[];b.find(".recipients li[data-email]").each(function(e,c){a.push(d(c).attr("data-email"))});return a},findGroups:function(b){var a=[];b.find(".recipients li[data-group]").each(function(e,c){a.push(d(c).attr("data-group"))});
return a}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/service/analytics-service.js' */
define("confluence/share-page/service/analytics-service",["confluence/analytics-support","confluence/meta","confluence/share-page/util/resolve-entity-id"],function(d,e,f){return{publish:function(g,a,b,h){try{var c=parseInt(f(a)),k="attachment"===b?"attachment":e.get("content-type");a=h||{};"attachment"===b?a.attachmentId=c:"edit"===b?a.draftId=c:a.contentId=c;a.contentType=k;d.publish(g.replace("\x3cshareType\x3e",b),a)}catch(l){}},SHARE_STARTED:"confluence.share-page.\x3cshareType\x3e.started",SHARE_LINK_CLICKED:"confluence.share-page.\x3cshareType\x3e.link.clicked",
SHARE_LINK_DOUBLE_CLICKED:"confluence.share-page.\x3cshareType\x3e.link.double-clicked",SHARE_LINK_COPY_CLICKED:"confluence.share-page.\x3cshareType\x3e.link.copy.clicked",SHARE_LINK_COPIED:"confluence.share-page.\x3cshareType\x3e.link.copied",SHARE_CANCEL_CLICKED:"confluence.share-page.\x3cshareType\x3e.cancel.clicked",SHARE_NO_USERS_SELECTED:"confluence.share-page.\x3cshareType\x3e.submit.no-users",SHARE_ERROR:"confluence.share-page.\x3cshareType\x3e.error"}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/fetch/content-info.js' */
define("confluence/share-page/fetch/content-info",["ajs","jquery"],function(b,c){return function(d,a){return c.get(b.contextPath()+"/rest/api/content/"+d+(a?"?status\x3d"+a:""))}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/fetch/content-restrictions.js' */
define("confluence/share-page/fetch/content-restrictions",["ajs"],function(a){var d=a.$;return function(e){var b=d.Deferred();a.$.ajax({url:a.contextPath()+"/rest/api/content/\x3ccontentId\x3e/restriction/byOperation".replace("\x3ccontentId\x3e",e)}).done(function(c){b.resolve(c)}).fail(function(c){b.reject(c)});return b.promise()}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/autocomplete/autocomplete-user.js' */
define("confluence/share-page/autocomplete/autocomplete-user",["ajs","jquery","confluence/legacy"],function(m,e,k){return function(l){function n(a){if(!a||!a.result)throw Error("Invalid JSON format");for(var h=[],f=0;f<a.result.length;f++){var d=a.result[f];"group"==d.type&&"confluence-users"!=d.name&&"confluence-administrators"!=d.name&&(d.title=d.name,d.group=d.name,d.thumbnailLink={href:k.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:_private_share-page-resources/images/group.png",
type:"image/png",rel:"thumbnail"},d.link=[{href:k.getContextPath(),rel:"self"}])}h.push(a.result);return h}l=l||document.body;var p=/^([a-zA-Z0-9_\.\-\+!#\$%&'\*/=\?\^_`{|}~])+@.*/;e("input.autocomplete-sharepage[data-autocomplete-user-bound!\x3dtrue]",l).each(function(){var a=e(this).attr("data-autocomplete-sharepage-bound","true").attr("autocomplete","off"),h=a.attr("data-max")||10,f=a.attr("data-alignment")||"left",d=a.attr("data-dropdown-target"),g=null;d?g=e(d):(g=e("\x3cdiv\x3e\x3c/div\x3e"),
a.after(g));g.addClass("aui-dd-parent autocomplete");a.quicksearch(m.REST.getBaseUrl()+"search/user-or-group.json",function(){a.trigger("open.autocomplete-sharepage")},{makeParams:function(b){return{"max-results":h,query:b.replace("{|}","")}},dropdownPlacement:function(b){g.append(b)},makeRestMatrixFromData:n,addDropdownData:function(b){var c=e.trim(a.val());p.test(c)&&b.push([{name:c,email:c,href:"#",icon:k.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:_private_share-page-resources/images/envelope.png"}]);
b.length||(c=a.attr("data-none-message"))&&b.push([{name:c,className:"no-results",href:"#"}]);return b},ajsDropDownOptions:{alignment:f,displayHandler:function(b){return b.restObj&&b.restObj.username?b.name+" ("+b.restObj.username+")":b.name},selectionHandler:function(b,c){c.find(".search-for").length?a.trigger("selected.autocomplete-sharepage",{searchFor:a.val()}):(c.find(".no-results").length||(c=e("span:eq(0)",c).data("properties"),c.email||(c=c.restObj),a.trigger("selected.autocomplete-sharepage",
{content:c})),this.hide(),b.preventDefault())}}})})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/autocomplete/setup-autocomplete.js' */
define("confluence/share-page/autocomplete/setup-autocomplete",["ajs","jquery","confluence/legacy"],function(m,f,l){return function(g,n,u){var a=g.find("#share-invite-users-input"),h=g.find("input.submit");a.bind("selected.autocomplete-sharepage",function(b,d){b=function(e,r,p){var c=g.find(".recipients");c.show();g.find(".autocomplete-user-target").nextAll(".recipientSelectionError").remove();a.removeClass("field-error");e="li[data-"+e+'\x3d"'+p.content[e]+'"]';0<c.find(e).length?c.find(e).hide():
c.append(r(p.content));var k=c.find(e);const q=function(){k.remove();0==c.find("li").length&&(h.addClass("disabled"),h.attr("aria-disabled",!0),c.hide());f(n).data("dialog").refresh();a.focus();return!1};k.find(".remove-recipient").click(q);k.find(".remove-recipient").on("keydown",function(t){t.keyCode===f.ui.keyCode.ENTER&&q()});k.fadeIn(200)};d.content.email?b("email",l.Templates.Share.Dialog.recipientEmail,d):"group"==d.content.type?b("group",l.Templates.Share.Dialog.recipientGroup,d):b("userKey",
l.Templates.Share.Dialog.recipientUser,d);f(n).data("dialog").refresh();h.removeClass("disabled");h.attr("aria-disabled",!1);a.val("");a.focus();return!1});a.bind("open.autocomplete-sharepage",function(b,d){0<f("a:not(.no-results)",m.dropDown.current.links).length&&m.dropDown.current.moveDown()});a.keypress(function(b){return 13!=b.keyCode})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/form/submit.js' */
define("confluence/share-page/form/submit","ajs jquery confluence/legacy confluence/meta confluence/share-page/service/analytics-service confluence/share-page/util/find-recipients confluence/share-page/util/resolve-entity-id confluence/message-controller".split(" "),function(d,f,r,p,q,h,t,l){function u(a,k,m){var c=h.findUsers(a),g=h.findEmails(a),e=h.findGroups(a);a=a.find("#share-note-input");return{users:c,emails:g,groups:e,note:a.val(),entityId:k,entityType:m||p.get("content-type"),contextualPageId:p.get("content-id")}}
function v(a){f("button,input,textarea",a).attr("disabled","disabled");f(".submit.button",a).attr("disabled",!1).addClass("disabled").attr("aria-disabled",!0)}return function(a,k,m,c){var g=h.findAllRecipients(a).length;if(0===g)return!1;var e=a.find(".progress-messages-icon");v(a);e.spin();e.css("position","absolute").css("top","20px");k=u(a,t(c.entityId),c.contentType);f.ajax({type:"POST",contentType:"application/json; charset\x3dutf-8",url:r.getContextPath()+"/rest/share-page/latest/share",data:JSON.stringify(k),
dataType:"text",success:function(){e.spinStop();var b=a.find(".recipients").find("li").first().text();switch(g){case 1:b="invite"===c.copyOption?d.format("Invite sent to {0}",b):d.format("Shared with {0}",b);break;case 2:b="invite"===c.copyOption?d.format("Invite sent to {0} and 1 other",b):d.format("Shared with {0} and 1 other",b);break;default:var n=g-1;b="invite"===c.copyOption?d.format("Invite sent to {0} and {1} others",b,n):d.format("Shared with {0} and {1} others",
b,n)}b=d.escapeEntities(b);d.flag({type:"success",body:b,close:"auto"});m(!0)},error:function(b,n){q.publish(q.SHARE_ERROR,c.entityId,c.shareType);e.spinStop();l.showError(l.parseError(b),l.Location.FLAG);f("button,input,textarea",a).removeAttr("disabled");f(".submit.button",a).removeClass("disabled").removeAttr("aria-disabled")}});return!1}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/popup/setup-share-link.js' */
define("confluence/share-page/popup/setup-share-link",["jquery","confluence/share-page/service/analytics-service","confluence/share-page/util/show-message"],function(f,c,l){function m(d){return"function"===typeof d?f.when(d()):"string"===typeof d?f.when(d):f.when(window.location)}return function(d,b){function g(){a.select();a.data("selected",!0)}var h=d.find(".share-copy-link"),a=h.find("input"),k=h.find("button");a.length&&(a.val(window.location),m(b.link).then(function(e){if(-1!==(""+e).indexOf("resumedraft.action")){var n=
"src\x3dshareui\x26src.shareui.timestamp\x3d"+(new Date).getTime();e=e+(0===window.location.search.length?"?":"\x26")+n}a.val(e)}),a.on("click focus",function(e){setTimeout(function(){g()},0);e.preventDefault()}),a.focus(function(){c.publish(c.SHARE_LINK_CLICKED,b.entityId,b.shareType)}),k.click(function(){c.publish(c.SHARE_LINK_COPY_CLICKED,b.entityId,b.shareType);g();document.execCommand("copy")}),a.dblclick(function(){c.publish(c.SHARE_LINK_DOUBLE_CLICKED,b.entityId,b.shareType);g();document.execCommand("copy")}),
a.blur(function(){a.removeData("selected")}),f(document).off("copy.share-link").on("copy.share-link",function(){a.data("selected")&&(c.publish(c.SHARE_LINK_COPIED,b.entityId,b.shareType),l(h,"copied",b,!1,function(){k.prop("disabled",!0)},function(){k.prop("disabled",!1)}))}))}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/popup/setup-restriction-warning.js' */
define("confluence/share-page/popup/setup-restriction-warning",["jquery"],function(b){return function(f,c){"function"===typeof c.restriction&&b.when(c.restriction()).then(function(a){if(a.type){var d=f.find(".restriction-warning-container");d.append(Confluence.Templates.Share.Dialog.restrictionWarning(a));a=d.find("#restriction-open-button");a.length&&a.click(function(g){var e=b("#rte-button-restrictions");e.length&&e.trigger("click");g.preventDefault()})}})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:_private_share-page-resources', location = 'js/popup/generate-popup.js' */
define("confluence/share-page/popup/generate-popup",["ajs","jquery","confluence/legacy","confluence/share-page/autocomplete/autocomplete-user","confluence/share-page/autocomplete/setup-autocomplete","confluence/share-page/popup/setup-share-link","confluence/share-page/form/submit","confluence/share-page/service/analytics-service","confluence/share-page/util/show-message","confluence/share-page/util/find-recipients","confluence/share-page/popup/setup-restriction-warning"],function(AJS,$,Confluence,
autocompleteUser,setupAutocomplete,setupShareLink,submit,analyticsService,showMessage,findRecipients,setupRestrictionWarning){var MAIL_SERVER_CONFIGURED=WRM.data.claim("com.atlassian.confluence.plugins.share-page:_private_share-page-resources.mail-server-configured");var WHEEL_EVENT="wheel.share-page";var KEYUP_EVENT="keyup.share-page";function _confineRecipientsScrolling($contents){$contents.find(".recipients").off(WHEEL_EVENT).on(WHEEL_EVENT,function(e){var $this=$(this);if($this.prop("scrollHeight")>
$this.innerHeight()){$this.scrollTop($this.scrollTop()+e.originalEvent.deltaY);e.preventDefault();e.stopPropagation();return false}})}function _bindEditorEvents(addOrRemove,parameters,handler){if(parameters.shareType!=="edit")return;var editor=AJS.Rte.getEditor();try{editor.onClick[addOrRemove](handler);editor.onKeyUp[addOrRemove](handler)}catch(e){AJS.warn("Unknown bind method:",addOrRemove,"for binding to editor events.",'Only "add" or "remove" are expected.')}}function _layers(trigger,parameters,
doHidePopup){$(document).bind("showLayer",function(e,type,dialog){if(type==="inlineDialog"&&dialog.popup===$(trigger).data("dialog")){dialog.popup.find("#share-link-copy-button").focus();_bindEditorEvents("add",parameters,doHidePopup)}}).bind("hideLayer",function(e,type,dialog){if(type==="inlineDialog"&&dialog.popup===$(trigger).data("dialog"))_bindEditorEvents("remove",parameters,doHidePopup)})}function _submitHandler($contents,trigger,parameters,doHidePopup){var $submitButton=$contents.find(".submit.button");
function _submitClick(){if(findRecipients.findAllRecipients($contents).length===0){analyticsService.publish(analyticsService.SHARE_NO_USERS_SELECTED,parameters.entityId,parameters.shareType);showMessage($contents.find(".autocomplete-user-target"),"recipientSelectionError",parameters,true,function(){$submitButton.off("click",_submitClick)},function(){$submitButton.click(_submitClick)});$(this).blur();$contents.find("#share-invite-users-input").addClass("field-error").focus();return false}}$submitButton.click(_submitClick);
$contents.find("form").submit(function(){return submit($contents,trigger,doHidePopup,parameters)})}function _keypressHandler(doHidePopup){$(document).off(KEYUP_EVENT).on(KEYUP_EVENT,function(e){if(e.keyCode==27){doHidePopup(true);$(document).unbind(KEYUP_EVENT,arguments.callee);return false}return true})}function _closeHandler($contents,parameters,doHidePopup){$contents.find(".close-dialog").click(function(){analyticsService.publish(analyticsService.SHARE_CANCEL_CLICKED,parameters.entityId,parameters.shareType);
return doHidePopup(true)})}function _scrollToTop(trigger){$(trigger).parents().filter(function(){return this.scrollTop>0}).scrollTop(0)}return function generatePopup($contents,trigger,doShowPopup){var parameters=this.parameters;analyticsService.publish(analyticsService.SHARE_STARTED,parameters.entityId,parameters.shareType);if($contents.find("input").length){doShowPopup();parameters.onShow&&typeof parameters.onShow==="function"&&parameters.onShow($contents);return}var submitButtonText=parameters.copyOption===
"share"?"Share":"Invite";var peopleHeading=parameters.copyOption==="share"?"Add people":"Invite people";$contents.append(Confluence.Templates.Share.Dialog.shareContentPopup({heading:parameters.heading,peopleHeading:peopleHeading,submitButtonText:submitButtonText,mailServerConfigured:MAIL_SERVER_CONFIGURED,notePlaceholder:parameters.notePlaceholder}));var doHidePopup=
function(reset){parameters.onHide&&typeof parameters.onHide==="function"&&parameters.onHide();$(trigger).data("dialog").hide();if(reset)setTimeout(function(){$contents.empty()},300);return false};autocompleteUser();setupAutocomplete($contents,trigger,parameters);setupShareLink($contents,parameters);setupRestrictionWarning($contents,parameters);_confineRecipientsScrolling($contents);_keypressHandler(doHidePopup);_submitHandler($contents,trigger,parameters,doHidePopup);_closeHandler($contents,parameters,
doHidePopup);_layers(trigger,parameters,doHidePopup);_scrollToTop(trigger);doShowPopup();parameters.onShow&&typeof parameters.onShow==="function"&&parameters.onShow($contents)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:dialog-async-loader', location = 'js/service/dialog-async-loader.js' */
define("confluence/share-page/dialog-async-loader",["ajs","jquery","confluence/share-page/popup/generate-popup"],function(b,c,d){return function(a,e,f,g){c(a).data("dialog",b.InlineDialog(a,e,d.bind({parameters:g}),f))}});
}catch(e){WRMCB(e)};