import{d as v,r as k,b as l,F as f,j as e}from"./vendor.abe5e19c.js";import{u as N,b as g,B as S,J as y,K as x}from"./index.6b6b7103.js";import{C}from"./Card.0a56d7c5.js";import{F as q,I as s}from"./InputLable.a582803e.js";const w=()=>{const c="Purchase Stock",d=[{name:"Home",link:"/branch-admin"},{name:"Stocks",link:"/branch-admin/stocks"},{name:"Purchase Stock",link:"/branch-admin/stock-add"}];let m=v();const{data:o,setData:_,loadingDone:A}=N({method:"get",url:y},"stocks"),{isLoading:u,callback:h}=g(),[t,i]=k.exports.useState({branch_stock_id:"",qty:"",purchase_type:"",note:""}),b=function(){let a=new FormData;for(var r in t)a.append(r,t[r]);let n=document.getElementById("bill-file");n.files.length&&(console.log("Files Uplod"),a.append("bill",n.files[0])),h({method:"post",url:x,data:a,success:p=>{window.Notify({message:p.data.message,status:"success"}),m.push("/branch-admin/stock-purchases")}})};return l(f,{children:[e(S,{title:c,links:d}),e(q,{id:"form-stock-plan-validation",onSubmit:a=>{a.preventDefault(),window.formValidate("form-stock-plan-validation")(b)},children:l("div",{className:"row",children:[e("div",{className:"col-md-8",children:l(C,{title:"Stock Information",iconLeft:"fa fa-th-large",children:[l(s.LabelSelect,{value:t.branch_stock_id,required:!0,label:"Stock Item",onChange:a=>i({...t,branch_stock_id:a.target.value}),invalidText:"Need to select Stock",children:[e("option",{value:"",children:"Select Stock Item"}),o&&o.map(a=>e("option",{value:a.id,children:a.particular},a.id))]}),l("div",{className:"row",children:[e("div",{className:"col-md-6",children:e(s.LabelInput,{className:"form-control",type:"text",required:!0,pattern:"\\d+",value:t.qty,onChange:a=>i({...t,qty:a.target.value}),label:"Stock Qty",invalidText:"Stock Qty is required & valid"})}),e("div",{className:"col-md-6",children:l(s.LabelSelect,{value:t.purchase_type,required:!0,label:"Purchase Type",onChange:a=>i({...t,purchase_type:a.target.value}),invalidText:"Need to select purchase type",children:[e("option",{value:"",children:"Select Pyament Type"}),e("option",{value:"Cash",children:"Cash"}),e("option",{value:"Check",children:"Check"}),e("option",{value:"Other",children:"Other"})]})}),e("div",{className:"col-md-6",children:e(s.LabelInput,{className:"form-control",type:"text",required:!0,value:t.note,onChange:a=>i({...t,note:a.target.value}),label:"Stock Note",invalidText:"Stock Note is required"})}),e("div",{className:"col-md-6",children:e(s.LabelInput,{className:"file form-control",type:"file",accept:"",required:!0,label:"Bill",id:"bill-file",invalidText:"Bill is required"})})]})]})}),e("div",{className:"col-md-4"}),e("div",{className:"col-md-2",children:u?l("div",{className:"mb-4 btn btn-primary btn-lg btn-block",children:[e("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"\xA0 Loading..."]}):l("button",{type:"submit",className:"mb-4 btn btn-primary btn-lg btn-block",children:[e("i",{className:"feather icon-plus"})," Add To Stock"]})})]})})]})};export{w as default};
