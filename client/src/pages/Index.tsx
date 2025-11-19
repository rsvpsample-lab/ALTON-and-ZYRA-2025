import { useEffect, useRef, useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ImageLoop from '@/components/ImageLoop';
// Cover media - using Cloudinary URLs
import CountdownSection from '@/components/CountdownSection';
import StorySection from '@/components/StorySection';
import ScrollTriggeredTimeline from '@/components/ScrollTriggeredTimeline';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import EntourageSection from '@/components/EntourageSection';
import HashtagGiftsSection from '@/components/HashtagGiftsSection';
import RSVPSection from '@/components/RSVPSection';
import MemorableMomentsSection from '@/components/MemorableMomentsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CoverSection from '@/components/CoverSection';
import InvitationRevealSection from '@/components/InvitationRevealSection';
import MusicConsentPopup from '@/components/MusicConsentPopup';
import { AnimationContext } from '@/contexts/AnimationContext';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);
  const [showMusicConsent, setShowMusicConsent] = useState(true);

  const handleMusicConsent = async (consent: boolean) => {
    setShowMusicConsent(false);
    setAnimationsEnabled(true);

    if (consent && audioRef.current) {
      try {
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
      } catch (error) {
        console.error('Background music playback failed:', error);
      }
    }
  };

  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        style={{ display: 'none' }}
        data-testid="background-audio"
        src="https://res.cloudinary.com/dlwmkmgzl/video/upload/v1763545415/Can_t_Help_Falling_In_Love_-_Elvis_Presley_-_Violin_cover_xjhzlo.mp3"
      />

      <MusicConsentPopup 
        onConsent={handleMusicConsent} 
        isVisible={showMusicConsent} 
      />

      <div className="min-h-screen relative">
        <Navigation />

        <main className="relative z-10 space-y-0">
          <HeroSection audioRef={audioRef} />
        <InvitationRevealSection />
        <CountdownSection />
        <ImageLoop />
        <StorySection />
        <ScrollTriggeredTimeline />
        <CoverSection
          imageUrl="https://res.cloudinary.com/dlwmkmgzl/image/upload/v1763550571/cover1_x8wfgb.jpg"
          alt="Alton & Zyra Wedding Cover"
        />
        <VenueSection />
        <CoverSection
          imageUrl="https://res.cloudinary.com/dlwmkmgzl/image/upload/v1763550573/cover2_qmfmj3.jpg"
          alt="Alton & Zyra Wedding Cover"
        />
        <DressCodeSection />
        <CoverSection
          imageUrl="https://res.cloudinary.com/dlwmkmgzl/image/upload/v1763550572/cover3_hzdjpo.jpg"
          alt="Alton & Zyra Wedding Cover"
        />
        <EntourageSection />
        <HashtagGiftsSection />
        <MemorableMomentsSection />
        <RSVPSection rsvpLink="https://rhys-ann-rsvp.replit.app" />
        <FAQSection />
        <Footer />
      </main>
    </div>
    </AnimationContext.Provider>
  );
};

export default Index;