import React from "react";  


class Header extends React.Component {
    render() {
        return (
            <section>
                <h1>Horned Beasts</h1>
                <h2 id="description">{this.props.subTitle}</h2>
                <div className="search-fuzzies">
                <p className="fuzzy">Adopt a Fuzzy here:</p>
                <input className="searchBar"
                type="text"
                placeholder="Search images..."
                value={this.props.searchQuery}
                onChange={this.props.onSearchChange}
                />

                </div>
            </section>
        );
    }
}

export default Header;