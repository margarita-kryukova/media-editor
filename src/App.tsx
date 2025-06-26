import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Gallery from "./components/Gallery";
import VideoGallery from "./components/VideoGallery";
import AboutSection from "./components/AboutSection";
import TariffsSection from "./components/TariffsSection";
import { useMenu } from "./hooks/useMenu";
import {
  GALLERY_DATA,
  VIDEOS_DATA,
  TARIFFS_DATA,
  ABOUT_DATA,
  HERO_CONTENT,
} from "./shared/constants";

function App() {
  const { isMenuOpen, setMenuOpen } = useMenu();

  return (
    <div className="page">
      <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <HeroSection {...HERO_CONTENT} />
      <Gallery slider={GALLERY_DATA} />
      <VideoGallery videos={VIDEOS_DATA} />
      <AboutSection {...ABOUT_DATA} />
      <TariffsSection tariffs={TARIFFS_DATA} />
    </div>
  );
}

export default App;
