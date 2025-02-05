import {Container,Row,Col,Button} from 'react-bootstrap';
import Avatar from "../Avatar/Avatar";
import avatars_data from '../../db/Avatars/avatars';
import logo from "../../images/logo.png"
import "./Header.css";

const Header = ({attr}) =>{
  console.log("attr---",attr);
return(
   <header>
     <Container>
      <Row className='logo-menu-cnt'>
        <Col sm={5} md={5} lg={8}>
        <img src={logo} alt="logo header"/>
        </Col>
        <Col sm={7} md={7} lg={4}>
            <ul className='menu-container'>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/go-pro'>Go pro</a>
                </li>
                <li>Login</li>
            </ul>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12} lg={12} className='schooled-cnt'>
          <h1>{attr.headerTitle}</h1>
          <ul>
            {
              attr.headerDesc.map((el,index)=>{
                return(
                  <li key={index}>{el}</li>
                )
              })
            }
          </ul>
          <Button variant="primary">{attr.headerBtn}</Button>
        </Col>
      </Row>
      <Row>
      <Col>
        <h4 className='avatar-txt'><span>Learn</span> from pros</h4>
      </Col>
      </Row>
      <Row>
        {
          avatars_data.map((avatar,index)=>{
            return(
              <Col sm={12} md={3} lg={3} key={index}>
                <Avatar key={index} avatar={avatar}/>
              </Col>
            )
          })
        }
      </Row>
     </Container>
   </header>
)
}

export default Header;