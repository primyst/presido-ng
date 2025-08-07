import { Scenario } from "../types";

export const scenarios: Scenario[] = [
  {
    id: 1,
    description: "A drought has reduced your water supply. What will you do?",
    choices: [
      {
        text: "Ration the water supply",
        effects: {
          water: -20,
          food: -10,
          medicine: 0,
          energy: 0,
          money: 0,
        },
      },
      {
        text: "Buy water from neighboring town",
        effects: {
          water: +30,
          food: 0,
          medicine: 0,
          energy: 0,
          money: -100,
        },
      },
    ],
  },
  {
    id: 2,
    description: "An illness outbreak is spreading. What's your decision?",
    choices: [
      {
        text: "Distribute free medicine",
        effects: {
          water: 0,
          food: 0,
          medicine: -20,
          energy: 0,
          money: -150,
        },
      },
      {
        text: "Charge citizens for medicine",
        effects: {
          water: 0,
          food: 0,
          medicine: -10,
          energy: 0,
          money: +100,
        },
      },
    ],
  },
  {
    id: 3,
    description: "Your energy plants are aging. How do you respond?",
    choices: [
      {
        text: "Upgrade to solar energy",
        effects: {
          water: 0,
          food: 0,
          medicine: 0,
          energy: +50,
          money: -200,
        },
      },
      {
        text: "Keep current system running",
        effects: {
          water: 0,
          food: 0,
          medicine: 0,
          energy: -10,
          money: 0,
        },
      },
    ],
  },
];
