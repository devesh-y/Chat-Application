const temppass = document.querySelector(".form input[type='password']"),
eyeicon = document.querySelector(".form .field i");

eyeicon.onclick = () =>{
  if(temppass.type === "password"){
    temppass.type = "text";
    eyeicon.classList.add("active");
  }
  else{
    temppass.type = "password";
    eyeicon.classList.remove("active");
  }
}
