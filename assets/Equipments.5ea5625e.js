import{j as e,b as d,r as p,F as g}from"./vendor.abe5e19c.js";import{b as f,u as y,T as a,B as I,g as u,L as q,N as H}from"./index.6b6b7103.js";import{C}from"./Card.0a56d7c5.js";import{M}from"./Modal.395016a9.js";import"./InputLable.a582803e.js";const j=({modalObj:i,editValue:o,setEditValue:l})=>e(M,{...i,modalWidth:"700px",children:d("div",{className:"modal-body one-col-grid",children:[d("fieldset",{className:"form-group",children:[e("label",{children:"Equipment Name"}),e("input",{type:"text",value:o.particular,onChange:r=>l({...o,particular:r.target.value}),className:"form-control",placeholder:"Equipment Name",required:!0})]}),d("fieldset",{className:"form-group",children:[e("label",{children:"Qty"}),e("input",{type:"number",value:o.qty,onChange:r=>l({...o,qty:r.target.value}),className:"form-control",placeholder:"Qty",required:!0})]})]})}),v=()=>{const[i,o]=p.exports.useState({formId:"equipments-form-edit",modalId:"equipments-modal-edit",title:"Edit Equipments"}),{isLoading:l,callback:r}=f();f();const{data:c,setData:h,loadingDone:N}=y({method:"get",url:q},"equipments"),[s,b]=p.exports.useState({particular:"",qty:""});function T(){let t=new FormData;for(var n in s)t.append(n,s[n]);t.append("_method","patch"),r({method:"post",url:q+"/"+s.id,data:t,headers:{"Content-Type":"multipart/form-data"},success:m=>{window.Notify({status:"success",message:m.data.message}),window.$(`#${i.modalId}`).modal("hide");let w={...s};a.fn.updateTableWithId(c,w,h,"id")},error:m=>{window.$(`#${i.modalId}`).modal("hide")}})}function x(t){b(t),window.$(`#${i.modalId}`).modal("show"),window.$(`#${i.formId}`).off("submit")}function E(t){r({method:"post",url:H,data:{branch_equipment_id:t.id},success:n=>{window.Notify({status:"success",message:n.data.message});let m={...t,...n.data.equipments_to_maintain};a.fn.updateTableWithId(c,m,h,"id")},error:n=>{window.$(`#${i.modalId}`).modal("hide")}})}return p.exports.useEffect(()=>(a.search.clear(),a.search.push([{id:"#date-min",type:"date",placeholder:"Start Date"},{id:"#date-max",type:"date",placeholder:"End Date"}],"input-date","date-minmax",3),()=>{a.search.clear()}),[]),d(g,{children:[e(I,{title:"Equipmets",links:[{name:"Home",link:"/branch-admin"},{name:"Equipmets",link:"/branch-admin/equipments"}]}),e(C,{title:"Equipmets",button:{name:"Add",link:"equipment-add"},children:d(a,{tableId:".table-brand-staff",loadingDone:N,footerSelect:!0,filter:!0,footer:[{index:2,text:""}],children:[e(a.Header,{children:d(a.Row,{children:[e(a.TH,{children:"Id"}),e(a.TH,{children:"Equipment"}),e(a.TH,{children:"Qty"}),e(a.TH,{children:"Date"}),e(a.TH,{children:"Actions"})]})}),e(a.Body,{children:c&&c.map((t,n)=>d(a.Row,{children:[e(a.TH,{children:u(()=>t.id)}),e(a.TH,{children:u(()=>t.particular)}),e(a.TH,{children:u(()=>t.qty)}),e(a.TH,{children:u(()=>new Date(t.created_at).toLocaleDateString())}),d(a.TH,{children:[e("i",{className:"feather icon-edit cursor-pointer",onClick:()=>x(t)}),d("span",{className:"cursor-pointer badge badge-secondary",style:{marginLeft:"10px"},onClick:()=>E(t),children:[e("i",{className:"fa fa-plus"})," \xA0 Maintenance"]})]})]},t.id))}),e(a.Footer,{children:d("tr",{children:[e("td",{colSpan:2,className:"text-right",children:"Total Qty"}),e("td",{}),e("td",{}),e("td",{})]})})]})}),e(j,{editValue:s,setEditValue:b,modalObj:{...i,onSubmit:T,isLoading:l}})]})};export{v as default};
