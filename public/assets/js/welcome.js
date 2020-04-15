var room = document.getElementById('room');

function enterRoom() {
  if(room.value != "") {  
    window.location.href = "/"+room.value;
  } else {
    alert("Por favor preencha o nome da sala!");
  }
}

room.addEventListener('keydown', function(e) {
  if(e.keyCode == 13) {
    enterRoom();
  }
})