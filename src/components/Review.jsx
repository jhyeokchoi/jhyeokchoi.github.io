import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, ArrowRight } from 'lucide-react';

const Review = () => {
    return (
        <section id="review" className="py-20 bg-primary text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        심사 접수 신청
                    </motion.h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        CeLINE 컨소시엄은 NMR, Cryo-EM, X-Ray 장비 이용료를 지원합니다. 연구 제안서를 제출하여 심사를 신청하세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* NMR Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                    >
                        <h3 className="text-2xl font-bold text-accent mb-4">NMR 심사 접수</h3>
                        <p className="text-gray-300 mb-6">
                            고자장 NMR 분광기 사용을 위한 제안서를 제출하세요.
                        </p>
                        <div className="flex items-center gap-3 text-gray-300 mb-6">
                            <Mail className="w-5 h-5 text-accent" />
                            <a href="mailto:nmr@kbsi.re.kr" className="hover:text-white transition-colors">nmr@kbsi.re.kr</a>
                        </div>
                        <a
                            href="mailto:nmr@kbsi.re.kr"
                            className="inline-flex items-center gap-2 text-accent hover:text-white font-semibold transition-colors group"
                        >
                            이메일로 신청하기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Cryo-EM Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
                    >
                        <h3 className="text-2xl font-bold text-accent-teal mb-4">Cryo-EM 심사 접수</h3>
                        <p className="text-gray-300 mb-6">
                            Cryo-Electron Microscopy 사용을 위한 제안서를 제출하세요.
                        </p>
                        <div className="flex items-center gap-3 text-gray-300 mb-6">
                            <Mail className="w-5 h-5 text-accent-teal" />
                            <a href="mailto:cryoem@kbsi.re.kr" className="hover:text-white transition-colors">cryoem@kbsi.re.kr</a>
                        </div>
                        <a
                            href="mailto:cryoem@kbsi.re.kr"
                            className="inline-flex items-center gap-2 text-accent-teal hover:text-white font-semibold transition-colors group"
                        >
                            이메일로 신청하기 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Review;
