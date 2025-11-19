import { motion } from 'framer-motion';

const SaveTheDateVideoSection = () => {
  return (
    <motion.section 
      id="save-the-date-video" 
      className="section-hard-blue bg-background relative overflow-hidden py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <h2 className="text-5xl font-display font-light italic text-gold-bright mb-8" data-testid="text-save-date-video-title">
            Save the Date
          </h2>
          <p className="text-xl font-script italic max-w-2xl mx-auto leading-relaxed text-[#0d0d0d]">
            A glimpse of our journey
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
        >
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '177.78%' }}>
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
              data-testid="video-save-the-date"
            >
              <source 
                src="https://res.cloudinary.com/dqr27nycf/video/upload/v1763396682/IMG_0421_lcjsjg.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SaveTheDateVideoSection;
