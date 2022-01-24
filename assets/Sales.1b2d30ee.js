import{r as m,b as a,j as e,F as T}from"./vendor.abe5e19c.js";import{g as n,a as S,T as l,b as h,u as p,B as w,H as u,q as _}from"./index.6b6b7103.js";import{C as H}from"./Card.0a56d7c5.js";import{M as B}from"./Modal.395016a9.js";import"./InputLable.a582803e.js";const I=({modalObj:o,editValue:t,setEditValue:d})=>(m.exports.useState({name:"",phone:""}),a(B,{...o,submitButton:"Print",modalWidth:"700px",children:[a("div",{className:"modal-body two-col-grid",children:[a("fieldset",{className:"form-group",children:[e("label",{children:"Customer Name"}),e("input",{type:"text",value:t.x_name,onChange:s=>d({...t,x_name:s.target.value}),className:"form-control",placeholder:"Customer Name"})]}),a("fieldset",{className:"form-group",children:[e("label",{children:"Customer Phone"}),e("input",{type:"number",value:t.x_phone,onChange:s=>d({...t,x_phone:s.target.value}),className:"form-control",placeholder:"Customer Phone"})]}),a("fieldset",{className:"form-group",children:[e("label",{children:"Item Name"}),e("input",{type:"text",disabled:!0,value:t.stock_item?.particular,className:"form-control",placeholder:"Item Name",required:!0})]}),a("fieldset",{className:"form-group",children:[e("label",{children:"Qty"}),e("input",{type:"number",disabled:!0,value:t.qty,className:"form-control",placeholder:"Qty",required:!0})]}),a("fieldset",{className:"form-group",children:[e("label",{children:"Rate"}),e("input",{type:"number",disabled:!0,value:t.rate,className:"form-control",placeholder:"Rate",required:!0})]}),a("fieldset",{className:"form-group",children:[e("label",{children:"Amount"}),e("input",{type:"number",disabled:!0,value:t.amount,className:"form-control",placeholder:"Amount",required:!0})]})]}),e("div",{id:"print-sale",className:"row d-none",children:a("div",{className:"card-body p-2",children:[e("div",{className:"card-header px-0",children:a("div",{className:"row",children:[a("div",{className:"col-md-12 col-lg-7 col-xl-4 mb-50",children:[a("span",{className:"invoice-id font-weight-bold",children:["# Invoice: ",n(()=>t.branch.branch_name)," ",n(()=>t.id)]}),e("span",{})]}),e("div",{className:"col-md-12 col-lg-5 col-xl-8",children:e("div",{className:"d-flex align-items-center justify-content-end justify-content-xs-start",children:a("div",{className:"issue-date pr-2",children:[a("span",{className:"font-weight-bold no-wrap",children:["Issue Date:"," "]}),e("span",{children:new Date().toISOString().split("T")[0]}),"\xA0\xA0",a("span",{className:"font-weight-bold no-wrap",children:["Bill Date:"," "]}),e("span",{children:n(()=>new Date(t.created_at).toISOString().split("T")[0])})]})})})]})}),a("div",{className:"invoice-logo-title row pt-2",children:[e("div",{className:"col-6 d-flex flex-column justify-content-center align-items-start",children:e("h2",{className:"text-primary",children:"Gym Invoice"})}),e("div",{className:"col-6 d-flex justify-content-end invoice-logo",children:e("img",{src:S(n(()=>t.branch.branch_logo)),alt:"company-logo",style:{maxHeight:"50px",objectFit:"cover",marginRight:"20px"}})})]}),e("hr",{}),a("div",{className:"row invoice-adress-info py-2",children:[a("div",{className:"col-6 mt-1 from-info",children:[e("div",{className:"info-title mb-1",children:e("span",{children:"Bill From"})}),e("div",{className:"company-name mb-1",children:e("span",{className:"text-muted",children:n(()=>t.sale_transaction.sold_by.name)})}),e("div",{className:"company-email  mb-1 mb-1",children:e("span",{className:"text-muted",children:n(()=>t.sale_transaction.sold_by.email)})}),e("div",{className:"company-phone  mb-1",children:e("span",{className:"text-muted",children:n(()=>t.sale_transaction.sold_by.phone)})})]}),a("div",{className:"col-6 mt-1 to-info",children:[e("div",{className:"info-title mb-1",children:e("span",{children:"Bill To"})}),e("div",{className:"company-name mb-1",children:e("span",{className:"text-muted",children:n(()=>t.x_name)})}),e("div",{className:"company-phone  mb-1",children:e("span",{className:"text-muted",children:n(()=>t.x_phone)})})]})]}),e("div",{className:"product-details-table py-2 table-responsive",children:a("table",{className:"table table-borderless",children:[e("thead",{children:a("tr",{children:[e("th",{scope:"col",children:"ITEM"}),e("th",{scope:"col",children:"COST"}),e("th",{scope:"col",children:"QTY"}),e("th",{scope:"col",children:"PRICE"})]})}),e("tbody",{children:a("tr",{children:[e("td",{children:n(()=>t.stock_item.particular)}),e("td",{children:n(()=>t.amount)}),e("td",{children:n(()=>t.qty)}),e("td",{className:"font-weight-bold",children:n(()=>(t.amount*t.qty).toFixed(2)+" \u20B9")})]})}),e("tfoot",{style:{borderTop:"1px solid rgba(0, 0, 0, 0.1)"},children:a("tr",{children:[e("td",{style:{borderBottom:"0px"}}),e("td",{style:{borderBottom:"0px"}}),e("td",{style:{borderBottom:"0px"}}),a("td",{style:{borderBottom:"0px"},className:"font-weight-bold",children:["Total:"," ",n(()=>(t.amount*t.qty).toLocaleString("en-IN")+" \u20B9")]})]})})]})}),e("div",{className:"invoice-total pb-2",children:a("div",{className:"row",children:[e("div",{className:"col-8 col-sm-6 d-flex justify-content-end mt-75",children:e("ul",{className:"list-group cost-list d-none ",children:a("li",{className:"list-group-item each-cost border-0 p-50 d-flex justify-content-between",children:[e("span",{className:"cost-title mr-2",children:"Total "}),e("span",{className:"cost-value",children:n(()=>(t.amount*t.qty).toFixed(2)+" \u20B9")})]})})}),e("div",{className:"col-4 col-sm-6 mt-0",children:e("p",{className:"text-right",children:"Thanks for your business."})})]})})]})})]})),O=()=>{const[o,t]=m.exports.useState({formId:"print-form-edit",modalId:"print-modal-edit",title:"Print Bill"}),[d,s]=m.exports.useState({particular:"",qty:"",rate:"",amount:""});m.exports.useEffect(()=>(l.search.clear(),l.search.push([{id:"#date-min",type:"date",placeholder:"Start Date"},{id:"#date-max",type:"date",placeholder:"End Date"}],"input-date","date-minmax",7),()=>{l.search.clear()}),[]);const{isLoading:b,callback:j}=h();h();const{data:i,setData:k,loadingDone:N}=p({method:"get",url:u},"sales"),{data:f,setData:q}=p({method:"get",url:u}),x="Sales",y=[{name:"Home",link:"/branch-admin"},{name:"Sales",link:"/branch-admin/stock-sales"}];function g(r){s({...r,x_name:"",x_phone:"",branch:f?.branch}),window.$(`#${o.modalId}`).modal("show"),window.$(`#${o.formId}`).off("submit")}function v(){_("print-sale"),window.$(`#${o.modalId}`).modal("hide")}return a(T,{children:[e(w,{title:x,links:y}),e(H,{title:"Sales",button:{name:"Sale Stock",link:"/branch-admin/stock-sale-add"},children:a(l,{tableId:".table-brand-staff",loadingDone:N,footerSelect:!0,filter:!0,footer:[{index:2,text:""},{index:3,text:"\u20B9"},{index:4,text:"\u20B9"}],children:[e(l.Header,{children:a(l.Row,{children:[e(l.TH,{children:"Id"}),e(l.TH,{children:"Name"}),e(l.TH,{children:"Qty"}),e(l.TH,{children:"Selling Price"}),e(l.TH,{children:"Amount"}),e(l.TH,{children:"Note"}),e(l.TH,{children:"Sold By"}),e(l.TH,{children:"Date"}),e(l.TH,{children:"Actions"})]})}),e(l.Body,{children:i&&i.map((r,c)=>a(l.Row,{children:[e(l.TH,{children:n(()=>r.id)}),e(l.TH,{children:n(()=>r.stock_item.particular)}),e(l.TH,{children:n(()=>r.qty)}),e(l.TH,{children:n(()=>r.amount)}),e(l.TH,{children:n(()=>r.amount*r.qty)}),e(l.TH,{children:n(()=>r.sale_transaction.note)}),e(l.TH,{children:n(()=>r.sale_transaction.sold_by.name)}),e(l.TH,{children:n(()=>new Date(r.created_at).toLocaleDateString())}),e(l.TH,{children:a("span",{className:"cursor-pointer badge badge-info",onClick:()=>g(r),children:[e("i",{className:"feather icon-printer"})," Print"]})})]},r.id))}),e(l.Footer,{children:a("tr",{children:[e("td",{colSpan:2,className:"text-right",children:"Total"}),e("th",{children:n(()=>i.reduce((r,c)=>Number(c.qty)+r,0))}),e("th",{children:n(()=>i.reduce((r,c)=>Number(c.amount)+r,0)+" \u20B9")}),e("th",{children:n(()=>i.reduce((r,c)=>Number(c.amount)*Number(c.qty)+r,0)+" \u20B9")}),e("td",{colSpan:4})]})})]})}),e(I,{editValue:d,setEditValue:s,modalObj:{...o,onSubmit:v,isLoading:b}})]})};export{O as default};
