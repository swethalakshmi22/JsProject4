const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', passMsg);

function passMsg() {
   const messageInput = document.getElementById('input').value;
   document.getElementById('pass').textContent = messageInput;
   document.getElementById('input').value = ' ';
}

