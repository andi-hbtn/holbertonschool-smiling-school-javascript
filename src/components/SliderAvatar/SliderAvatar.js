import { useState } from "react";
import avatars_slider from "../../db/AvatarSlider/avatarSlider";
import {Container,Row,Col} from 'react-bootstrap';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import './SliderAvatar.css';


const  SliderAvatar = () =>{
    const [active, setActive] = useState(0);

    const goBack = () =>{
        setActive((prevState) => {
            if (prevState <= 0) {
              return (prevState = avatars_slider.length - 1);
            } else {
              return prevState - 1;
            }
        });
    }

    const goNext = () =>{
        setActive((prevState) => {
            if (prevState >= avatars_slider.length - 1) {
              return (prevState = 0);
            } else {
              return prevState + 1;
            }
          });
    }

    return (
        <section className='slider-avatar-main'>
            <Container>
                <Row>
                    <Col md={3} lg={3} className='avatar-image'>
                        <MdOutlineArrowBackIos onClick={goBack}/>
                        <img src={avatars_slider[active].src} alt='avatar-slider'/>
                    </Col>
                    <Col md={9} lg={9} className='avatar-desc'>
                        <p>{avatars_slider[active].quote}</p>
                        <h5>{avatars_slider[active].name}</h5>
                        <MdOutlineArrowForwardIos onClick={goNext}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SliderAvatar;