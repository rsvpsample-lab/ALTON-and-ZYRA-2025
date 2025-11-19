import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Clock, Camera, Utensils, Music, Heart, Users, Wine, PartyPopper, Sparkles, BookOpen, UserSquare, Disc3 } from 'lucide-react';

interface TimelineEvent {
    time: string;
    event: string;
    description: string;
    icon?: React.ComponentType<any>;
    iconUrl?: string;
    hueA: number;
    hueB: number;
}

interface TimelineCardProps {
    timelineEvent: TimelineEvent;
    i: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ timelineEvent, i }) => {
    const IconComponent = timelineEvent.icon;
    const iconUrl = timelineEvent.iconUrl;
    const isEven = i % 2 === 0;

    return (
        <motion.div
            className="relative py-6 md:py-8"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.3, once: true }}
            data-testid={`timeline-card-${i}`}
        >
            {/* Timeline dot in center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center z-20 bg-yellow-600"
                style={{
                    boxShadow: '0 0 0 4px rgba(202, 138, 4, 0.2)'
                }}
            >
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>

            {/* Content alternating left/right */}
            <div className={`flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}>
                {/* Left side content */}
                {isEven ? (
                    <>
                        <motion.div 
                            className="w-[45%] pr-4 md:pr-8 text-right"
                            variants={cardVariants}
                        >
                            <div className="space-y-1">
                                {timelineEvent.time && (
                                    <div className="text-xs font-bold text-yellow-600">
                                        {timelineEvent.time}
                                    </div>
                                )}
                                <h3 className="text-sm md:text-base font-serif font-semibold text-foreground uppercase tracking-wide">
                                    {timelineEvent.event}
                                </h3>
                                <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed">
                                    {timelineEvent.description}
                                </p>
                            </div>
                        </motion.div>
                        <div className="w-[10%]"></div>
                        <motion.div 
                            className="w-[45%] pl-4 md:pl-8"
                            variants={cardVariants}
                        >
                            {iconUrl ? (
                                <img src={iconUrl} alt={timelineEvent.event} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
                            ) : IconComponent ? (
                                <IconComponent className="w-16 h-16 md:w-20 md:h-20 text-yellow-600" />
                            ) : null}
                        </motion.div>
                    </>
                ) : (
                    <>
                        <motion.div 
                            className="w-[45%] pr-4 md:pr-8 text-right flex justify-end"
                            variants={cardVariants}
                        >
                            {iconUrl ? (
                                <img src={iconUrl} alt={timelineEvent.event} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
                            ) : IconComponent ? (
                                <IconComponent className="w-16 h-16 md:w-20 md:h-20 text-yellow-600" />
                            ) : null}
                        </motion.div>
                        <div className="w-[10%]"></div>
                        <motion.div 
                            className="w-[45%] pl-4 md:pl-8 text-left"
                            variants={cardVariants}
                        >
                            <div className="space-y-1">
                                {timelineEvent.time && (
                                    <div className="text-xs font-bold text-yellow-600">
                                        {timelineEvent.time}
                                    </div>
                                )}
                                <h3 className="text-sm md:text-base font-serif font-semibold text-foreground uppercase tracking-wide">
                                    {timelineEvent.event}
                                </h3>
                                <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed">
                                    {timelineEvent.description}
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </div>
        </motion.div>
    );
};

const cardVariants: Variants = {
    offscreen: {
        x: -30,
        opacity: 0,
    },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.5,
            delay: 0.1
        },
    },
};

const hue = (h: number, s: number = 100, l: number = 50): string => `hsl(${h}, ${s}%, ${l}%)`;

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    position: 'relative',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px 10px',
};

/**
 * ==============   Data   ================
 */

const timelineEvents: TimelineEvent[] = [
    {
        time: "8:30 AM",
        event: "Arrival",
        description: "Guests arrive and register for the celebration.",
        iconUrl: "https://res.cloudinary.com/dajcu5yvb/image/upload/v1763444323/a2ec87a4-a1b8-4a1b-9f01-1df09fe0be52-removebg-preview_fegd8j.png",
        hueA: 40,
        hueB: 40,
    },
    {
        time: "9:00 AM",
        event: "Ceremony",
        description: "Witness our vows and the beginning of our journey together at Saint John The Baptist Parish Church.",
        iconUrl: "https://res.cloudinary.com/dajcu5yvb/image/upload/v1763443482/c97090f6-ba37-470b-87de-85444b456fe2-removebg-preview_dlhacn.png",
        hueA: 40,
        hueB: 40,
    },
    {
        time: "1:00 PM",
        event: "Reception",
        description: "Join us at Ysabel Private Resort as we celebrate with food, drinks, and dancing.",
        iconUrl: "https://res.cloudinary.com/dajcu5yvb/image/upload/v1763444383/2fbf6eb7-491e-4491-a25d-ea25a1d922f6__1_-removebg-preview_sip21s.png",
        hueA: 40,
        hueB: 40,
    },
];

export default function ScrollTriggeredTimeline() {
    return (
        <motion.section 
            id="timeline" 
            className="section-pastel-blue bg-white relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Enhanced Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-yellow-600/30 rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-yellow-600/30 rounded-full"></div>
                <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-yellow-600/30 rotate-45"></div>
                <div className="absolute bottom-1/3 left-1/5 w-16 h-16 border border-yellow-600/30 rounded-full"></div>
                <div className="absolute top-1/2 left-1/6 w-6 h-6 bg-yellow-600/40 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/2 right-1/5 w-8 h-8 bg-yellow-600/40 rotate-45"></div>
            </div>
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
                <div className="absolute bottom-32 left-20 w-3 h-3 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
                <div className="absolute bottom-20 right-32 w-1.5 h-1.5 bg-white/25 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2.5s'}}></div>
            </div>
            {/* Header Section */}
            <div className="relative z-10 text-center mb-12">
                <motion.div 
                    className="text-center max-w-4xl mx-auto px-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif italic mb-4 text-primary" data-testid="text-timeline-title">
                        Wedding Timeline
                    </h2>
                    <p className="max-w-2xl mx-auto text-[#0b0b0b]">
                        Here's what to expect on our special day.
                    </p>
                </motion.div>
            </div>
            {/* Timeline Cards Container */}
            <div className="relative max-w-4xl mx-auto px-4 py-8">
                {/* Center vertical line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-yellow-600/30 -translate-x-1/2"></div>

                {timelineEvents.map((timelineEvent, i) => (
                    <TimelineCard i={i} timelineEvent={timelineEvent} key={`${timelineEvent.event}-${i}`} />
                ))}
            </div>

            {/* Bottom Decorative */}
            <motion.div 
                className="mt-16 text-center pb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="inline-flex items-center space-x-2">
                    <div className="w-8 h-px bg-[#ffffff]"></div>
                    <div className="w-2 h-2 bg-[#ffffff] rounded-full animate-pulse"></div>
                    <div className="w-8 h-px bg-[#ffffff]"></div>
                </div>
            </motion.div>
        </motion.section>
    );
}