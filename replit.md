# Wedding Invitation Website

## Overview
This project is a full-stack JavaScript application for a wedding invitation website for Kenneth I. Napa and Suzette A. Contreras, celebrating their wedding on December 28, 2025. It features a responsive, interactive, and modern design with multiple sections including hero, slideshow, invitation details, countdown, story, venue, RSVP, and more. The website aims to provide an elegant and engaging experience for wedding guests. Key capabilities include an interactive quiz game to reveal different invitation designs, background music with user interaction, and SEO optimization.

## User Preferences
- Background music should play automatically when clicking "Open Invitation" with NO control buttons
- Clean, sophisticated design without visual artifacts or decorative elements that interfere with images
- Elegant wedding-appropriate typography using Google Fonts

## System Architecture
The application is a full-stack JavaScript project using a React frontend with TypeScript, Vite for bundling, and Tailwind CSS with shadcn/ui for styling. The backend is an Express.js server also written in TypeScript. Routing is handled by Wouter, and server state management uses TanStack Query. Data is currently stored in-memory using MemStorage, with potential for PostgreSQL integration. The UI/UX incorporates a dark mode aesthetic with an "old money" style, elegant Google Fonts (Playfair Display, Cormorant Garamond, Inter), and sophisticated components from shadcn/ui. Core features include an interactive quiz game that determines the invitation design (premium vs. standard based on score), responsive design for various devices, and a background music feature that respects user interaction for playback. The system is designed for deployment on platforms like Replit, with specific configurations for port handling and static asset serving.

## External Dependencies
- **Cloudinary CDN**: Used for hosting audio files and images.
- **Google Fonts**: Playfair Display, Cormorant Garamond, Inter for typography.
- **Tailwind CSS**: For utility-first styling.
- **shadcn/ui**: UI component library.
- **TanStack Query**: For server state management.
- **Wouter**: For client-side routing.
- **Express.js**: Backend server framework.
- **Vite**: Frontend build tool.

## Recent Changes
- **2025-11-15**: Complete content overhaul for Kenneth I. Napa & Suzette A. Contreras' wedding:
  - Updated all components with new couple names "Kenneth I. Napa & Suzette A. Contreras"
  - Changed wedding date to December 28, 2025 at 2:30 PM
  - Updated venues to two separate locations in Taal, Batangas:
    - Ceremony: Basilica De San Martin De Tours, Taal, Batangas
    - Reception: The Stable Rancho Blanco Event Center, Taal, Batangas
  - Updated dress code section with detailed attire guidelines:
    - Principal Sponsors: Formal attire
      - Men: Coat / Barong / Long sleeves
      - Women: Evening Gown / Tailored Suits
    - Guests: Semi Formal Attire
      - Men: Suit / Blazer / Polo / Polo Shirt
      - Women: Sunday dress / Jumpsuit / Elegant Skirt
    - Maintained important reminder: Strictly no denim pants and t-shirts
  - Updated wedding color palette:
    - Ivory (#FFFFF0), Champagne (#F7E7CE), Espresso Brown (#3E2723), Gold (#FFD700)
  - Updated wedding timeline:
    - 2:00 PM: Assembly Time
    - 2:30 PM: Wedding Ceremony
    - 3:30 PM: Photos
    - 4:30 PM: Pica Pica
    - 5:00 PM: Reception
    - 6:00 PM: Dinner
    - 8:00 PM: Party Party!
    - 9:00 PM: Send-Off
  - Changed wedding hashtag to #SuzyKennethAskForMore
  - Updated RSVP details to be generic (contact Kenneth & Suzette)
  - Updated RSVP deadline: November 25
  - Updated countdown timer to December 28, 2025 at 2:30 PM
  - Maintained Bible verse in footer: "Therefore what God has joined together, let no one separate." — Mark 10:9
  - Updated gift section message with couple names
  - Updated all references throughout the website including Hero, Footer, Venue, DressCode, Timeline, FAQ, RSVP, and HashtagGifts sections
  - **Image Updates** (2025-11-15):
    - Hero section: Updated to KScine-68_jr2t3m.jpg
    - She said yes image (Story section): Updated to KScine-243_ve15yt.jpg
    - Polaroid images: 
      - Bride: KScine-214_kb4iho.jpg
      - Couple: KScine-194_nckzhs.jpg
      - Groom: KScine-218_zvu1ag.jpg
    - Cover images (3 sections):
      - Cover 1: KScine-59_cnjpqn.jpg
      - Cover 2: KScine-111_kj3cwo.jpg
      - Cover 3: KScine-18_pjlj9k.jpg
    - Venue images:
      - Ceremony (Basilica): church_kgjute.jpg
      - Reception (Rancho Blanco): 576190117_24761241300238300_8370538227753679374_n_rd1ghx.jpg
    - Attire guide images:
      - Principal Sponsors: 1f454263-14fc-4649-80cc-300dcc7bfcd5.png
      - Guests: 0c8c4862-89f4-489f-b709-9370325a7012_ajcg8s.png
    - Gift guide image: KScine-2_bkj9r8.jpg
    - Save the date photos: 12 new images (KScine-321, 310, 287, 269, 255, 252, 243, 240, 239, 190, 2, 194)
  - **Bank Details Added**:
    - BDO Account: 0081 9010 9141 (Suzette A Contreras, BDO - Kabayan)
    - GCash: 09954806186 (Suzette A Contreras)
- **2025-11-17**: Added Save the Date Video Section:
  - Created new SaveTheDateVideoSection component
  - Video URL: https://res.cloudinary.com/dqr27nycf/video/upload/v1763396682/IMG_0421_lcjsjg.mp4
  - Positioned before the Timeline section in the page layout
  - Features elegant title "Save the Date" with subtitle "A glimpse of our journey"
  - Video displays with controls, plays inline, and has proper responsive design with 16:9 aspect ratio

