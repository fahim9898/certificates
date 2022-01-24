import{d as b,r as x,b as n,F as h,j as e}from"./vendor.abe5e19c.js";import{u as v,b as N,B as f,J as g,O as A}from"./index.6b6b7103.js";import{C as k}from"./Card.0a56d7c5.js";import{F as E,I as r}from"./InputLable.a582803e.js";const w=()=>{const i="Expense Add",l=[{name:"Home",link:"/branch-admin"},{name:"Expenses",link:"/branch-admin/expenses"},{name:"Expense Add",link:"/branch-admin/expense-add"}];let d=b();v({method:"get",url:g},"stocks");const{isLoading:m,callback:c}=N(),[a,t]=x.exports.useState({particular:"",expense_amount:"",note:""}),u=function(){let s=new FormData;for(var o in a)s.append(o,a[o]);c({method:"post",url:A,data:a,success:p=>{window.Notify({message:p.data.message,status:"success"}),d.push("/branch-admin/expenses")}})};return n(h,{children:[e(f,{title:i,links:l}),e(E,{id:"form-stock-plan-validation",onSubmit:s=>{s.preventDefault(),window.formValidate("form-stock-plan-validation")(u)},children:n("div",{className:"row",children:[e("div",{className:"col-md-8",children:e(k,{title:"Expense Information",iconLeft:"fa fa-th-large",children:n("div",{className:"row",children:[e("div",{className:"col-md-12",children:e(r.LabelInput,{className:"form-control",type:"text",required:!0,value:a.particular,onChange:s=>t({...a,particular:s.target.value}),label:"Expense Name",invalidText:"Expense Name is required"})}),e("div",{className:"col-md-12",children:e(r.LabelInput,{className:"form-control",type:"numbber",required:!0,value:a.expense_amount,onChange:s=>t({...a,expense_amount:s.target.value}),label:"Expense Amount",invalidText:"Expense Amount is required"})}),e("div",{className:"col-md-12",children:e(r.LabelInput,{className:"form-control",type:"text",required:!0,value:a.note,onChange:s=>t({...a,note:s.target.value}),label:"Note",invalidText:"Note is required"})})]})})}),e("div",{className:"col-md-4"}),e("div",{className:"col-md-2",children:m?n("div",{className:"mb-4 btn btn-primary btn-lg btn-block",children:[e("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"\xA0 Loading..."]}):n("button",{type:"submit",className:"mb-4 btn btn-primary btn-lg btn-block",children:[e("i",{className:"feather icon-plus"})," Add Expense"]})})]})})]})};export{w as default};
