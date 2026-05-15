const RadioCard = function ({ title, image }) {
  return (
    <div className="radio-card">
      <p className="fw-bold text-secondary mb-0">NUOVA STAZIONE RADIO</p>
      <h3 className="fs-4 fw-light">{title}</h3>
      <img src={image} className="img-fluid flex-fill rounded-4"/>
    </div>
  )
}

export default RadioCard
