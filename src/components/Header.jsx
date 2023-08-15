import React from "react";  


class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <header>
                <h1>Horned Beasts</h1>
                <h2 id="description">{this.props.subTitle}</h2>
            </header>
        )
    }
}

export default Header;