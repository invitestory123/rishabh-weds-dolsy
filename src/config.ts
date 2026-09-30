// ─────────────────────────────────────────────────────────────
//  WEDDING CONFIG — Rishabh & Dolsy Wedding Celebrations
// ─────────────────────────────────────────────────────────────

export interface TimelineEvent {
  time: string;
  title: string;
  location: string;
  attire?: string;
  note?: string;
}

export interface TimelineDay {
  day: string;
  date: string;
  dayName: string;
  events: TimelineEvent[];
}

export interface SignatureEvent {
  id: string;
  name: string;
  tagline?: string;
  quote?: string;
  date: string;
  dayLabel: string;
  dayNum: string;
  monthLabel: string;
  time: string;
  venue: string;
  attire: string;
  note: string;
  icon: "utensils" | "sparkles" | "sun" | "heart" | "bell";
  accentColor: string;
}

export const wedding = {
  bride: "Dolsy",
  groom: "Rishabh",
  brideFull: "Dolsy Arora",
  groomFull: "Rishabh Gulati",

  // Family details
  groomGrandparents: "Grandson of Late Smt. Leela & Late Sh. Ishwar Datt Gulati",
  groomParents: "Son of Smt. Lalita & Sh. Kailash Gulati",
  brideGrandparents: "Granddaughter of Late Smt. Raj Rani Arora & Sh. Harbans Lal Arora",
  brideParents: "Daughter of Smt. Sunita & Sh. Sanjeev Arora",

  hashtag: "#RishabhWedsDolsy",
  monogram: "R · D",

  // Wedding muhurat / Baraat countdown target: 7th December 2026, 7:00 PM IST
  dateISO: "2026-12-07T19:00:00+05:30",
  dateRange: "6th – 7th December 2026",
  dateLabel: "6th & 7th December 2026",
  timeLabel: "Wedding Celebrations · Neemrana",

  venue: {
    name: "Lal Vilas",
    city: "Neemrana, Rajasthan",
    address: "Lal Vilas, NH-48, Delhi-Jaipur Highway, Neemrana, Rajasthan 301705",
    mapsQuery: "Lal Vilas Resort Neemrana Rajasthan",
  },

  verse: {
    hindi: "॥ श्री गणेशाय नमः ॥",
    text: "Together with their beloved families, Rishabh and Dolsy request the honour of your presence and blessings as they embark on this eternal journey of love and togetherness under the royal skies.",
  },

  // Highlight Signature Events
  events: [
    {
      id: "welcome-lunch",
      name: "Welcome Lunch",
      tagline: "Padharo Mhare Desh",
      quote: "A warm Rajasthani greeting, refreshing treats, and joyous reunions.",
      date: "Sunday, 6th December 2026",
      dayLabel: "Sunday",
      dayNum: "06",
      monthLabel: "December 2026",
      time: "1:00 PM Drinks · 2:00 PM Lunch Onwards",
      venue: "Rajwada Restaurant, Lal Vilas",
      attire: "Smart Casuals / Festive Daywear",
      note: "Welcome drinks kickstart at 1:00 PM followed by a royal feast at 2:00 PM.",
      icon: "utensils",
      accentColor: "#f6c374",
    },
    {
      id: "sagan-cocktail",
      name: "Sagan, Cocktail & Engagement",
      tagline: "Cheers to Love",
      quote: "Raise a glass, add a little sparkle, and celebrate the beginning of our forever.",
      date: "Sunday, 6th December 2026",
      dayLabel: "Sunday",
      dayNum: "06",
      monthLabel: "December 2026",
      time: "7:00 PM Onwards",
      venue: "Lawn 1, Lal Vilas",
      attire: "Blingy ✨ (Glamorous, Shimmer & Sequins)",
      note: "Sagan ceremony, romantic ring exchange, soulful music, dinner, and cocktails under the stars.",
      icon: "sparkles",
      accentColor: "#eeb2c0",
    },
    {
      id: "haldi",
      name: "Haldi Ceremony",
      tagline: "Golden Hour Vibes",
      quote: "Sunshine, masti, and memories before the big day.",
      date: "Monday, 7th December 2026",
      dayLabel: "Monday",
      dayNum: "07",
      monthLabel: "December 2026",
      time: "12:00 PM (Lunch)",
      venue: "Pool Side, Lal Vilas",
      attire: "Shades of Pink 🌸 (Pastels & Vibrant Pinks)",
      note: "Turmeric glow, cheerful splashing, dhol beats, and floral blessings by the poolside.",
      icon: "sun",
      accentColor: "#f9a8d4",
    },
    {
      id: "wedding",
      name: "Vivah Sanskar (The Royal Wedding)",
      tagline: "Forever Begins Here",
      quote: "A celebration of love, family, and the beginning of forever.",
      date: "Monday, 7th December 2026",
      dayLabel: "Monday",
      dayNum: "07",
      monthLabel: "December 2026",
      time: "7:00 PM Baraat · 8:00 PM Jaimala · 8:30 PM Dinner",
      venue: "Lawn 2 (Baraat assembly: Mandir at Hotel)",
      attire: "Traditional Royal Indian 👑",
      note: "Ghoor Chari at 6 PM, Baraat Procession from Mandir at 7 PM, Jaimala at 8 PM, Grand Feast, and Doli Taaro Ki Chhaon Mein.",
      icon: "heart",
      accentColor: "#e2c88f",
    },
  ] as SignatureEvent[],

  // Detailed Day-by-Day Timeline
  timelineDays: [
    {
      day: "Day 1",
      date: "6th December 2026",
      dayName: "Sunday",
      events: [
        {
          time: "01:00 PM",
          title: "Welcome Drinks",
          location: "Rajwada Courtyard",
          note: "A royal reception to greet all guests arriving at Lal Vilas.",
        },
        {
          time: "02:00 PM onwards",
          title: "Pre-Wedding Welcome Lunch",
          location: "Rajwada Restaurant",
          note: "Delicious traditional delicacies and warm family reunions.",
        },
        {
          time: "07:00 PM onwards",
          title: "Sagan, Engagement & Cocktail — 'Cheers to Love'",
          location: "Lawn 1",
          attire: "Blingy ✨",
          note: "Ring exchange, dazzling performances, DJ night, cocktails & dinner.",
        },
      ],
    },
    {
      day: "Day 2",
      date: "7th December 2026",
      dayName: "Monday",
      events: [
        {
          time: "08:00 AM onwards",
          title: "Morning Breakfast",
          location: "Rajwada Restaurant",
          note: "Energize for the auspicious wedding festivities.",
        },
        {
          time: "10:00 AM",
          title: "Gharoli Ceremony",
          location: "Hotel Premises",
          note: "Sacred bathing water procession with hymns and rituals.",
        },
        {
          time: "12:00 PM",
          title: "Haldi Ceremony — 'Golden Hour Vibes'",
          location: "Pool Side",
          attire: "Shades of Pink 🌸",
          note: "Golden turmeric, floral shower, foot-tapping beats & lunch.",
        },
        {
          time: "03:00 PM",
          title: "Choora Ceremony",
          location: "Hotel Suite",
          note: "Auspicious red choora and glittering kaleere blessings.",
        },
        {
          time: "06:00 PM",
          title: "Ghoor Chari",
          location: "Hotel Courtyard",
          note: "The groom prepares for the grand procession with family rituals.",
        },
        {
          time: "07:00 PM",
          title: "Procession of Baraat",
          location: "Mandir at Hotel",
          note: "High-energy dhol, band, dancing, and royal baraat arrival.",
        },
        {
          time: "08:00 PM",
          title: "Jaimala Ceremony",
          location: "Lawn 2 Grand Stage",
          note: "The majestic garland exchange ceremony under firecrackers & petals.",
        },
        {
          time: "08:30 PM onwards",
          title: "Royal Dinner & Sacred Pheras — 'Forever Begins Here'",
          location: "Lawn 2",
          attire: "Traditional 👑",
          note: "Seven sacred vows around the holy agni and celebratory dinner banquet.",
        },
        {
          time: "Late Night",
          title: "Doli Taaro Ki Chhaon Mein",
          location: "Lawn 2",
          note: "An emotional, star-studded farewell as Dolsy steps into her new life.",
        },
      ],
    },
    {
      day: "Day 3",
      date: "8th December 2026",
      dayName: "Tuesday",
      events: [
        {
          time: "08:00 AM onwards",
          title: "Farewell Breakfast & Warm Send-Off",
          location: "Rajwada Restaurant",
          note: "A sweet conclusion to an unforgettable celebration with cherished memories.",
        },
      ],
    },
  ] as TimelineDay[],

  // Gallery of Rishabh & Dolsy
  gallery: [
    {
      src: "/assets/rishabh-dolsy-proposal.jpg",
      title: "The Dream Proposal",
      caption: "Down on one knee, asking for a lifetime of hand-in-hand adventures.",
      aspect: "portrait",
    },
    {
      src: "/assets/rishabh-dolsy-rings.jpg",
      title: "Sealed With A Ring",
      caption: "Surrounded by confetti, sparkling smiles, and forever promises.",
      aspect: "landscape",
    },
    {
      src: "/assets/rishabh-dolsy-dance.jpg",
      title: "Our First Dance",
      caption: "Lost in the rhythm of the moment, holding each other close.",
      aspect: "portrait",
    },
    {
      src: "/assets/rishabh-dolsy-portrait.jpg",
      title: "Smiles for a Lifetime",
      caption: "Two hearts beating as one, ready for forever.",
      aspect: "portrait",
    },
    {
      src: "/assets/rishabh-dolsy-fountain.jpg",
      title: "Under The Midnight Lights",
      caption: "Whispers of love by the glowing fountains under the starlight.",
      aspect: "portrait",
    },
  ],

  sections: {
    events: true,
    timeline: true,
    gallery: true,
    venue: true,
    countdown: true,
  },
};

