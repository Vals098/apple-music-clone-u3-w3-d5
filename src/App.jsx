import { Col, Container, Row } from "react-bootstrap"
import "./App.css"
import Home from "./components/Home"
import Player from "./components/Player"
import SideBar from "./components/SideBar"

function App() {
  return (
    <Container fluid className="vh-100 d-flex flex-column px-0">
      <Row className="flex-grow-1 g-0 overflow-hidden">
        <Col md={3} lg={2} className="d-none d-md-block h-100">
          <SideBar />
        </Col>

        <Col xs={12} md={9} lg={10} className="h-100">
          <Home />
        </Col>
      </Row>

      <Player />
    </Container>
  )
}

export default App
