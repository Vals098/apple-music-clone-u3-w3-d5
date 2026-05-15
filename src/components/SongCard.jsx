import { useDispatch } from "react-redux"

const SongCard = function ({ title, artist, image }) {
  const dispatch = useDispatch()

  return (
    <div
      className="d-flex flex-column"
      style={{ minWidth: "180px" }}
      onClick={() =>
        dispatch({
          type: "SET_SELECTED_SONG",
          payload: {
            title,
            artist,
            image,
          },
        })
      }
    >
      <img src={image} alt={title} className="img-fluid rounded-4 mb-2" />

      <h6 className="mb-0 small">{title}</h6>

      <small className="text-secondary small">{artist}</small>
    </div>
  )
}

export default SongCard
