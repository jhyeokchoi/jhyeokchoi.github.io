import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronRight } from 'lucide-react';

const institutions = [
    {
        id: 'kbio',
        name: 'KBIO',
        fullName: '오송첨단의료산업진흥재단',
        // Actual location on map (approximate %)
        mapPos: { top: '38%', left: '48%' },
        // Label position (pulled out to avoid overlap)
        labelPos: { top: '25%', left: '20%' },
        description: '바이오헬스 산업의 핵심 플랫폼으로서 신약 개발과 의료기기 산업을 지원합니다.',
        equipment: [
            'Cryo-EM (Titan Krios)',
            'AI 및 빅데이터 연계 플랫폼',
            '신약 개발 가속화 지원 장비',
            '바이오의약품 분석 및 개발 장비'
        ],
        images: ['/figures/cryoEM.png']
    },
    {
        id: 'kbsi',
        name: 'KBSI',
        fullName: '한국기초과학지원연구원',
        mapPos: { top: '43%', left: '50%' },
        labelPos: { top: '35%', left: '75%' },
        description: '세계 최고 수준의 분석과학 연구 인프라를 바탕으로 국가 과학기술 발전을 견인합니다.',
        equipment: [
            '1.2 GHz NMR (2024년 도입)',
            'High-field NMR (900, 800, 700, 600 MHz)',
            'Cryo-EM (Titan Krios, Talos Arctica)',
            'Bio-HVEM',
            'X-ray (Bio-SAXS)',
            '4GSR 오창 방사광가속기 (2027년 예정)'
        ],
        images: ['/figures/nmr.png', '/figures/cryoEM.png']
    },
    {
        id: 'kaist',
        name: 'KAIST',
        fullName: '한국과학기술원',
        mapPos: { top: '48%', left: '48%' },
        labelPos: { top: '55%', left: '20%' },
        description: '첨단 바이오 연구 및 인재 양성의 요람으로, 혁신적인 연구 성과를 창출합니다.',
        equipment: [
            'Cryo-EM (Titan Krios 300keV)',
            'Cryo-FIB-SEM (Aquilos 2)',
            'Thunder Imager (3D Live Cell)',
            'In-situ 생물 전처리 장비'
        ],
        images: ['/figures/cryoEM.png']
    },
    {
        id: 'kmedi',
        name: 'K-MEDI hub',
        fullName: '대구경북첨단의료산업진흥재단',
        mapPos: { top: '58%', left: '65%' },
        labelPos: { top: '65%', left: '80%' },
        description: '첨단 의료산업의 허브로서 글로벌 수준의 의료 연구개발을 선도합니다.',
        equipment: [
            '결정화 로봇 (Rock Imager, Mosquito)',
            '생물리분석 장비 (ITC, SPR, AUC)',
            'NanoITC, Biacore T200/8K',
            'ProteomLab XL-A'
        ],
        images: ['/figures/xray.png']
    },
    {
        id: 'gist',
        name: 'GIST',
        fullName: '광주과학기술원',
        mapPos: { top: '75%', left: '35%' },
        labelPos: { top: '80%', left: '20%' },
        description: '미래 과학기술을 선도하는 연구 중심 대학으로, 융합 연구를 통해 새로운 가치를 창출합니다.',
        equipment: [
            'Cryo-EM (200keV Glacios)',
            '단백질 시료 전처리 분석',
            'MST, SEC-MALS',
            '단백질 결정화 및 X-ray 관련 장비'
        ],
        images: ['/figures/cryoEM.png', '/figures/xray.png']
    }
];

