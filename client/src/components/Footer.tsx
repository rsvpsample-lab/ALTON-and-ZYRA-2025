import { Heart, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-white text-foreground py-16 px-4 relative overflow-hidden border-t-2 border-yellow-600/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 12.5 }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 12.8 }}
        >
          {/* Couple Names */}
          <div>
            <h2 className="text-3xl sm:text-4xl mb-2 text-foreground" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
              Rhys
              <span className="text-yellow-600 mx-3">&</span>
              Ann
            </h2>
            <p className="text-foreground text-lg">
              December 10, 2025 • Quezon City
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 py-6">
            <div className="w-16 h-px bg-border"></div>
            <Heart className="w-6 h-6 text-yellow-600 animate-float" />
            <div className="w-16 h-px bg-border"></div>
          </div>

          {/* Confidentiality Message */}
          <div className="max-w-3xl mx-auto bg-yellow-600/5 border border-yellow-600/20 rounded-lg p-6">
            <p className="text-foreground leading-relaxed text-sm" data-testid="text-confidentiality">
              We kindly request that you treat this invitation with utmost confidentiality. Our wedding is an intimate and small ceremony, reserved for our dearest and closest loved ones. We trust that only those invited will be present, so we ask that you refrain from sharing this information with others. Your understanding and respect for our privacy are sincerely appreciated. Thank you for being part of our special day.
            </p>
          </div>

          {/* Bible Verse */}
          <div className="max-w-2xl mx-auto">
            <p className="text-foreground leading-relaxed italic text-lg">
              "Therefore what God has joined together, let no one separate."
            </p>
            <p className="text-foreground/70 text-sm mt-2">— Mark 10:9</p>
          </div>

          {/* Thank You Message */}
          <div className="max-w-2xl mx-auto">
            <p className="text-foreground leading-relaxed italic">
              We're grateful to have you as part of our story. You've made our journey more beautiful, and we can't wait to share our special day with you.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="pt-8">
            <p className="text-foreground text-sm">
              With love and gratitude,
            </p>
            <p className="text-foreground text-2xl" style={{ fontFamily: 'Boska, serif', fontWeight: 700 }}>
              Rhys & Ann
            </p>
          </div>

          {/* Website Design Credit */}
          <div className="pt-8">
            <p className="text-foreground/60 text-xs" data-testid="text-design-credit">
              © website designed by MadDog of inviteee
            </p>
          </div>
        </motion.div>
      </div>
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-yellow-600/20 to-transparent opacity-50 pointer-events-none"></div>
    </motion.footer>
  );
};

export default Footer;