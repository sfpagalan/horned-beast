import React, { useState } from 'react';
import './App.css'
import Header from'./components/Header';
import Footer from'./components/Footer';
import Gallery from'./components/Gallery';
// import hornedBeastData from '../assets/data.json';


// function App() {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchChange = (event) => {
//     const newSearchQuery = event.target.value;
//     setSearchQuery(newSearchQuery);
//   };

//   return (
//     <div>
//       <Header subTitle='Gallery of Beasts' searchQuery={searchQuery} onSearchChange={handleSearchChange} />
//       <hr />
//       <Gallery searchQuery={searchQuery} />
//       <hr />
//       <Footer />
//     </div>
//   )
// }

// export default App

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterByHorns, setFilterByHorns] = useState('');

  const handleSearchChange = (event) => {
    const newSearchQuery = event.target.value;
    setSearchQuery(newSearchQuery);
  };

  const handleHornFilterChange = (event) => {
    const newFilterByHorns = event.target.value;
    setFilterByHorns(newFilterByHorns);
  };

  return (
    <div>
      <Header
        subTitle="Gallery of Beasts"
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        filterByHorns={filterByHorns}
        onHornFilterChange={handleHornFilterChange}
      />
      <hr />
      <Gallery 
        searchQuery={searchQuery} 
        filterByHorns={filterByHorns} 
      />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
