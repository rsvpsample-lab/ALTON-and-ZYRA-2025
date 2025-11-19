import { motion } from 'framer-motion';
import { Users, Heart } from 'lucide-react';

const EntourageSection = () => {
  const principalSponsors = [
    { ninong: 'Zyrus Malolos', ninang: 'Venice Joy Magayo' },
    { ninong: 'Zyrex Malolos', ninang: 'Angelica Regencia' },
    { ninong: 'Cesar Malolos Jr.', ninang: 'Julia Mariella Loresca' },
    { ninong: 'Roxan Ox Salva', ninang: 'Angelycca Almanzor' },
    { ninong: 'Kyle Francis Castillo', ninang: 'Elaine Jasmine Pamplona' },
    { ninong: 'Joy Serrano', ninang: 'Gina Malate' },
    { ninong: 'Earl John Quijano', ninang: 'Rizza Landicho' },
    { ninong: 'Arjay Almanzor', ninang: 'Margarette Simone Escalona' },
    { ninong: 'Carl Jaz Bartolata', ninang: 'Alexa Isabel Patulot' },
    { ninong: 'Christian Villanueva', ninang: 'Hyoami Empress M. Alvarez' },
    { ninong: 'Remart Elazigue', ninang: 'Rhianne Villanueva' },
    { ninong: 'Tristan Laurino', ninang: 'Jerica Kaithlyn Malolos' }
  ];

  return (
    <motion.section 
      id="entourage" 
      className="section-pastel-blue bg-white relative overflow-hidden py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 9.5 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 border border-primary/30 rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-600"></div>
            <Users className="w-6 h-6 text-yellow-600" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-600"></div>
          </div>
          <h2 className="font-display font-light italic mb-4 text-[48px]" style={{ color: '#000080' }} data-testid="text-entourage-title">
            Our Entourage
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            We are honored to have these special people stand with us on our wedding day
          </p>
        </motion.div>

        {/* Principal Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.1 }}
        >
          <div className="bg-white shadow-teal border border-primary/20 rounded-xl p-8 mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-display font-medium text-yellow-600 mb-2">
                Principal Sponsors
              </h3>
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="h-px w-12 bg-yellow-600"></div>
                <Heart className="w-4 h-4 text-yellow-600 fill-yellow-600" />
                <div className="h-px w-12 bg-yellow-600"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Ninong Column */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-center text-foreground mb-4 pb-2 border-b-2 border-yellow-600/30">
                  Ninong
                </h4>
                {principalSponsors.map((sponsor, index) => (
                  <motion.div
                    key={`ninong-${index}`}
                    className="bg-gradient-to-r from-yellow-600/5 to-transparent p-3 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 10.3 + (index * 0.1) }}
                    data-testid={`text-ninong-${index}`}
                  >
                    <p className="text-foreground font-medium">{sponsor.ninong}</p>
                  </motion.div>
                ))}
              </div>

              {/* Ninang Column */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-center text-foreground mb-4 pb-2 border-b-2 border-yellow-600/30">
                  Ninang
                </h4>
                {principalSponsors.map((sponsor, index) => (
                  <motion.div
                    key={`ninang-${index}`}
                    className="bg-gradient-to-l from-yellow-600/5 to-transparent p-3 rounded-lg"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 10.3 + (index * 0.1) }}
                    data-testid={`text-ninang-${index}`}
                  >
                    <p className="text-foreground font-medium">{sponsor.ninang}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 11.5 }}
        >
          <Heart className="w-3 h-3 text-yellow-600 fill-yellow-600 opacity-50" />
          <div className="w-1 h-1 rounded-full bg-yellow-600 opacity-50"></div>
          <Heart className="w-3 h-3 text-yellow-600 fill-yellow-600 opacity-50" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
