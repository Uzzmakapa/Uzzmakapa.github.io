function check() {

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (document.getElementById('psw').value != document.getElementById('pswrepeat').value) {
    document.getElementById('pswerror').style.color = 'red';
    document.getElementById('pswerror').innerHTML = 'Password must match! <br><br>';
  } else {
    document.getElementById('pswerror').innerHTML = '';
  }

  if (!document.getElementById('email').value.match(mailformat)) {
    document.getElementById('emailerror').style.color = 'red';
    document.getElementById('emailerror').innerHTML = 'Invalid email! <br><br>';
  } else {
    document.getElementById('emailerror').innerHTML = '';
  }
  
  if (document.getElementById('psw').value == document.getElementById('pswrepeat').value && document.getElementById('email').value.match(mailformat)) {
    window.location.href = "login.html";
  }
}