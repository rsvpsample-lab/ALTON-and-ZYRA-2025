import { motion } from 'framer-motion';
const storyCoupleImage = 'https://res.cloudinary.com/dlwmkmgzl/image/upload/v1763550575/she_said_yes_kb89pu.jpg';
import { Heart } from 'lucide-react';

const StorySection = () => {
  return (
    <motion.section 
      id="story" 
      className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 3.5 }}
      data-testid="section-story"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 3.8 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-center text-foreground mb-3 flex items-center justify-center gap-2" data-testid="text-story-title">
          SHE SAID YES!
          <img 
            src="https://res.cloudinary.com/dajcu5yvb/image/upload/v1763443482/c97090f6-ba37-470b-87de-85444b456fe2-removebg-preview_dlhacn.png" 
            alt="Wedding rings" 
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 inline-block object-contain"
          />
        </h2>
        <p className="text-center text-sm sm:text-base text-foreground/60 italic">A journey of love and commitment</p>
      </motion.div>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 4 }}
        >
          {/* Left Side - Text Content */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 relative">
            {/* Decorative Icon */}
            <div className="mb-6">
              <Heart className="w-10 h-10 text-yellow-600" />
            </div>

            {/* Love Description */}
            <div className="space-y-6 text-base text-foreground/90 leading-relaxed" data-testid="text-story-content">
              <p className="text-lg">Love is patient, love is kind. It is finding your best friendnemy, partner, and forever in one person. It's a commitment to stand together through every season of life and to choose each other, regardless of the trials the sea of life may bring.</p>
              
              <blockquote className="border-l-4 border-primary pl-4 py-2 italic text-foreground/80">
                <p className="mb-2">"Love is patient, love is kind. It does not envy, it does not boast, it is not proud."</p>
                <cite className="text-sm not-italic text-foreground/60">— 1 Corinthians 13:4</cite>
              </blockquote>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-first lg:order-last">
            <img
              src={storyCoupleImage}
              alt="Our Love Story"
              className="w-full h-auto rounded-2xl shadow-lg"
              data-testid="img-story-background"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StorySection;
