import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero_background.png"
                    alt="Abstract Tech Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-primary"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-accent-teal font-medium tracking-wider uppercase mb-4">
                        Center for Large facilities Integrating NMR and EM
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        CeLINE <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent">Consortium</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        첨단 대형 연구 장비를 활용한 선도 연구 개발 지원.<br />
                        우리는 최첨단 대형 연구 시설을 활용하여 고급 R&D를 지원합니다.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="#intro"
                            className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-accent/25"
                        >
                            더 알아보기 <ArrowRight size={20} />
                        </a>
                        <a
                            href="#review"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold transition-all flex items-center justify-center"
                        >
                            심사 접수
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                    <div className="w-1 h-2 bg-white/50 rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
