📝 MCQ Generator using Google Gemini API
📖 Overview

The MCQ Generator is a simple web-based application that takes a block of text and automatically generates multiple-choice questions (MCQs) using Google’s Gemini API.
It’s designed for teachers, students, and content creators who want to quickly create quizzes from learning material.
✨ Features

    📌 Text to MCQ Conversion – Paste any text, and the app creates 3 MCQs with 4 options each.

    ✅ Correct Answer Marking – Correct answers are marked with an asterisk *.

    🎨 Clean & Responsive UI – Simple design using HTML & CSS.

    ⚡ AI-Powered – Uses Gemini 2.5 Flash for fast and accurate question generation.

    🖱 One-Click Generation – Easy-to-use "Generate MCQs" button.

🛠 Technologies Used

    HTML5 – Structure of the webpage.

    CSS3 – Styling and layout.

    JavaScript (Vanilla) – Logic and API requests.

    Google Gemini API – AI-powered question generation.

📂 Project Structure

MCQ-Generator/
│
├── index.html        # Main HTML page
├── style.css         # Stylesheet for UI
├── script.js         # JavaScript logic and API integration
└── README.md         # Documentation

📋 Requirements

Before running the project, you’ll need:

    A Google Gemini API key (Get it from: Google AI Studio)

    A modern web browser (Chrome, Firefox, Edge)

    Internet connection (API requests need it)

⚙ Installation & Setup

    Clone or Download this repository:

git clone https://github.com/EmanAslam221522/MCQ-s-Generator.git
cd MCQ-s-Generator


Open the script.js file and replace:

    const API_KEY = "YOUR_API_KEY";

    with your actual Google Gemini API key.

    Run the project by simply opening index.html in your browser.

▶ Usage

    Open index.html in your browser.

    Paste any text (e.g., from a lesson, book, or article) in the input box.

    Click "Generate MCQs".

    Wait a few seconds – the output area will show 3 multiple-choice questions with marked correct answers.

🔑 API Configuration

This project uses the Gemini 2.5 Flash model.
The API endpoint is:

https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent

Authentication is handled via:

X-goog-api-key: YOUR_API_KEY

📸 Example Output

Input Text:

The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma.

Generated MCQs:

1. What is at the center of the Solar System?
A) Moon
B) Earth
C) Sun*
D) Mars

2. What is the Sun primarily made of?
A) Ice
B) Hot plasma*
C) Rocks
D) Metal

3. The shape of the Sun is best described as?
A) Cube
B) Perfect sphere
C) Nearly perfect sphere*
D) Triangle

🐞 Troubleshooting

    "Please enter some text first!" – You clicked "Generate MCQs" without entering any text.

    "Something went wrong" – Check your API key or internet connection.

    API key errors – Ensure your key is valid and has permissions for the Gemini API.

📜 License

This project is open-source and free to use under the MIT License.

