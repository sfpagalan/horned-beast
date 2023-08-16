import React from "react";  
// import HornedBeast from './HornedBeast';
// import hornedBeastData from '../assets/data.json';


class Header extends React.Component {
    render() {
        return (
            <section>
                <h1>Horned Beasts</h1>
                <h2 id="description">{this.props.subTitle}</h2>
                {/* {hornedBeastData.map((beast, index) => (
                    <HornedBeast
                        key={index}
                        image_url={beast.image_url}
                        title={beast.title}
                        description={beast.description}
                        horns={beast.horns}
                    />
                ))} */}
            </section>
        );
    }
}

export default Header;