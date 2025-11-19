import { motion } from 'framer-motion';
import { optimizeCloudinaryUrl } from '@/lib/cloudinaryOptimize';
const backgroundImage = 'https://res.cloudinary.com/dlwmkmgzl/image/upload/v1763550573/gift_section_fp45qe.jpg';

const giftQR1 = 'https://res.cloudinary.com/dlwmkmgzl/image/upload/v1763550490/gift1_qyxgb0.jpg';
const giftQR2 = 'https://res.cloudinary.com/dlwmkmgzl/image/upload/v1763550573/gift2_oev8qm.jpg';

const HashtagGiftsSection = () => {
  return (
    <motion.section 
      id="hashtag-gifts" 
      className="section-pastel-blue bg-background relative overflow-hidden py-8 mt-[-34px] mb-[-34px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <h2 className="md:text-5xl font-display font-light text-primary text-[36px]" data-testid="text-gifts-header">Gift Guide</h2>
        </motion.div>

        <motion.div 
          className="relative overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          {/* Black and White Background Image */}
          <div className="relative h-96 md:h-[500px]">
            <img 
              src={backgroundImage}
              alt="Background"
              className="w-full h-full object-cover grayscale"
              data-testid="img-gifts-background"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
          </div>

          {/* Text Card - Half on image, half outside */}
          <div className="relative -mt-32 md:-mt-40 px-4 md:px-8 pb-8">
            <motion.div 
              className="bg-white backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-2xl mx-auto shadow-teal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.h2 
                className="font-script italic text-foreground mb-6 text-3xl md:text-4xl lg:text-5xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                data-testid="text-gifts-title"
              >
                Your Presence is Our Greatest Gift
              </motion.h2>
              
              <motion.p 
                className="text-foreground/80 leading-relaxed text-center mb-8 text-base md:text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                data-testid="text-gifts-description"
              >
                If you wish to bless us with a gift, we've provided some options below. However, your love and presence on our special day mean the world to us.
              </motion.p>

              {/* QR Codes Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                {/* QR Code 1 */}
                <div className="flex flex-col items-center space-y-3">
                  <div className="bg-white p-4 rounded-xl shadow-lg">
                    <img 
                      src={giftQR1}
                      alt="Gift Option 1 QR Code"
                      className="w-40 h-40 md:w-48 md:h-48 object-contain"
                      data-testid="img-gift-qr-1"
                    />
                  </div>
                  <p className="text-sm text-foreground/70 text-center font-medium" data-testid="text-gift-qr-1-label">Scan to send a gift</p>
                </div>

                {/* QR Code 2 */}
                <div className="flex flex-col items-center space-y-3">
                  <div className="bg-white p-4 rounded-xl shadow-lg">
                    <img 
                      src={giftQR2}
                      alt="Gift Option 2 QR Code"
                      className="w-40 h-40 md:w-48 md:h-48 object-contain"
                      data-testid="img-gift-qr-2"
                    />
                  </div>
                  <p className="text-sm text-foreground/70 text-center font-medium" data-testid="text-gift-qr-2-label">Scan to send a gift</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HashtagGiftsSection;
