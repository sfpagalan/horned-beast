import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
// import hornedBeastData from '../assets/data.json';



class HornedBeast extends React.Component {
  constructor() {
    super();
    this.state = {
      favorites: 0,
    };
  }

  increaseFavorites = () => {
    this.setState((prevState) => ({
      favorites: prevState.favorites + 1,
    }));
  };

  render() {
    return (
      <Card>
        <Card.Img
          className='horned-beast'
          variant='top'
          src={this.props.image_url}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Text>Horns: {this.props.horns}</Card.Text>
          <div className='icon-container'>
            <FontAwesomeIcon
              icon={faHeart}
              alt="Favorite"
              title="Favorite"
              className="heart-icon"
              onClick={this.increaseFavorites}
            />
          <span className='favorite-count'>{this.state.favorites}</span>
          </div>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeast;

// function HornedBeast({ title, image_url, description, horns }) {
//   return (
//     <div className="horned-beast">
//       <h2>{title}</h2>
//       <img src={image_url} alt={title} title={title} />
//       <p>{description}</p>
//       <p>Horns: {horns}</p>
//     </div>
//   );
// }

