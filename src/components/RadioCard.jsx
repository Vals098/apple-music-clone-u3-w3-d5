const RadioCard = function ({ title, image }) {
  return (
    <div>
      <p className="fw-bold text-secondary">NUOVA STAZIONE RADIO</p>
      <h3>{title}</h3>
      <img src={image} className="img-fluid flex-fill rounded-4"/>
    </div>
  )
}

export default RadioCard
