var room = document.getElementById('room');
var size = document.getElementById('size');

function enterRoom() {
  if(room.value != "" || size.value != Number) {
    window.location.href = `/${room.value}?mapSize=${size.value}`;
  } else {
    alert("Por favor preencha o nome e o tamanho da sala!");
  }
}

room.addEventListener('keydown', function(e) {
  if(e.keyCode == 13) {
    enterRoom();
  }
})

size.addEventListener('keydown', function(e) {
  if(e.keyCode == 13) {
    enterRoom();
  }
})