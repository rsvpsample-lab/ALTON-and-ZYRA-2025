import { motion } from 'framer-motion';
import { optimizeCloudinaryUrl } from '@/lib/cloudinaryOptimize';
const principalSponsorsImage = 'https://res.cloudinary.com/dk8njsy83/image/upload/v1763448463/582268502_1365357671787380_7430866733248565310_n_1_qjzhka.jpg';
const guestsImage = 'https://res.cloudinary.com/dk8njsy83/image/upload/v1763451609/761ffb2a-d3a7-4d3a-8dbe-00db0f811089_tdvj9t.png';
import anchorIcon from '@assets/image_1763448087302.png';

const DressCodeSection = () => {
  const principalSponsorsColors = [
    { name: 'Dusty Blue', color: '#7c9eb2', hex: '#7c9eb2' },
    { name: 'Light Blue', color: '#a8c5dd', hex: '#a8c5dd' }
  ];

  const guestsColors = [
    { name: 'Royal Blue', color: '#2563eb', hex: '#2563eb' },
    { name: 'Dusty Blue', color: '#7c9eb2', hex: '#7c9eb2' },
    { name: 'Gold', color: '#fbbf24', hex: '#fbbf24' },
    { name: 'Sage Green', color: '#86a986', hex: '#86a986' }
  ];

  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue bg-white relative overflow-hidden mt-[10px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border border-primary/30 rounded-full"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          <h2 className="font-display font-light italic text-gold mb-8 text-[48px]" data-testid="text-dresscode-title">
            Attire Guide
          </h2>
        </motion.div>

        {/* Modern Dress Code Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Principal Sponsors */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white shadow-teal border border-primary/20 rounded-xl p-8 hover-elegant transition-all duration-500 h-full relative">
              {/* Anchor Decoration */}
              <img src={anchorIcon} alt="" className="absolute top-2 right-2 w-16 md:w-20 opacity-80" />
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.3 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      PRINCIPAL SPONSORS
                    </h3>
                    <div className="text-center px-4">
                      <p className="text-base font-semibold text-foreground mb-2">Formal Attire</p>
                      <p className="text-sm text-foreground mb-3">
                        <strong>NINONG:</strong> Barong with slacks (black/blue)<br/>
                        <strong>NINANG:</strong> Shades of Blue dress
                      </p>
                    </div>
                    
                    {/* Color Palette for Principal Sponsors */}
                    <div className="mt-4 pt-4 border-t border-primary/20">
                      <p className="text-xs font-semibold text-foreground mb-3">Color Palette</p>
                      <div className="flex justify-center gap-3">
                        {principalSponsorsColors.map((colorItem, index) => (
                          <div key={index} className="text-center">
                            <div 
                              className="w-12 h-12 mx-auto rounded-lg border-2 border-border shadow-sm"
                              style={{ backgroundColor: colorItem.color }}
                            ></div>
                            <p className="text-xs text-foreground mt-1">{colorItem.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.img 
                  src={principalSponsorsImage}
                  alt="Principal Sponsors attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Guests */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-white shadow-teal border border-primary/20 rounded-xl p-8 hover-elegant transition-all duration-500 h-full relative">
              {/* Anchor Decoration */}
              <img src={anchorIcon} alt="" className="absolute top-2 left-2 w-16 md:w-20 opacity-80" />
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.6 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      DRESS CODE FOR ALL GUESTS
                    </h3>
                    <div className="text-center px-4 mb-3">
                      <p className="text-base font-semibold text-foreground mb-2">Smart Casual</p>
                      <p className="text-sm text-foreground mb-3">
                        <strong>Gentlemen:</strong> Smart casual with blue jeans or maong<br/>
                        <strong>Ladies:</strong> Mid-length maxi dress in Royal Blue, Dusty Blue, Gold, or Sage Green
                      </p>
                    </div>
                    
                    {/* Color Palette for Guests */}
                    <div className="mt-4 pt-4 border-t border-primary/20">
                      <p className="text-xs font-semibold text-foreground mb-3">Color Palette</p>
                      <div className="flex justify-center gap-3">
                        {guestsColors.map((colorItem, index) => (
                          <div key={index} className="text-center">
                            <div 
                              className="w-12 h-12 mx-auto rounded-lg border-2 border-border shadow-sm"
                              style={{ backgroundColor: colorItem.color }}
                            ></div>
                            <p className="text-xs text-foreground mt-1">{colorItem.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.img 
                  src={guestsImage}
                  alt="Guests attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.8 }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Important Reminders */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.7 }}
        >
          <div className="bg-white shadow-teal border border-primary/20 rounded-xl p-8">
            <h3 className="text-xl font-body font-medium text-foreground mb-4 text-center">
              Important Reminders
            </h3>
            <div className="space-y-3 text-sm text-foreground leading-relaxed">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="font-semibold text-red-900 mb-2">Ladies - Please Avoid:</p>
                <ul className="list-disc list-inside space-y-1 text-red-800">
                  <li>Ball gowns</li>
                  <li>White dresses (reserved for the bride)</li>
                  <li>Sleeveless attire</li>
                  <li>Black dresses and black jeans</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="font-semibold text-blue-900 mb-2">Gentlemen - Please Avoid:</p>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li>T-shirts</li>
                  <li>Slippers</li>
                  <li>Sleeveless shirts</li>
                  <li>Black jeans</li>
                </ul>
              </div>
              
              <p className="text-center italic mt-4">
                White and similar shades are reserved for the bride and groom
              </p>
            </div>
          </div>
        </motion.div>

        
      </div>
    </motion.section>
  );
};

export default DressCodeSection;