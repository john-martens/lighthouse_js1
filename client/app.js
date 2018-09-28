var socket = io.connect('http://localhost:8080');


$('form').on('submit',function () {
  var text = $('#initials').val();
  text += " says: " + $('#message').val();
  console.log(text);
  socket.emit('message', text);
  $('#message').val('');
  $('#initials').val('');
    return false;
});

socket.on('message', function (msg) {
    
  $('<li>').text(msg).appendTo('#history');
});

socket.on('news', function (data) {
    var x = data.datalist;
    $("#history").html("");
    for(var i=0; i<x.length; i++)
        $('<li>').text(x[i]).appendTo('#history');
});


socket.on('connection', function () {
  socket.emit("getlist");    
});