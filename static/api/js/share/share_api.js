window._bd_share_main.F.module("share/share_api",function(n,a,t){n("base/tangram").T;var e=n("base/class").Class,i=n("component/comm_tools"),o=n("share/api_base");a.Api=e.create(function(n){var a=this,t={count:0,clicked:!1};a._init=function(){var e=a.getView();e.render(),e.on("getsharecount",function(){var a;a=function(n){t.count=n.count,e.setNumber(n.count,n.display)},window._bd_share_main.F.use("trans/data",function(t){t.get({type:"share_count",url:n.bdUrl||i.getPageUrl(),callback:function(n,t){a&&a({count:n,display:t})}})})}),e.init()},a._processAction=function(n){return{data:{type:"share"}}}},o.ApiBase)});