const Equipments = () => {
    const [selectedId, setSelectedId] = useState('kbsi');
    const selectedInst = institutions.find(i => i.id === selectedId);

    return (
        <section id="equipments" className="py-20 bg-gray-50 min-h-screen flex flex-col">
            <div className="container mx-auto px-6 flex-grow flex flex-col">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-primary mb-4"
                    >
                        기관별 최첨단 연구 장비
                    </motion.h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        각 기관이 보유한 세계적 수준의 연구 장비를 확인하세요.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-stretch flex-grow">
                    {/* Left: Map Area with Guide Lines */}
                    <div className="w-full lg:w-1/2 bg-white rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden min-h-[600px]">
                        <img
                            src="/korea_map_admin.png"
                            alt="Korea Map"
                            className="absolute inset-0 w-full h-full object-contain p-12 opacity-90"
                        />

                        {/* SVG Layer for Guide Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                            {institutions.map((inst) => (
                                <line
                                    key={inst.id}
                                    x1={inst.mapPos.left}
                                    y1={inst.mapPos.top}
                                    x2={inst.labelPos.left}
                                    y2={inst.labelPos.top}
                                    stroke={selectedId === inst.id ? "#00AEEF" : "#CBD5E1"}
                                    strokeWidth={selectedId === inst.id ? "2" : "1"}
                                    strokeDasharray={selectedId === inst.id ? "0" : "4"}
                                    className="transition-all duration-300"
                                />
                            ))}
                        </svg>

                        {/* Dokdo & Ulleungdo Visualization */}
                        <div className="absolute z-0 opacity-80" style={{ top: '45%', left: '85%' }}>
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1 bg-gray-300 rounded-full transform -rotate-12" title="Ulleungdo"></div>
                                    <div className="w-1 h-0.5 bg-gray-300 rounded-full transform -rotate-12 mt-1" title="Dokdo"></div>
                                </div>
                            </div>
                        </div>

                        {/* Map Pins (Actual Locations) */}
                        {institutions.map((inst) => (
                            <div
                                key={`pin-${inst.id}`}
                                className="absolute z-10"
                                style={{ top: inst.mapPos.top, left: inst.mapPos.left, transform: 'translate(-50%, -50%)' }}
                            >
                                <div className={`w-3 h-3 rounded-full ${selectedId === inst.id ? 'bg-accent ring-4 ring-accent/30' : 'bg-gray-400'} transition-all duration-300`}></div>
                            </div>
                        ))}

                        {/* Labels (Offset Positions) */}
                        {institutions.map((inst) => (
                            <motion.button
                                key={`label-${inst.id}`}
                                className="absolute z-20"
                                style={{ top: inst.labelPos.top, left: inst.labelPos.left, x: "-50%", y: "-50%" }}
                                onClick={() => setSelectedId(inst.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-md border transition-all duration-300 ${selectedId === inst.id ? 'bg-primary text-white border-primary scale-110' : 'bg-white text-gray-600 border-gray-200 hover:border-accent hover:text-accent'}`}>
                                    <MapPin size={16} className={selectedId === inst.id ? 'text-accent' : 'text-gray-400'} />
                                    <span className="font-bold text-sm md:text-base whitespace-nowrap">{inst.name}</span>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Right: Details Panel */}
                    <div className="w-full lg:w-1/2">
                        <AnimatePresence mode="wait">
                            {selectedInst && (
                                <motion.div
                                    key={selectedInst.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 h-full flex flex-col"
                                >
                                    <div className="mb-6">
                                        <h3 className="text-3xl font-bold text-primary mb-2">{selectedInst.name}</h3>
                                        <p className="text-lg text-accent font-medium mb-4">{selectedInst.fullName}</p>
                                        <p className="text-gray-600 leading-relaxed">
                                            {selectedInst.description}
                                        </p>
                                    </div>

                                    <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
                                        <h4 className="text-lg font-bold text-primary mb-4 flex items-center gap-2 sticky top-0 bg-white py-2 z-10">
                                            <ChevronRight className="text-accent" /> 보유 장비 목록
                                        </h4>
                                        <ul className="grid gap-3 mb-8">
                                            {selectedInst.equipment.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3 bg-gray-50 p-3 rounded-xl hover:bg-blue-50 transition-colors">
                                                    <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0"></span>
                                                    <span className="text-gray-700 font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Equipment Images Gallery */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {selectedInst.images.map((img, idx) => (
                                                <div key={idx} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm group">
                                                    <img
                                                        src={img}
                                                        alt={`${selectedInst.name} Equipment ${idx + 1}`}
                                                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Equipments;
