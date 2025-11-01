import HomeNavBar from '../components/HomeNavBar.tsx';
import HomeHero from '../components/HomeHero.tsx';
import HomeCompany from '../components/HomeCompany.tsx';
import HomeServices from '../components/HomeServices.tsx';
import HomePricing from '../components/HomePricing.tsx';
import HomeContact from '../components/HomeContact.tsx';

const Accuil = () => {
  return (
    <div>
      <HomeNavBar />
      <HomeHero />
      <HomeCompany />
      <HomeServices />
      <HomePricing />
      <HomeContact />
    </div>
  );
};

export default Accuil;

