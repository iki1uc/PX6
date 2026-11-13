// PX6 Inhalt, Mann! — GEO_WASD_5 SOUVERÄN, Mann! — NEU, nicht alt, Mann!
// 1 Name = 1 Respo: GEO_WASD_5 steuert nur GEO WASD, Mann!

const GEO_WASD_5 = {
  id: "GEO_WASD_5",
  version: "2.0-souveraen",
  deps: [], // souverän = keine Deps, Mann! Braucht nix von außen, Mann!
  respo: "GEO WASD",

  // SOUVERÄN = FROZEN, Mann! Niemand ändert die Werte von außen, Mann!
  MAP: Object.freeze({
    w: Object.freeze({ zone: "AXIS",  wert: 92, wirkung: "vor" }),
    a: Object.freeze({ zone: "RESPO", wert: 62, wirkung: "links" }),
    s: Object.freeze({ zone: "EBENE", wert: 81, wirkung: "zurück" }),
    d: Object.freeze({ zone: "6D",    wert: 95, wirkung: "rechts" }),
  }),

  WORK: Object.freeze({ zone: "WORK", wert: "◉", wirkung: "Mitte", tmp: 37, mnmm: 74 }),

  // Plug-in-Form, Mann! Wie FIGUR / ZONE, Mann!
  init(OS) { this.OS = OS; return "GEO_WASD_5 SOUVERÄN — bereit, Mann!"; },
  destroy(OS) { this.OS = null; return "GEO_WASD_5 SOUVERÄN — abgehängt, Kern unberührt, Mann!"; },

  api: {
    // SOUVERÄN = immer Kopie, nie Original, Mann!
    // Niemand mutiert dein MAP, Mann!
    get(key) {
      const k = String(key ?? "").toLowerCase();
      const treffer = GEO_WASD_5.MAP[k] || GEO_WASD_5.WORK;
      return { ...treffer }; // Kopie, Mann! Original bleibt frozen, Mann!
    },

    // Alle 5 Zapfe auf einmal, Mann! Nacheinander, Mann!
    alle() {
      return {
        w: GEO_WASD_5.api.get("w"),
        a: GEO_WASD_5.api.get("a"),
        s: GEO_WASD_5.api.get("s"),
        d: GEO_WASD_5.api.get("d"),
        mitte: GEO_WASD_5.api.get("x"), // x = WORK, Mann!
      };
    },

    // HALT, Mann! Wie BUND, Mann!
    halt() {
      const alle = GEO_WASD_5.api.alle();
      const ok = alle.w.wert === 92 && alle.a.wert === 62 && alle.s.wert === 81 && alle.d.wert === 95;
      return { halt: ok ? "ZIEL" : "OFFEN", respo: "GEO WASD", souveran: true };
    },

    // 5 Zapfe → Pentagramm → Prismaticum, Mann! Aus stimme.js, Mann!
    prismaticum() {
      return ["ROT", "ORANGE", "GELB", "GRÜN", "BLAU", "VIOLETT"];
    }
  }
};

// So, Mann! Souverän, Mann!
// GEO_WASD_5.api.get("w") → { zone: "AXIS", wert: 92, wirkung: "vor" }, Mann!
// GEO_WASD_5.api.get("W") → gleich, Mann! Groß + klein, Mann!
// GEO_WASD_5.api.get("x") → { zone: "WORK", wert: "◉", wirkung: "Mitte", tmp: 37, mnmm: 74 }, Mann!
// GEO_WASD_5.api.alle() → alle 5 Zapfe, Mann!
// GEO_WASD_5.api.halt() → { halt: "ZIEL", souveran: true }, Mann!
// GEO_WASD_5.api.prismaticum() → 6 Farben, Mann!

export default GEO_WASD_5;
