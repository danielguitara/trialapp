import{f as R}from"./index-DcZGqPg1.js";import{j as o}from"./jsx-runtime-DEdD30eg.js";import{r as s}from"./index-RYns6xqu.js";const V=({isOpen:c})=>o.jsx("svg",{viewBox:"0 0 24 24",width:"18",height:"18",stroke:"#222",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",className:c?"translate":"",children:o.jsx("polyline",{points:"6 9 12 15 18 9"})}),_=()=>o.jsxs("svg",{viewBox:"0 0 24 24",width:"14",height:"14",stroke:"#444",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[o.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),M=()=>o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",viewBox:"0 0 50 50",children:o.jsx("path",{d:"M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"})}),b=({optionLabel:c,placeHolder:C,options:g,multiple:i,withSearch:O,onChange:h})=>{const[a,v]=s.useState(!1),[t,L]=s.useState([]),[d,m]=s.useState(""),u=s.useRef(),p=s.useRef();s.useEffect(()=>{m(""),a&&u.current&&u.current.focus()},[a]),s.useEffect(()=>{const e=n=>{p.current&&!p.current.contains(n.target)&&v(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}});const S=e=>{v(!a)},k=()=>!t||t.length===0?C:i?o.jsx("div",{className:"dropdown-tags",children:t.map((e,n)=>o.jsxs("div",{className:"dropdown-tag-item",children:[e.label,o.jsx("span",{onClick:l=>N(l,e),className:"dropdown-tag-close",children:o.jsx(_,{})})]},`${e.value}-${n}`))}):t[0].label,x=e=>t.filter(n=>n.value!==e.value),N=(e,n)=>{e.stopPropagation();const l=x(n);L(l),h(l)},y=e=>{let n;i?t.findIndex(l=>l.value===e.value)>=0?n=x(e):n=[...t,e]:n=[e],L(n),h(n)},E=e=>i?t.filter(n=>n.value===e.value).length>0:t?t.value===e.value:!1,I=e=>{m(e.target.value)},D=()=>d?g.filter(e=>e.label.toLowerCase().indexOf(d.toLowerCase())>=0):g;return o.jsxs("div",{className:"custom--dropdown",children:[o.jsx("div",{className:"custom--dropdown-label",children:c||"Label"}),o.jsxs("div",{className:"custom--dropdown-container",children:[o.jsxs("div",{ref:p,onClick:S,className:"dropdown-input",children:[o.jsx("div",{className:`dropdown-selected-value ${!t||t.length===0?"placeholder":""}`,children:k()}),o.jsx("div",{children:o.jsx("div",{className:"dropdown-tool",children:o.jsx(V,{isOpen:a})})})]}),a&&o.jsxs("div",{className:"dropdown-menu",children:[O&&o.jsxs("div",{className:"search-box",children:[o.jsx(M,{}),o.jsx("input",{className:"form-control",onChange:I,value:d,ref:u})]}),D().map(e=>o.jsx("div",{onClick:()=>y(e),className:`dropdown-item ${E(e)&&"selected"}`,children:e.label},e.value))]})]})]})};b.__docgenInfo={description:"",methods:[],displayName:"SelectDropdown"};const W={component:b,title:"Select",tags:["autodocs"],args:{onChange:R()}},r={args:{options:[{label:"Option 1",value:"opt1"},{label:"Long Option 2",value:"opt2"},{label:"Long Long Option 3",value:"opt3"},{label:"Long Long Long Option 4",value:"opt4"},{label:"Long Long Long Long Option 5",value:"opt5"},{label:"Long Long Long Long Long Option 6",value:"opt6"}],placeHolder:"",withSearch:!0,multiple:!0,optionLabel:""}};var f,w,j;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Option 1',
      value: 'opt1'
    }, {
      label: 'Long Option 2',
      value: 'opt2'
    }, {
      label: 'Long Long Option 3',
      value: 'opt3'
    }, {
      label: 'Long Long Long Option 4',
      value: 'opt4'
    }, {
      label: 'Long Long Long Long Option 5',
      value: 'opt5'
    }, {
      label: 'Long Long Long Long Long Option 6',
      value: 'opt6'
    }],
    placeHolder: "",
    withSearch: true,
    multiple: true,
    optionLabel: ""
  }
}`,...(j=(w=r.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};const Z=["Default"];export{r as Default,Z as __namedExportsOrder,W as default};
