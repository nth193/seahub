(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[31],{1165:function(e,t,n){e.exports=n(1166)},1166:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(7),s=n(9),c=n(8),o=n(2),i=n.n(o),u=n(23),b=n.n(u),j=n(10),d=n(1),p=n(135),f=n(109),O=n(16),l=n(120),h=(n(242),n(0)),v=window.app.pageOptions,g=v.repoID,m=v.filePath,w=v.err,x=v.commitID,k=v.fileType,y=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsx)(p.a,{content:Object(h.jsx)(M,{})})}}]),n}(i.a.Component),M=function(e){Object(s.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={isLoading:!w,errorMsg:""},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;if(!w){!function t(){j.a.queryOfficeFileConvertStatus(g,x,m,k.toLowerCase()).then((function(n){switch(n.data.status){case"PROCESSING":e.setState({isLoading:!0}),setTimeout(t,2e3);break;case"ERROR":e.setState({isLoading:!1,errorMsg:Object(d.nb)("Document convertion failed.")});break;case"DONE":e.setState({isLoading:!1,errorMsg:""});var a=document.createElement("script");a.type="text/javascript",a.src="".concat(d.Mb,"js/pdf/viewer.js"),document.body.append(a)}})).catch((function(t){t.response?e.setState({isLoading:!1,errorMsg:Object(d.nb)("Document convertion failed.")}):e.setState({isLoading:!1,errorMsg:Object(d.nb)("Please check the network.")})}))}()}}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.errorMsg;return w?Object(h.jsx)(f.a,{}):t?Object(h.jsx)(O.a,{}):n?Object(h.jsx)(f.a,{errorMsg:n}):Object(h.jsx)("div",{className:"file-view-content flex-1 pdf-file-view",children:Object(h.jsx)(l.a,{})})}}]),n}(i.a.Component);b.a.render(Object(h.jsx)(y,{}),document.getElementById("wrapper"))}},[[1165,1,0]]]);
//# sourceMappingURL=viewFileDocument.chunk.js.map