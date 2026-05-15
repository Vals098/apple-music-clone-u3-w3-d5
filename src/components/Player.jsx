import { useSelector } from "react-redux"

const Player = function () {
  const selectedSong = useSelector((state) => state.selectedSong)
  console.log(selectedSong) //vaaaaaaaaaaaaaaaaaa

  return (
    <div className="player-bar d-flex justify-content-between align-items-center px-4 text-secondary">
      {/* LEFT */}
      <div className="d-flex align-items-center gap-3 my-2">
        <img
          src={selectedSong?.image}
          alt={selectedSong?.title}
          className="rounded"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
          }}
        />
        <div>
          <p className="mb-0">{selectedSong?.title || "Select a song"}</p>
          <small>{selectedSong?.artist}</small>
        </div>
      </div>

      {/* CENTER */}
      <div>controls</div>

      {/* RIGHT */}
      <div>volume</div>
    </div>
  )
}

export default Player
