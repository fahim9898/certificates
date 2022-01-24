import{d as M,r as x,b as n,F as y,j as e}from"./vendor.abe5e19c.js";import{u as D,b as I,B as R,r as m}from"./index.6b6b7103.js";import{C as o}from"./Card.0a56d7c5.js";import{F as E,I as r}from"./InputLable.a582803e.js";const B=()=>{const c="Add Member",p=[{name:"Home",link:"/gym-admin"},{name:"Admin",link:"/gym-admin/admins"},{name:"Add Admin",link:"/gym-admin/admin-add"}];let h=M();const{data:s,setData:G,loadingDone:f}=D({method:"get",url:m},"branches"),{isLoading:u,callback:b}=I(),[i,g]=x.exports.useState({email:"",phone:"",name:"",password:"",profile_pic:"",branch_id:""});function l(a){g({...i,[a.target.name]:a.target.value})}const N=function(a){var t=document.getElementById("profile-image");t.src=URL.createObjectURL(event.target.files[0])},v=function(){let a=new FormData;for(var t in i)a.append(t,i[t]);a.delete("profile_pic"),(!i.aniversary||i.aniversary=="")&&a.delete("aniversary");let d=document.getElementById("profile-file-image");d.files.length&&(console.log("Files Uplod"),a.append("profile_pic",d.files[0])),b({method:"post",url:m,data:a,success:A=>{window.Notify({message:A.data.message,status:"success"}),h.push("/gym-admin/admins")}})};return n(y,{children:[e(R,{title:c,links:p}),e(E,{id:"form-member-plan-validation",autoComplete:"off",onSubmit:a=>{a.preventDefault(),window.formValidate("form-member-plan-validation")(v)},children:n("div",{className:"row",children:[e("div",{className:"col-md-8",children:n(o,{title:"Personal Information",iconLeft:"feather icon-user",children:[e(r.LabelInput,{className:"form-control",type:"text",name:"name",required:!0,value:i.name,onChange:l,label:"Name",invalidText:"Name is required"}),e(r.LabelInput,{className:"form-control",type:"text",name:"email",required:!0,value:i.email,onChange:l,label:"Email",invalidText:"Email is required"}),e(r.LabelPassword,{className:"form-control",type:"text",name:"password",required:!0,value:i.password,onChange:l,label:"Password",invalidText:"Password is required"}),e(r.LabelInput,{className:"form-control",type:"number",name:"phone",required:!0,value:i.phone,onChange:l,label:"Phone",invalidText:"phone is required"})]})}),e("div",{className:"col-md-4",children:n(o,{title:"Profile Photo",children:[e("img",{id:"profile-image",src:"data:image/png;base64,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",alt:"",style:{width:"100%",height:"190px",objectFit:"contain"}}),e("label",{htmlFor:"profile-file-image",className:"btn btn-info position-absolute-right-top",children:e("i",{className:"feather icon-camera"})}),e(r.LabelInput,{className:"d-none",type:"file",accept:"image/*",required:!0,id:"profile-file-image",onChange:a=>N(),invalidText:"Profile photo is required"})]})}),e("div",{className:"col-md-12",children:e(o,{loadingDone:f,title:"Package Informations",iconLeft:"feather icon-box",children:e("div",{className:"row",children:e("div",{className:"col-md-6",children:n(r.LabelSelect,{value:i.branch_id,required:!0,label:"Branch",name:"branch_id",onChange:l,invalidText:"Need to select Branch",children:[e("option",{value:"",children:"Select Branch"}),s&&s.map(a=>e("option",{value:a.id,children:a.branch_name},a.id))]})})})})}),e("div",{className:"col-md-2",children:u?n("div",{className:"mb-4 btn btn-primary btn-lg btn-block",children:[e("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"\xA0 Loading..."]}):n("button",{type:"submit",className:"mb-4 btn btn-primary btn-lg btn-block",children:[e("i",{className:"feather icon-plus"})," Add Admin"]})})]})})]})};export{B as default};
