import { Button, Col, Container, Row } from "react-bootstrap"
import headerImg from "../assets/img/guys.png"
import { ArrowRightCircle } from "react-bootstrap-icons"

export const Banner = () => {
    return (
        <section className="banner">
            <div id="confetti-wrapper">
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
            </div>
            <Container>
                <Row className="align-items-center w-100">
                    <Col className="column-1 text-center" xs={12} md={6} xl={7}>
                        <h1 className="promo-text">
                            <div>30%</div>
                            <div>Sport Bonus</div>
                        </h1>
                        <Button href="https://k9inr1.com/en/promotion" variant="warning" size="lg">Click here to get free bonus <ArrowRightCircle size={25} /></Button>
                    </Col>
                    <Col className="column-2" xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Image" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}