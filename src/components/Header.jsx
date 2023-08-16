import React from "react";  


class Header extends React.Component {
    render() {
        return (
            <section>
                <h1>Horned Beasts</h1>
                <h2 id="description">{this.props.subTitle}</h2>
        <input
          type="text"
          placeholder="Search images..."
          value={this.props.searchQuery}
          onChange={this.props.onSearchChange}
        />
            </section>
        );
    }
}

export default Header;