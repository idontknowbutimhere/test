let gold = 0;
let upgradeCost = 10;
let goldPerClick = 1;

document.getElementById("plantButton").addEventListener("click", () => {
  gold += goldPerClick;
  document.getElementById("gold").textContent = gold;

  // Enable upgrade button if enough gold
  if (gold >= upgradeCost) {
    document.getElementById("upgradeButton").disabled = false;
  }
});

document.getElementById("upgradeButton").addEventListener("click", () => {
  if (gold >= upgradeCost) {
    gold -= upgradeCost;
    goldPerClick += 1;
    upgradeCost *= 2; // Increase upgrade cost
    document.getElementById("gold").textContent = gold;
    document.getElementById("upgradeCost").textContent = upgradeCost;
    document.getElementById("upgradeButton").disabled = true;
  }
});
