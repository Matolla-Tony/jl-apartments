import HeroSection from "@/components/HeroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import VacantRoom from "@/components/VacantRooms/VacantRooms";
import { getVacantRoom } from "@/libs/apis";
// import { getFeaturedRoom } from '@/libs/apis';

const Home = async () => {
  const vacantRoom = await getVacantRoom();

  return (
    <>
      <HeroSection />
      <PageSearch />
      <VacantRoom vacantRoom={vacantRoom} />
      <NewsLetter />
    </>
  );
};

export default Home;
