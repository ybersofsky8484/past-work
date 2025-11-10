WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.jira.jira-header-plugin:newsletter-signup-tip', location = 'static/components/newsletter/NewsletterSignup.soy' */
// This file was automatically generated from NewsletterSignup.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Templates.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Templates == 'undefined') { JIRA.Templates = {}; }


JIRA.Templates.newsletterSignupTip = function(opt_data, opt_ignored) {
  return '<div><p>' + soy.$$escapeHtml(opt_data.description) + '</p>' + aui.form.form({action: '#', isTopLabels: true, extraClasses: 'insiders-signup-form', content: '' + aui.form.textField({id: 'jira-newsletter-user-email', placeholderText: '' + soy.$$escapeHtml('Email address'), value: opt_data.userEmail}) + aui.form.fieldGroup({content: '' + aui.form.select({id: 'jira-newsletter-role', options: opt_data.roles})}) + aui.form.textField({id: 'jira-newsletter-other-role-name', placeholderText: '' + soy.$$escapeHtml('e.g. King of the North'), extraClasses: 'hidden'}) + aui.form.fieldGroup({content: '' + aui.form.field({id: 'jira-newsletter-opt-in', type: 'checkbox', isChecked: false, extraClasses: 'jira-newsletter-opt-in', labelContent: '' + soy.$$filterNoAutoescape('By providing your email, you accept our \x3ca href\x3d\x22https://www.atlassian.com/legal/privacy-policy\x22 data-track-click\x3d\x22jira.newsletter.signuptip.privacy.link.click\x22\x3eprivacy policy\x3c/a\x3e, and agree to have Atlassian content delivered straight to your inbox.')})}) + aui.form.buttons({content: '' + aui.form.submit({type: 'primary', text: '' + soy.$$filterNoAutoescape('Sign me up')}) + aui.form.linkButton({text: '' + soy.$$escapeHtml('No, thanks')})})}) + '</div>';
};
if (goog.DEBUG) {
  JIRA.Templates.newsletterSignupTip.soyTemplateName = 'JIRA.Templates.newsletterSignupTip';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.jira.jira-header-plugin:newsletter-signup-tip', location = 'static/components/newsletter/NewsletterRoles.js' */
define("jira/newsletter/roles",["jira/util/formatter","underscore","exports"],(function(e,t,n){"use strict";n.getRoles=function(){var n=[{value:"",text:"Choose your role",disabled:!0,selected:!0}],s=[{value:"software-engineer",text:"Software Engineering"},{value:"product-manager",text:"Product Management"},{value:"qa",text:"Quality Assurance"},{value:"design",text:"Design"},{value:"management",text:"Management"},{value:"sys-admin",text:"Systems Administration"}],r=[{value:"other",text:"Other"}];return n.concat(t.shuffle(s)).concat(r)}}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.jira.jira-header-plugin:newsletter-signup-tip', location = 'static/components/newsletter/NewsletterSignup.js' */
define("jira/newsletter/signuptip",["jira/analytics","jira/util/formatter","jira/util/data/meta","jira/newsletter/roles","jira-help-tips/feature/help-tip","atlassian/libs/underscore-1.8.3","jquery"],(function(e,i,n,t,r,s,a){"use strict";var l=/^[a-zA-Z0-9.!#$%'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;return{render:function(e){var i=s.random(1e4);setTimeout(function(){this.doRender(s.extend(e,{signupTipDelay:i}))}.bind(this),i)},doRender:function(o){var u={anchor:"#user-options",isSequence:!1,showCloseButton:!1};u.id=o.signupId;u.title=o.signupTitle;u.bodyHtml=JIRA.Templates.newsletterSignupTip({userEmail:o.userEmail,description:o.signupDescription,roles:t.getRoles()});var p=new r(u);if(!p.isDismissed()){var d=function(){return a("#aui-flag-container").find(".aui-flag").filter("[open]:visible").length};if(d())e.send({name:"jira.newsletter.signuptip.notshown",data:{flagsVisible:d(),signupTipDelay:o.signupTipDelay}});else{p.show();e.send({name:"jira.newsletter.signuptip.shown"});var f=a("body");f.on("submit","form.aui.insiders-signup-form",(function(t){t.preventDefault();var r=a(this);r.find(".error").remove();var u=r.find("#jira-newsletter-user-email"),f=r.find("#jira-newsletter-role"),g=r.find("#jira-newsletter-opt-in"),m=u.val(),c=f.val(),w=g.prop("checked"),h="other"===c?r.find("#jira-newsletter-other-role-name").val().substring(0,100):void 0,j=function(e){return!(e.length>255)&&l.test(e)}(m),v=!0===w;if(j&&v){a.ajax({type:"POST",url:i.format(o.formUrl,encodeURI(m)),dataType:"json",contentType:"application/json",data:JSON.stringify({role:c,otherRoleName:h,lang:n.getLanguage()})}).success((function(){e.send({name:"jira.newsletter.signuptip.submitted",data:(i={role:c,otherRoleName:h,lang:n.getLanguage(),checksum:(t=m.split("@")[0],s.reduce(t,(function(e,i){return(e=(e<<5)-e+i.charCodeAt(0))&e}),0)),flagsVisible:d(),signupTipDelay:o.signupTipDelay},s.omit(i,s.isUndefined))});var i,t})).error((function(i){e.send({name:"jira.newsletter.signuptip.error",data:{statusCode:i.status}})}));o.userEmail!==m&&e.send({name:"jira.newsletter.signuptip.email.changed"});p.dismiss("newslettersubscribed")}else{if(!j){e.send({name:"jira.newsletter.signuptip.email.validationerror",data:{flagsVisible:d()}});u.after(aui.form.fieldError({message:"Please enter a valid e-mail address."}))}if(!v){e.send({name:"jira.newsletter.signuptip.opt-in.validationerror",data:{flagsVisible:d()}});g.parent().after(aui.form.fieldError({message:"Please agree to continue."}))}}}));f.on("click","form.aui.insiders-signup-form a.cancel",(function(i){i.preventDefault();e.send({name:"jira.newsletter.signuptip.dismissed",data:{flagsVisible:d(),signupTipDelay:o.signupTipDelay}});p.dismiss("newslettercancelled")}));f.on("change","form.aui.insiders-signup-form",(function(){var e=a(this),i=e.find("#jira-newsletter-role");e.find("#jira-newsletter-other-role-name").parent().closest("div").toggleClass("hidden","other"!==i.val())}))}}}}}));
}catch(e){WRMCB(e)};