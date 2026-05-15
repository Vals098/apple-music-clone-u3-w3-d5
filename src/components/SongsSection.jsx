import { useEffect, useState } from "react"
import SongCard from "./SongCard"

const SongsSection = function ({title, query}) {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        // console.log(data.data)
        setSongs(data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [query])

  return (
    <div className="mb-5">
      {/* <h2 className="mb-4">Nuove uscite</h2> */}
        <h3 className="mb-2">{title}</h3>
      <div className="d-flex gap-3 overflow-auto">
        {songs.map((song) => (
          <SongCard
            key={song.id}
            title={song.title}
            artist={song.artist.name}
            image={song.album.cover_medium}
          />
        ))}
      </div>
    </div>
  )
}

export default SongsSection
