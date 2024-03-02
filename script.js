let editor = document.querySelector("#editor");

ace.edit(editor, {
    mode: "ace/mode/javascript",
    selectionStyle: "text"
})