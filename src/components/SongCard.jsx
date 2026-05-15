const SongCard = function ({ title, artist, image }) {
  return (
    <div
      className="d-flex flex-column"
      style={{ minWidth: "180px" }}
    >
      <img
        src={image}
        alt={title}
        className="img-fluid rounded-4 mb-2"
      />

      <h6 className="mb-0 small">
        {title}
      </h6>

    </div>
  )
}

export default SongCard