

# 🍽️ AI-Powered Recipe & Review Web App

A full-stack Node.js application that blends food, feedback, and futuristic AI. Users can explore recipes, write reviews, and even interact with a GPT-4-powered assistant for suggestions and content generation.

---

## ✨ Features

- **🤖 AI Chat Endpoint (`/agent`)**  
  GPT-4 integration via OpenAI to generate intelligent replies based on user input.

- **🛣️ Modular Routing**  
  Separate routes for users, recipes, and reviews using Express routers.

- **🗃️ Database Connectivity**  
  MongoDB connection managed via a dedicated `connectDb()` module.

- **🛡️ Middleware Setup**  
  - JSON and URL-encoded body parsing  
  - CORS enabled for smooth frontend/backend interaction  
  - Static asset serving from the `public` directory

- **🔐 Environment Variables**  
  Secure API key and server configuration with `.env` and `dotenv`.

---

## 🧰 Tech Stack

| Layer       | Technology          |
|------------|---------------------|
| Server      | Node.js + Express   |
| AI Assistant| OpenAI GPT-4        |
| Database    | MongoDB + Mongoose  |
| Middleware  | Express, CORS       |
| Routing     | Express Routers     |

---

## 🚧 Future Enhancements


- Add centralized error handling middleware
- Implement WebSocket for live AI chat

---
---

## 🎨 UI & Animation Highlights

This project isn't just functional—it's fun! Leveraging animation libraries like **GSAP**, the UI comes alive with:

- **Smooth hover effects** for interactive feedback
- **Scroll-triggered animations** to guide user attention
- **Playful transitions** between components and pages
- **Dynamic styling** that responds to user interaction

These animations enhance the user experience by making the interface feel responsive, joyful, and engaging.

---

## 🛠️ Animation Tools Used

| Library | Purpose |
|--------|---------|
| GSAP   | Advanced timeline-based animations and scroll triggers |
| CSS    | Subtle transitions and hover effects |
| Framer Motion (optional) | React-based animations for component transitions |



## 📦 Getting Started

1. Clone the repo  
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

2.Install dependencies
  bash
  npm install

3.Create a .env file

OPENAI_API_KEY=your-api-key
PORT=your-preferred-port

4.Start the server
bash
node index.js
5.files
├── .gitattributes
├── .github
    └── workflows
    │   └── static.yml
