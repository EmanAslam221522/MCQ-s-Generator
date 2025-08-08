const API_KEY = "AIzaSyAzGlmpyOSb8ufNvirRc5Z8gQ92vs7KBB8";
const generateButton = document.getElementById("generateButton");
const inputText = document.getElementById("inputText");
const outputArea = document.getElementById("outputArea");

generateButton.addEventListener("click", async () => {
    const textToProcess = inputText.value;
    if (!textToProcess) {
        outputArea.value = "Please enter some text first!";
        return;
    }

    outputArea.value = "Generating questions, please wait...";

    try {
        // This is the instruction for our "smart helper"!
        const prompt = `From the following text, create 3 multiple-choice questions. For each question, provide four options (A, B, C, D) and clearly mark the correct answer with an asterisk (*). The text is:\n\n${textToProcess}`;

const response = await fetch(
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-goog-api-key": API_KEY
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            { text: prompt }
          ]
        }
      ]
    })
  }
);

        const data = await response.json();
        console.log(data);
        const questions = data.candidates[0].content.parts[0].text;
        outputArea.value = questions;

    } catch (error) {
        outputArea.value = "Sorry, something went wrong. Please try again!";
        console.error(error);
    }
});