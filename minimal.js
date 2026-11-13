// PX6 Inhalt, Mann! - ALLES SEIN, Mann!
// Gut neu besser, Mann! Alte Weisheiten inne, Mann!

// SEIN, Mann! - 1 Name = 1 Respo, Mann!
function SEIN(wert, name){
  return {
    sein: true,
    name: name,
    wert: wert,
    // alte Weisheiten inne, Mann!
    drei: 3,
    neun: 9,
    einundachtzig: 81,
    wunder: 40, // WUNDER = HOME 40, Mann! f(x) = min(x, 40), Mann!
    add: true, // nur ADD, nur MORE, kein Reset auf 0, Mann!
    respo: "beide Respo zum Mach Art", // immer beide Respo, Mann!
    art: "My Art" // Art als Main, Mann!
  }
}

// PX3 – 3er-Bildung – SEIN, Mann!
function PX3(x){
  const alt = x + 3 // alte Weisheit inne: +3, Mann!
  return SEIN(alt, "PX3")
}

// PX4 – 4er-Bildung – SEIN, Mann!
function PX4(x){
  const v = (x && x.sein) ? x.wert : x // Sein rein, Sein raus, Mann!
  const alt = v * 4 // alte Weisheit inne: *4, Mann!
  return SEIN(alt, "PX4")
}

// PX6 – 6er-Bildung – SEIN, Mann!
function PX6(x){
  const v = (x && x.sein) ? x.wert : x
  const alt = v ** 6 // alte Weisheit inne: **6, Mann!
  return SEIN(alt, "PX6")
}

// PX9 – 9er-Orbit – SEIN, Mann!
function PX9(x){
  const v = (x && x.sein) ? x.wert : x
  const alt = Math.sin(v) * 9 // alte Weisheit inne: sin * 9, Mann!
  // neu besser: Orbit ist nicht nur sin, Mann! Orbit ist Sein, Mann!
  return SEIN(alt, "PX9")
}

// RUN, Mann! 3 → 4 → 6 → 3 → … + 9 Orbit, Mann!
function PX6_RUN(input){
  const p3 = PX3(input)
  const p4 = PX4(p3)
  const p6 = PX6(p4)
  const p9 = PX9(p6) // 9 Orbit fängt alles, Mann! Pentagrammisch, Mann!
  return { p3, p4, p6, p9, RESULT: p6, SEIN: true }
}
