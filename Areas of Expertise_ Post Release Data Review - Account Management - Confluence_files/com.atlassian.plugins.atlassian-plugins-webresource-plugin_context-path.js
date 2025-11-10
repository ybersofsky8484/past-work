WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-plugin:context-path', location = 'js/data/context-path.js' */
(function(){function a(){null===b&&(b=WRM.data.claim("com.atlassian.plugins.atlassian-plugins-webresource-plugin:context-path.context-path"));return b}var b=null;"function"===typeof define&&define("wrm/context-path",()=>a);WRM.contextPath=a;AJS.contextPath=a})();
}catch(e){WRMCB(e)};