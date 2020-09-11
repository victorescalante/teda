(window.webpackJsonp=window.webpackJsonp||[]).push([["FeedbackModal"],{"./app/components/FeedbackModal/FeedbackModal.tsx":function(e,n,a){"use strict";a.r(n);var i,t=a("./node_modules/react/index.js"),o=a("./node_modules/@shopify/polaris/esnext/components/EventListener/index.js"),s=a("./node_modules/@shopify/polaris/esnext/components/Toast/index.js"),r=a("./packages/@shopify/polaris-next/components/Modal/index.ts"),d=a("./packages/@shopify/legacy-i18n/index.ts"),l=a("./node_modules/react-router/esm/react-router.js"),c=a("./app/utilities/decorators.ts"),m=a("./app/utilities/graphql.ts"),h=a("./app/components/FeedbackModal/graphql/FeedbackFormQuery.graphql"),f=a.n(h);!function(e){e.Ready="ready",e.FormSubmittableChange="formSubmittableChange",e.SaveSuccess="saveSuccess",e.Initialization="initialization",e.SaveClick="saveClick",e.HelpLinkClick="helpLinkClick"}(i||(i={}));const u={formTitle:"",formSubmittable:!1,formHeight:0},k={frameLoading:!0,saveLoading:!1};n.default=Object(c.a)(l.k,Object(m.f)(f.a,{options:({id:e,location:n})=>({variables:{id:e,referrer:n.pathname}})}),Object(d.g)())(class extends t.PureComponent{constructor(){super(...arguments),this.state=Object.assign({showSavedToast:!1},k,u),this.frameWindow=null,this.handleToastDismiss=(()=>{this.setState({showSavedToast:!1})}),this.handleMessage=(({origin:e,data:{event:n,data:a}})=>{if(e===this.formOrigin)if(n!==i.Ready)if(n!==i.FormSubmittableChange){if(n===i.SaveSuccess)return this.setState({showSavedToast:!0}),void this.closeModal();if(n===i.HelpLinkClick){const{url:e}=a;window.open(e,"_blank")}}else this.setState({formSubmittable:a});else{const{formTitle:e,formHeight:n}=a;this.setState({formTitle:e,formHeight:n,frameLoading:!1})}}),this.closeModal=(()=>{const{onClose:e}=this.props;this.setState(Object.assign({},u,k)),e()}),this.handleFrameLoad=(({target:e})=>{const{contentWindow:n}=e;this.frameWindow=n,this.sendMessage({event:i.Initialization})}),this.handleSaveClick=(()=>{this.sendMessage({event:i.SaveClick}),this.setState({saveLoading:!0})}),this.sendMessage=(e=>{const{frameWindow:n,formOrigin:a}=this;n&&a&&n.postMessage(e,a)})}render(){const{formSubmittable:e,saveLoading:n,formTitle:a,formHeight:i,frameLoading:d,showSavedToast:l}=this.state,{data:{shop:c},translate:m,open:h}=this.props,f=c&&c.merchantFeedback&&c.merchantFeedback.url,u=h&&t.createElement(o.a,{testID:"FeedbackModal-EventListener",event:"message",handler:this.handleMessage}),k=l&&t.createElement(s.a,{onDismiss:this.handleToastDismiss,content:m("Admin.FeedbackModal.feedbackSaved")});return t.createElement(t.Fragment,null,u,k,t.createElement(r.a,{title:a,open:h,onClose:this.closeModal,primaryAction:{content:m("Admin.FeedbackModal.save"),onAction:this.handleSaveClick,loading:n,disabled:!e},secondaryActions:[{content:m("Admin.FeedbackModal.cancel"),onAction:this.closeModal}],onIFrameLoad:this.handleFrameLoad,src:f,iframeContentHeight:i,loading:d}))}get formOrigin(){const{data:{shop:e}}=this.props;return e&&e.merchantFeedback&&e.merchantFeedback.url&&new URL(e.merchantFeedback.url).origin}})},"./app/components/FeedbackModal/graphql/FeedbackFormQuery.graphql":function(e,n){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"FeedbackForm"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"referrer"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"shop"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"merchantFeedback"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}},{kind:"Argument",name:{kind:"Name",value:"referrer"},value:{kind:"Variable",name:{kind:"Name",value:"referrer"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:142}};a.loc.source={body:"query FeedbackForm($id: Int!, $referrer: String) {\n  shop {\n    id\n    merchantFeedback(id: $id, referrer: $referrer) {\n      url\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var i={};function t(e,n){for(var a=0;a<e.definitions.length;a++){var i=e.definitions[a];if(i.name&&i.name.value==n)return i}}a.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,a){if("FragmentSpread"===n.kind)a.add(n.name.value);else if("VariableDefinition"===n.kind){var i=n.type;"NamedType"===i.kind&&a.add(i.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,a)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,a)}),n.definitions&&n.definitions.forEach(function(n){e(n,a)})}(e,n),i[e.name.value]=n}}),e.exports=a,e.exports.FeedbackForm=function(e,n){var a={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(a.loc=e.loc);for(var o=i[n]||new Set,s=new Set,r=new Set(o);r.size>0;){var d=r;r=new Set,d.forEach(function(e){s.has(e)||(s.add(e),(i[e]||new Set).forEach(function(e){r.add(e)}))})}return s.forEach(function(n){var i=t(e,n);i&&a.definitions.push(i)}),a}(a,"FeedbackForm")}}]);