WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-plugin:data', location = 'js/data/data.js' */
(function(g){function h(a,e,c){try{var b=e[a];var d=b?JSON.parse(b):b;delete e[a];c.set(a,!0);return d}catch(f){return console.error(`Exception extracting data with key '${a}'`,f),g}}function m(a,e,c){setTimeout(()=>{try{a(e)}catch(b){console.error(`Exception calling data callback for '${c}'`,b)}})}function k(a,e,c,b){for(let d of Object.keys(a))if(c.has(d)){const f=h(d,a,e),l=f!==g?c.get(d):b.get(d);c.delete(d);b.delete(d);l&&m(l,f,d)}}WRM._createDataImpl=function(a){a._unparsedData=a._unparsedData||
{};a._unparsedErrors=a._unparsedErrors||{};a._claimedData=a._claimedData||new Map;const e=new Map,c=new Map;a._dataArrived=function(){k(a._unparsedData,a._claimedData,e,c);k(a._unparsedErrors,a._claimedData,c,c)};return{claim(b,d,f){if(d||f)d&&!e.has(b)&&e.set(b,d),f&&!c.has(b)&&c.set(b,f),a._dataArrived();else{if(a._claimedData.has(b))return console.error(`Data with key '${b}' has already been claimed`),g;if(Object.hasOwnProperty.call(a._unparsedData,b))return h(b,a._unparsedData,a._claimedData)}}}};
WRM.data=WRM._createDataImpl(WRM);"function"===typeof define&&define("wrm/data",()=>WRM.data)})();
}catch(e){WRMCB(e)};