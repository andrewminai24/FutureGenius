import React from "react";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";

import bigChartData from "variables/charts.jsx";

class LandingPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className='wrapper'>
          <div className='page-header'>
            <img
              alt='...'
              className='path'
              src={require("assets/img/brain.png")}
            />
            <img
              alt='...'
              className='path2'
              src={require("assets/img/path2.png")}
            />
            <img
              alt='...'
              className='shapes triangle'
              src={require("assets/img/triunghiuri.png")}
            />
            <img
              alt='...'
              className='shapes wave'
              src={require("assets/img/waves.png")}
            />
            <img
              alt='...'
              className='shapes squares'
              src={require("assets/img/patrat.png")}
            />
            <img
              alt='...'
              className='shapes circle'
              src={require("assets/img/cercuri.png")}
            />
            <div className='content-center'>
              <Row className='row-grid justify-content-between align-items-center text-left'>
                <Col lg='6' md='6'>
                  <h1 className='text-white'>
                    We help you find your passion <br />
                    <span className='text-white' />
                  </h1>
                  <p className='text-white mb-3' />
                  <div className='btn-wrapper mb-3'>
                    <p className='category text-success d-inline'>
                      Career assessment
                    </p>
                    <Button
                      className='btn-link'
                      color='success'
                      href='#pablo'
                      onClick={e => e.preventDefault()}
                      size='sm'
                    >
                      <i className='tim-icons icon-minimal-right' />
                    </Button>
                  </div>
                  <div className='btn-wrapper'>
                    <div className='button-container'>
                      <Button
                        className='btn-icon btn-simple btn-round btn-neutral'
                        color='default'
                        href='#pablo'
                        onClick={e => e.preventDefault()}
                      >
                        <i className='fab fa-twitter' />
                      </Button>
                      <Button
                        className='btn-icon btn-simple btn-round btn-neutral'
                        color='default'
                        href='#pablo'
                        onClick={e => e.preventDefault()}
                      >
                        <i className='fab fa-dribbble' />
                      </Button>
                      <Button
                        className='btn-icon btn-simple btn-round btn-neutral'
                        color='default'
                        href='#pablo'
                        onClick={e => e.preventDefault()}
                      >
                        <i className='fab fa-facebook' />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg='4' md='5'>
                  <img
                    alt='...'
                    className='img-fluid'
                    src={require("assets/img/brain.png")}
                  />
                </Col>
              </Row>
            </div>
          </div>
          <section className='section section-lg'>
            <section className='section'>
              <img
                alt='...'
                className='path'
                src={require("assets/img/path4.png")}
              />
              <Container>
                <Row className='row-grid justify-content-between'>
                  <Col className='mt-lg-5' md='5'>
                    <Row>
                      <Col className='px-2 py-2' lg='6' sm='12'>
                        <Card className='card-stats'>
                          <CardBody>
                            <Row>
                              <Col md='10' xs=''>
                                <div className='icon-big text-center icon-warning'>
                                  <i className='tim-icons icon-laptop text-warning' />
                                </div>
                              </Col>
                              <Col md='10' xs='10'>
                                <div className='numbers'>
                                  <CardTitle tag='p'>
                                    Take the personality test
                                  </CardTitle>
                                  <p />
                                  <p className='card-category' />
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className='px-2 py-2' lg='6' sm='12'>
                        <Card className='card-stats'>
                          <CardBody>
                            <Row>
                              <Col md='10' xs='10'>
                                <div className='icon-big text-center icon-warning'>
                                  <i className='tim-icons icon-double-right text-white' />
                                </div>
                              </Col>
                              <Col md='10' xs='10'>
                                <div className='numbers'>
                                  <CardTitle tag='p'>
                                    Get matched with potiental careers
                                  </CardTitle>
                                  <p />
                                  <p className='card-category' />
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col className='px-2 py-2'>
                        <Card className='card-stats'>
                          <CardBody>
                            <Row>
                              <Col md='4' xs='5'>
                                <div className='icon-big text-center '>
                                  <i className='tim-icons icon-bulb-63 text-info' />
                                </div>
                              </Col>
                              <Col md='10' xs='10'>
                                <div className='numbers'>
                                  <CardTitle tag='p'>
                                    Meet with a mentor
                                  </CardTitle>
                                  <p />
                                  <p className='card-category' />
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className='px-2 py-2' lg='6' sm='12'>
                        <Card className='card-stats'>
                          <CardBody>
                            <Row>
                              <Col md='4' xs='5'>
                                <div className='icon-big text-center icon-warning'>
                                  <i className='tim-icons icon-money-coins text-success' />
                                </div>
                              </Col>
                              <Col md='8' xs='7'>
                                <div className='numbers'>
                                  <CardTitle tag='p'>Get a career</CardTitle>
                                  <p />
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col md='6'>
                    <div className='pl-md-5'>
                      <h1>
                        {" "}
                        <br />
                        We set you up with a career test to see your interests
                        and match you with a mentor.
                      </h1>
                      <p />

                      <br />
                      <p>
                        When trying to figure out a career it can be frustrating
                        but with FutureGenius we change the way you look at
                        careers
                      </p>
                      <br />
                      <a
                        className='font-weight-bold text-info mt-5'
                        href='#pablo'
                        onClick={e => e.preventDefault()}
                      >
                        Show all{" "}
                        <i className='tim-icons icon-minimal-right text-info' />
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
          <section className='section section-lg'>
            <img
              alt='...'
              className='path'
              src={require("assets/img/path4.png")}
            />
            <img
              alt='...'
              className='path2'
              src={require("assets/img/path5.png")}
            />
            <img
              alt='...'
              className='path3'
              src={require("assets/img/path2.png")}
            />
            <Container>
              <Row className='justify-content-center'>
                <Col lg='12'>
                  <h1 className='text-center'>Your best benefit</h1>
                  <Row className='row-grid justify-content-center'>
                    <Col lg='3'>
                      <div className='info'>
                        <div className='icon icon-primary'>
                          <i className='tim-icons icon-money-coins' />
                        </div>
                        <h4 className='info-title' />
                        <hr className='line-primary' />
                        <p>
                          Divide details about your product or agency work into
                          parts. Write a few lines about each one. A paragraph
                          describing feature will be a feature.
                        </p>
                      </div>
                    </Col>
                    <Col lg='3'>
                      <div className='info'>
                        <div className='icon icon-success'>
                          <i className='tim-icons icon-single-02 ' />
                        </div>
                        <h4 className='info-title'>Live happier</h4>
                        <hr className='line-warning' />
                        <p>
                          Live a more fulfilled and happy life.That will bring
                          you joy.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className='section section-lg section-safe'>
            <img
              alt='...'
              className='path'
              src={require("assets/img/path5.png")}
            />
            <Container>
              <Row className='row-grid justify-content-between'>
                <Col md='5'>
                  <img
                    alt='...'
                    className='img-fluid floating'
                    src={require("assets/img/chester-wade.jpg")}
                  />
                  <Card className='card-stats bg-danger'>
                    <CardBody>
                      <div className='justify-content-center'>
                        <div className='numbers'>
                          <CardTitle tag='p' />
                          <p className='card-category text-white' />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className='card-stats bg-info'>
                    <CardBody>
                      <div className='justify-content-center'>
                        <div className='numbers'>
                          <CardTitle tag='p' />
                          <p className='card-category text-white' />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className='card-stats bg-default'>
                    <CardBody>
                      <div className='justify-content-center'>
                        <div className='numbers'>
                          <CardTitle tag='p' />
                          <p className='card-category text-white' />
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md='6'>
                  <div className='px-md-5'>
                    <hr className='line-success' />
                    <h3 />
                    <p />
                    <ul className='list-unstyled mt-5'>
                      <li className='py-2'>
                        <div className='d-flex align-items-center'>
                          <div className='icon icon-success mb-2'>
                            <i className='tim-icons icon-vector' />
                          </div>
                          <div className='ml-3'>
                            <h6>Carefully crafted components</h6>
                          </div>
                        </div>
                      </li>
                      <li className='py-2'>
                        <div className='d-flex align-items-center'>
                          <div className='icon icon-success mb-2'>
                            <i className='tim-icons icon-tap-02' />
                          </div>
                          <div className='ml-3'>
                            <h6>Amazing page examples</h6>
                          </div>
                        </div>
                      </li>
                      <li className='py-2'>
                        <div className='d-flex align-items-center'>
                          <div className='icon icon-success mb-2'>
                            <i className='tim-icons icon-single-02' />
                          </div>
                          <div className='ml-3'>
                            <h6>Super friendly support team</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className='section section-lg'>
            <img
              alt='...'
              className='path'
              src={require("assets/img/path4.png")}
            />
            <img
              alt='...'
              className='path2'
              src={require("assets/img/path2.png")}
            />
            <Col md='12'>
              <Card className='card-chart card-plain'>
                <CardHeader>
                  <Row>
                    <Col className='text-left' sm='6' />
                  </Row>
                </CardHeader>
                <CardBody />
              </Card>
            </Col>
          </section>
          <section className='section section-lg section-coins'>
            <img
              alt='...'
              className='path'
              src={require("assets/img/path3.png")}
            />
            <Container>
              <Row>
                <Col md='4'>
                  <hr className='line-info' />
                  <h1>
                    Choose a career{" "}
                    <span className='text-info'>
                      that fits your personality
                    </span>
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md='4'>
                  <Card className='card-coin card-plain'>
                    <CardHeader>
                      <img
                        alt='...'
                        className='img-center img-fluid'
                        src={require("assets/img/engineer.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className='text-center' md='12'>
                          <h4 className='text-uppercase'>Engineer</h4>
                          <span>Career</span>
                          <hr className='line-primary' />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem />
                          <ListGroupItem>starting $65,216 </ListGroupItem>
                          <ListGroupItem />
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className='text-center'>
                      <Button className='btn-simple' color='primary'>
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md='4'>
                  <Card className='card-coin card-plain'>
                    <CardHeader>
                      <img
                        alt='...'
                        className='img-center img-fluid'
                        src={require("assets/img/teacher1.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className='text-center' md='12'>
                          <h4 className='text-uppercase'>Teacher</h4>
                          <span>Career</span>
                          <hr className='line-success' />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>starting 60k</ListGroupItem>
                          <ListGroupItem />
                          <ListGroupItem />
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className='text-center'>
                      <Button className='btn-simple' color='success'>
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md='4'>
                  <Card className='card-coin card-plain'>
                    <CardHeader>
                      <img
                        alt='...'
                        className='img-center img-fluid'
                        src={require("assets/img/nurse.jpg")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className='text-center' md='12'>
                          <h4 className='text-uppercase'>Nurse</h4>
                          <span>Career</span>
                          <hr className='line-info' />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>starting $65,470</ListGroupItem>
                          <ListGroupItem />
                          <ListGroupItem />
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className='text-center'>
                      <Button className='btn-simple' color='info'>
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer />
        </div>
      </>
    );
  }
}

export default LandingPage;