├── Backend
    ├── Controllre
    │   ├── recipe.js
    │   ├── review.js
    │   └── user.js
    ├── Public
    │   ├── images
    │   │   ├── 1751918640233-recipe1.jpg
    │   │   ├── 1752123854193-images.jpg
    │   │   ├── 1752354499979-recipe1.jpg
    │   │   ├── 1752379506310-recipe1.jpg
    │   │   ├── 1752609525813-recipe1.jpg
    │   │   ├── 1752609902731-recipe1.jpg
    │   │   ├── 1752634608715-recipe1.jpg
    │   │   ├── 1752635078759-recipe1.jpg
    │   │   ├── 1752876414058-logo.jpg
    │   │   ├── 1752877355023-logoicon.png
    │   │   ├── 1752878421312-logo.jpg
    │   │   ├── 1752882320828-loginpage.png
    │   │   ├── 1752883263474-cnava.jpg
    │   │   ├── 1752883394720-cnava.jpg
    │   │   ├── 1752883684893-cnava.jpg
    │   │   ├── 1752883762770-cnava.jpg
    │   │   ├── 1752884044233-cnava.jpg
    │   │   ├── 1752884109630-logo1.png
    │   │   ├── 1752950166525-th.jpg
    │   │   ├── 1752950667971-spggetti.jpg
    │   │   ├── 1752951166014-spggetti.jpg
    │   │   ├── 1752951171515-spggetti.jpg
    │   │   ├── 1752951205903-spggetti.jpg
    │   │   ├── 1752951212949-spggetti.jpg
    │   │   ├── 1752951227132-spggetti.jpg
    │   │   ├── 1752951293634-spggetti.jpg
    │   │   ├── 1752951549367-spggetti.jpg
    │   │   ├── 1752951550936-spggetti.jpg
    │   │   ├── 1752951551439-spggetti.jpg
    │   │   ├── 1752951551660-spggetti.jpg
    │   │   ├── 1752951576675-spggetti.jpg
    │   │   ├── 1752951601676-spggetti.jpg
    │   │   ├── 1752951604095-spggetti.jpg
    │   │   ├── 1752951606271-spggetti.jpg
    │   │   ├── 1752951658181-spggetti.jpg
    │   │   ├── 1752951771972-recipe1.jpg
    │   │   ├── 1752951873615-spggetti.jpg
    │   │   ├── 1752951951704-logo.jpg
    │   │   ├── 1752952008237-spggetti.jpg
    │   │   ├── 1752952654670-download.jpg
    │   │   ├── 1752952802154-spggetti.jpg
    │   │   ├── 1752953037227-foodRecipe.jpg
    │   │   ├── 1752953265540-th.jpg
    │   │   ├── 1752953735448-Stir-Fry-with-Peanut-Sauce.jpg
    │   │   ├── 1752964998858-th (1).jpg
    │   │   ├── 1752965159169-th (1).jpg
    │   │   ├── 1752985676969-th.jpg
    │   │   ├── 1753127238645-th (1).jpg
    │   │   ├── 1753128068130-th (1).jpg
    │   │   ├── 1753128217544-th (1).jpg
    │   │   ├── 1753128310964-th (1).jpg
    │   │   ├── 1753128314872-th (1).jpg
    │   │   ├── 1753128315766-th (1).jpg
    │   │   ├── 1753128322462-th (1).jpg
    │   │   ├── 1753128325625-th (1).jpg
    │   │   ├── 1753128623025-th (1).jpg
    │   │   ├── 1753141524643-th (1).jpg
    │   │   ├── 1753141548004-th (1).jpg
    │   │   ├── 1753143364480-th (1).jpg
    │   │   ├── 1753217380149-th (1).jpg
    │   │   ├── 1753217513663-th.jpg
    │   │   ├── 1753218637227-th.jpg
    │   │   ├── 1753220115115-logo1.png
    │   │   ├── 1753246631625-th (1).jpg
    │   │   ├── 1753247145236-th.jpg
    │   │   ├── 1753247652522-th (1).jpg
    │   │   ├── 1753247977609-th (1).jpg
    │   │   ├── 1753248093354-th (1).jpg
    │   │   └── 1753248225136-th (1).jpg
    │   └── reviewImages
    │   │   ├── 1752610511012-recipe1.jpg
    │   │   ├── 1752611988239-recipe1.jpg
    │   │   ├── 1752634313815-recipe1.jpg
    │   │   ├── 1752634460423-recipe1.jpg
    │   │   └── 1752634999900-recipe1.jpg
    ├── config
    │   └── connectionDb.js
    ├── middlwere
    │   └── auth.js
    ├── models
    │   ├── recipe.js
    │   ├── review.js
    │   └── user.js
    ├── package-lock.json
    ├── package.json
    ├── routes
    │   ├── recipe.js
    │   ├── review.js
    │   └── user.js
    └── server.js
