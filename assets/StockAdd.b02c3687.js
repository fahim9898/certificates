import{u as p,r as f,c as r,F as h,j as t}from"./vendor.436bddb5.js";import{b as k,B as v,J as g}from"./index.039e5ba8.js";import{C as N}from"./Card.50e90fed.js";import{F as S,I as s}from"./InputLable.84bb3852.js";const A=()=>{const i="Add Stock",l=[{name:"Home",link:"/branch-admin"},{name:"Stocks",link:"/branch-admin/stocks"},{name:"Add Stock",link:"/branch-admin/stock-add"}];let c=p();const{isLoading:d,callback:m}=k(),[a,n]=f.exports.useState({particular:"",qty:"",rate:"",amount:""}),u=function(){let e=new FormData;for(var o in a)e.append(o,a[o]);m({method:"post",url:g,data:a,success:b=>{window.Notify({message:b.data.message,status:"success"}),c.push("/branch-admin/stocks")}})};return r(h,{children:[t(v,{title:i,links:l}),t(S,{id:"form-stock-plan-validation",onSubmit:e=>{e.preventDefault(),window.formValidate("form-stock-plan-validation")(u)},children:r("div",{className:"row",children:[t("div",{className:"col-md-8",children:r(N,{title:"Stock Information",iconLeft:"fa fa-th-large",children:[t(s.LabelInput,{className:"form-control",type:"text",required:!0,value:a.particular,onChange:e=>n({...a,particular:e.target.value}),label:"Stock Name",invalidText:"Stock Name is required"}),t(s.LabelInput,{className:"form-control",type:"number",required:!0,value:a.qty,onChange:e=>n({...a,qty:e.target.value}),label:"Stock Qty",invalidText:"Stock Qty is required"}),t(s.LabelInput,{className:"form-control",type:"number",required:!0,value:a.rate,onChange:e=>n({...a,rate:e.target.value}),label:"Cost Price",invalidText:"Cost Price is required"}),t(s.LabelInput,{className:"form-control",type:"number",required:!0,value:a.amount,onChange:e=>n({...a,amount:e.target.value}),label:"Selling Price",invalidText:"Selling Price is required"})]})}),t("div",{className:"col-md-4"}),t("div",{className:"col-md-2",children:d?r("div",{className:"mb-4 btn btn-primary btn-lg btn-block",children:[t("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"\xA0 Loading..."]}):r("button",{type:"submit",className:"mb-4 btn btn-primary btn-lg btn-block",children:[t("i",{className:"feather icon-plus"})," Add Stock"]})})]})})]})};export{A as default};
