(this.webpackJsonpyourplaces=this.webpackJsonpyourplaces||[]).push([[5],{46:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return d}));var n=a(18);var r="REQUIRE",i="MINLENGTH",c="MAXLENGTH",s="EMAIL",l=function(){return{type:r}},u=function(e){return{type:i,val:e}},o=function(){return{type:s}},d=function(e,t){var a,l=!0,u=function(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=Object(n.a)(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,s=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return s=e.done,e},e:function(e){l=!0,c=e},f:function(){try{s||null==a.return||a.return()}finally{if(l)throw c}}}}(t);try{for(u.s();!(a=u.n()).done;){var o=a.value;o.type===r&&(l=l&&e.trim().length>0),o.type===i&&(l=l&&e.trim().length>=o.val),o.type===c&&(l=l&&e.trim().length<=o.val),"MIN"===o.type&&(l=l&&+e>=o.val),"MAX"===o.type&&(l=l&&+e<=o.val),o.type===s&&(l=l&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){u.e(d)}finally{u.f()}return l}},52:function(e,t,a){"use strict";var n=a(1),r=a(11),i=a(44),c=a(0),s=a(46),l=(a(53),function(e,t){switch(t.type){case"CHANGE":return Object(i.a)(Object(i.a)({},e),{},{value:t.val,isValid:Object(s.d)(t.val,t.validators)});case"TOUCH":return Object(i.a)(Object(i.a)({},e),{},{isTouched:!0});default:return e}});t.a=function(e){var t=Object(c.useReducer)(l,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),a=Object(r.a)(t,2),i=a[0],s=a[1],u=e.id,o=e.onInput,d=i.value,p=i.isValid;Object(c.useEffect)((function(){o(u,d,p)}),[u,d,p,o]);var b=function(t){s({type:"CHANGE",val:t.target.value,validators:e.validators})},j=function(){s({type:"TOUCH"})},f="input"===e.element?Object(n.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:b,onBlur:j,value:i.value}):Object(n.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:b,onBlur:j,value:i.value});return Object(n.jsxs)("div",{className:"form-control ".concat(!i.isValid&&i.isTouched&&"form-control--invalid"),children:[Object(n.jsx)("label",{htmlFor:e.id,children:e.label}),f,!i.isValid&&i.isTouched&&Object(n.jsx)("p",{children:e.errorText})]})}},53:function(e,t,a){},54:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(11),r=a(55),i=a(44),c=a(0),s=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(i.a)(Object(i.a)({},e),{},{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},l=function(e,t){var a=Object(c.useReducer)(s,{inputs:e,isValid:t}),r=Object(n.a)(a,2),i=r[0],l=r[1];return[i,Object(c.useCallback)((function(e,t,a){l({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(c.useCallback)((function(e,t){l({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},56:function(e,t,a){"use strict";var n=a(1),r=a(11),i=a(0),c=a(45);a(57);t.a=function(e){var t=Object(i.useState)(),a=Object(r.a)(t,2),s=a[0],l=a[1],u=Object(i.useState)(),o=Object(r.a)(u,2),d=o[0],p=o[1],b=Object(i.useState)(!1),j=Object(r.a)(b,2),f=j[0],v=j[1],O=Object(i.useRef)();Object(i.useEffect)((function(){if(s){var e=new FileReader;e.onload=function(){p(e.result)},e.readAsDataURL(s)}}),[s]);return Object(n.jsxs)("div",{className:"form-control",children:[Object(n.jsx)("input",{id:e.id,ref:O,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var a,n=f;t.target.files&&1===t.target.files.length?(a=t.target.files[0],l(a),v(!0),n=!0):(v(!1),n=!1),e.onInput(e.id,a,n)}}),Object(n.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[Object(n.jsxs)("div",{className:"image-upload__preview",children:[d&&Object(n.jsx)("img",{src:d,alt:"Preview"}),!d&&Object(n.jsx)("p",{children:" Please pick and image."})]}),Object(n.jsx)(c.a,{type:"button",onClick:function(){O.current.click()},children:"Pick Image"})]}),!f&&Object(n.jsx)("p",{children:e.errorText})]})}},57:function(e,t,a){},58:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(47),i=a.n(r),c=a(48),s=a(11),l=a(0),u=a(2),o=a(52),d=a(45),p=a(50),b=a(17),j=a(56),f=a(46),v=a(54),O=a(51),h=a(12);a(58);t.default=function(){var e=Object(l.useContext)(h.a),t=Object(O.a)(),a=t.isLoading,r=t.error,m=t.sendRequest,y=t.clearError,x=Object(v.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),g=Object(s.a)(x,2),T=g[0],V=g[1],I=Object(u.g)(),A=function(){var t=Object(c.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,(n=new FormData).append("title",T.inputs.title.value),n.append("description",T.inputs.description.value),n.append("address",T.inputs.address.value),n.append("image",T.inputs.image.value),t.next=9,m("https://mern-amir.herokuapp.com/api/places","POST",n,{Authorization:"Bearer "+e.token});case 9:I.push("/"),t.next=14;break;case 12:t.prev=12,t.t0=t.catch(1);case 14:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p.a,{error:r,onClear:y}),Object(n.jsxs)("form",{className:"place-form",onSubmit:A,children:[a&&Object(n.jsx)(b.a,{asOverlay:!0}),Object(n.jsx)(o.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(f.c)()],errorText:"Please enter a valid title.",onInput:V}),Object(n.jsx)(o.a,{id:"description",element:"textarea",label:"Description",validators:[Object(f.b)(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:V}),Object(n.jsx)(o.a,{id:"address",element:"input",label:"Address",validators:[Object(f.c)()],errorText:"Please enter a valid address.",onInput:V}),Object(n.jsx)(j.a,{id:"image",onInput:V,errorText:"Please provide an image."}),Object(n.jsx)(d.a,{type:"submit",disabled:!T.isValid,children:"ADD PLACE"})]})]})}}}]);
//# sourceMappingURL=5.e6595d66.chunk.js.map