import { motion } from 'framer-motion';
import ringImage from '@assets/rsvp-ring_1760518283296.png';

type RSVPSectionProps = {
  rsvpLink: string;
};

const RSVPSection = ({ rsvpLink }: RSVPSectionProps) => {

  return (
    <motion.section 
      id="rsvp" 
      className="section-pastel-blue bg-white relative overflow-hidden py-8 pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 10.5 }}
    >
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.8 }}
        >
          <h2 
            className="text-gold text-[40px] md:text-4xl" 
            style={{ fontFamily: 'Boska, serif', fontWeight: 300, fontStyle: 'normal' }} 
            data-testid="text-rsvp-header"
          >
            SAVE YOUR SEAT AT THE CELEBRATION
          </h2>
        </motion.div>

        {/* RSVP Content */}
        <div className="relative min-h-[700px] md:min-h-[800px] flex items-center justify-center">
          {/* Ring Image Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={ringImage}
              alt="Wedding Ring"
              className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] object-contain opacity-40"
              data-testid="img-ring-background"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
            {/* "RSVP" - Split into RS and VP */}
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 11.2 }}
            >
              <span 
                className="text-[150px] md:text-[240px] lg:text-[320px] leading-[0.8] text-foreground tracking-tight block"
                style={{ fontFamily: 'Boska, serif', fontWeight: 350 }}
                data-testid="text-rsvp-title"
              >
                RS<br />VP
              </span>
            </motion.div>

            {/* Deadline and Button */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 11.4 }}
            >
              {/* Message with contact details */}
              <div className="mt-8 bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-teal border border-yellow-600/20">
                <p 
                  className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto"
                  data-testid="text-rsvp-message"
                >
                  We're so excited to celebrate and share this special day with our favorite people! Please message Rhys & Ann on their Facebook accounts or ANSWER THE RSVP BUTTON BELOW to let us know if you'll be joining us.
                </p>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mt-4">The last day to RSVP is November 24, 2025. Get ready for a day filled with love, laughter, and unforgettable moments!</p>
                <div className="text-center mb-6">
                  <a 
                    href={ rsvpLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-600 text-white hover:bg-yellow-600/90 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-lg"
                    data-testid="button-rsvp"
                  >
                    RSVP Now
                  </a>
                </div>
                <p className="text-center">
                  <span className="font-body md:text-lg font-bold px-3 py-1 rounded whitespace-nowrap text-[12px] text-white bg-yellow-600">RSVP DUE DATE: November 24, 2025</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default RSVPSection;