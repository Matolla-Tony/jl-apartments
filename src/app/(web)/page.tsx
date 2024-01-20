import HeroSection from "@/components/HeroSection/HeroSection";
import VacantRoomNotification from "@/components/NewsLetter/NewsLetter";
import PageSearch from "@/components/PageSearch/PageSearch";
import VacantRoom from "@/components/VacantRooms/VacantRooms";
import { getVacantRoom } from "@/libs/apis";

const Home = async () => {
  const vacantRoom = await getVacantRoom();

  return (
    <>
      <HeroSection />
      <PageSearch />
      <VacantRoom vacantRoom={vacantRoom} />
      <VacantRoomNotification />
    </>
  );
};

export default Home;
