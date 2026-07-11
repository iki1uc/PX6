function TOOL_AXIS(target){
  const axis = ["HÄ","Q1","AH","NC","HA","Q2","ÄH","Q4","HÄ"];
  target.innerHTML = axis.map(l => `<div class="cell">${l}</div>`).join("");
}
