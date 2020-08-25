export interface DisorderCardData {
  name: string;
  cardText: {disorderPageText: string}[];
}

export const disordersBaseGame: DisorderCardData[] = [
   {
    name: "Aichmophobia",
    cardText: [
     
     {
      disorderPageText: "Sharp things make you uncomfortable. It's just a matter of time before someone cuts themselves."
     },
     {
      disorderPageText: "You cannot activate or depart with axes, swords, spears, daggers, scythes, or katars in your gear grid."
     }
    ]
   },
   {
    name: "Anxiety",
    cardText: [
     
     {
      disorderPageText: "You are afraid of being afraid. You're a nervous wreck, and monsters can smell this in your scent."
     },
     {
      disorderPageText: "At the start of each showdown, gain the priority target token unless you have stinky gear in your gear grid."
     }
    ]
   },
   {
    name: "Apathetic",
    cardText: [
     
     {
      disorderPageText: "You've given up. Nothing seems to matter. You have no concern for your own wellbeing."
     },
     {
      disorderPageText: "You cannot use or gain survival.\nYou cannot gain courage.\n Cure this disorder if you have 8+ understanding."
     }
    ]
   },
   {
    name: "Binge Eating",
    cardText: [
     {
      disorderPageText: "Eating is the only thing that helps you escape your miserable life."
     },
     {
      disorderPageText: "You cannot depart unless you have consumable gear in your gear grid. \n You must consume if a choice to consume arises."
     }
    ]
   },
   {
    name: "Coprolalia",
    cardText: [
     
     {
      disorderPageText: "You have compulsive tics in the form of sporadic muttering, cursing,whimpering, and screaming."
     },
     {
      disorderPageText: "All your gear is noisy.\nYou are always a threat unless you are knocked down, even if an effect says otherwise."
     }
    ]
   },
   {
    name: "Fear of the Dark",
    cardText: [
     {
      disorderPageText: "You cannot bear the oppressive darkness any longer."
     },
     {
      disorderPageText: "You retire. \n If you gain this disorder during a hunt or showdown, you put on a brave face until you return to the settlement, vowing never to leave the Lantern Hoard again."
     }
    ]
   },
   {
    name: "Hemophobia",
    cardText: [
     
     {
      disorderPageText: "The mere sight of blood makes you lightheaded, and serious gore can knock you out!"
     },
     {
      disorderPageText: "During the showdown, whenever a survivor (including you) gains a bleeding token, you are knocked down."
     }
    ]
   },
   {
    name: "Hoarder",
    cardText: [
     {
      disorderPageText: "You compulsively collect and stash anything you can get your hands on. Every little bit you add to your secret hoard makes your existence feel more real."
     },
     {
      disorderPageText: "Whenever you are a returning survivor, archive 1 resource gained from the last showdown and gain +1 courage."
     }
    ]
   },
   {
    name: "Honorable",
    cardText: [
     {
      disorderPageText: "You believe in honor and fairness when conducting yourself on the battlefield. It is these strong principles that have kept you alive, and you will not abandon them under any circumstances."
     },
     {
      disorderPageText: "You cannot attack a monster from its blind spot or if it is knocked down."
     }
    ]
   },
   {
    name: "Hyperactive",
    cardText: [
     {
      disorderPageText: "Whether you are running, fiddling with your gear, or pacing, you are always moving."
     },
     {
      disorderPageText: "During the showdown, you must move at least 1 space every round."
     }
    ]
   },
   {
    name: "Immortal",
    cardText: [
     {
      disorderPageText: "You are immortal! You will live forever and cannot be killed."
     },
     {
      disorderPageText: "While you are insane, convert all damage dealt to your hit locations to brain damage. \n You are so busy reveling in your own glory that you cannot spend survival while insane."
     }
    ]
   },
   {
    name: "Indecision",
    cardText: [
     {
      disorderPageText: "Past decisions haunt you ceaselessly. You are crippled by indecision, and even the most trivial choices grip you with terror."
     },
     {
      disorderPageText: "If you are the event revealer of hunt events that call on you to make a roll, roll twice and use the lower result."
     }
    ]
   },
   {
    name: "Monster Panic",
    cardText: [
     {
      disorderPageText: "Monsters make you feel bad. Really, really bad."
     },
     {
      disorderPageText: "Whenever you suffer brain damage from an intimidate action, suffer 1 additional brain damage."
     }
    ]
   },
   {
    name: "Post-Traumatic Stress",
    cardText: [
     {
      disorderPageText: "The last hunt was harrowing. All you can do is cower and relive the trauma. Only time can heal your wounds."
     },
     {
      disorderPageText: "Next settlement phase, you do not contribute or participate in any endeavors.\nSkip the next hunt to recover.[1]"
     }
    ]
   },
   {
    name: "Prey",
    cardText: [
     
     {
      disorderPageText: "You are prey. All there is for you is death."
     },
     {
      disorderPageText: "You may not spend survival unless you are insane."
     }
    ]
   },
   {
    name: "Quixotic",
    cardText: [
     
     {
      disorderPageText: "You carry the weight of your settlement on your shoulders. Everyone is counting on you to save them, and you will rise to the challenge."
     },
     {
      disorderPageText: "If you are insane when you depart, gain +1 survival and +1 strength token."
     }
    ]
   },
   {
    name: "Rageholic",
    cardText: [
     
     {
      disorderPageText: "Your rage boils out of control, causing you to see red at the slightest provocation."
     },
     {
      disorderPageText: "Whenever you suffer a severe injury, also suffer the frenzy brain trauma."
     }
    ]
   },
   {
    name: "Secretive",
    cardText: [
     
     {
      disorderPageText: "You love secrets. So much, in fact, that you pretend to have many."
     },
     {
      disorderPageText: "When you are a returning survivor, you quickly become preoccupied with your own affairs. You must skip the next hunt to deal with them."
     }
    ]
   },
   {
    name: "Seizures",
    cardText: [
     
     {
      disorderPageText: "Lingering damage from your head injuries has caused you to experience periods of uncontrollable shaking and absence of thought."
     },
     {
      disorderPageText: "During the showdown, whenever you suffer damage to your head location, you are knocked down."
     }
    ]
   },
   {
    name: "Squeamish",
    cardText: [
     
     {
      disorderPageText: "You can't handle bad smells."
     },
     {
      disorderPageText: "You cannot depart with any stinky gear in your gear grid. If a status or effect would cause you to become stinky, lose all your survival."
     }
    ]
   },
   {
    name: "Traumatized",
    cardText: [
     
     {
      disorderPageText: "Your experiences have left you shaken and paralyzed by fear."
     },
     {
      disorderPageText: "Whenever you end your act adjacent to a monster, you are knocked down."
     }
    ]
   },
   {
    name: "Vestiphobia",
    cardText: [
     
     {
      disorderPageText: "Even the lightest armor rubs harshly against your skin and constricts your ability to move."
     },
     {
      disorderPageText: "You cannot wear armor at the body location. If you are wearing armor at the body location when you gain this disorder, archive it as you tear it off your person!"
     }
    ]
   },
   {
    name: "Weak Spot",
    cardText: [
     {
      disorderPageText: "You have an imaginary infirmity."
     },
     {
      disorderPageText: "When you gain this disorder, roll a random hit location and record it. You cannot depart unless you have armor at this hit location."
     }
    ]
   }
  ]
 