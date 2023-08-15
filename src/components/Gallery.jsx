import React from 'react';
import HornedBeast from './HornedBeast';
import Seraphina from '../assets/Seraphina.png';
import Aurion from '../assets/Aurion.png';

class Gallery extends React.Component {
    hornedBeastsData = [
      {
        title: 'Seraphina, the Enchanted Horn',
        imageUrl: Seraphina,
        description: 'Guardian of the mystical realms. Seraphina bridges the gap between mortals and the land of the Horned Beasts.',
      },
      {
        title: 'Aurion, the Ivory Bullheart',
        imageUrl: Aurion,
        description: 'Born from the fusion of Taurus strength and lion courage. A guardian of the wild, Aurion embodies both the grounded nature of earth and the fierce spirit of the lion.',
      },
    ];

    render() {
        return (
          <div className="gallery">
            {this.hornedBeastsData.map((beast, index) => (
              <HornedBeast
                key={index}
                title={beast.title}
                imageUrl={beast.imageUrl}
                description={beast.description}
              />
            ))}
          </div>
        );
    }
}

export default Gallery;
