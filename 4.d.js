// PX6 Inhalt — TOOL_4D getimmt + getrimmt
function TOOL_4D(target, vorfall = 0){
  // vorfall: 0 = jetzt, 1 = nach 1. Vorfall, 3 = nach 3. Vorfall, 9 = nach 9. Vorfall
  // wann es fallen soll, Mann!

  let wann = "JETZT";
  if(vorfall === 1) wann = "NACH 1. VORFALL";
  if(vorfall === 3) wann = "NACH 3. VORFALL";
  if(vorfall === 9) wann = "NACH 9. VORFALL — FALLEN!";

  // Timing Rimer Timer — zum Timen
  const timing = Date.now(); // jetzt, nicht gestern, nicht nächstes Jahr

  target.textContent =
`4D:
 Zustand ↑ — ${wann}
 Winkel ◀ ● ▶ Raum
 Zeit ↓ — TIMING: ${timing}
 FALLEN: ${vorfall === 9 ? "JA — 9. VORFALL, FALLEN!" : "NEIN — NOCH HALTEN!"}`;
  
  return { vorfall, wann, timing, fallen: vorfall === 9 };
}

// So rufen, Mann:
// TOOL_4D(d4, 0)  // jetzt
// TOOL_4D(d4, 1)  // nach 1. Vorfall
// TOOL_4D(d4, 3)  // nach 3. Vorfall
// TOOL_4D(d4, 9)  // nach 9. Vorfall — FALLEN!
