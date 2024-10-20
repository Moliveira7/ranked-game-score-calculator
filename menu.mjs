// Import the built-in 'readline' module to create an interface for reading 
// input from the terminal.
import readline from 'readline';
import { calculateRankedBalance } from './ranking.mjs';
import { isValidNumber } from './inputValidation.mjs';

// Create a readline interface to handle input (from the terminal) and output (to the terminal).
const rl = readline.createInterface({
  input: process.stdin,  // Use standard input (stdin) to receive user input
  output: process.stdout // Use standard output (stdout) to display messages to the user
});

// Function to show the menu and handle user options
export function showMenu() {
  console.log("----------------");
  console.log("\nMenu:");
  console.log("1 - Calculate Ranked Balance");
  console.log("0 - Exit");
  console.log("----------------");
  
  rl.question("\nChoose an option: ", (option) => {
    if (option === '1') {
      console.log("\nWe will calculate your points balance to show your medal.");
      promptWins();
    } else if (option === '0') {
      console.log("\nExiting... Finalizing the program.");
      rl.close();
    } else {
      console.log("Invalid option. Please try again.");
      showMenu();
    }
  });
}

function promptWins() {
  rl.question("Enter the number of wins: ", (winsInput) => {
    const wins = parseInt(winsInput);
    
    if (!isValidNumber(wins)) {
      console.error('Please enter a valid non-negative number for wins.');
      return promptWins();
    }

    promptLosses(wins);
  });
}

function promptLosses(wins) {
  rl.question("Enter the number of losses: ", (lossesInput) => {
    const losses = parseInt(lossesInput);
    
    if (!isValidNumber(losses)) {
      console.error('Please enter a valid non-negative number for losses.');
      return promptLosses(wins);
    }

    // Perform calculation and display result
    calculateRankedBalance(wins, losses);
    showMenu();
  });
}
