document.addEventListener("DOMContentLoaded", function() {
    // Get references to the elements
    let editor = ace.edit("editor"); // Initialize Ace editor for input
    let beautifyBtn = document.getElementById("beautify-btn");
    let outputEditor = ace.edit("output"); // Initialize Ace editor for output
    let tabSpacingDropdown = document.getElementById("tab-spacing");
    let caseOption = document.getElementById("case");

    // Set default mode for output editor
    outputEditor.getSession().setMode("ace");
    // Disable input on the output editor
    outputEditor.setReadOnly(true);

    // Add event listener to the beautify button
    beautifyBtn.addEventListener("click", function() {
        // Get the selected tab spacing value
        let tabSpacingValue = parseInt(tabSpacingDropdown.value);

        let caseOpt = caseOption.value;

        // Get the code from the input editor
        let code = editor.getValue();

        // Call the beautify function
        let result = beautifyCode(code, tabSpacingValue, caseOpt);

        // Set the result in the output editor
        outputEditor.getSession().setValue(result);
    });

    // Function to beautify the code
    function beautifyCode(code, tabSpacingValue, caseOpt) {
        const beautifier = new WcpsBeautifier.WCPSBeautifier({
            tabSize: tabSpacingValue,
            useTabs: false, // Assuming useTabs option is not dynamic
            caseTransform: caseOpt 
        });

        return beautifier.beautify(code);
    }
    
});
