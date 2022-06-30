const form = document.querySelector(".login form"),
  submitbtn = form.querySelector(".button input"),
  tempmessage = form.querySelector(".error-text");

form.onsubmit = (e) => {
  e.preventDefault();
}

submitbtn.onclick = () => 
{
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "php/login.php", true);
  xhr.onload = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) 
    {
      if (xhr.status === 200) 
      {
        let data = xhr.response;
        if (data === "success") 
        {
          location.href = "users.php";
        } 
        else 
        {
          tempmessage.style.display = "block";
          tempmessage.textContent = data;
        }
      }
    }
  }
  
  let formData = new FormData(form);
  xhr.send(formData);
}