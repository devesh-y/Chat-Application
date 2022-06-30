const form = document.querySelector(".signup form"),
submitbtn = form.querySelector(".button input"),
tempmesage = form.querySelector(".error-text");

form.onsubmit = (e)=>
{
    e.preventDefault();
}
submitbtn.onclick = ()=>
{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = ()=>
    {
      if(xhr.readyState === XMLHttpRequest.DONE)
      {
          if(xhr.status === 200)
          {
              let data = xhr.response;
              if(data === "success")
              {
                location.href="users.php";
              }
              else
              {
                tempmesage.style.display = "block";
                tempmesage.innerText = data;
              }
          }
      }
    }
    let formdata = new FormData(form);
    xhr.send(formdata);
}