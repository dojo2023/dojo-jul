import React from 'react';

import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login/Login';
import ConfirmForId from './confirm/ConfirmForId';
import IdReRegister from './confirm/IdReRegister';
import GeneralMenubar from './menubar/GeneralMenubar';
import EventSearch from './eventSearch/EventSearch';
import MyReviewList from './myReviewList/MyReviewList';
import AdminInquiryList from './InquiryList/AdminInquiryList';
import GeneralAndSponsorInquiryList from './InquiryList/GeneralAndSponsorInquiryList';
import GeneralAndSponsorInquiryDetail from './InquiryDetail/GeneralAndSponsorInquiryDetail';
import AdminInquiryDetail from './InquiryDetail/AdminInquiryDetail';
import ConfirmForIPassword from './confirm/ConfirmForPassword';
import PasswordReRegister from './confirm/PasswordReRegister';


export default class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/confirm/ConfirmForId' element={<ConfirmForId></ConfirmForId>}></Route>
              <Route path='/confirm/ConfirmForPassword' element={<ConfirmForIPassword></ConfirmForIPassword>}></Route>
              <Route path='/confirm/IdReRegister' element={<IdReRegister></IdReRegister>}></Route>
              <Route path='/confirm/PasswordReRegister' element={<PasswordReRegister></PasswordReRegister>}></Route>
              <Route path="/generalmenubar" element={<GeneralMenubar></GeneralMenubar>}></Route>
              <Route path="/eventSearch" element={<EventSearch></EventSearch>}></Route>
              <Route path="/MyReviewList" element={<MyReviewList></MyReviewList>}></Route>
              <Route path='/AdminInquiryList' element={<AdminInquiryList></AdminInquiryList>}></Route>
              <Route path='/GeneralAndSponsorInquiryList' element={<GeneralAndSponsorInquiryList></GeneralAndSponsorInquiryList>}></Route>
              <Route path='/GeneralAndSponsorInquiryDetail' element={<GeneralAndSponsorInquiryDetail></GeneralAndSponsorInquiryDetail>}></Route>
              <Route path='/AdminInquiryDetail' element={<AdminInquiryDetail></AdminInquiryDetail>}></Route>
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
