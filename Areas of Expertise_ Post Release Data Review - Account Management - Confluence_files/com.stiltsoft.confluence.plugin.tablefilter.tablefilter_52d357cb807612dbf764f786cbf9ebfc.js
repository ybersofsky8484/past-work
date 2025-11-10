WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.stiltsoft.confluence.plugin.tablefilter.tablefilter:52d357cb807612dbf764f786cbf9ebfc', location = 'build/9313.js' */
"use strict";(self.webpackChunkcom_stiltsoft_confluence_plugin_tablefilter=self.webpackChunkcom_stiltsoft_confluence_plugin_tablefilter||[]).push([[9313],{29313:function(t,n,_){_.r(n),_.d(n,{extractTables:function(){return e}});var E=_(68631);const e=(t,n=E.DEFAULT_TABLE_SELECTOR)=>t.map((function(){const t=$(this),_=t.find(`${E.PIVOT_ORIGINAL_TABLE_SELECTOR}, ${E.TT_ORIGINAL_TABLE_SELECTOR}`).find(n),e=t.find(E.INNER_TABLE_SELECTOR);return t.find(n).not(E.EXCLUDE_TABLE_SELECTOR).not(_).not(e).toArray()}))}}]);
}catch(e){WRMCB(e)};