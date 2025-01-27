import Card from 'react-bootstrap/Card';
import "./Avatar.css";

const Avatar = (props) => {
    // console.log(props);


  return (
    <Card style={{ width: '18rem' }} className="avatar-container">
      <Card.Img variant="top" src={props.avatar.image}  className="image-avatar"/>
      <Card.Body>
        <Card.Title>{props.avatar.name}</Card.Title>
        <Card.Text>
          {props.avatar.quote}
        </Card.Text>
        <Card.Subtitle>
            {props.avatar.year}
        </Card.Subtitle>
        
      </Card.Body>
    </Card>
  );
}

export default Avatar;