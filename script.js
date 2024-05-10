document.addEventListener("DOMContentLoaded", function () {
  // Get references to the elements
  let editor = ace.edit("editor"); // Initialize Ace editor for input
  let beautifyBtn = document.getElementById("beautify-btn");
  let clearBtn = document.getElementById("clear-btn");
  let outputEditor = ace.edit("output"); // Initialize Ace editor for output
  let tabSpacingDropdown = document.getElementById("tab-spacing");
  let caseOption = document.getElementById("case");

  // Set default mode for output editor
  outputEditor.getSession().setMode("ace");
  // Disable input on the output editor
  outputEditor.setReadOnly(true);

  // Add event listener to the beautify button
  beautifyBtn.addEventListener("click", function () {
    // Get the selected tab spacing value
    let tabSpacingValue;
    let useCompTabs;

    if (tabSpacingDropdown.value == "true") {
      useCompTabs = true;
    } else if (tabSpacingDropdown.value != "true") {
      useCompTabs = false;
      tabSpacingValue = parseInt(tabSpacingDropdown.value);
    }

    let caseOpt = caseOption.value;

    // Get the code from the input editor
    let code = editor.getValue();

    // Call the beautify function
    let result = beautifyCode(code, tabSpacingValue, caseOpt, useCompTabs);

    // Set the result in the output editor
    outputEditor.getSession().setValue(result);
  });

  clearBtn.addEventListener("click", function () {
    outputEditor.getSession().setValue("");
  })

  // Function to beautify the code
  function beautifyCode(code, tabSpacingValue, caseOpt, useCompTabs) {
    const beautifier = new WcpsBeautifier.WCPSBeautifier({
      tabSize: tabSpacingValue,
      useTabs: useCompTabs,
      caseTransform: caseOpt,
    });

    return beautifier.beautify(code);
  }
});
