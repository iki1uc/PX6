function TOOL_GRID(target){
  const labels = ["me4","AH","HA","in4","●","run4","me2","in2","u4"];
  target.innerHTML = labels.map(l => `<div class="cell">${l}</div>`).join("");
}
