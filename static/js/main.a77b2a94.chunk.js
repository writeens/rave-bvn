(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,t){e.exports=t(48)},25:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(16),d=t.n(l),r=(t(25),t(17)),s=t(4),c=t(5),o=t(8),m=t(6),u=t(2),b=t(7),h=t(18),v=t.n(h),f=(t(45),t(3)),E=(t(46),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={bvn:""},t.handleChange=t.handleChange.bind(Object(u.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(u.a)(t)),t}return Object(b.a)(a,e),Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),isNaN(this.state.bvn)?(alert("Please check the BVN and try again"),this.setState({bvn:""})):(this.props.validate(this.state.bvn),this.setState({bvn:""}))}},{key:"render",value:function(){var e=this.state.bvn;return i.a.createElement("form",{className:"ValidateForm",onSubmit:this.handleSubmit},i.a.createElement("label",{htmlFor:"bvn"},"Customer Validation "),i.a.createElement("input",{type:"text",id:"bvn",name:"bvn",placeholder:"Enter BVN",value:e,onChange:this.handleChange,required:!0,disabled:!!this.props.isLoaded}),this.props.isLoaded?"":i.a.createElement("button",{disabled:!!this.props.isLoading},this.props.isLoading?"Validating...":"Validate"))}}]),a}(n.Component)),p=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={data:{},isLoading:!1,isLoaded:!1},t.validate=t.validate.bind(Object(u.a)(t)),t.renderDetails=t.renderDetails.bind(Object(u.a)(t)),t.submit=t.submit.bind(Object(u.a)(t)),t}return Object(b.a)(a,e),Object(c.a)(a,[{key:"submit",value:function(e){e.preventDefault(),this.setState({data:{},isLoading:!1,isLoaded:!1})}},{key:"validate",value:function(e){var a=this;this.setState({isLoading:!0,isLoaded:!1});var t="https://ravesandboxapi.flutterwave.com/v2/kyc/bvn/".concat(e,"?seckey=").concat("FLWSECK-59102b017e376eaf9290241dad40a8ea-X");v.a.get(t).then(function(e){if("success"===e.data.status){var t=e.data.data;a.setState(function(e){return{isLoaded:!0,isLoading:!1,data:Object(r.a)({},e.data,t)}})}else alert("An error occured, Please try again"),a.setState({data:{},isLoading:!1,isLoaded:!1})})}},{key:"renderDetails",value:function(){var e=this.state,a=e.isLoaded,t=e.isLoading,n=e.data;return t?i.a.createElement("div",{className:"loader"}):a?i.a.createElement("div",{className:"Validate-details"},i.a.createElement("div",{className:"Validate-hi"},"Hi, ",n.first_name),i.a.createElement("form",{className:"Validate-details-form",onSubmit:this.submit},i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"name"},"BVN: "),i.a.createElement("input",{id:"name",defaultValue:n.bvn,disabled:!0})),i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"name"},"First Name: "),i.a.createElement("input",{id:"name",defaultValue:n.first_name,disabled:!0})),i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"name"},"Midlle Name: "),i.a.createElement("input",{id:"name",defaultValue:n.middle_name,disabled:!0})),i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"name"},"Last Name: "),i.a.createElement("input",{id:"name",defaultValue:n.last_name,disabled:!0})),i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"name"},"Date Of Birth: "),i.a.createElement("input",{id:"name",defaultValue:n.date_of_birth,disabled:!0})),i.a.createElement("div",null,i.a.createElement("label",{htmlFor:"name"},"Phone Number: "),i.a.createElement("input",{id:"name",defaultValue:n.phone_number,disabled:!0})),i.a.createElement("button",null,"OK"))):i.a.createElement("div",null)}},{key:"render",value:function(){return i.a.createElement("div",{className:"d-flex"},i.a.createElement("div",{className:"Validate"},i.a.createElement(E,{validate:this.validate,isLoading:this.state.isLoading,isLoaded:this.state.isLoaded}),this.renderDetails()))}}]),a}(n.Component);t(47);var g=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.a77b2a94.chunk.js.map