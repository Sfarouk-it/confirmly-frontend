import Background from '../../components/BackGround';
import HomeNavBar from './components/HomeNavBar';
import HomeHero from './components/HomeHero';
import HomeCompany from './components/HomeCompany';
import HomeServices from './components/HomeServices';
import HomePricing from './components/HomePricing';
import HomeFooter from './components/HomeFooter';

const Accuil = () => {
  return (
    <div>
      <Background />
      <HomeNavBar />
      <HomeHero />
      <HomeCompany />
      <HomeServices />
      <HomePricing />
      <HomeFooter />
    </div>
  );
};

export default Accuil;

