import { Button, Dropdown } from "react-bootstrap"

const NavBar = function () {
  return (
    <>
      {/* MOBILE VIEW NAVBAR */}
      <div className="navbar d-flex d-md-none justify-content-between align-items-center p-3">
        <Dropdown>
          <Dropdown.Toggle variant="dark" className="text-danger">
            ☰
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Home</Dropdown.Item>
            <Dropdown.Item>Novità</Dropdown.Item>
            <Dropdown.Item>Radio</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <img
          src="../../assets/logos/music.svg"
          alt="apple music logo"
          className="img-fluid"
          style={{ width: "70px", filter: "brightness(0) invert(1)" }}
        ></img>
        <a href="#" className="text-danger text-decoration-none">
          Accedi
        </a>
      </div>

      {/* MD AND UP VIEW NAVBAR */}
      <div className="navbar d-none d-md-flex align-items-center p-3 position-relative">
        <img
          src="../../assets/logos/apple.svg"
          alt="apple music logo"
          className="img-fluid position-absolute top-50 start-50 translate-middle"
          style={{ width: "15px", filter: "brightness(0) invert(1)" }}
        ></img>
        <Button size="sm" className="login-btn px-3 bg-danger border-0 ms-auto">Accedi</Button>
      </div>
    </>
  )
}

export default NavBar
