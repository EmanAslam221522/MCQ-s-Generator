

# 🧠 MCQ Generator using Google Gemini API

## 📖 Overview

**MCQ Generator** is an AI-powered web application that converts any text into multiple-choice questions (MCQs) using the **Google Gemini 2.5 Flash API**.
It helps teachers, students, and educators quickly generate quizzes from lessons, articles, or study materials.

This project demonstrates **how to integrate Google’s Gemini API** into a simple front-end web app using **HTML, CSS, and JavaScript**, while following good coding and documentation practices.

---

## ✨ Key Features

* 🧾 **Text-to-MCQ Conversion** — Converts any paragraph into 3+ MCQs with 4 options each.
* ✅ **Correct Answer Highlighting** — Marks correct options automatically.
* ⚡ **Powered by Google Gemini API** — Uses the `gemini-2.5-flash` model for fast and accurate question generation.
* 🎨 **Responsive UI** — Clean and minimal interface built using HTML and CSS.
* 🖱 **One-Click Generation** — Generate MCQs instantly with a single button click.
* 🔐 **Secure API Key Handling** — Supports `.env` file configuration for storing sensitive keys.

---

## 🛠️ Technologies Used

| Technology               | Purpose                                                   |
| ------------------------ | --------------------------------------------------------- |
| **HTML5**                | Structure of the webpage                                  |
| **CSS3**                 | Styling and layout                                        |
| **JavaScript (Vanilla)** | Logic, event handling, and API integration                |
| **Google Gemini API**    | AI-based question generation                              |
| **dotenv (optional)**    | To manage environment variables securely (for Node setup) |

---

## 📂 Project Structure

```
MCQ-Generator/
│
├── index.html           # Main web page
├── style.css            # CSS styling for UI
├── script.js            # JS logic and API communication
├── .env                 # Environment variables (API key)
├── README.md            # Project documentation
└── assets/              # (Optional) images, icons, etc.
```

---

## ⚙️ Installation & Setup Guide

Follow these steps to set up the project locally:

### 1. 📥 Clone the Repository

```bash
git clone https://github.com/EmanAslam221522/MCQ-s-Generator.git
cd MCQ-s-Generator
```

---

### 2. 🔑 Create a Google Gemini API Key

1. Visit **[Google AI Studio](https://aistudio.google.com/)**.
2. Log in using your Google account.
3. Navigate to **API Keys → Create new API key**.
4. Copy the generated key — you’ll need it for the next step.

---

### 3. ⚙️ Create a `.env` File (Recommended)

If you want to **hide your API key**, create a `.env` file in your project root and add:

```bash
API_KEY=your_google_gemini_api_key_here
```

> 🧩 Note:
> Frontend-only apps can’t fully hide keys, so this step is optional unless you use a backend (like Node.js or FastAPI) to handle requests securely.

---

### 4. 💡 Configure the API Key

In `script.js`, replace:

```javascript
const API_KEY = "YOUR_API_KEY";
```

with:

```javascript
const API_KEY = "your_google_gemini_api_key_here";
```

If you’re using Node.js with dotenv, you can import the key as:

```javascript
require('dotenv').config();
const API_KEY = process.env.API_KEY;
```

---

### 5. ▶️ Run the Application

Simply open `index.html` in your browser.

Or, if using VS Code:

* Right-click `index.html`
* Select **"Open with Live Server"** (for auto reload and better experience)

---

## 💻 Usage Instructions

1. Open the application in your browser.
2. Paste any text (paragraph, notes, or content) into the input box.
3. Click **"Generate MCQs"**.
4. Wait a few seconds — the app will display 3 MCQs with four options each.
5. Correct answers will be marked with an asterisk `*`.

---

## 🔑 API Details

**Model Used:** `gemini-2.5-flash`
**Endpoint:**

```
https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent
```

**Headers:**

```json
{
  "Content-Type": "application/json",
  "X-Goog-Api-Key": "YOUR_API_KEY"
}
```

**Request Body Example:**

```json
{
  "contents": [{
    "parts": [{
      "text": "Generate 3 multiple choice questions from the following text: <your_text_here>"
    }]
  }]
}
```

---

## 📸 Example Output

**Input Text:**

> The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma.

**Generated MCQs:**

```
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
```

---

## 🧩 Troubleshooting

| Problem                         | Possible Cause              | Solution                                          |
| ------------------------------- | --------------------------- | ------------------------------------------------- |
| “Please enter some text first!” | No input provided           | Add text before generating MCQs                   |
| “Something went wrong”          | Invalid API response        | Check API key or console for errors               |
| “API key not working”           | Key expired or incorrect    | Regenerate a valid key from Google AI Studio      |
| “CORS error”                    | Running directly in browser | Use a local server (Live Server) or backend proxy |

---

## 📘 Tips for Improvement

* Add **download as PDF** option for generated MCQs.
* Implement **backend proxy** (Node.js/FastAPI) to protect your API key.
* Allow users to **choose number of MCQs** to generate.
* Add **difficulty levels** (Easy, Medium, Hard).
* Support **export to Google Forms** or **CSV**.

---

## 🧪 Example `.env` File (Optional)

```
# Google Gemini API Configuration
API_KEY=AIzaSyD4exampleKey123456
MODEL=gemini-2.5-flash
```

---

## 📜 License

This project is open-source and available under the **MIT License**.
You are free to use, modify, and distribute it with proper attribution.

---

## 🙌 Author

**👩‍💻 Eman Aslam**
📧 Email: [eman.aslam@example.com](mailto:eman.aslam@example.com)
🌐 GitHub: [EmanAslam221522](https://github.com/EmanAslam221522)
💬 Contributions and suggestions are always welcome!


