import React from 'react';

import logo from './logo.svg';
import './App.css';
import EventSearch from './eventSearch/EventSearch';
import MyReviewList from './myReviewList/MyReviewList';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyEventList from './myReviewList/MyReviewList';


export default class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/eventSearch" element={<EventSearch></EventSearch>}></Route>
              <Route path="/MyReviewList" element={<myReviewList></myReviewList>}></Route>
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
