//fetch end point
export const sendContactForm = (data)=>fetch('/api/contact',{
method:"POST",
body:JSON.stringify(data),
headers:{
    "Content-Type":"application/json",
    Accept:"application/json",
},
}).then((response) => {return response});