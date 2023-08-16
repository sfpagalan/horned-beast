import React from 'react';
import HornedBeast from './HornedBeast';
import SelectedBeast from './SelectedBeast';
import hornedBeastData from '../assets/data.json';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: null,
    };
  }

  openModal = (beast) => {
    this.setState({
      showModal: true,
      selectedBeast: beast,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      selectedBeast: null,
    });
  };

  render() {
    const filteredBeasts = hornedBeastData.filter(beast => {
      const regex = new RegExp(this.props.searchQuery, 'i');
      return regex.test(beast.title) || regex.test(beast.description);
    });
    return (
        <div className='gallery'>
          {filteredBeasts.map((beast) => (
            <HornedBeast
              key={beast._id}
              beast={beast}
              openModal={this.openModal}
            />
          ))}
          {this.state.showModal && (
            <SelectedBeast
              showModal={this.state.showModal}
              selectedBeast={this.state.selectedBeast}
              closeModal={this.closeModal}
            />
          )}
        </div>
    );
  }
}

export default Gallery;
