import{e as y,d as I,r as n,b as i,F as L,j as a}from"./vendor.abe5e19c.js";import{b as U,B as E,a as j,s as C,h as F}from"./index.6b6b7103.js";import{C as u}from"./Card.0a56d7c5.js";import{F as T,I as o}from"./InputLable.a582803e.js";const k=t=>{const s="Profile Edit",p=[{name:"Home",link:"/gym-admin"},{name:"Profile Edit",link:"/gym-admin/profile-edit"}];I();const{isLoading:f,callback:b}=U(),[l,g]=n.exports.useState(t.currentUser?.name),[m,h]=n.exports.useState(t.currentUser?.email),[d,v]=n.exports.useState(t.currentUser?.phone),[N,D]=n.exports.useState(t.currentUser?.profile_pic),P=function(e){var r=document.getElementById("profile-image");r.src=URL.createObjectURL(event.target.files[0])},x=function(){let e=new FormData;e.append("name",l),e.append("email",m),e.append("phone",d);let r=document.getElementById("profile-file-image");r.files.length&&(console.log("Files Uplod"),e.append("profile_pic",r.files[0])),b({method:"post",url:F,data:e,headers:{"Content-Type":"multipart/form-data"},success:c=>{window.Notify({message:c.data.message,status:"success"}),t.setUser(c.data.gym_admin)}}),console.log("Add Member")};return i(L,{children:[a(E,{title:s,links:p}),a(T,{id:"form-user-validation",onSubmit:e=>{e.preventDefault(),window.formValidate("form-user-validation")(x)},children:i("div",{className:"row",children:[a("div",{className:"col-md-8",children:i(u,{loadingDone:!0,title:"Personal Information",iconLeft:"feather icon-user",children:[a(o.LabelInput,{className:"form-control",type:"text",required:!0,value:l,onChange:e=>g(e.target.value),label:"Name",invalidText:"Name is required"}),a(o.LabelInput,{className:"form-control",type:"tel",pattern:"[0-9]{10,}",required:!0,value:d,onChange:e=>v(e.target.value),label:"Phone Number",invalidText:"Phone is required & Valid phone number"}),a(o.LabelInput,{className:"form-control",type:"email",required:!0,value:m,onChange:e=>h(e.target.value),label:"Email",invalidText:"Email is required & Valid email"})]})}),a("div",{className:"col-md-3",children:i(u,{title:"Profile Photo",children:[a("img",{id:"profile-image",src:j(N),alt:"",style:{width:"100%",height:"140px",objectFit:"contain"}}),a("label",{htmlFor:"profile-file-image",className:"btn btn-info position-absolute-right-top",children:a("i",{className:"feather icon-camera"})}),a(o.LabelInput,{className:"d-none",type:"file",accept:"image/*",id:"profile-file-image",onChange:e=>P(),invalidText:"Profile photo is required"})]})}),a("div",{className:"col-md-2",children:f?i("div",{className:"mb-4 btn btn-primary btn-lg btn-block",children:[a("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"\xA0 Loading..."]}):i("button",{type:"submit",className:"mb-4 btn btn-primary btn-lg btn-block",children:[a("i",{className:"feather icon-user"})," Update Profile"]})})]})})]})},q=t=>({isLoggedIn:t.user.isLoggedIn,currentUser:t.user.currentUser,loading:t.user.userLoading}),w=t=>({setUser:s=>t(C(s))});var B=y(q,w)(k);export{B as default};
