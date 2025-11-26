import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Equipments from './components/Equipments';
import Review from './components/Review';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Equipments />
        <Review />
      </main>
      <Footer />
    </div>
  );
}

export default App;
