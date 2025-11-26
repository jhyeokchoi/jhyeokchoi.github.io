import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary-light text-white py-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold tracking-tight mb-2">CeLINE Consortium</h2>
                        <p className="text-gray-400 text-sm">
                            Center for Large facilities Integrating NMR and EM
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">개인정보 처리방침</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">이용약관</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">문의하기</a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} CeLINE Consortium. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
