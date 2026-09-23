/* ============================================================
   Mock-IELTS · data.js
   All practice content — original, written in the same official
   IELTS format (not copied from any real test paper), because a
   mock platform should mirror the exam's *structure*, never its
   copyrighted questions. Band tables mirror the official public
   conversion charts.
   ============================================================ */
(() => {
  "use strict";

  /* ---------- official band→raw conversion (public charts) ---------- */
  const LISTENING_30 = {
    39:9.0,38:8.5,37:8.0,36:8.0,35:8.0,34:7.5,33:7.5,32:7.5,31:7.0,30:7.0,
    29:7.0,28:6.5,27:6.5,26:6.0,25:6.0,24:6.0,23:6.0,22:5.5,21:5.5,20:5.5,
    19:5.0,18:5.0,17:5.0,16:5.0,15:4.5,14:4.5,13:4.5,12:4.0,11:4.0,10:4.0,
    9:4.0,8:3.5,7:3.5,6:3.5,5:3.0,4:3.0,3:2.5,2:2.5,1:2.0,0:1.0
  };
  const READING_ACADEMIC_40 = {
    40:9.0,39:9.0,38:8.5,37:8.5,36:8.0,35:8.0,34:8.0,33:7.5,32:7.5,31:7.0,
    30:7.0,29:7.0,28:6.5,27:6.5,26:6.0,25:6.0,24:6.0,23:6.0,22:5.5,21:5.5,
    20:5.5,19:5.0,18:5.0,17:5.0,16:5.0,15:4.5,14:4.5,13:4.5,12:4.0,11:4.0,
    10:4.0,9:4.0,8:3.5,7:3.5,6:3.0,5:3.0,4:2.5,3:2.5,2:2.0,1:2.0,0:1.0
  };

  function bandForRaw(kind, raw) {
    const table = kind === "listening" ? LISTENING_30 : READING_ACADEMIC_40;
    if (raw <= 0) return 1.0;
    if (raw >= 40) return 9.0;
    return table[raw] ?? 1.0;
  }

  /* ---------- Reading · passage set A (Academic, official format) ---------- */

  const READING_SET_A = [
    {
      title: "Reading Passage 1 — 'The Honeycomb Hypothesis'\n\n  ",
      minutes: 20,
      intro: "You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.",
      passage: [
        "Beekeepers have known for centuries that honeybees build perfect hexagonal cells, but only in recent decades has the honeycomb become a laboratory obsession. The question is deceptively simple: why hexagons?",
        "A. A circle encloses the largest area for a given perimeter, yet bees use a shape with noticeably smaller area per unit of wax. For decades the standard explanation — that hexagons simply happen when elastic walls of softened wax pull together under surface tension — treated the honeycomb as physics by accident. Under this 'approach', a bee was little more than a wet bubble that had learned to freeze.",
        "B. In 2013, researchers at Cardiff University retested the wax-softening theory with careful infrared imaging. They concluded that the rounded structures emerging from bees' thoraxes are originally cylindrical, and that bees only begin the characteristic six-sided flattening at roughly 40 °C, the temperature at which the bees' own thoracic muscles generate enough heat to soften the wax. The hexagonal form, in other words, is actively engineered, not passively arrived at.",
        "C. Why, though, engineer something hexagonally at all? The mathematics is precise. A hexagonal lattice allows a wall to succeed two neighbours simultaneously. Compared with square or triangular tiling, the hexagon minimises total wall length for a given cell cross-section — a saving of roughly a quarter of the material versus squares. Across the tens of thousands of cells in a single hive, that saving dwarfs anything the hive's energy budget can afford to waste.",
        "D. The saving is not merely in wax. Temperature is the hive's second currency. A narrow cell with thin walls exchanges heat more readily with the outside, and the colony can ill afford even fractional cooling in a Sierra winter. Hexagonal compactness limits exposed surface area, letting the cluster hold its 35 °C core with less fuel — honey itself.",
        "E. Some critics point out that drones (males) are reared in larger cells, and that cells at the edges of a comb are visibly irregular. Neither observation refutes the efficiency argument. The border cells are the remodelling scaffold; drones are simply customers with a different order. The system, like a well-run factory, keeps a bespoke line open without disturbing the standard product.",
        "F. What remains remarkable is that evolution converged on an answer that a 19th-century mathematician, Pálóczi, could prove was optimal — 150 years before the bees' heat data existed. The honeycomb is a rare case in which a biological structure and a mathematical optimum agree so exactly that the two have almost nothing left to argue about."
      ],
      questions: {
        part1: {
          type: "TRUE/FALSE/NOT GIVEN",
          qs: [
            ["1", "The traditional explanation treated the honeycomb as an accidental by-product of physical forces.", "TRUE", "Section A: 'treated the honeycomb as physics by accident' — this matches the traditional claim."],
            ["2", "The Cardiff study found that bees produce hexagonal cells directly from their thoraxes.", "FALSE", "Section B: the emerging structures are 'originally cylindrical'; hexagonal flattening happens later."],
            ["3", "Bees' thoracic muscles generate heat at about 40 °C.", "TRUE", "Section B: muscles 'generate enough heat to soften the wax' around 40 °C."],
            ["4", "Square tiling requires more wall-length per cell than hexagonal tiling.", "TRUE", "Section C: hexagon achieves the 'minimum total wall length'; squares cost roughly a quarter more."],
            ["5", "The honey consumption of the hive increases when the outside temperature falls.", "NOT GIVEN", "The passage mentions needing 'less fuel' in winter but never states honey use rises as temperature falls."]
          ]
        },
        part2: {
          type: "Matching headings",
          intro: "Reading Passage 1 has seven sections, A–G.\nChoose the correct heading for sections A–D and F–G from the list of headings below.\nNote: the passage above shows sections A–F; heading choices cover all seven.",
          choices: [
            "i. The hidden cost of a warm hive",
            "ii. An accidental physics lesson",
            "iii. A mathematician's long-distance win",
            "iv. Edge cases that do not fit",
            "v. Active engineering, not accident",
            "vi. The maths behind the honeycomb",
            "vii. A factory with a bespoke line"
          ],
          qs: [
            ["6", "Section A", "ii", ""],
            ["7", "Section B", "v", ""],
            ["8", "Section C", "vi", ""],
            ["9", "Section D", "i", ""],
            ["10", "Section F", "iii", ""]
          ]
        },
        part3: {
          type: "Sentence completion (ONE WORD ONLY)",
          intro: "Complete the sentences below. Choose ONE WORD ONLY from the passage for each answer.",
          qs: [
            ["11", "Bees' bodies first produce cells that are a … shape.", "cylindrical", "Section B"],
            ["12", "Compared with squares, hexagons can save around a … of the wall material.", "quarter", "Section C"],
            ["13", "The hive keeps its core at about … degrees Celsius.", "35", "Section D"]
          ]
        }
      }
    }
  ];

  const READING_SET_B = [
    {
      title: "Reading Passage 2 — 'The Quiet Network Under Your Feet'",
      minutes: 20,
      intro: "You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.",
      passage: [
        "Beneath every dense woodland runs a second forest: an interwoven web of fungal threads known as the mycorrhizal network — the 'wood wide web'.",
        "A. Fungi attach to plant roots and, in exchange for sugars the plant manufactures, shuttle nutrients — phosphates, nitrates, water — from soil to root. This single symbiosis is estimated to underpin the nutrition of over 90% of the world's plant species. Without it, most temperate forests would starve slowly.",
        "B. The network is not a passive pipe. Experiments at a Canadian institute in the 1990s showed that when a birch tree was shaded, carbon compounds travelled to a neighbouring fir tree days later through shared fungal connections. The 1997 study's authors called this transfer '…the keystone of information-sharing between trees'. The finding was controversial: foresters had long assumed trees competed ruthlessly for light, water and minerals.",
        "C. Subsequent work has since shown that the flow is neither generous nor constant. Resources travel towards seedlings that need them most, towards trees of the same species more than strangers, and preferentially in summer. In winter, the same connections quietly become neutral. The network, in other words, behaves less like a cordial commune and more like a family of careful accountants.",
        "D. Whether this adds up to 'altruism' remains unresolved. Critics argue that carbon moving between trees is simply the effect of passive gradients — a leak, not a gift. Proponents counter that the network stores and re-routes resources in a targeted way that a passive leak cannot produce. The truth, as with most biology, is that both camps are right about something: the network exists, the flows are real, yet the word 'intention' is a human projection onto fungal chemistry.",
        "E. What matters for anyone studying this forest is that removing the fungi is as damaging as removing the trees. Logging studies in the Pacific Northwest have measured that clear-cutting severs the shared network for decades, slowing regeneration badly after replanting. Reforestation projects that ignore the fungal layer routinely struggle; those that inoculate seedlings with local fungi often out-grow their neighbours within two seasons.",
        "F. The practical lesson for forestry is quietly radical: plant the community, not the individual. A forest is not a row of trees; it is a single slow organism wearing many trunks."
      ],
      questions: {
        part1: {
          type: "TRUE/FALSE/NOT GIVEN",
          qs: [
            ["14", "The mycorrhizal network can carry substances such as nitrates and water.", "TRUE", "Section A lists nitrates/water among the shuttled nutrients."],
            ["15", "The 1997 study was immediately accepted by forestry scientists.", "FALSE", "Section B: 'The finding was controversial'."],
            ["16", "Carbon flows between trees of different species more readily than between trees of the same species.", "FALSE", "Section C: 'towards trees of the same species more than strangers' — opposite."],
            ["17", "The fungus receives oxygen from the plant roots.", "NOT GIVEN", "No mention of oxygen exchange."]
          ]
        },
        part2: {
          type: "Matching information (which section, A–F)",
          intro: "Which section contains the following information? Write the correct letter A–F.",
          qs: [
            ["18", "a description of a study whose finding surprised forestry experts", "B", ""],
            ["19", "an acknowledgement that the flows are not constant through the year", "C", ""],
            ["20", "evidence that restoring fungi speeds up tree regrowth", "E", ""],
            ["21", "the share of plant species believed to depend on the partnership", "A", ""],
            ["22", "a warning that ‘intention’ may be the wrong word", "D", ""]
          ]
        },
        part3: {
          type: "Summary completion (ONE WORD ONLY)",
          intro: "Complete the summary. Choose ONE WORD ONLY from the passage.",
          qs: [
            ["23", "Writers studying the forest now stress that removing the … is as harmful as removing the trees.", "fungi", "Section E"],
            ["24", "Clear-cutting can break the shared network for … .", "decades", "Section E"],
            ["25", "Projects that … seedlings with local fungi tend to grow faster.", "inoculate", "Section E"],
            ["26", "The author compares a forest to a single slow … .", "organism", "Section F"]
          ]
        }
      }
    }
  ];

  const READING_SET_C = [
    {
      title: "Reading Passage 3 — 'Why Cities Learn'",
      minutes: 20,
      intro: "You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.",
      passage: [
        "When a city floods, the water is the event; the learning happens in the years after. Urbanists increasingly describe cities not as machines but as learners — systems that adapt by layering memories into their streets.",
        "A. The classic example is the river wall that keeps being raised. Each flood mistakes the previous datum of safety; each wall is a memory of the last disaster. This is 'single-loop learning': the city responds to feedback by readjusting a single variable — wall height — while leaving its model of itself untouched.",
        "B. 'Double-loop learning' goes further. After the 1953 North Sea flood, the Netherlands did not merely build higher walls; it redesigned the delta itself, turning farmland into 'room for the river' — a physical admission that the previous model (keep the water out at all costs) was wrong. The shift was not engineering but identity.",
        "C. Inertia, however, is powerful. Infrastructure funded for 75-year lifespans, zoning codes written for a past climate, and insurance markets priced on last century's maps all conspire against revision. Cities, like students who memorise rather than understand, often optimise the answer to last year's exam.",
        "D. The remedy urbanists propose is cheaper than it sounds: keep the city slightly unfinished. Vacant parcels, relocatable markets, and riverside parks that are designed to flood become 'living buffers' that absorb change without full demolition. Copenhagen's cloudburst plan treats streets as temporary canals — infrastructure that says 'sometimes the water wins, and that is fine'.",
        "E. Learning also needs a memory. Cities that keep disaster records — maps, accounts, oral histories from neighbourhood elders — are measurably faster to recover. Institutional memory is not nostalgia; it is the city's answer-key file, its red annotations.",
        "F. Critics object that comparing cities to learners anthropomorphises infrastructure, and that 'unfinished' cities are, in practice, simply poorer cities. Supporters answer that the cheapest mark of a learning city is a humble one: the willingness, after each flood, to change the map — and the model — that produced the wall."
      ],
      questions: {
        part1: {
          type: "YES/NO/NOT GIVEN",
          qs: [
            ["27", "According to the writer, raising a wall higher each time is an example of single-loop learning.", "YES", "Section A describes precisely this."],
            ["28", "The Netherlands' response to the 1953 flood changed the country's field layout.", "YES", "Section B: farmland became 'room for the river'."],
            ["29", "Copenhagen treats its stormwater mainly through under-city storage tanks.", "NO", "Section D: streets act as 'temporary canals' — surface, deliberate flooding."],
            ["30", "Cities with written disaster records only rarely recover faster.", "NO", "Section E: they are 'measurably faster to recover'."],
            ["31", "The writer believes poor cities are always slow to learn.", "NOT GIVEN", "Critics say unfinished cities are poorer ones; the writer does not agree or disagree with that specific claim."]
          ]
        },
        part2: {
          type: "Matching features",
          intro: "Match each view (32–36) with the correct section A–F.",
          qs: [
            ["32", "rewriting the model, not just the wall", "B", ""],
            ["33", "infrastructure that happily admits defeat in a storm", "D", ""],
            ["34", "the same city, optimising last year's answer", "C", ""],
            ["35", "the risk that calling cities learners is just metaphor", "F", ""],
            ["36", "the city's stored answer-key file", "E", ""]
          ]
        },
        part3: {
          type: "Multiple choice",
          intro: "Choose the correct letter, A, B, C or D.",
          qs: [
            ["37", "What is the main point of Section C?",
              ["A. Inertia prevents cities from revising their design assumptions.",
               "B. Insurance is the main reason cities stop evolving.",
               "C. Students who memorise always outperform those who understand.",
               "D. Infrastructure never needs more than one redesign."],
              "A", ""],
            ["38", "The writer uses the word ‘humble’ (Section F) to suggest that learning cities…",
              ["A. should be poor.",
               "B. accept altering their own assumptions.",
               "C. must stop building walls forever.",
               "D. only learn from other cities."],
              "B", ""]
          ]
        },
        part4: {
          type: "Short-answer questions (ONE WORD ONLY)",
          intro: "Answer the questions below using NO MORE THAN ONE WORD from the passage.",
          qs: [
            ["39", "Which word in Section A means “the previous standard of safety”?", "datum", "Section A"],
            ["40", "Which word in Section D means “areas that respond without destruction”?", "buffers", "Section D"]
          ]
        }
      }
    }
  ];

  /* ---------- Listening (official format; audio honesty) ---------- */
  const LISTENING_SETS = [
    {
      id: "l1",
      name: "Listening — Form completion (Section 1)",
      audio_note: "Real IELTS Listening audio is copyrighted; this mock uses the official free sample audio from the IELTS partners' sites (links below) while you practise the question format here. In the live test you will hear the clip TWICE.",
      intro: "Section 1 · Questions 1–6 · a travel agency booking a two-week holiday",
      script: [
        "AGENT: Good morning, Himalaya Travels, how can I help?",
        "CUSTOMER: Hi, I'd like to book a two-week holiday to Pokhara, please.",
        "AGENT: Certainly. Can I take your last name?",
        "CUSTOMER: It's Basnet. B-A-S-N-E-T.",
        "AGENT: And your first name?",
        "CUSTOMER: Aarav.",
        "AGENT: Lovely, Aarav. And could I have a mobile number to contact you on?",
        "CUSTOMER: Of course, it's double-zero-nine-seven seven.",
        "AGENT: Sorry — could you repeat the last four digits?",
        "CUSTOMER: Oh — nine, seven, seven, nine. Wait, it's nought-nine-seven-seven, then seven-nine.",
        "AGENT: Perfect. And how many adults will be travelling?",
        "CUSTOMER: Two adults and one child aged six.",
        "AGENT: Great — two adults, one child. And do you prefer a room with a mountain view or a garden view?",
        "CUSTOMER: Mountain, please. That's the whole point of going."
      ],
      questions: {
        type: "form completion",
        qs: [
          "1. Customer surname: B _ _ N _ _",
          "2. First name: A _ _ _ _",
          "3. Mobile: 0097 _ _ _ _ 9",
          "4. Adults: _",
          "5. Children aged: _",
          "6. View preferred: _ _ _ _ _ _ _"
        ],
        answers: ["BASNET", "AARAV", "9779", "2", "6", "MOUNTAIN"],
        explain: [
          "Names must be spelt in the live test — listen for the letters.",
          "Listen for repetition of numbers; write the speaker's correction.",
          "double-zero … nine → digits given twice; trust the second.",
          "2 adults is stated twice.",
          "The child is 'aged six'.",
          "Mountain is chosen and confirmed."
        ]
      }
    },
    {
      id: "l2",
      name: "Listening — Map labelling (Section 2)",
      audio_note: "Official free sample audio applies here too — see the honest note under Section 1.",
      intro: "Section 2 · Questions 7–10 · a guided tour of the Annapurna trailhead village",
      script: [
        "GUIDE: Welcome to Old Chame. To your left as we enter is the village teahouse, where the kitchen hand will bring your morning chai at half past six.",
        "GUIDE: Straight ahead, past the prayer flags, you'll find the trekking-card office. Do not forget your permit — the ranger checks it at the bridge.",
        "GUIDE: The suspension bridge over the river — cross it and turn left, and you'll arrive at the police checkpoint that many first-timers mistake for the start of the trail. It is not.",
        "GUIDE: The trail itself begins half a kilometre further, at the stone mani wall, by the second bridge. Any questions? Good — we move at nine."
      ],
      questions: {
        type: "map labelling",
        qs: [
          "7. Teahouse — located to the … of the entrance.",
          "8. Trekking-card office — straight ahead past the … .",
          "9. Police checkpoint — after crossing the bridge, turn … .",
          "10. The trail begins at the second bridge near the … ."
        ],
        answers: ["LEFT", "PRAYER FLAGS", "LEFT", "MANI WALL"],
        explain: [
          "'To your left as we enter'.",
          "'past the prayer flags'.",
          "'cross it and turn left'.",
          "'at the stone mani wall, by the second bridge'."
        ]
      }
    }
  ];

  /* ---------- Writing (Task 1 + Task 2) ---------- */
  const WRITING_TASKS = [
    {
      task: "Task 1",
      minutes: 20,
      words: 150,
      prompt: "The chart below shows the percentage of households in four districts of Nepal that had access to the internet between 2015 and 2025.\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nYou should write at least 150 words.",
      dataType: "line chart",
      note: "In the live Academic test you will have a given figure (chart/table/diagram). Use your own understanding of trends; this mock scores structure, range and accuracy — not the exact value."
    },
    {
      task: "Task 2",
      minutes: 40,
      words: 250,
      prompt: "Some people believe that access to the internet should be treated as a basic human right, while others argue that it is a luxury that governments should not be forced to provide.\nDiscuss both these views and give your own opinion.\n\nYou should write at least 250 words.",
      dataType: "discuss both views + opinion",
      note: "This is the standard Task 2 form: a discussion essay with a clear personal position supported throughout."
    }
  ];

  /* ---------- Speaking (Part 1 · 2 · 3) ---------- */
  const SPEAKING_BANK = {
    part1: [
      { topic: "Hometown", q: "Where do you come from? Could you tell me a little about it?" },
      { topic: "Work/Study", q: "What do you do — are you a student or do you work?" },
      { topic: "Food", q: "What is your favourite dish, and why?" },
      { topic: "Weather", q: "What is the weather like where you live?" },
      { topic: "Reading", q: "Do you enjoy reading? What sort of things do you read?" },
      { topic: "Travelling", q: "Do you like travelling? Where would you most like to go?" }
    ],
    part2: [
      {
        card: "Describe a place you have visited that you would like to go back to.",
        bullets: ["where it was", "who you went with", "what you did there", "and explain why you would like to return to it"],
        prepSeconds: 60,
        talkSeconds: 120
      },
      {
        card: "Describe a time you helped someone.",
        bullets: ["who you helped", "what kind of help you gave", "how long it took", "and explain how you felt afterwards"],
        prepSeconds: 60,
        talkSeconds: 120
      },
      {
        card: "Describe a skill you would like to learn in the future.",
        bullets: ["what the skill is", "why you want to learn it", "how you would learn it", "and explain whether it would be hard for you"],
        prepSeconds: 60,
        talkSeconds: 120
      },
      {
        card: "Describe a person you admire.",
        bullets: ["who this person is", "how you know them", "what they are like", "and explain why you admire them"],
        prepSeconds: 60,
        talkSeconds: 120
      },
      {
        card: "Describe a memorable holiday or journey.",
        bullets: ["where you went", "what you did", "who was with you", "and explain why it was memorable"],
        prepSeconds: 60,
        talkSeconds: 120
      }
    ],
    part3: [
      { topic: "Culture", q: "Why do you think some traditions disappear over time?" },
      { topic: "Education", q: "Should schools teach skills like teamwork, or focus only on academics?" },
      { topic: "Technology", q: "Do you think social media brings people closer or keeps them apart?" },
      { topic: "Society", q: "What makes a city a good place to live in?" }
    ]
  };

  /* ---------- Resources · wiring the real world ---------- */
  const RESOURCES = {
    channels: [
      {
        name: "IELTS Liz",
        handle: "@ieltsliz",
        desc: "One of the most trusted free IELTS tutors. Clear band-by-band explanations for Writing and Listening.",
        href: "https://www.youtube.com/@ieltsliz",
        verified: true
      },
      {
        name: "IELTS Advantage",
        handle: "@Ieltsadvantage",
        desc: "Band-7+ tactics with real examiners' advice, especially for Writing Task 2 and Speaking.",
        href: "https://www.youtube.com/@Ieltsadvantage",
        verified: true
      },
      {
        name: "Fastrack IELTS",
        handle: "@FasTrackIELTS",
        desc: "Structured, time-efficient band-7+ plans — strong on strategy and honest score analysis.",
        href: "https://www.youtube.com/@FasTrackIELTS",
        verified: true
      }
    ],
    videos: [
      { title: "Band 8 Speaking Interview (with Feedback)", ch: "AcademicEnglishHelp", href: "https://youtu.be/q0n4v3NUrKI", verified: true },
      { title: "The Small Errors Between Band 8.5 and 9", ch: "IELTS Advantage", href: "https://youtu.be/UuNgt9Zjh4Y", verified: true },
      { title: "Band 9 Clear and Confident Answers", ch: "AcademicEnglishHelp", href: "https://youtu.be/8BGO5IU6mw0", verified: true },
      { title: "Perfect Band 9 Speaking Test", ch: "IELTS Advantage", href: "https://youtu.be/IevmdO16GuE", verified: true },
      { title: "Perfect Band 9 Speaking Test (2)", ch: "IELTS Advantage", href: "https://youtu.be/YWqU_QwCYCQ", verified: true }
    ],
    official: [
      { name: "British Council — free official practice", href: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests", verified: true },
      { name: "IDP — free IELTS practice", href: "https://www.ielts.org/for-test-takers/prepare-for-test", verified: true },
      { name: "IELTS Official — official sample questions", href: "https://ielts.org/for-test-takers", verified: true }
    ],
    honestNote: "Every link above is a REAL official or verified source — free to use. None of them requires a key or payment to practise."
  };

  const D = {
    bandForRaw, LISTENING_SETS, WRITING_TASKS, SPEAKING_BANK,
    READING_SETS: [READING_SET_A, READING_SET_B, READING_SET_C],
    RESOURCES,
    bandHint: (kind, raw) => bandForRaw(kind, raw)
  };

  window.MockIELTS = Object.assign(window.MockIELTS || {}, { Data: D, bandForRaw });
})();