WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.stiltsoft.confluence.plugin.tablefilter.tablefilter:5161d834a00048ad4e2dca4776ad018e', location = 'build/4492.js' */
"use strict";(self.webpackChunkcom_stiltsoft_confluence_plugin_tablefilter=self.webpackChunkcom_stiltsoft_confluence_plugin_tablefilter||[]).push([[4492],{84492:function(e,t,l){var n=l(24540),f=Math.floor,o=function(e,t){var l=e.length;if(l<8)for(var r,c,s=1;s<l;){for(c=s,r=e[s];c&&t(e[c-1],r)>0;)e[c]=e[--c];c!==s++&&(e[c]=r)}else for(var u=f(l/2),i=o(n(e,0,u),t),a=o(n(e,u),t),_=i.length,h=a.length,p=0,g=0;p<_||g<h;)e[p+g]=p<_&&g<h?t(i[p],a[g])<=0?i[p++]:a[g++]:p<_?i[p++]:a[g++];return e};e.exports=o}}]);
}catch(e){WRMCB(e)};