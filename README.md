# IPL T20 Live Dashboard

A responsive dashboard application that displays real-time IPL T20 match information. The application showcases upcoming matches, live match details, and the current points table.

## Features

- Live match information with real-time updates
- Current IPL points table
- Upcoming matches schedule
- Mobile-first responsive design
- Accessible UI with ARIA attributes
- Auto-refresh functionality (30-second intervals)

## Tech Stack

- Next.js & React
- TypeScript
- Tailwind CSS
- Node.js API Routes

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Web Scraping Implementation Guide

To implement real data scraping from iplt20.com, follow these steps:

### 1. Install Required Packages

```bash
npm install cheerio axios
```

### 2. Create a Scraping Service

Replace the mock data in `api/cricket/route.ts` with actual web scraping logic:

```typescript
import axios from "axios";
import * as cheerio from "cheerio";

async function scrapeLiveMatch() {
  try {
    const response = await axios.get("https://www.iplt20.com");
    const $ = cheerio.load(response.data);

    // Example selectors (update these based on actual website structure):
    const match = {
      teams: {
        team1: $(".team1-name").text(),
        team2: $(".team2-name").text(),
      },
      score: {
        team1Score: $(".team1-score").text(),
        team2Score: $(".team2-score").text(),
      },
      // ... other match details
    };

    return match;
  } catch (error) {
    console.error("Error scraping live match:", error);
    return null;
  }
}

// Implement similar functions for points table and schedule
```

### 3. Rate Limiting and Caching

Implement rate limiting and caching to avoid excessive requests:

```typescript
import { Redis } from "ioredis";

const CACHE_TTL = 30; // seconds
const redis = new Redis(process.env.REDIS_URL);

async function getCachedData(key: string) {
  const cached = await redis.get(key);
  return cached ? JSON.parse(cached) : null;
}

async function setCachedData(key: string, data: any) {
  await redis.setex(key, CACHE_TTL, JSON.stringify(data));
}
```

### 4. Error Handling

- Implement retry logic for failed requests
- Fall back to cached data when scraping fails
- Monitor for changes in website structure

### 5. Legal Considerations

- Review iplt20.com's terms of service and robots.txt
- Implement proper request headers and delays
- Consider obtaining official API access if available

## Best Practices

1. **Rate Limiting:**

   - Implement exponential backoff for failed requests
   - Respect robots.txt directives
   - Use appropriate request delays

2. **Data Validation:**

   - Validate scraped data against TypeScript interfaces
   - Implement fallback values for missing data
   - Log validation errors for monitoring

3. **Monitoring:**

   - Track scraping success rates
   - Monitor for changes in website structure
   - Set up alerts for persistent failures

4. **Maintenance:**
   - Regularly update selectors if website structure changes
   - Maintain documentation of scraping logic
   - Keep dependencies updated

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
