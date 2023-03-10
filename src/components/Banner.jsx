import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    const imgStyle = {
        margin: "2vw",
        width : "95vw",
        height : "80vh"

        // maxWidth: '200vw',
        // maxHeight: '200vh'
    }
    return (

        <Carousel className='d-none d-md-block'>
            <Carousel.Item>
                <img
                    style={imgStyle}
                    className="d-block sliderImg"
                    src="https://initiate.alphacoders.com/images/108/cropped-1920-1200-1087152.jpg?6688"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>10 % OFF</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={imgStyle}
                    className="d-block sliderImg"
                    src="https://t4.ftcdn.net/jpg/05/08/17/01/240_F_508170187_4Oonk4IG8u9eyfwSUvTASkT8hl71vRX2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Fastest Delivery</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={imgStyle}
                    className="d-block sliderImg"
                    src="https://t4.ftcdn.net/jpg/04/45/36/53/240_F_445365328_iYlAgTM59RC6iufkvQemTEtbwsqJZEEN.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner