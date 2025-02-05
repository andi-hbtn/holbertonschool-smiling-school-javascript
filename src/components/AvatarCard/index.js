import {Card} from 'react-bootstrap';
import "./index.css";
const AvatarCard = (props)=> {

    console.log(props);

  return (
    <Card style={{ width: '18rem' }} className='card-cnt'>
      <Card.Img variant="top" src={props.data.image} />
      <Card.Body className='avatar-body'>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>
          {props.data.quote}
        </Card.Text>
        <Card.Title>{props.data.year}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default AvatarCard;