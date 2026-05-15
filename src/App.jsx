import { Col, Container, Row } from "react-bootstrap"
import "./App.css"
import Home from "./components/Home"
import Player from "./components/Player"
import SideBar from "./components/SideBar"

function App() {
  return (
   <Container fluid className="vh-100 d-flex flex-column px-0">
      {/* <div className="d-flex flex-grow-1"> */}
      <Row className="flex-grow-1 g-0">
        <Col md={3} lg={2} className="d-none d-md-block">
          <SideBar className="d-none d-md-block" />
        </Col>
        <Col xs={12} md={9} lg={10}>
          <Home />
        </Col>
        {/* </div> */}
      </Row>
      <Player />
    </Container>
  )
}

export default App
