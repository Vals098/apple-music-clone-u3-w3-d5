import { Form, Nav } from "react-bootstrap"

const SideBar = function ({className}) {
  return (
    <div
      className={`bg-dark text-light px-4 pt-3 d-flex flex-column ${className}`}
      style={{ width: "250px" }}
    >
      <img src="../../assets/logos/music.svg" alt="apple music logo" className="img-fluid mb-4" style={{width: "80px", filter: "brightness(0) invert(1)"}}></img>
      <Form.Control size="sm" type="text" placeholder="Cerca" className="bg-dark border-secondary mb-4 search-input"/>

      <Nav className="flex-column">
        <Nav.Link className="text-light px-0">Home</Nav.Link>
        <Nav.Link className="text-light px-0">Novità</Nav.Link>
        <Nav.Link className="text-light px-0">Radio</Nav.Link>
      </Nav>
    </div>
  )
}

export default SideBar
