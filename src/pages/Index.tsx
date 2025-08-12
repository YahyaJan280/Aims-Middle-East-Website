import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import MissionVision from '@/components/MissionVision';
import Objectives from '@/components/Objectives';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSlider />
      <MissionVision />
      <Objectives />
      <Projects />
      <Achievements />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
