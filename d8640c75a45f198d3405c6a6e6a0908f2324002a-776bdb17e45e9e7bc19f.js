(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7oih":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),a=n.n(r),o=n("Wbzz");n("ZHwO");function i(e){var t=e.children,n=e.location;return Object(r.useEffect)((function(){window.NUXT.Sidenav()}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{className:"site-header"},a.a.createElement("div",{className:"header-logo"},a.a.createElement(o.a,{to:"/",title:"AFI",className:"logo"},"AFI")),a.a.createElement("span",{className:"button button-menu button-open-sidenav"},a.a.createElement("span",null)),a.a.createElement("ul",{className:"header-nav"},a.a.createElement("li",{"data-menuanchor":"intro",className:"/"===n.pathname?"active":""},a.a.createElement(o.a,{to:"/"},a.a.createElement("span",{className:"count"},"01"),a.a.createElement("span",{className:"anchor"},"首页"))),a.a.createElement("li",{"data-menuanchor":"about",className:n.pathname.startsWith("/business")?"active":""},a.a.createElement(o.a,{to:"/business"},a.a.createElement("span",{className:"count"},"02"),a.a.createElement("span",{className:"anchor"},"业务简介"))),a.a.createElement("li",{"data-menuanchor":"services",className:n.pathname.startsWith("/team")?"active":""},a.a.createElement(o.a,{to:"/team"},a.a.createElement("span",{className:"count"},"03"),a.a.createElement("span",{className:"anchor"},"团队概况"))),a.a.createElement("li",{"data-menuanchor":"portfolio",className:n.pathname.startsWith("/share")?"active":""},a.a.createElement(o.a,{to:"/share"},a.a.createElement("span",{className:"count"},"04"),a.a.createElement("span",{className:"anchor"},"技术分享"))),a.a.createElement("li",{"data-menuanchor":"blog",className:n.pathname.startsWith("/fun")?"active":""},a.a.createElement(o.a,{to:"/fun"},a.a.createElement("span",{className:"count"},"05"),a.a.createElement("span",{className:"anchor"},"吃喝玩乐"))),a.a.createElement("li",{"data-menuanchor":"contact",className:n.pathname.startsWith("/join")?"active":""},a.a.createElement(o.a,{to:"/join"},a.a.createElement("span",{className:"count"},"06"),a.a.createElement("span",{className:"anchor"},"加入我们"))))),a.a.createElement("div",{className:"site-sidenav"},a.a.createElement("div",{className:"sidenav-menu"},a.a.createElement(o.a,{to:"/",className:"logo"},"AFI"),a.a.createElement("button",{className:"button button-close-sidenav"}),a.a.createElement("ul",{className:"sidenav-nav"},a.a.createElement("li",{"data-menuanchor":"intro",className:"/"===n.pathname?"active":""},a.a.createElement(o.a,{to:"/"},a.a.createElement("span",{className:"anchor"},"首页"))),a.a.createElement("li",{"data-menuanchor":"about",className:n.pathname.startsWith("/business")?"active":""},a.a.createElement(o.a,{to:"/business"},a.a.createElement("span",{className:"anchor"},"业务简介"))),a.a.createElement("li",{"data-menuanchor":"services",className:n.pathname.startsWith("/team")?"active":""},a.a.createElement(o.a,{to:"/team"},a.a.createElement("span",{className:"anchor"},"团队概况"))),a.a.createElement("li",{"data-menuanchor":"portfolio",className:n.pathname.startsWith("/share")?"active":""},a.a.createElement(o.a,{to:"/share"},a.a.createElement("span",{className:"anchor"},"技术分享"))),a.a.createElement("li",{"data-menuanchor":"blog",className:n.pathname.startsWith("/fun")?"active":""},a.a.createElement(o.a,{to:"/fun"},a.a.createElement("span",{className:"anchor"},"吃喝玩乐"))),a.a.createElement("li",{"data-menuanchor":"contact",className:n.pathname.startsWith("/join")?"active":""},a.a.createElement(o.a,{to:"/join"},a.a.createElement("span",{className:"anchor"},"加入我们")))),a.a.createElement("div",{className:"sidenav-links"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"https://github.com/afi-team",target:"_blank",rel:"noreferrer"},a.a.createElement("i",{className:"iconfont icon-huaban88"})))),a.a.createElement("p",null,"欢迎加入蚂蚁前端基础设施团队"))),a.a.createElement("span",{className:"sidenav-close"})),a.a.createElement("div",{id:"site-wrapper"},t))}},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},ZHwO:function(e,t,n){},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,s,l,u;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(s=c;0!=s--;)if(!e(t[s],i[s]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;for(u=t.entries();!(s=u.next()).done;)if(!e(s.value[1],i.get(s.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(s=c;0!=s--;)if(t[s]!==i[s])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,l[s]))return!1;if(n&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!t.$$typeof)&&!e(t[l[s]],i[l[s]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},iyHg:function(e,t,n){e.exports={slogan:"style-module--slogan--QwMrH",businessSlogan:"style-module--businessSlogan--Qq82B",link:"style-module--link--RsbdI",part1:"style-module--part1--20eXz",part2:"style-module--part2--1it-W",part3:"style-module--part3--2rYal",sup:"style-module--sup--1oHRM",siteText:"style-module--siteText--3KbAs",bold:"style-module--bold--2zKp8",textLink:"style-module--textLink--PFYta",extraNote:"style-module--extraNote--1H1gY",footer:"style-module--footer--2usX9",footerLink:"style-module--footerLink--1bZ_z",serviceIcon:"style-module--serviceIcon--2uAXa",smallerIcon:"style-module--smallerIcon--39dK3",businessBackground:"style-module--businessBackground--2KsBj",logoFamily:"style-module--logoFamily--MVHNx",shareSection:"style-module--shareSection--CxaK8",buttonMai:"style-module--buttonMai--1ko2d",notice:"style-module--notice--1MiYg"}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("E9XD");var r,a,o,i,c=n("17x9"),s=n.n(c),l=n("8+s/"),u=n.n(l),f=n("bmMU"),m=n.n(f),p=n("q1tI"),d=n.n(p),h=n("YVoz"),y=n.n(h),b="bodyAttributes",v="htmlAttributes",E="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},g=(Object.keys(T).map((function(e){return T[e]})),"charset"),w="cssText",A="href",O="http-equiv",C="innerHTML",S="itemprop",N="name",j="property",k="rel",I="src",x="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",M="defer",R="encodeSpecialCharacters",H="onChangeClientState",_="titleTemplate",q=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),B=[T.NOSCRIPT,T.SCRIPT,T.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=$(e,T.TITLE),n=$(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,L);return t||r||void 0},X=function(e){return $(e,H)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return D({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||n===k&&"canonical"===e[n].toLowerCase()||s===k&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==C&&c!==w&&c!==S||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],s=y()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},G=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){G(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||G:e.requestAnimationFrame||G,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,m=e.titleAttributes;se(T.BODY,r),se(T.HTML,a),ce(f,m);var p={baseTag:le(T.BASE,n),linkTags:le(T.LINK,o),metaTags:le(T.META,i),noscriptTags:le(T.NOSCRIPT,c),scriptTags:le(T.SCRIPT,l),styleTags:le(T.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),s(e,d,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(T.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=o.indexOf(s);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[d.a.createElement(T.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case v:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===C||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),d.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,m=e.titleAttributes;return{base:me(T.BASE,t,r),bodyAttributes:me(b,n,r),htmlAttributes:me(v,a,r),link:me(T.LINK,o,r),meta:me(T.META,i,r),noscript:me(T.NOSCRIPT,c,r),script:me(T.SCRIPT,s,r),style:me(T.STYLE,l,r),title:me(T.TITLE,{title:f,titleAttributes:m},r)}},de=u()((function(e){return{baseTag:J([A,x],e),bodyAttributes:Z(b,e),defer:$(e,M),encode:$(e,R),htmlAttributes:Z(v,e),linkTags:Q(T.LINK,[k,A],e),metaTags:Q(T.META,[N,g,O,j,S],e),noscriptTags:Q(T.NOSCRIPT,[C],e),onChangeClientState:X(e),scriptTags:Q(T.SCRIPT,[I,C],e),styleTags:Q(T.STYLE,[w],e),title:V(e),titleAttributes:Z(E,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),he=(a=de,i=o=function(e){function t(){return Y(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return D({},r,((t={})[n.type]=[].concat(r[n.type]||[],[D({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case T.TITLE:return D({},a,((t={})[r.type]=i,t.titleAttributes=D({},o),t));case T.BODY:return D({},a,{bodyAttributes:D({},o)});case T.HTML:return D({},a,{htmlAttributes:D({},o)})}return D({},a,((n={})[r.type]=D({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=D({},t);return Object.keys(e).forEach((function(t){var r;n=D({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(z(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=D({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.a.createElement(a,r)},W(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.a.Component),o.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=d8640c75a45f198d3405c6a6e6a0908f2324002a-776bdb17e45e9e7bc19f.js.map