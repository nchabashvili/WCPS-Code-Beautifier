document.addEventListener("DOMContentLoaded", function() {
    // Get references to the elements
    let editor = ace.edit("editor"); // Initialize Ace editor for input
    let beautifyBtn = document.getElementById("beautify-btn");
    let outputEditor = ace.edit("output"); // Initialize Ace editor for output
    let tabSpacingDropdown = document.getElementById("tab-spacing");

    // Set default mode for output editor
    outputEditor.getSession().setMode("ace/mode/javascript");
    // Disable input on the output editor
    outputEditor.setReadOnly(true);

    // Add event listener to the beautify button
    beautifyBtn.addEventListener("click", function() {
        // Get the selected tab spacing value
        let tabSpacingValue = parseInt(tabSpacingDropdown.value);

        // Get the code from the input editor
        let code = editor.getValue();

        // Call the beautify function
        let result = beautifyCode(code, tabSpacingValue);

        // Set the result in the output editor
        outputEditor.getSession().setValue(result);
    });

    // Function to beautify the code
    function beautifyCode(code, tabSpacingValue) {
        // Assuming WCPSBeautifier is already available and imported
        const beautifier = new WCPSBeautifier({
            tabSize: tabSpacingValue,
            useTabs: false, // Assuming useTabs option is not dynamic
            caseTransform: 'capitalize' // Assuming caseTransform option is not dynamic
        });

        // Split the code by newline characters
        const lines = code.split('\n');

        // Beautify each line
        const result = lines.map((line) => {
            return beautifier.beautify(line);
        });

        // Join the beautified lines with newline characters
        return result.join('\n');
    }
});
