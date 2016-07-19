// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var text;
$('button').click(function(event){
  text = $('textarea').val();
  $('#content').html(text)
})

$('textarea').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      text = $('textarea').val();
      $('#content').html(text)
    }
  })
