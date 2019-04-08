import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import imageannotation from '../images/imageannotation.jpg';
import poseestimation from '../images/poseestimation.jpg';
import segmentation from '../images/segmentation.png';
import language from '../images/language.gif';
import profile from '../images/profileimage.png'

class Services extends React.Component {
    render() {
        return (
            <div id="services" class="services parallaxBackground">
                <div className='servicesContainer'>
                    <img src={profile} alt='logo' className='visionLogo' />
                    <h1>Our Services</h1>
                    <div className='separator'></div>
                    <div className="bigScreen">
                        <Container fluid>
                            <Row className='servicesRow'>
                                <Col lg="4" md="4" sm="5" xs='hidden'>
                                    <img src={imageannotation} alt='annotation' style={{
                                        'height': '100%',
                                        'width': '100%'
                                    }} />
                                </Col>
                                <Col lg="8" md="8" sm="7" xs='hidden' style={{
                                    'align-items': 'left'
                                }}><h3>Image Annotation</h3>
                                    <hr />
                                    <p className='description'>
                                        Image labeling gives you insight into the content of images.
                            Our expert labelers can draw perfect bounding boxes to help your model learrn.</p>
                                </Col>
                            </Row>
                            <div className='separator'></div>
                            <Row className='servicesRow'>
                                <Col lg="4" md="4" sm="5" xs='hidden'>
                                    <img src={poseestimation} alt='annotation' style={{
                                        'height': '100%',
                                        'width': '100%'
                                    }} />
                                </Col>
                                <Col lg="8" md="8" sm="7" xs='hidden' style={{
                                    'align-items': 'left'
                                }}><h3>Pose Estimation</h3>
                                    <hr />
                                    <p className='description'>Pose Dstimation Description.</p>
                                </Col>


                            </Row>
                            <div className='separator'></div>
                            <Row className='servicesRow'>
                                <Col lg="4" md="4" sm="5" xs='hidden'>
                                    <img src={segmentation} alt='annotation' style={{
                                        'height': '100%',
                                        'width': '100%'
                                    }} />
                                </Col>
                                <Col lg="8" md="8" sm="7" xs='hidden' style={{
                                    'align-items': 'left'
                                }}><h3>Image Segmentation</h3>
                                    <hr />
                                    <p className='description'>Image Segmentation Description.</p>
                                </Col>
                            </Row>
                            <div className='separator'></div>
                            <Row className='servicesRow'>
                                <Col lg="4" md="4" sm="5" xs='hidden'>
                                    <img src={language} alt='annotation' style={{
                                        'height': '100%',
                                        'width': '100%'
                                    }} />
                                </Col>
                                <Col lg="8" md="8" sm="7" xs='hidden' style={{
                                    'align-items': 'left'
                                }}><h3>Language Segmentation</h3>
                                    <hr />
                                    <p className='description'>Language Segmentation Description.</p>
                                </Col>


                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;