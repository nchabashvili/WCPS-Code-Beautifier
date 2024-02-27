// script.js
document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    const leftWindow = document.querySelector('.left-window .line-numbers');
    const rightWindow = document.querySelector('.right-window .line-numbers');

    // Add line numbers to left window
    input.addEventListener('input', function() {
        leftWindow.innerHTML = '';
        const lines = input.value.split('\n');
        for (let i = 1; i <= lines.length; i++) {
            leftWindow.innerHTML += `<div>${i}</div>`;
        }
    });

    // Add line numbers to right window (same as left window for consistency)
    output.addEventListener('input', function() {
        rightWindow.innerHTML = '';
        const lines = output.value.split('\n');
        for (let i = 1; i <= lines.length; i++) {
            rightWindow.innerHTML += `<div>${i}</div>`;
        }
    });
});
