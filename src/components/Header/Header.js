import {Container,Row,Col,Button} from 'react-bootstrap';
import Avatar from "../Avatar/Avatar";
import avatars_data from '../../db/Avatars/avatars';
import "./Header.css";

const Header = () =>{
return(
    <Container>
      <Row>
        <Col sm={5} md={5} lg={9}>Logo</Col>
        <Col sm={7} md={7} lg={3}>
            <ul className='menu-container'>
                <li>Course</li>
                <li>Price</li>
                <li>Login</li>
            </ul>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <h1>Get schooled</h1>
          <ul>
            <li>smile</li>
            <li>grin</li>
            <li>laugh</li>
          </ul>
          <Button variant="primary">Primary</Button>
        </Col>
        {
          avatars_data.map((avatar,index)=>{
            return(
              <Col sm={12} md={3} lg={3}>
                <Avatar key={index} avatar={avatar}/>
              </Col>
            )
          })
        }
      </Row>
    </Container>
)
}

export default Header;