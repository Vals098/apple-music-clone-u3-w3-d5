import RadioCard from "./RadioCard"

const HeroSection = function () {
  return (
    <div>
      <h1 className="border-bottom border-secondary pb-2 mb-4">Novità</h1>
      <div className="d-flex gap-3">
        <RadioCard
          title="Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill"
          image="../../assets/images/1a.png"
        />
        <RadioCard
          title="Ecco la nuova casa della musica latina"
          image="../../assets/images/1b.png"
        />
      </div>
    </div>
  )
}

export default HeroSection
