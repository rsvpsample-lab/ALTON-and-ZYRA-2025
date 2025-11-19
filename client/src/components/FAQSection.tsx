import { useState } from 'react';
import { ChevronDown, ChevronUp, Camera, Clock, Users, MessageCircle, MapPin, Hotel, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { SiMessenger } from 'react-icons/si';

interface ContactInfo {
  name: string;
  phone: string;
  messenger: string;
  profilePic: string;
}

interface FAQ {
  question: string;
  icon: typeof MessageCircle;
  answer: string;
  contactInfo?: ContactInfo;
}

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs: FAQ[] = [
    {
      question: "WHAT TIME SHOULD I ARRIVE?",
      icon: Clock,
      answer: "To ensure everything runs smoothly, please arrive at least 30 minutes before the ceremony starts. This will give you time to find your seat, take in the beautiful setup, and be fully present for our special moment from the very start of the ceremony and until the beginning of our journey to forever."
    },
    {
      question: "WHERE SHOULD I PARK?",
      icon: MapPin,
      answer: "We have reserved parking in front of Daza Park along the road and also inside the Daza Park premises."
    },
    {
      question: "WHERE WILL I BE SEATED AT THE RECEPTION?",
      icon: Users,
      answer: "We have reserved seats for you. Upon arrival, our ushers will be happy to assist you in finding your designated seat."
    },
    {
      question: "GIFTS",
      icon: MessageCircle,
      answer: "Your presence is already the greatest gift, but if you'd like to give something, cash gifts are preferred. This will help us start our new journey together in the most meaningful way."
    },
    {
      question: "SAVE YOUR SEAT AT THE CELEBRATION",
      icon: MessageCircle,
      answer: "We're so excited to celebrate and share this special day with our favorite people! Please fill out the RSVP form below to let us know if you'll be joining us. The last day to RSVP is November 24, 2025. Get ready for a day filled with love, laughter, and unforgettable moments!"
    }
  ];

  return (
    <motion.section 
      id="faqs"
      className="section-pastel-blue bg-background py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 11.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 11.8 }}
        >
          <h2 className="text-5xl font-display font-light italic text-yellow-600 mb-8" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-body text-foreground max-w-2xl mx-auto">
            We've compiled answers to the most common questions about our wedding day. 
            If you have additional questions, please don't hesitate to contact us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-teal border border-yellow-600/20 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 12.1 + (index * 0.1) }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gold/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <faq.icon className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                  <span className="text-xl text-foreground font-body font-semibold">
                    {faq.question}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-yellow-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-yellow-600" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="w-full h-px bg-border mb-4"></div>
                  <p className="text-foreground leading-relaxed mb-4">
                    {faq.answer}
                  </p>
                  {faq.contactInfo && (
                    <div className="mt-6 bg-gradient-to-br from-yellow-600/5 to-gold/5 rounded-lg p-6 border border-yellow-600/10">
                      <div className="flex items-center gap-4 flex-wrap">
                        <img 
                          src={faq.contactInfo.profilePic} 
                          alt={faq.contactInfo.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-yellow-600/20"
                          data-testid="img-contact-profile"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="font-sans font-normal text-lg text-foreground mb-2 block" data-testid="text-contact-name" style={{ fontFamily: 'Arial, sans-serif' }}>
                            {faq.contactInfo.name}
                          </span>
                          <div className="space-y-1">
                            <a 
                              href={`tel:${faq.contactInfo.phone}`}
                              className="flex items-center gap-2 text-foreground hover:text-yellow-600 transition-colors"
                              data-testid="link-contact-phone"
                            >
                              <Phone className="w-4 h-4" />
                              <span className="text-sm">{faq.contactInfo.phone}</span>
                            </a>
                            <a 
                              href={`https://m.me/${faq.contactInfo.messenger.replace(' ', '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-foreground hover:text-yellow-600 transition-colors"
                              data-testid="link-contact-messenger"
                            >
                              <SiMessenger className="w-4 h-4" />
                              <span className="text-sm">Messenger: {faq.contactInfo.messenger}</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
