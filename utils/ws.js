var ws = new WebSocket("ws://localhost:6080/ws");
ws.onmessage = function (event) {
 console.log(event.data)
};

function sendMessage(event) {
  var input = 'test'
  ws.send(input.value)
  input.value = ''
  event.preventDefault()
}
