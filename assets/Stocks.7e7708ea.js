import{j as e,c as r,r as h,F as y}from"./vendor.436bddb5.js";import{b,u as g,T as t,B as w,g as n,J as f}from"./index.039e5ba8.js";import{C}from"./Card.50e90fed.js";import{M as I}from"./Modal.e818ba0e.js";import"./InputLable.84bb3852.js";const N=({modalObj:l,editValue:o,setEditValue:i})=>e(I,{...l,modalWidth:"700px",children:r("div",{className:"modal-body two-col-grid",children:[r("fieldset",{className:"form-group",children:[e("label",{children:"Item Name"}),e("input",{type:"text",value:o.particular,onChange:d=>i({...o,particular:d.target.value}),className:"form-control",placeholder:"Item Name",required:!0})]}),r("fieldset",{className:"form-group",children:[e("label",{children:"Qty"}),e("input",{type:"number",value:o.qty,onChange:d=>i({...o,qty:d.target.value}),className:"form-control",placeholder:"Qty",required:!0})]}),r("fieldset",{className:"form-group",children:[e("label",{children:"Cost Price"}),e("input",{type:"number",value:o.rate,onChange:d=>i({...o,rate:d.target.value}),className:"form-control",placeholder:"Cost Price",required:!0})]}),r("fieldset",{className:"form-group",children:[e("label",{children:"Stock Amount"}),e("input",{type:"number",value:o.amount,onChange:d=>i({...o,amount:d.target.value}),className:"form-control",placeholder:"Stock Amount",required:!0})]})]})}),B=()=>{const[l,o]=h.exports.useState({formId:"stock-form-edit",modalId:"stock-modal-edit",title:"Edit Stocks"}),{isLoading:i,callback:d}=b();b();const{data:s,setData:T,loadingDone:k}=g({method:"get",url:f},"stocks"),[c,u]=h.exports.useState({particular:"",qty:"",rate:"",amount:""});function x(){let a=new FormData;for(var m in c)a.append(m,c[m]);a.append("_method","patch"),d({method:"post",url:f+"/"+c.id,data:a,headers:{"Content-Type":"multipart/form-data"},success:p=>{window.Notify({status:"success",message:p.data.message}),window.$(`#${l.modalId}`).modal("hide");let S={...c};t.fn.updateTableWithId(s,S,T,"id")},error:p=>{window.$(`#${l.modalId}`).modal("hide")}})}function H(a){u(a),window.$(`#${l.modalId}`).modal("show"),window.$(`#${l.formId}`).off("submit")}return h.exports.useEffect(()=>(t.search.clear(),t.search.push([{id:"#date-min",type:"date",placeholder:"Start Date"},{id:"#date-max",type:"date",placeholder:"End Date"}],"input-date","date-minmax",5),()=>{t.search.clear()}),[]),r(y,{children:[e(w,{title:"Stocks",links:[{name:"Home",link:"/branch-admin"},{name:"Stocks",link:"/branch-admin/stocks"}]}),e(C,{title:"Stocks",button:{name:"Purchase Stock",link:"stock-purchase"},children:r(t,{tableId:".table-brand-staff",loadingDone:k,footerSelect:!0,filter:!0,footer:[{index:2,text:""},{index:3,text:"\u20B9"},{index:5,text:"\u20B9"}],children:[e(t.Header,{children:r(t.Row,{children:[e(t.TH,{children:"Id"}),e(t.TH,{children:"Item"}),e(t.TH,{children:"Qty"}),e(t.TH,{children:"Cost Price"}),e(t.TH,{children:"Selling Price"}),e(t.TH,{children:"Amount"}),e(t.TH,{children:"Date"}),e(t.TH,{children:"Actions"})]})}),e(t.Body,{children:s&&s.map((a,m)=>r(t.Row,{children:[e(t.TH,{children:n(()=>a.id)}),e(t.TH,{children:n(()=>a.particular)}),e(t.TH,{children:n(()=>a.qty)}),e(t.TH,{children:n(()=>a.rate)}),e(t.TH,{children:n(()=>a.amount)}),e(t.TH,{children:n(()=>a.qty*a.rate)}),e(t.TH,{children:n(()=>new Date(a.created_at).toIndiaDate())}),e(t.TH,{children:e("i",{className:"feather icon-edit cursor-pointer",onClick:()=>H(a)})})]},a.id))}),e(t.Footer,{children:r("tr",{children:[e("th",{colSpan:2,className:"text-right",children:"Total"}),e("th",{}),e("th",{}),e("th",{}),e("th",{}),e("th",{colSpan:2})]})})]})}),e(N,{editValue:c,setEditValue:u,modalObj:{...l,onSubmit:x,isLoading:i}})]})};export{B as default};
