import React from 'react';
import Header from '../components/Header';
import BannerSlider from '../components/BannerSlider';
import RecommendedBooks from '../components/RecommendedBooks';
import Publishers from '../components/Publishers';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <BannerSlider />
      <div className="container mx-auto p-4">
        <RecommendedBooks />
        <Publishers />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;