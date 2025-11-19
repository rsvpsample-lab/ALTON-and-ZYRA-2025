
import { motion } from 'framer-motion';

const EntourageSection = () => {
  const parentsOfGroom = [
    { name: "Mrs. Alma G. Anonuevo" },
    { name: "MSG Alexander R Anonuevo PA(RET)" }
  ];

  const parentsOfBride = [
    { name: "Mrs. Anna Marie A. Glarian" },
    { name: "2LT Rodolfo C Glarian PA(RET)" }
  ];

  const ninong = [
    { name: "VADM FERDINAND S GOLEZ AFP(RET)" },
    { name: "VADM TORIBIO D ADACI JR AFP(RET)" },
    { name: "RADM ALLAN M JAVIER PN" },
    { name: "COMMO DWIGHT STEVEN M DULNOAN PN" },
    { name: "COMMO DANILO S AGUIT PN(RET)" },
    { name: "COMMO ALEX V GIANAN PN" },
    { name: "CAPT DARIO A YANTO JR PN(MNSA)" },
    { name: "CAPT FERDINAND P GLORIA PN(GSC)" },
    { name: "COL JIMMY B LUCQUIAO PA(GSC)" },
    { name: "LTC ALLAN G REYES PAF(GSC)" }
  ];

  const ninang = [
    { name: "Mrs. Annie G. Rosales" },
    { name: "Mrs. Cecilia A. Imperial Civ HR" },
    { name: "Mrs. Lucena Z. Grajo" },
    { name: "Mrs. Mary Jane DS. Dulnoan" },
    { name: "Mrs. Rosalinda A. Abucejo" },
    { name: "Miss Charmaine V. Calungsod Civ HR" },
    { name: "Mrs. Marlyn N. Pabalinas Civ HR" },
    { name: "Ms. Celia Strong" },
    { name: "Mrs. Lani Rose A. Manipon" },
    { name: "Ms. Carmelie Daisy Arcillas" }
  ];

  const secondarySponsors = {
    candle: [
      { name: "Mrs. Marcela S. Espiritu Civ HR" },
      { name: "MSG Roque B Awing PA" }
    ],
    veil: [
      { name: "ASN Mhon N Pagatpatan PN" },
      { name: "ASN Realane Manipon-Pagatpatan PN" }
    ],
    cord: [
      { name: "ASN Jhomar Rhay H Niones PN" },
      { name: "Mrs. Devine Niones" }
    ]
  };

  const bestMan = { name: "ASN Renz Armel R Dela Paz PN" };
  const maidOfHonor = { name: "ASN Jemyra Mae M Agpawa PN" };

  const ringBearer = { name: "ASN Crisanto D Padul Jr PN" };
  const coinBearer = { name: "ASN Diodyl P Revadulla PN" };
  const bibleBearer = { name: "Mr. Rolf Edmari E. Glarian" };
  const flowerGirl = { name: "ASN Irma C. Salva PN" };
  const hereComesTheBrideBearer = { name: "ASN Jean C De Guzman PN" };

  return (
    <motion.section 
      id="entourage" 
      className="entourage-section section-hard-blue bg-white relative overflow-hidden py-16 md:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 border border-primary/30 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 border border-primary/30 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2 
          className="text-5xl md:text-6xl lg:text-7xl font-display italic mb-12 md:mb-16 text-[#536e94]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Entourage
        </motion.h2>

        {/* Parents */}
        <motion.div
          className="grid grid-cols-2 gap-8 md:gap-16 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.6 }}
        >
          <div data-testid="section-parents-groom">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Parents of the Groom</h3>
            {parentsOfGroom.map((parent, idx) => (
              <p key={idx} className="text-xs md:text-sm text-gray-600 mb-1 tracking-wide" data-testid={`text-parent-groom-${idx}`}>
                {parent.name}
              </p>
            ))}
          </div>
          <div data-testid="section-parents-bride">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Parents of the Bride</h3>
            {parentsOfBride.map((parent, idx) => (
              <p key={idx} className="text-xs md:text-sm text-gray-600 mb-1 tracking-wide" data-testid={`text-parent-bride-${idx}`}>
                {parent.name}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Principal Sponsors */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.7 }}
        >
          <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-6">
            Principal Sponsors
          </h3>
          <div className="grid grid-cols-2 gap-x-8 md:gap-x-16 gap-y-1 max-w-3xl mx-auto">
            <div data-testid="section-ninong">
              <h4 className="text-xs md:text-sm tracking-widest uppercase text-gray-500 mb-3">Ninong</h4>
              {ninong.map((sponsor, idx) => (
                <p key={idx} className="text-xs md:text-sm text-gray-600 mb-1 tracking-wide" data-testid={`text-ninong-${idx}`}>
                  {sponsor.name}
                </p>
              ))}
            </div>
            <div data-testid="section-ninang">
              <h4 className="text-xs md:text-sm tracking-widest uppercase text-gray-500 mb-3">Ninang</h4>
              {ninang.map((sponsor, idx) => (
                <p key={idx} className="text-xs md:text-sm text-gray-600 mb-1 tracking-wide" data-testid={`text-ninang-${idx}`}>
                  {sponsor.name}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Best Man & Maid of Honor */}
        <motion.div
          className="grid grid-cols-2 gap-8 md:gap-16 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          <div data-testid="section-best-man">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Best Man</h3>
            <p className="text-xs md:text-sm text-gray-600 tracking-wide" data-testid="text-best-man">{bestMan.name}</p>
          </div>
          <div data-testid="section-maid-honor">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Maid of Honor</h3>
            <p className="text-xs md:text-sm text-gray-600 tracking-wide" data-testid="text-maid-honor">{maidOfHonor.name}</p>
          </div>
        </motion.div>

        {/* Candle, Cord, Veil */}
        <motion.div
          className="grid grid-cols-3 gap-4 md:gap-8 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.9 }}
        >
          <div data-testid="section-candle">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Candle</h3>
            {secondarySponsors.candle.map((person, idx) => (
              <p key={idx} className="text-xs md:text-sm text-gray-600 mb-1 tracking-wide" data-testid={`text-candle-${idx}`}>
                {person.name}
              </p>
            ))}
          </div>
          <div data-testid="section-cord">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Cord</h3>
            {secondarySponsors.cord.map((person, idx) => (
              <p key={idx} className="text-xs md:text-sm text-gray-600 mb-1 tracking-wide" data-testid={`text-cord-${idx}`}>
                {person.name}
              </p>
            ))}
          </div>
          <div data-testid="section-veil">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Veil</h3>
            {secondarySponsors.veil.map((person, idx) => (
              <p key={idx} className="text-xs md:text-sm text-gray-600 mb-1 tracking-wide" data-testid={`text-veil-${idx}`}>
                {person.name}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Bible, Coin, Ring Bearers */}
        <motion.div
          className="grid grid-cols-3 gap-4 md:gap-8 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <div data-testid="section-bible-bearer">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Bible Bearer</h3>
            <p className="text-xs md:text-sm text-gray-600 tracking-wide" data-testid="text-bible-bearer">{bibleBearer.name}</p>
          </div>
          <div data-testid="section-coin-bearer">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Coin Bearer</h3>
            <p className="text-xs md:text-sm text-gray-600 tracking-wide" data-testid="text-coin-bearer">{coinBearer.name}</p>
          </div>
          <div data-testid="section-ring-bearer">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Ring Bearer</h3>
            <p className="text-xs md:text-sm text-gray-600 tracking-wide" data-testid="text-ring-bearer">{ringBearer.name}</p>
          </div>
        </motion.div>

        {/* Flower Girl and Here Comes The Bride Bearer */}
        <motion.div
          className="grid grid-cols-2 gap-8 md:gap-16 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.1 }}
        >
          <div data-testid="section-flower-girl">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Flower Girl</h3>
            <p className="text-xs md:text-sm text-gray-600 tracking-wide" data-testid="text-flower-girl">{flowerGirl.name}</p>
          </div>
          <div data-testid="section-here-comes-bride-bearer">
            <h3 className="text-sm md:text-base tracking-widest uppercase text-gray-600 mb-3">Here Comes The Bride Bearer</h3>
            <p className="text-xs md:text-sm text-gray-600 tracking-wide" data-testid="text-here-comes-bride-bearer">{hereComesTheBrideBearer.name}</p>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default EntourageSection;
