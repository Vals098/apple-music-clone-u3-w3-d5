import HeroSection from "./HeroSection"
import NavBar from "./NavBar"
import RadioEpisodesSection from "./RadioEpisodesSection"
import SongsSection from "./SongsSection"

const Home = function () {
  return (
    <div className="flex-grow-1 bg-black text-light overflow-auto h-100">
        <NavBar />
      <div className="p-4">
      <HeroSection/>
      <RadioEpisodesSection/>
      <SongsSection/>
      </div>
    </div>
  )
}

export default Home
