var textArea = document.getElementById("editor");
var editBox = CodeMirror.fromTextArea(textArea, {
  lineNumbers: true,
  value:       "<html>\n</html>",
  mode:        "text/html"
});

editBox.on("change", function(instance, object) {
  var iframe = document.getElementById("moo");
  iframe.src = "data:text/html;charset=utf-8," + escape(instance.getValue());
});
