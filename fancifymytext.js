// Function to show an alert and make the text larger
function makeTextBigger() {
    alert("Hello, world!");
    document.getElementById("userText").style.fontSize = "24pt";
}

// Function to apply styles based on the selected radio button
function applyStyles() {
    const textArea = document.getElementById("userText");
    const fancy = document.getElementById("fancy").checked;

    if (fancy) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to convert text to uppercase and add "-Moo"
function mooifyText() {
    const textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase(); // Convert text to uppercase

    const sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i].trim() !== "") { 
            sentences[i] = sentences[i].trim() + "-Moo";
        }
    }
    textArea.value = sentences.join(". "); // Join sentences back together
}

