WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.stiltsoft.confluence.plugin.tablefilter.tablefilter:43e64f6a76a4e2b4aac58a4ccda40d45', location = 'build/3444.js' */
"use strict";(self.webpackChunkcom_stiltsoft_confluence_plugin_tablefilter=self.webpackChunkcom_stiltsoft_confluence_plugin_tablefilter||[]).push([[3444],{53444:function(e,t,n){n.r(t),t.default=function e(t,n,l,i,c){const s=[];t.find(n).each((function(){s.push($(this).attr("id"))}));const f=t.filter(".table-excerpt").length>0,a=s.length||f;return a?(t.bind(l,(function(e,t){if(s.includes(t.id)||f)return i(e),c||$(e.target).closest(".table-excerpt, .original-table, .tj-source, .tablefilter-table-wrapper").hasClass("table-excerpt")})),t.one("tf-added",(e=>-1===s.indexOf(e)?s.push(e):null))):t.one("tf-added tf-inserted",(()=>e(t,n,l,i))),a}}}]);
}catch(e){WRMCB(e)};