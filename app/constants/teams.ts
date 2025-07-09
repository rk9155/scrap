export const teams = {
  "Chennai Super Kings": {
    shortName: "CSK",
    color: "#FFFF3C",
    textColor: "#000000",
    logo: "/team-logos/csk.png",
  },
  "Mumbai Indians": {
    shortName: "MI",
    color: "#004BA0",
    textColor: "#FFFFFF",
    logo: "/team-logos/mi.png",
  },
  "Royal Challengers Bangalore": {
    shortName: "RCB",
    color: "#EC1C24",
    textColor: "#FFFFFF",
    logo: "/team-logos/rcb.png",
  },
  "Rajasthan Royals": {
    shortName: "RR",
    color: "#254AA5",
    textColor: "#FFFFFF",
    logo: "/team-logos/rr.png",
  },
  "Delhi Capitals": {
    shortName: "DC",
    color: "#0078BC",
    textColor: "#FFFFFF",
    logo: "/team-logos/dc.png",
  },
  "Kolkata Knight Riders": {
    shortName: "KKR",
    color: "#3B215D",
    textColor: "#FFFFFF",
    logo: "/team-logos/kkr.png",
  },
} as const;

export type TeamName = keyof typeof teams;
