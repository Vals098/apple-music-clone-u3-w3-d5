const Player = function () {
  return (
    <div className="player-bar d-flex justify-content-between align-items-center px-4 text-secondary">
      {/* LEFT */}
      <div className="d-flex align-items-center gap-3">
        <img
          
        />

        <div>
          <p>Titolo</p>
          <small>Artista</small>
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