├── Frententend
    └── food-blog-app
    │   ├── .gitignore
    │   ├── README.md
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── public
    │       └── vite.svg
    │   ├── src
    │       ├── App.css
    │       ├── App.jsx
    │       ├── Pages
    │       │   ├── AddFoodRecipe.jsx
    │       │   ├── Addreview.jsx
    │       │   ├── AgentChat.jsx
    │       │   ├── Carousel.jsx
    │       │   ├── EditRecipe.jsx
    │       │   ├── FoodInfoPage.jsx
    │       │   ├── Home.jsx
    │       │   ├── MoodExperiencePage.jsx
    │       │   └── RecipeDetails.jsx
    │       ├── Test
    │       │   ├── FoodInfoPage.test.jsx
    │       │   └── Home.test.jsx
    │       ├── assets
    │       │   ├── 8835293.jpg
    │       │   ├── bg-login.png
    │       │   ├── foodRecipe.jpg
    │       │   ├── images
    │       │   │   ├── 1.jpg
    │       │   │   ├── 10.jpg
    │       │   │   ├── 11.jpg
    │       │   │   ├── 12.jpg
    │       │   │   ├── 2.jpg
    │       │   │   ├── 3.jpg
    │       │   │   ├── 4.jpg
    │       │   │   ├── 5.jpg
    │       │   │   ├── 6.jpg
    │       │   │   ├── 7.jpg
    │       │   │   ├── 8.jpg
    │       │   │   ├── 9.jpg
    │       │   │   ├── loginpage.png
    │       │   │   ├── logo.jpg
    │       │   │   ├── logo1.png
    │       │   │   └── logoicon.png
    │       │   ├── recipe.mp4
    │       │   ├── recipe1.jpg
    │       │   └── resipe.mp4
    │       ├── components
    │       │   ├── AgentChat.jsx
    │       │   ├── Footer.jsx
    │       │   ├── InputForm.jsx
    │       │   ├── MainNavigation.jsx
    │       │   ├── Modal.jsx
    │       │   ├── Navbar.jsx
    │       │   └── RecipeItems.jsx
    │       ├── index.css
    │       └── main.jsx
    │   └── vite.config.js
└── README.md
blog application

<img width="1916" height="977" alt="Home3" src="https://github.com/user-attachments/assets/cd238231-e3ec-46bd-ba4c-c2c8a069124a" />
# foodrecipes Home page with moving carousel
<img width="1911" height="1026" alt="loder" src="https://github.com/user-attachments/assets/cd4c7dc9-4f32-496c-a9fd-18adf762df26" /> Loder with animation
<img width="1920" height="1027" alt="Login" src="https://github.com/user-attachments/assets/f9d4e7d9-190f-459a-af87-352d83245115" />
<img width="1920" height="1021" alt="AddRecipe" src="https://github.com/user-attachments/assets/51661eac-9518-4e4a-b0d7-21a246ca52e5" />
<img width="1920" height="1028" alt="Allrecipe" src="https://github.com/user-attachments/assets/18615818-9703-44da-821f-f9552d66992a" />
<img width="1920" height="1022" alt="edit" src="https://github.com/user-attachments/assets/b297dada-4c55-49d1-9cdb-17c85cf66d44" />
<img width="1920" height="1012" alt="Favreties" src="https://github.com/user-attachments/assets/82e4252e-61cb-44a5-aba6-5188c82b1afc" />
<img width="1920" height="917" alt="Myrecipe" src="https://github.com/user-attachments/assets/5df38de9-a1da-442e-ab6c-a6682db7efd4" />
<img width="1920" height="1028" alt="magic" src="https://github.com/user-attachments/assets/3d6049f7-9e3b-421a-aea1-384c7c5a2948" />
<img width="1920" height="1080" alt="Aegent" src="https://github.com/user-attachments/assets/6d46372f-9330-451d-b6f9-881d17240301" />
<img width="1918" height="1022" alt="review" src="https://github.com/user-attachments/assets/a40a3101-9d2c-4d00-ab85-1023f295da0c" />
<img width="1920" height="987" alt="recipedetelis" src="https://github.com/user-attachments/assets/8313e1c3-4949-4384-886f-9f218196d9dc" />
<img width="1920" height="1025" alt="aboutthe recipe" src="https://github.com/user-attachments/assets/c65df2e0-0e26-49ae-a187-322c99970185" />
<img width="1920" height="1028" alt="Footer" src="https://github.com/user-attachments/assets/5a602158-2fbf-49c6-bf31-4dda04f727e8" />
