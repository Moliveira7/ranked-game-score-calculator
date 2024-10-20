// Function to calculate the ranked balance and determine the player's level
export function calculateRankedBalance(wins, losses) {
    const winBalance = wins - losses;
    const playerLevel = getPlayerLevel(winBalance);
    console.log(`The Hero has a balance of ${winBalance} and is at the ${playerLevel} level`);
  }
  
  function getPlayerLevel(winBalance) {
    const levels = [
      { minBalance: 101, level: "Immortal" },
      { minBalance: 91, level: "Legendary" },
      { minBalance: 81, level: "Diamond" },
      { minBalance: 51, level: "Gold" },
      { minBalance: 21, level: "Silver" },
      { minBalance: 11, level: "Bronze" },
      { minBalance: 0, level: "Iron" }
    ];
  
    // If the win balance is negative, return "Iron" as the default level
    if (winBalance < 0) {
      return "Iron"; // Any negative balance is considered "Iron"
    }
  
    return levels.find(lvl => winBalance >= lvl.minBalance).level;
  }
  