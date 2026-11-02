# AMY MILITO COLLECTION

Next.js App Router, TypeScript and Tailwind CSS boutique showcase with product enquiries.

## Run and build
Use Node.js 20.9 or newer. Run `npm ci`, then `npm run dev` and open http://127.0.0.1:3000. Run `npm run build` for the static production export in `out/`. Deploy `out/` to static hosting. No cart, payments, accounts or backend is required.

## Editing content
- `components/Catalog.tsx`: 15 bag photographs and 14 shoe photographs, descriptive display names and category filters. Photographs are in `public/images/bags/` and `public/images/shoes/`, in attachment order.
- `components/content.ts`: email, directions, social profile URLs and CEO quote.
- `app/page.tsx`: home, About Us with CEO portrait and quote, services, FAQs and contact.
- `public/images/ceo-portrait.webp`: owner-supplied CEO portrait beside the quote.
- `app/globals.css`: boutique styling and responsive layouts.
- Existing collection, services and contact routes remain supported.

All catalogue and portrait images are owner-supplied photographs encoded as WebP without cropping or visual retouching. Display names describe visible features; they do not assert materials, designer affiliation, prices or stock availability. Images retain their complete compositions in catalogue cards.

The hero is an AI-generated illustrative editorial and is labelled accordingly. See ASSET-NOTES.md for its prompt and asset details.

## Enquiries and social profiles
Enquiry links open an email draft for the visitor to review and send. There is no automatic delivery or false success confirmation. The email address is also visible for webmail users.

Owner-confirmed profiles:
- Facebook: https://www.facebook.com/amarachi.osigwe.133487
- TikTok: https://www.tiktok.com/@milito.collection

These profiles are linked in the home contact section, contact page and footer.

## Details still needed
Confirm official product names, prices, current stock, sizes and colours; pickup/visiting hours; delivery fees and timing; returns and exchanges terms. The CEO portrait was supplied by the owner. The founder's confirmed name has not been supplied, so the role attribution remains. The supplied CEO quote remains a draft pending owner approval.

## Logo and review samples
The custom vector logo uses an AM monogram inside a handbag silhouette. Reusable header/footer component: components/Brand.tsx. Standalone logo: public/images/amy-milito-logo.svg. Matching favicon: app/icon.svg. The reviews section contains clearly labelled illustrative writing samples, not genuine testimonials. Replace them with real, approved feedback in components/Reviews.tsx; no ratings or customer identities are invented.

WhatsApp: the owner-supplied number is 08062519464 (international link 2348062519464). Bag enquiry buttons open WhatsApp with the bag name and category in a draft message; the visitor must send it. Contact sections and footer also include WhatsApp. Shoe enquiries continue to use email.
