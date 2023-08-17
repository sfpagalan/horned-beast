import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';


class HornedBeast extends React.Component {
  constructor(props) { //this initializes the component's state with the props called favorites that i set to start at 0.
    super(props);
    this.state = {
      favorites: 0,
    };
  }

  increaseFavorites = () => { //this method is for updating the favorites state when the user clicks the icon.
    this.setState((prevState) => ({ //this function takes a callback to receive the previous state a parameter.
      favorites: prevState.favorites + 1, //inside the callback, it updates the favorites state by incrementing it.
    }));
  };

  render() {
    const { beast, openModal } = this.props; //this is just destructured from this.props
    return (
      //this component 'card' is from the react bootstrap library.
      <Card>
        <Card.Img
          className='horned-beast'
          variant='top'
          src={beast.image_url}
          onClick={() => openModal(beast)} //sets an event handler for the 'click' event on the image. the openmodal is called and passed the beast object as an argument and will trigger opening the modal.
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
                onClick={this.increaseFavorites} //event handler to set clicks on my icon.
                
                //this comment is for state.favorites... this state will display the current number of favorites.
                />
            {this.state.favorites}
          </div>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeast;

