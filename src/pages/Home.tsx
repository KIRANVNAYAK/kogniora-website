import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import FeaturedCourses from '../components/Home/FeaturedCourses';
import TrainersSection from '../components/Home/TrainersSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import NewsSection from '../components/Home/NewsSection';
import AnalyticsSection from '../components/Home/AnalyticsSection';
import FAQSection from '../components/Home/FAQSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyChooseUs />
      <FeaturedCourses />
      {/*<TrainersSection />*/}
      <TestimonialsSection />
      <NewsSection />
      <AnalyticsSection />
      <FAQSection />
    </div>
  );
};

export default Home;