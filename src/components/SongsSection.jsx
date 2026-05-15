import { useEffect, useState } from "react"
import SongCard from "./SongCard"

const SongsSection = function () {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
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
  }, [])

  return (
    <div className="mt-5">
      <h2 className="mb-4">Nuove uscite</h2>
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
