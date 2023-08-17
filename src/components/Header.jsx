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
                <div className="horn-filter">
                <p className="horn">AFilter by Fuzzys Horn:</p>
                    <select className="horn-select"
                    value={this.props.filterByHorns} 
                    onChange={this.props.onHornFilterChange}>
                    <option value="">All</option>
                    <option value="1">1 Horn</option>
                    <option value="2">2 Horns</option>
                    <option value="3">3 Horns</option>
                    <option value="100">100 Horns</option>
                    </select>
                </div>
                <p className="quote">When you want to click on your favorite Beast always remember that "Good things come to those who wait".</p>
            </section>
        );
    }
}

export default Header;