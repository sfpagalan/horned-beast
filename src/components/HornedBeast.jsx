import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
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
    const { beast, openModal } = this.props;
    return (
      <Card>
        <Card.Img
          className='horned-beast'
          variant='top'
          src={beast.image_url}
          onClick={() => openModal(beast)}
        />
        <Card.Body>
          <Card.Title>{beast.title}</Card.Title>
          <Card.Text>{beast.description}</Card.Text>
          <Card.Text className='horns'>Horns: {beast.horns}</Card.Text>
          <div className='icon-container'>
            {/* <Button variant="primary" onClick={this.increaseFavorites}> */}
            <FontAwesomeIcon
                icon={faHeart}
                alt="Favorite"
                title="Favorite"
                className="heart-icon"
                onClick={this.increaseFavorites}
                />
            {this.state.favorites}
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

