# 🎮 TicTacToe Game

A simple and interactive TicTacToe game built using React.js. This project demonstrates the use of hooks and component structure in React, as well as state management and handling user interactions. 🕹️

## Features 🌟

- 🧩 3x3 TicTacToe grid.
- 🔄 Player alternates between "X" and "O".
- 🏆 Automatically detects a winner or draw.
- 🔁 Option to reset the game at any time.

## Installation 🛠️

To get started with this project, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/tic-tac-toe.git

    Navigate into the project directory:

cd tic-tac-toe

Install the dependencies:

npm install

Run the application:

    npm start

    The app will open in your default browser at http://localhost:3000. 🚀

File Structure 📁

    src/
    Contains all the components and hooks used in the application.

        components/

            TicTacToe.js: Main TicTacToe game component.

        hooks/

            useTicTacToe.js: Custom hook for managing game state and logic.

        App.js: Main entry point for the React app.

        index.js: Renders the App component to the DOM.

    public/ Contains the index.html template file.

Game Logic 🎲

    Board State: The game board is a 3x3 grid represented as an array of 9 cells, which can either be "X", "O", or null (empty).

    Player Turns: The isNext state determines which player is next. Initially, it's set to "X", and the player alternates after each turn.

    Winner Calculation: A winner is determined based on predefined winning patterns. If a player successfully matches a pattern, they are declared the winner. 🏅

    Reset Function: The game can be reset at any time by clicking the "Reset" button. It restores the board to its initial state, ready for a new game. 🔄

How to Play 🎮

    Click on any empty cell to place your mark ("X" or "O").

    The game will automatically check for a winner or a draw after every move. ✅

    You can reset the game anytime by clicking the "Reset" button. 🔁

Technologies Used 💻

    ⚛️ React.js

    💬 JavaScript (ES6+)

    🎨 CSS (for styling)