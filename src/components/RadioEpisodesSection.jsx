import SongCard from "./SongCard"

const RadioEpisodesSection = function () {
  // array of songs
  const fakeSongs = [
    {
      id: 1,
      title: "Prólogo con Abuelo",
      artist: "Radio Episode",
      image: "../../assets/images/2a.png",
    },

    {
      id: 2,
      title: "The Wanderer",
      artist: "Radio Episode",
      image: "../../assets/images/2b.png",
    },

    {
      id: 3,
      title: "Michael Bublé & Carly Pearce",
      artist: "Radio Episode",
      image: "../../assets/images/2c.png",
    },

    {
      id: 4,
      title: "Zane Lowe Interview",
      artist: "Radio Episode",
      image: "../../assets/images/2d.png",
    },

    {
      id: 5,
      title: "Chart Spotlight: Julia Michaels",
      artist: "Radio Episode",
      image: "../../assets/images/2e.png",
    },
  ]

  return (
    <div className="mt-5">
      <h2 className="mb-4">Nuovi episodi radio</h2>
      <div className="d-flex gap-3 overflow-auto">
        {fakeSongs.map((song) => (
          <SongCard
            key={song.id}
            title={song.title}
            image={song.image}
            artist={song.artist}
          />
        ))}
      </div>
    </div>
  )
}

export default RadioEpisodesSection