// Google Calendar deep link
export const googleCalendarUrl = () => {
  const start = new Date(wedding.dateISO);
  const end = new Date(start.getTime() + 10 * 60 * 60 * 1000); // 10 hours for evening celebration
  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]|\.\d{3}/g, "").slice(0, 15) + "Z";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${wedding.groom} & ${wedding.bride}'s Wedding`,
    dates: `${fmt(start)}/${fmt(end)}`,
    details: `${wedding.venue.name} — ${wedding.venue.address}. Forever begins here! ${wedding.hashtag}`,
    location: `${wedding.venue.name}, ${wedding.venue.city}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

// Downloadable .ics file
export const downloadICS = () => {
  const start = new Date(wedding.dateISO);
  const end = new Date(start.getTime() + 10 * 60 * 60 * 1000);
  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:.]/g, "").slice(0, 15) + "Z";
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//InviteStory//Wedding//EN",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@invitestory`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:${wedding.groom} & ${wedding.bride}'s Wedding`,
    `DESCRIPTION:${wedding.venue.name} — ${wedding.venue.address}. ${wedding.hashtag}`,
    `LOCATION:${wedding.venue.name}\\, ${wedding.venue.city}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${wedding.groom}-${wedding.bride}-wedding.ics`;
  a.click();
  URL.revokeObjectURL(url);
};

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  wedding.venue.mapsQuery
)}&output=embed`;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  wedding.venue.mapsQuery
)}`;