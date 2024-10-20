# Ranked Game Score Calculator

This is a simple Node.js project that calculates the points balance of a player based on the number of wins and losses in ranked games. Based on the calculated balance, the program classifies the player into different levels, such as "Iron," "Bronze," "Silver," and more.

## Classification Table

The classification of players is done according to the following win balance ranges:

- **Iron**: Balance less than 0
- **Bronze**: Balance between 1 and 10
- **Silver**: Balance between 11 and 20
- **Gold**: Balance between 21 and 50
- **Diamond**: Balance between 51 and 80
- **Legendary**: Balance between 81 and 100
- **Immortal**: Balance greater than or equal to 101

## Features

- Prompts the user to enter the number of wins.
- Prompts the user to enter the number of losses.
- Calculates the points balance and determines the player's level.
- Displays the final message with the balance and level in the terminal.
- Includes error handling for invalid inputs.

## Technologies Used

- [Node.js](https://nodejs.org/en/) - JavaScript runtime environment.

## How to Run the Project

### Prerequisites

- You must have [Node.js](https://nodejs.org/en/) installed on your machine.

### Installation

1. Clone the project repository:
   ```bash
   git clone https://github.com/Moliveira7/ranked-game-score-calculator.git

