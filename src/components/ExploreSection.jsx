import { Col, Container, Row } from "react-bootstrap"

const ExploreSection = function () {
  const categories = [
    "Esplora per genere",
    "Worldwide",
    "Video musicali",
    "Decenni",
    "Classifiche",
    "Nuovi artisti",
    "Attività e stati d'animo",
    "Audio spaziale",
    "Hit del passato",
  ]

  return (
    <Container className="mt-5 px-0">
      <h2 className="mb-4">Altro da esplorare</h2>

      <Row className="g-3">
        {categories.map((category, index) => (
          <Col xs={12} md={4} key={index}>
            <div className="explore-card d-flex justify-content-between align-items-center text-danger">
              <span>{category}</span>
              <span>›</span>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ExploreSection
