// import React, { Component } from 'react';
// import './App.css';
// import Header from './components/common/Header';
// import Footer from './components/common/Footer';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;

import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;