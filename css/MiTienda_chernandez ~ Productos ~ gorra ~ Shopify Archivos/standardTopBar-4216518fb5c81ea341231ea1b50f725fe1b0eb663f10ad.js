(window.webpackJsonp=window.webpackJsonp||[]).push([["standardTopBar"],{"./app/foundation/components/Frame/components/TopBar/DefaultTopBar.tsx":function(e,s,o){"use strict";o.r(s),o.d(s,"default",function(){return l});var n=o("./node_modules/react/index.js"),t=o("./node_modules/@shopify/polaris/esnext/components/TopBar/index.js"),a=o("./node_modules/@shopify/polaris/esnext/components/Image/index.js"),r=o("./app/foundation/components/Frame/components/TopBar/TopBar.scss"),i=o("./app/foundation/components/Frame/components/TopBar/images/help-circle-filled.svg"),c=o.n(i);function l({intercomEnabled:e,intercomMenuText:s,onNavToggle:o,onQuickSearchBlur:i,onQuickSearchChange:l,onQuickSearchFocus:p,onSearchResultsDismiss:d,onSupportMenuToggle:u,onUserMenuToggle:m,quickSearchFocused:h,quickSearchOpenSource:v,quickSearchPlaceholder:f,searchResults:g,searchResultsVisible:_,searchText:x,showNavigationToggle:y,supportActions:b,supportMenuOpen:E,unreadMessagesCount:C,user:N,userActions:S,userMenuVisible:T,userMessage:j}){const A=n.createElement(t.a.SearchField,{value:x,active:!1!==v,focused:h,placeholder:f,onChange:l,onFocus:p,onBlur:i}),M=n.createElement(t.a.UserMenu,{avatar:N.avatar,name:N.name,initials:N.initials,detail:N.detail,actions:S,message:j,open:T,onToggle:m}),B=C&&C>0?n.createElement("div",{className:r.Indicator}):null,F=e?n.createElement(n.Fragment,null,B,n.createElement("div",{className:r.IntercomMenuActivator},n.createElement(a.a,{alt:s,className:r.IntercomIcon,source:c.a,draggable:!1}))):null,I=e?n.createElement(t.a.Menu,{activatorContent:F,actions:b,onOpen:u,onClose:u,open:E,testID:"IntercomMenu"}):null;return n.createElement(t.a,{showNavigationToggle:y,userMenu:M,secondaryMenu:I,searchField:A,searchResults:g,searchResultsVisible:_,onNavigationToggle:o,onSearchResultsDismiss:d})}},"./app/foundation/components/Frame/components/TopBar/TopBar.scss":function(e,s,o){e.exports={IntercomMenuActivator:"_1fIu1",IntercomIcon:"_34Pea",Indicator:"_2D71W"}},"./app/foundation/components/Frame/components/TopBar/images/help-circle-filled.svg":function(e,s,o){e.exports=o.p+"f5051dc96cc41e6b551bf7e1536f3c37.svg"},"./node_modules/@shopify/polaris/esnext/components/Avatar/Avatar.scss":function(e,s,o){e.exports={Avatar:"p_2hIen",hidden:"p_3L3aI",sizeSmall:"p_18aEx",sizeMedium:"p_1QNbD",sizeLarge:"p_KPWAC",styleOne:"p_3T8eG",styleTwo:"p_1Vyhh",styleThree:"p_1GYkM",styleFour:"p_DsEt4",styleFive:"p_sQR0V",styleSix:"p_2dFhx",hasImage:"p_1HAKt",Image:"p_YcXsT",Initials:"p_25FJ7",Svg:"p_1MSGQ"}},"./node_modules/@shopify/polaris/esnext/components/Avatar/images/avatar-1.svg":function(e,s,o){e.exports=o.p+"1fcce7cbf111e294dd69c0808cb17e55.svg"},"./node_modules/@shopify/polaris/esnext/components/Avatar/images/avatar-2.svg":function(e,s,o){e.exports=o.p+"d0abd3610c989c676a2197ba1a7e5d43.svg"},"./node_modules/@shopify/polaris/esnext/components/Avatar/images/avatar-3.svg":function(e,s,o){e.exports=o.p+"a64b7863497e9e586640d296b68232fd.svg"},"./node_modules/@shopify/polaris/esnext/components/Avatar/images/avatar-4.svg":function(e,s,o){e.exports=o.p+"06ecffe469821848041ec3162290e9c9.svg"},"./node_modules/@shopify/polaris/esnext/components/Avatar/images/avatar-5.svg":function(e,s,o){e.exports=o.p+"e9623601a031e14ed690877f0b7c01c4.svg"},"./node_modules/@shopify/polaris/esnext/components/Avatar/images/avatar-6.svg":function(e,s,o){e.exports=o.p+"c08396b340760122ad48bc64f89daa8b.svg"},"./node_modules/@shopify/polaris/esnext/components/Avatar/images/avatar-7.svg":function(e,s,o){e.exports=o.p+"83066accea7f98dbf7b157e7501cfe15.svg"},"./node_modules/@shopify/polaris/esnext/components/Avatar/images/avatar-8.svg":function(e,s,o){e.exports=o.p+"88e458f91c7e4e87a65aa86f846530b6.svg"},"./node_modules/@shopify/polaris/esnext/components/Avatar/images/avatar-9.svg":function(e,s,o){e.exports=o.p+"fcd7073ea3270f59cc324e5e5b6e1cb9.svg"},"./node_modules/@shopify/polaris/esnext/components/Avatar/index.js":function(e,s,o){"use strict";var n={};o.r(n),o.d(n,"avatarOne",function(){return h.a}),o.d(n,"avatarTwo",function(){return f.a}),o.d(n,"avatarThree",function(){return _.a}),o.d(n,"avatarFour",function(){return y.a}),o.d(n,"avatarFive",function(){return E.a}),o.d(n,"avatarSix",function(){return N.a}),o.d(n,"avatarSeven",function(){return T.a}),o.d(n,"avatarEight",function(){return A.a}),o.d(n,"avatarNine",function(){return B.a});var t=o("./node_modules/tslib/tslib.es6.js"),a=o("./node_modules/react/index.js"),r=o("./node_modules/@shopify/polaris/node_modules/@shopify/react-utilities/target.js"),i=o("./node_modules/@shopify/polaris/node_modules/@shopify/react-utilities/styles.js"),c=o("./node_modules/@shopify/polaris/node_modules/@shopify/javascript-utilities/decorators/index.js"),l=o("./node_modules/@shopify/polaris/esnext/components/AppProvider/utilities/withAppProvider/withAppProvider.js"),p=o("./node_modules/@shopify/polaris/esnext/components/Image/index.js"),d=o("./node_modules/@shopify/polaris/esnext/components/Avatar/Avatar.scss"),u=o.n(d),m=o("./node_modules/@shopify/polaris/esnext/components/Avatar/images/avatar-1.svg"),h=o.n(m),v=o("./node_modules/@shopify/polaris/esnext/components/Avatar/images/avatar-2.svg"),f=o.n(v),g=o("./node_modules/@shopify/polaris/esnext/components/Avatar/images/avatar-3.svg"),_=o.n(g),x=o("./node_modules/@shopify/polaris/esnext/components/Avatar/images/avatar-4.svg"),y=o.n(x),b=o("./node_modules/@shopify/polaris/esnext/components/Avatar/images/avatar-5.svg"),E=o.n(b),C=o("./node_modules/@shopify/polaris/esnext/components/Avatar/images/avatar-6.svg"),N=o.n(C),S=o("./node_modules/@shopify/polaris/esnext/components/Avatar/images/avatar-7.svg"),T=o.n(S),j=o("./node_modules/@shopify/polaris/esnext/components/Avatar/images/avatar-8.svg"),A=o.n(j),M=o("./node_modules/@shopify/polaris/esnext/components/Avatar/images/avatar-9.svg"),B=o.n(M);const F=["one","two","three","four","five","six"],I=Object.keys(n).map(e=>n[e]);class k extends a.PureComponent{constructor(){super(...arguments),this.state={hasError:!1,hasLoaded:!1}}static getDerivedStateFromProps(e,s){return e.source!==s.prevSource?{prevSource:e.source,hasError:!1,hasLoaded:!1}:null}render(){const{name:e,source:s,initials:o,customer:n,size:t="medium",accessibilityLabel:c,polaris:{intl:l}}=this.props,{hasError:d,hasLoaded:m}=this.state,h=(s||n)&&!d,v=e||o;let f,g;if(c)g=c;else if(e)g=e;else if(o){const e=o.split("").join(" ");g=l.translate("Polaris.Avatar.labelWithInitials",{initials:e})}else g=l.translate("Polaris.Avatar.label");s?f=s:n&&(f=function(e){return e?I[e.charCodeAt(0)%I.length]:I[0]}(v));const _=Object(i.classNames)(u.a.Avatar,u.a[Object(i.variationName)("style",function(e){return e?F[e.charCodeAt(0)%F.length]:F[0]}(v))],t&&u.a[Object(i.variationName)("size",t)],h&&!m&&u.a.hidden,h&&u.a.hasImage),x=!f||r.isServer||d?null:a.createElement(p.a,{className:u.a.Image,source:f,alt:"",role:"presentation",onLoad:this.handleLoad,onError:this.handleError}),y=o&&!h?a.createElement("span",{className:u.a.Initials},a.createElement("svg",{className:u.a.Svg,viewBox:"0 0 48 48"},a.createElement("text",{x:"50%",y:"50%",dy:"0.35em",fill:"currentColor",fontSize:"26",textAnchor:"middle"},o))):null;return a.createElement("span",{"aria-label":g,role:"img",className:_},y,x)}handleError(){this.setState({hasError:!0,hasLoaded:!1})}handleLoad(){this.setState({hasLoaded:!0,hasError:!1})}}t.__decorate([c.autobind],k.prototype,"handleError",null),t.__decorate([c.autobind],k.prototype,"handleLoad",null);var L=Object(l.a)()(k);s.a=L},"./node_modules/@shopify/polaris/esnext/components/MessageIndicator/MessageIndicator.scss":function(e,s,o){e.exports={MessageIndicatorWrapper:"p_1Y6OT",MessageIndicator:"p_24vkB"}},"./node_modules/@shopify/polaris/esnext/components/TopBar/TopBar.scss":function(e,s,o){e.exports={TopBar:"p_3eqh-",LogoContainer:"p_2119o",ContextControl:"p_1lIG3",Logo:"p_3PF3_",LogoLink:"p_2PmL8",NavigationIcon:"p_3MsgS",focused:"p_-l568",Contents:"p_2wNok",SearchField:"p_3hD91",SecondaryMenu:"p_2lQd1"}},"./node_modules/@shopify/polaris/esnext/components/TopBar/components/Menu/Menu.scss":function(e,s,o){e.exports={ActivatorWrapper:"p_3_QKs",Activator:"p_juNP0",Section:"p_3eRO7"}},"./node_modules/@shopify/polaris/esnext/components/TopBar/components/Menu/components/Message/Message.scss":function(e,s,o){e.exports={Section:"p_2uDGf"}},"./node_modules/@shopify/polaris/esnext/components/TopBar/components/Search/Search.scss":function(e,s,o){e.exports={Search:"p_1Do4s",visible:"p_2Ccah",Overlay:"p_1vubY"}},"./node_modules/@shopify/polaris/esnext/components/TopBar/components/SearchField/SearchField.scss":function(e,s,o){e.exports={SearchField:"p_30Eun",focused:"p_1azxE",Input:"p_3yNjg",Backdrop:"p_3LdVj",Icon:"p_2V4Td",Clear:"p_2g5Hk",toLightBackground:"p_1bvNL"}},"./node_modules/@shopify/polaris/esnext/components/TopBar/components/UserMenu/components/UserMenu/UserMenu.scss":function(e,s,o){e.exports={Details:"p_2TdAe",Name:"p_25jsS",Detail:"p_8F30j"}},"./node_modules/@shopify/polaris/esnext/components/TopBar/index.js":function(e,s,o){"use strict";var n=o("./node_modules/tslib/tslib.es6.js"),t=o("./node_modules/react/index.js"),a=o("./node_modules/@shopify/polaris/node_modules/@shopify/javascript-utilities/decorators/index.js"),r=o("./node_modules/@shopify/polaris/node_modules/@shopify/react-utilities/styles.js"),i=o("./node_modules/@shopify/polaris/esnext/utilities/getWidth.js"),c=o("./node_modules/@shopify/polaris/esnext/components/AppProvider/utilities/withAppProvider/withAppProvider.js"),l=o("./node_modules/@shopify/polaris/esnext/components/Icon/index.js"),p=o("./node_modules/@shopify/polaris/esnext/components/Image/index.js"),d=o("./node_modules/@shopify/polaris/esnext/components/UnstyledLink/index.js"),u=o("./node_modules/@shopify/polaris/esnext/components/TopBar/components/Search/Search.scss"),m=o.n(u);class h extends t.PureComponent{constructor(){super(...arguments),this.node=t.createRef()}render(){const{visible:e,children:s}=this.props,o=Object(r.classNames)(m.a.Search,e&&m.a.visible);return t.createElement("div",{ref:this.node,className:o,onClick:this.handleDismiss},t.createElement("div",{className:m.a.Overlay},s))}handleDismiss({target:e}){const{onDismiss:s}=this.props;null!=s&&e===this.node.current&&s()}}n.__decorate([a.autobind],h.prototype,"handleDismiss",null);var v=h,f=o("./node_modules/@shopify/polaris/esnext/components/WithContext/index.js"),g=o("./node_modules/@shopify/polaris/esnext/components/TopBar/components/UserMenu/context/Consumer.js"),_=o("./node_modules/@shopify/polaris/esnext/components/Avatar/index.js"),x=o("./node_modules/@shopify/polaris/esnext/components/MessageIndicator/MessageIndicator.scss"),y=o.n(x);var b=function({children:e,active:s}){const o=s&&t.createElement("div",{className:y.a.MessageIndicator});return t.createElement("div",{className:y.a.MessageIndicatorWrapper},o,e)},E=o("./node_modules/@shopify/polaris/esnext/components/ActionList/index.js"),C=o("./node_modules/@shopify/polaris/esnext/components/Popover/index.js"),N=o("./node_modules/@shopify/polaris/esnext/components/Badge/index.js"),S=o("./node_modules/@shopify/polaris/esnext/components/Button/index.js"),T=o("./node_modules/@shopify/polaris/esnext/components/Heading/index.js"),j=o("./node_modules/@shopify/polaris/esnext/components/Link/index.js"),A=o("./node_modules/@shopify/polaris/esnext/components/Stack/index.js"),M=o("./node_modules/@shopify/polaris/esnext/components/TextContainer/index.js"),B=o("./node_modules/@shopify/polaris/esnext/components/TopBar/components/Menu/components/Message/Message.scss"),F=o.n(B);var I=function({title:e,description:s,action:o,link:n,badge:a}){const r=a&&t.createElement(N.a,{status:a.status},a.content),{to:i,content:c}=n,{onClick:l,content:p}=o;return t.createElement("div",{className:F.a.Section},t.createElement(C.a.Section,null,t.createElement(A.a,{vertical:!0,spacing:"tight"},t.createElement(M.a,null,t.createElement(T.a,null,e,r),t.createElement("p",null,s)),t.createElement(j.a,{url:i},c),t.createElement(S.a,{plain:!0,onClick:l},p))))},k=o("./node_modules/@shopify/polaris/esnext/components/TopBar/components/Menu/Menu.scss"),L=o.n(k);var D=function(e){const{actions:s,onOpen:o,onClose:n,open:a,activatorContent:r,message:i}=e,c=i&&i.badge&&{content:i.badge.content,status:i.badge.status},l=i&&t.createElement(I,{title:i.title,description:i.description,action:{onClick:i.action.onClick,content:i.action.content},link:{to:i.link.to,content:i.link.content},badge:c}),p=Boolean(i);return t.createElement(C.a,{activator:t.createElement("div",{className:L.a.ActivatorWrapper},t.createElement("button",{type:"button",className:L.a.Activator,onClick:o},r)),active:a,onClose:n,fixed:!0,fullHeight:p},t.createElement(E.a,{onActionAnyItem:n,sections:s}),l)},w=o("./node_modules/@shopify/polaris/esnext/components/TopBar/components/UserMenu/components/UserMenu/UserMenu.scss"),O=o.n(w);var P=function({name:e,detail:s,avatar:o,initials:n,actions:a,message:r,onToggle:i,open:c}){const l=Boolean(r),p=t.createElement(t.Fragment,null,t.createElement(b,{active:l},t.createElement(_.a,{size:"small",source:o,initials:n&&n.replace(" ","")})),t.createElement("span",{className:O.a.Details},t.createElement("p",{className:O.a.Name},e),t.createElement("p",{className:O.a.Detail},s)));return t.createElement(D,{activatorContent:p,open:c,onOpen:i,onClose:i,actions:a,message:r})};var R=Object(f.a)(g.a)(function(e){var{context:{mobileUserMenuProps:s,mobileView:o}}=e,a=n.__rest(e,["context"]);return s&&o?t.createElement(P,s):t.createElement(P,a)});function U(){}var z=o("./node_modules/@shopify/polaris/esnext/components/TopBar/components/SearchField/SearchField.scss"),V=o.n(z);class W extends t.Component{constructor(){super(...arguments),this.input=t.createRef()}componentDidMount(){const{focused:e}=this.props,{input:{current:s}}=this;s&&e&&s.focus()}componentDidUpdate({focused:e}){const{input:{current:s}}=this;if(null==s)return;const{focused:o}=this.props;o&&!e?s.focus():!o&&e&&s.blur()}render(){const{value:e,focused:s,active:o,placeholder:n}=this.props,a=""!==e&&t.createElement("button",{type:"button","aria-label":"Clear",className:V.a.Clear,onClick:this.handleClear},t.createElement(l.a,{source:"circleCancel"})),i=Object(r.classNames)(V.a.SearchField,(s||o)&&V.a.focused);return t.createElement("div",{className:i,onFocus:this.handleFocus,onBlur:this.handleBlur},t.createElement("input",{className:V.a.Input,placeholder:n,type:"search",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",ref:this.input,value:e,onChange:this.handleChange,onKeyDown:Q}),t.createElement("span",{className:V.a.Icon},t.createElement(l.a,{source:"search"})),a,t.createElement("div",{className:V.a.Backdrop}))}handleFocus(){const{onFocus:e}=this.props;e&&e()}handleBlur(){const{onBlur:e}=this.props;e&&e()}handleClear(){const{onCancel:e=U,onChange:s}=this.props,{input:{current:o}}=this;e(),null!=o&&(o.value="",s(""),o.focus())}handleChange({currentTarget:e}){const{onChange:s}=this.props;s(e.value)}}function Q(e){"Enter"===e.key&&e.preventDefault()}n.__decorate([a.autobind],W.prototype,"handleFocus",null),n.__decorate([a.autobind],W.prototype,"handleBlur",null),n.__decorate([a.autobind],W.prototype,"handleClear",null),n.__decorate([a.autobind],W.prototype,"handleChange",null);var G=W,q=o("./node_modules/@shopify/polaris/esnext/components/TopBar/TopBar.scss"),H=o.n(q);class K extends t.PureComponent{constructor(){super(...arguments),this.state={focused:!1}}render(){const{showNavigationToggle:e,userMenu:s,searchResults:o,searchField:n,secondaryMenu:a,searchResultsVisible:c,onNavigationToggle:u,onSearchResultsDismiss:m,contextControl:h,polaris:{theme:{logo:f}}}=this.props,{focused:g}=this.state,_=Object(r.classNames)(H.a.NavigationIcon,g&&H.a.focused),x=e?t.createElement("button",{type:"button",className:_,onClick:u,onFocus:this.handleFocus,onBlur:this.handleBlur,"aria-label":"Toggle menu"},t.createElement(l.a,{source:"menu",color:"white"})):null,y=Object(i.a)(f,104);let b;h?b=t.createElement("div",{className:H.a.ContextControl},h):f&&(b=t.createElement("div",{className:H.a.LogoContainer},t.createElement(d.a,{url:f.url||"",className:H.a.LogoLink,style:{width:y}},t.createElement(p.a,{source:f.topBarSource||"",alt:f.accessibilityLabel||"",className:H.a.Logo,style:{width:y}}))));const E=o&&c?t.createElement(v,{visible:c,onDismiss:m},o):null,C=n?t.createElement(t.Fragment,null,n,E):null;return t.createElement("div",{className:H.a.TopBar},x,b,t.createElement("div",{className:H.a.Contents},t.createElement("div",{className:H.a.SearchField},C),t.createElement("div",{className:H.a.SecondaryMenu},a),s))}handleFocus(){this.setState({focused:!0})}handleBlur(){this.setState({focused:!1})}}K.UserMenu=R,K.SearchField=G,K.Menu=D,n.__decorate([a.autobind],K.prototype,"handleFocus",null),n.__decorate([a.autobind],K.prototype,"handleBlur",null);var Y=Object(c.a)()(K);s.a=Y}}]);