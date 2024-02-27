document.addEventListener("DOMContentLoaded", function() {
    // Get references to the input and output textareas
    var inputTextarea = document.getElementById("input");
    var outputTextarea = document.getElementById("output");
    var beautifyBtn = document.getElementById("beautify-btn");
    var beautifyTypeDropdown = document.getElementById("beautify-type");

    // Initialize CodeMirror editor for the input textarea
    var inputCodeMirror = CodeMirror.fromTextArea(inputTextarea, {
        lineNumbers: true, // Enable line numbers
        mode: "javascript" // Set the mode (syntax highlighting)
    });

    // Function to update line numbers
    function updateLineNumbers(textarea, lineNumbersContainer) {
        // Clear existing line numbers
        lineNumbersContainer.innerHTML = '';

        // Get the total number of lines
        var totalLines = textarea.lineCount();

        // Generate line numbers HTML
        var lineNumberContent = '';
        for (var i = 0; i < totalLines; i++) {
            lineNumberContent += (i + 1) + '\n';
        }

        // Set line numbers content
        lineNumbersContainer.textContent = lineNumberContent;
    }

    // Add event listener to update line numbers when the content of the input textarea changes
    inputCodeMirror.on("change", function() {
        updateLineNumbers(inputCodeMirror, document.getElementById("input-line-numbers"));
    });

    // Add event listener to the beautify button
    beautifyBtn.addEventListener("click", function() {
        // Check if the "Text" option is selected
        if (beautifyTypeDropdown.value === "text") {
            // If "Text" is selected, copy content from input to output
            outputTextarea.value = inputTextarea.value;
        }
    });

    // Update line numbers initially
    updateLineNumbers(inputCodeMirror, document.getElementById("input-line-numbers"));
});
