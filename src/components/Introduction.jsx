import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Zap, Globe, Microscope, Activity, Box } from 'lucide-react';

const Introduction = () => {
    const challenges = [
        {
            icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />,
            text: "연구자들이 고가의 장비 이용료와 초기 기술 장벽을 극복하기 어려움."
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-500" />,
            text: "첨단바이오, 감염병 대응 및 바이오헬스 분야 핵심 원천 기술의 부족."
        },
        {
            icon: <Globe className="w-8 h-8 text-yellow-500" />,
            text: "글로벌 디지털 바이오 분야에서의 기술 격차 유발."
        }
    ];

    const solutions = [
        {
            title: "Cryo-EM",
            icon: <Microscope className="w-12 h-12 text-accent" />,
            desc: "거대 단백질 복합체, 막 단백질 연구를 위한 신속한 구조 규명.",
            sub: "필수 구조 생물학 장비"
        },
        {
            title: "NMR",
            icon: <Activity className="w-12 h-12 text-accent" />,
            desc: "생체 물질의 동역학 정보 및 구조-활성 관계 탐구.",
            sub: "첨단 연구 지원"
        },
        {
            title: "X-ray",
            icon: <Box className="w-12 h-12 text-accent" />,
            desc: "고해상도 구조 규명 및 단백질-신약 후보 물질 상호작용 분석.",
            sub: "신약 개발 지원"
        }
    ];

    return (
        <section id="intro" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-primary mb-4"
                    >
                        디지털 바이오 기술의 혁신
                    </motion.h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        디지털 바이오 연구 환경 개선과 미래 원천기술 확보를 위한 필수 인프라.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <h3 className="text-2xl font-bold text-primary mb-6">도전 과제</h3>
                        <div className="space-y-6">
                            {challenges.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="bg-white p-2 rounded-lg shadow-sm shrink-0">
                                        {item.icon}
                                    </div>
                                    <p className="text-gray-700 font-medium pt-1">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center"
                    >
                        <h3 className="text-2xl font-bold text-primary mb-6">우리의 미션</h3>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            CeLINE 컨소시엄은 연구자들이 겪는 장비 활용의 어려움을 근본적으로 해결하고자 합니다. 최첨단 기술과 연구 현장을 잇는 가교로서, 연구자가 오직 창의적인 발견과 혁신에만 집중할 수 있는 환경을 제공하겠습니다.
                        </p>
                        <div className="bg-gray-50 border-l-4 border-accent p-6 rounded-r-lg">
                            <p className="text-xl font-medium text-gray-800 italic">
                                "세계적 수준의 연구 인프라, 모든 연구자에게 열린 기회가 됩니다."
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
                        >
                            <div className="mb-6 bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                            <p className="text-gray-600 mb-4">{item.desc}</p>
                            <span className="text-sm font-semibold text-accent-teal uppercase tracking-wide">{item.sub}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Introduction;
