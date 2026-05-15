import HeroSection from "./HeroSection"
import NavBar from "./NavBar"
import SongsSection from "./SongsSection"

const Home = function () {
  return (
    <div className="flex-grow-1 bg-black text-light overflow-auto">
        <NavBar />
      <div className="p-4">
      <HeroSection/>
      <SongsSection/>
      </div>
    </div>
  )
}

export default Home
