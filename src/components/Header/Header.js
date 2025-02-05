import {Container,Row,Col,Button,Table} from 'react-bootstrap';
import { FaCircleCheck } from "react-icons/fa6";

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
          <h1>
            {attr.headerTitle}
            {
              attr.hasLogo ? <img src={attr.headerSmile}  alt="go pro header"/> : ""
            }
          </h1>
          {
            attr.goPro ? <h4>{attr.goPro}</h4> : ""
          } 
          {
            attr.hasTwoBtn ?
              ""
              : 
              <Button variant="primary">{attr.headerBtn}</Button>
          }
        </Col>
      </Row>
      <Row>
      <Col>
        <h4 className='avatar-txt'><span>Learn</span> from pros</h4>
      </Col>
      </Row>
      <Row>
        {
          attr.areAvatar ?
          avatars_data.map((avatar,index)=>{
            return(
              <Col sm={12} md={3} lg={3} key={index}>
                <Avatar key={index} avatar={avatar}/>
              </Col>
            )
          })
          :
          <Table striped bordered hover variant="dark">
            <thead>
            <tr>
                <th></th>
                <th> <Button variant="primary">{attr.headerBtn}</Button></th>
                <th><Button variant="primary">{attr.headerBtnTwo}</Button></th>
              </tr>
              <tr>
                <th></th>
                <th>88.99</th>
                <th>269.99</th>
              </tr>
            </thead>
            <tbody>
              <tr>
               
                <td>Unlimited access to all tutorials</td>
                <td><FaCircleCheck/></td>
                <td><FaCircleCheck/></td>
              </tr>
              <tr>
                
                <td>Access Smile School private forum</td>
                <td><FaCircleCheck/></td>
                <td><FaCircleCheck/></td>
              </tr>
              <tr>
                
                <td>Access Smiles contents & Smiles Analysis</td>
                <td><FaCircleCheck/></td>
                <td><FaCircleCheck/></td>
              </tr>
            </tbody>
          </Table>
        }
      </Row>
     </Container>
   </header>
)
}

export default Header;