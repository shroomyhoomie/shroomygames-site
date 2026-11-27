/* ============================================================
   COPPER & CURIOS: player-facing campaign data
   Everything in this file is PUBLIC. No DM secrets in here!
   Edit this file to update the job board, party, log and schedule.
   ============================================================ */

window.CAMPAIGN = {
  title: "Copper & Curios",
  group: "Critical Company",
  tagline: "A D&D 5e adventure for brand new heroes",
  pitch: "Hollowmere is a sleepy lakeside town where the fish are fat, the bread is warm and nothing exciting ever happens. Lately, though, something small and scaly has been raiding the mill at night, strange lights drift under the lake, and a very odd wizard has bought the crooked tower on the hill. The town needs help. The job board is full.",

  // Next session: update after each session. at = local date and time "YYYY-MM-DDTHH:MM" (powers the countdown and calendar buttons)
  next: { at: "2026-12-05T18:00", when: "Saturday, December 5 at 6pm", where: "TBD", what: "Session Zero: make characters, then your first evening in Hollowmere" },

  // ---------- CALENDAR ----------
  // Saved copy of the calendar. The DM kit's Live Board edits the live one. date "YYYY-MM-DD", time "18:00" (leave out for all day)
  // kind: "session" or "event". The Next session banner shows on the calendar on its own.
  events: [],

  // ---------- JOB BOARD ----------
  // status: "open", "taken" or "done". danger: 0 (safe) to 3 (deadly-ish)
  // wizard: true gives it the purple paper
  jobs: [
    { id: "rats", title: "RATS! In My Cellar!!", from: "Bertha Plum, The Sleeping Drake tavern", reward: "5 gold each + free supper", danger: 1, status: "open",
      text: "Something is gnawing through my cider barrels and it is NOT the cat. Brave souls wanted. Bring a broom. Or a sword. Probably a sword." },
    { id: "grain", title: "Grain Thieves", from: "Tobin Ashgrove, Millbrook Mill", reward: "25 gold", danger: 2, status: "open",
      text: "Three nights now, sacks of grain gone. Tiny claw prints in the flour, leading up the old road toward the Copper Mine. I'm a miller, not a monster hunter. Please help." },
    { id: "bridge", title: "Toll Trouble at Millbrook Bridge", from: "Warden Hask, Hollowmere Watch", reward: "40 gold", danger: 2, status: "open",
      text: "A gang of 'toll collectors' has taken the bridge and is charging travelers a silver to cross. The town never approved any toll. Persuade them to leave, or make them." },
    { id: "glowcaps", title: "Glowcaps Needed", from: "Wren Thistlewood, Herbalist", reward: "15 gold + a healing potion", danger: 2, status: "open",
      text: "I need a basket of glowcap mushrooms from the fairy ring past the orchard. They only shine at dusk. Warning: some of the mushrooms out there scream. Do not touch the purple ones." },
    { id: "orchard", title: "Bloodsuckers in the Orchard", from: "Gemma Bramble, Bramblewick Orchard", reward: "20 gold + a barrel of cider", danger: 1, status: "open",
      text: "Some flappy, pointy-nosed pests are draining my goats and my pickers. They come out at sundown. Bring torches and long sleeves." },
    { id: "dog", title: "LOST: One Very Good Dog", from: "Pip (age 9)", reward: "My best rock and a hug", danger: 0, status: "open",
      text: "His name is Biscuit. He is brown and round and he snores. He ran toward the Gloomfen after a frog. PLEASE find him. The rock is very good." },
    { id: "lighthouse", title: "The Light at Lantern Point Went Out", from: "Harbormaster Odile Grey", reward: "60 gold", danger: 3, status: "open",
      text: "The lighthouse keeper hasn't been seen in a week and the lamp is dark. Fishermen say they've seen shadows moving up there that don't belong to anyone. Experienced adventurers only." },
    { id: "collector", title: "Assistants Wanted for a Distinguished Collector", from: "Archmagister Quillibus Vane, The Curio Spire", reward: "100 gold per curiosity", danger: "?", status: "open", wizard: true,
      text: "Discreet, capable individuals sought for the retrieval of rare curiosities. Strange objects, ancient trinkets, anything that glows. No questions asked, no questions answered. Apply in person at the Curio Spire. Please wipe your feet." }
  ],

  // ---------- PARTY ----------
  // Fill these in at Session Zero. icon: any name from icons.js (hood, shield, wizard-staff, crossed-swords, mailed-fist, open-book, ...)
  party: [
    { name: "Hero One", race: "?", cls: "?", level: 1, icon: "crossed-swords", blurb: "Created at Session Zero.", link: "" },
    { name: "Hero Two", race: "?", cls: "?", level: 1, icon: "shield", blurb: "Created at Session Zero.", link: "" },
    { name: "Hero Three", race: "?", cls: "?", level: 1, icon: "hood", blurb: "Created at Session Zero.", link: "" },
    { name: "Hero Four", race: "?", cls: "?", level: 1, icon: "wizard-staff", blurb: "Created at Session Zero.", link: "" }
  ],

  // ---------- MAP ----------
  places: [
    { id: "town", name: "Hollowmere", x: 485, y: 318, text: "A cozy lakeside town of fishers, bakers and gossips. Everyone knows everyone, and everyone has an opinion about the new wizard." },
    { id: "drake", name: "The Sleeping Drake", x: 560, y: 380, below: true, text: "The town's tavern, run by Bertha Plum. Warm fire, strong cider, and the job board by the door." },
    { id: "lake", name: "Hollow Lake", x: 330, y: 420, text: "Deep, cold and very still. Fishermen swear the water is warm in the middle, even in winter." },
    { id: "mine", name: "Old Copper Mine", x: 700, y: 190, text: "Closed for fifty years after the miners said the walls were 'breathing'. Lately someone has been digging there again." },
    { id: "mill", name: "Millbrook Mill & Bridge", x: 670, y: 428, below: true, text: "Tobin's mill and the stone bridge where the road leaves town." },
    { id: "orchard", name: "Bramblewick Orchard", x: 250, y: 240, text: "Apple trees, goats and the best cider in the valley." },
    { id: "ring", name: "Fairy Ring Glade", x: 140, y: 150, text: "A circle of glowing mushrooms in a mossy clearing. Some of them are rude." },
    { id: "fen", name: "Gloomfen", x: 170, y: 470, text: "A foggy marsh full of frogs, reeds and strange floating lights." },
    { id: "lighthouse", name: "Lantern Point", x: 90, y: 330, text: "A lighthouse on the rocky point. Its lamp has gone dark." },
    { id: "spire", name: "The Curio Spire", x: 500, y: 140, below: true, text: "A crooked, floating tower on the hill above town. It appeared overnight last spring. The wizard inside collects 'curiosities'." }
  ],

  // ---------- ADVENTURE LOG ----------
  // Newest first. Add a recap after each session.
  log: [
    { n: 0, title: "Session Zero", date: "Coming soon", text: "Heroes will be made. Dice will be rolled. Cider will be spilled." }
  ],

  // ---------- HOUSE RULES ----------
  rules: [
    "Drinking a potion is a bonus action. Feeding one to a friend takes your action.",
    "Critical hits: roll your damage dice, then add the maximum of those dice on top.",
    "We level up together at big story moments (no XP math).",
    "Not sure what to do? Describe what your character wants and we'll figure out the roll together."
  ]
};
