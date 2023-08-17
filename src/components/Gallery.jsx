import React from 'react';
import HornedBeast from './HornedBeast';
import SelectedBeast from './SelectedBeast';
import hornedBeastData from '../assets/data.json';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false, //property to track whether i want to show the modal or not
      selectedBeast: (''), //null. putting this here to remember. this property should have my data thats why it's null.
    };
  }

  openModal = (beast) => { //openModal takes my beasts object as an argument and set the state to show my modal
    this.setState({
      showModal: true,
      selectedBeast: beast, //this sets to give the data from beasts. 
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false, //this just sets the show modal to false and resets the selectedBeast
      selectedBeast: (''), //null same as above
    });
  };

  render() { //searchBeast is to filter my fuzzies using the searchQuery i got prom props in App.jsx
    const searchBeasts = hornedBeastData.filter((beast) => {
      const regex = new RegExp(this.props.searchQuery, 'i');
      return (
        (regex.test(beast.title) || regex.test(beast.description)) &&
        (!this.props.filterByHorns || beast.horns === parseInt(this.props.filterByHorns))
      );
    });

    return (
        <div className='gallery'>
          {searchBeasts.map((beast) => ( //change the hornedBeastData to searchBeasts.map to enable the search fuzzies
            <HornedBeast
              key={beast._id}
              beast={beast}
              openModal={this.openModal}
            />
          ))}
          {this.state.showModal && ( //if the showModal is true then the component is rendered, if not then it will not render.
            <SelectedBeast
              showModal={this.state.showModal} //is a prop passed to the selectedbeast component setting the show modal prop the value of this state show modal. this allows the selectedbeast component to know whether it should display as a modal or not.
              selectedBeast={this.state.selectedBeast} //setting the selectedbeast prop the valuea of this state selectedbeast. provides the selectedbeast component with the data of the beasts that needs to be displayed in the modal.
              closeModal={this.closeModal} //last prop passed. sets the closemodal prop of the selectedbeast component to the closemodal function defined above. allows selectedbeast component to trigger the closing of the modal when needed.
            />
          )}
        </div>
    );
  }
}

export default Gallery;
