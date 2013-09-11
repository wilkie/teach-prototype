var textArea = document.getElementById("editor");
var editBox = CodeMirror.fromTextArea(textArea, {
  lineNumbers: true,
  mode:        "text/html"
});

function updateFrame(src) {
  var iframe = document.getElementById("preview");
  iframe.src = "data:text/html;charset=utf-8," + escape(src);
}

updateFrame(editBox.getValue());

editBox.on("change", function(instance, object) {
  updateFrame(instance.getValue());
});
