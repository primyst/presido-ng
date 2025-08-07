export type GameEvent = {
  id: string;
  title: string;
  description: string;
  options: {
    text: string;
    effects: {
      approval?: number;
      economy?: number;
      security?: number;
      funds?: number;
      corruption?: number;
    };
  }[];
};

export const events: GameEvent[] = [
  {
    id: "asuu-strike",
    title: "ASUU Strike",
    description: "University lecturers have shut down campuses nationwide. They're demanding better funding and salary structure.",
    options: [
      { text: "Negotiate with ASUU", effects: { approval: +10, economy: -5, funds: -15 } },
      { text: "Ignore them", effects: { approval: -15, security: -5 } },
      { text: "Send court order", effects: { approval: -5, security: +3 } },
    ],
  },
  {
    id: "fuel-subsidy",
    title: "Fuel Subsidy Crisis",
    description: "Fuel subsidy is draining government funds. Citizens are already complaining of high fuel prices.",
    options: [
      { text: "Remove subsidy", effects: { approval: -10, economy: +10, funds: +25 } },
      { text: "Keep subsidy", effects: { approval: +10, economy: -10, funds: -30 } },
      { text: "Partial removal", effects: { approval: -5, economy: +5, funds: -10 } },
    ],
  },
  {
    id: "efcc-minister",
    title: "Minister Caught by EFCC",
    description: "Your Minister of Works was caught with ₦2B in an offshore account. The media is on fire.",
    options: [
      { text: "Fire and prosecute him", effects: { approval: +8, corruption: -10 } },
      { text: "Defend him publicly", effects: { approval: -10, corruption: +15 } },
      { text: "Delay the investigation", effects: { approval: -5, corruption: +5 } },
    ],
  },
  {
    id: "national-grid-collapse",
    title: "National Grid Collapse",
    description: "The grid has collapsed again, causing a nationwide blackout. Citizens are furious.",
    options: [
      { text: "Approve ₦500B for power sector", effects: { economy: +10, funds: -30 } },
      { text: "Privatize fully", effects: { economy: +5, approval: -5 } },
      { text: "Blame previous government", effects: { approval: -10 } },
    ],
  },
  {
    id: "banditry-northwest",
    title: "Banditry in Northwest",
    description: "Bandits kidnapped 150 villagers in Zamfara. People demand protection.",
    options: [
      { text: "Deploy military", effects: { security: +10, funds: -20 } },
      { text: "Negotiate with leaders", effects: { security: +5, approval: +5, funds: -10 } },
      { text: "Issue statement only", effects: { approval: -15, security: -10 } },
    ],
  },
  {
    id: "naira-fall",
    title: "Naira Falls Again",
    description: "The Naira just hit ₦2000/$1. Inflation is skyrocketing, and people are panicking.",
    options: [
      { text: "Float the currency", effects: { economy: +10, approval: -5 } },
      { text: "Ban crypto and Forex trading", effects: { approval: -10, economy: -5 } },
      { text: "Call for economic summit", effects: { approval: +5, economy: +2, funds: -5 } },
    ],
  },
  {
    id: "tribal-appointments",
    title: "Tribal Appointments",
    description: "Critics are accusing your cabinet of lacking ethnic balance.",
    options: [
      { text: "Reshuffle cabinet fairly", effects: { approval: +10 } },
      { text: "Defend your decisions", effects: { approval: -5 } },
      { text: "Ignore the critics", effects: { approval: -10 } },
    ],
  },
  {
    id: "youth-protest",
    title: "Youth Protest Brewing",
    description: "Online campaigns are trending: #ReformPolice #EndInjustice. It could lead to street protests.",
    options: [
      { text: "Engage youth leaders", effects: { approval: +8, security: +5 } },
      { text: "Shut down the protest", effects: { approval: -15, security: -5 } },
      { text: "Deploy police early", effects: { security: +3, approval: -10 } },
    ],
  },
  {
    id: "foreign-loan",
    title: "Foreign Loan Proposal",
    description: "Your finance team wants to borrow $2B from China for infrastructure.",
    options: [
      { text: "Approve loan", effects: { economy: +10, funds: +20, corruption: +5 } },
      { text: "Reject loan", effects: { economy: -5 } },
      { text: "Seek local funding", effects: { economy: +5, funds: +5 } },
    ],
  },
  {
    id: "asylum-controversy",
    title: "Asylum for Politician",
    description: "A former Nigerian governor wanted for fraud is seeking asylum abroad. Media is watching.",
    options: [
      { text: "Condemn and request extradition", effects: { approval: +10, corruption: -5 } },
      { text: "Stay silent", effects: { approval: -10 } },
      { text: "Defend him as a political victim", effects: { approval: -15, corruption: +10 } },
    ],
  },
];
