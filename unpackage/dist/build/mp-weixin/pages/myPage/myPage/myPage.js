(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/myPage/myPage/myPage"],{"0299":function(t,n,e){"use strict";e.r(n);var a=e("7f66"),u=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=u.a},"73ca":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},"7f66":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{nickName:"",userName:""}},methods:{InformationQuery:function(){var n=this,e=t.getStorageSync("wx_uuid");this.$http.get("http://192.168.2.241:8099/supplychain/api/operator/select",{uuid:e}).then(function(t){console.log(t),n.nickName=t.data.data.nickname,n.userName=t.data.data.username})}},created:function(){this.InformationQuery(),console.log(66)}};n.default=e}).call(this,e("543d")["default"])},"957b":function(t,n,e){"use strict";var a=e("d229"),u=e.n(a);u.a},d229:function(t,n,e){},e25c:function(t,n,e){"use strict";e.r(n);var a=e("73ca"),u=e("0299");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("957b");var r=e("2877"),c=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports}},[["a76e","common/runtime","common/vendor"]]]);