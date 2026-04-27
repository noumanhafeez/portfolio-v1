export type Review = {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating?: number; // out of 5
  avatarUrl?: string;
};

// Add new reviews here — they'll automatically appear on the site.
export const reviews: Review[] = [
  {
    name: "Jawairya Hashmi",
    role: "Senior ML Engineer",
    company: "Arbisoft",
    quote:
      "Nouman quickly ramped up on our ML stack and shipped a clean end-to-end pipeline for a real-world housing dataset. His EDA work surfaced issues we'd missed, and his code was production-ready from day one.",
    rating: 5,
  },
    {
    name: "Hassan Raza",
    role: "Senior Data Engineer",
    company: "Lahore Analytics Labs",
    quote:
      "Nouman architected robust data pipelines that turned complex, dynamic scraping needs into clean, structured datasets. His work with Selenium and Playwright was professional, reliable, and perfectly suited for our analytics engine.",
    rating: 5,
  },
  {
    name: "Sheharyar Ali",
    role: "Tech Lead",
    company: "SortUp Dev",
    quote:
      "Built our real-time BFF location feature with map integration almost single-handedly. Strong engineer who cares about performance and clean architecture across iOS and Android.",
    rating: 5,
  },
  {
    name: "Sarah Khan",
    role: "Product Manager",
    company: "Upwork Client",
    quote:
      "Delivered a polished React Native app on time and well under budget. Communication was excellent and he proactively suggested improvements to both UX and our Firebase data model.",
    rating: 5,
  },
];