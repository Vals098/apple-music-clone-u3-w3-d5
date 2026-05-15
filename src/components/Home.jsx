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
      <h2 className="mt-4">Nuove uscite</h2>
      <SongsSection title="Edoardo Bennato" query="edoardo-bennato"/>
      <SongsSection title="883" query="883"/>
      <SongsSection title="Queen" query="queen"/>
      </div>
    </div>
  )
}

export default Home
