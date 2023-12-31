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
import NewUserRegister from './user/NewUserRegister';
import UserEdit from './user/UserEdit';
import GuestEventList from './eventList/GuestEventList';
import GeneralEventList from './eventList/GeneralEventList';
import SponsorEventList from './eventList/SponsorEventList';
import Timeline from './eventDetail/Timeline';
import GuestMenubar from './menubar/GuestMenubar';
import GeneralProfile from './profile/GeneralProfile';
import GeneralEventDetail from './eventDetail/GeneralEventDetail';
import GuestEventDetail from './eventDetail/GuestEventDetail';
import SponsorEventDetail from './eventDetail/SponsorEventDetail';
import Review from './eventDetail/Review';
import SponsorProfile from './profile/SponsorProfile';
import MyEventList from './myReviewList/MyEventList';
import SponsorMenubar from './menubar/SponsorMenubar';
import AdminMenubar from './menubar/AdminMenubar';


export default class App extends React.Component {

  handleSearch = (keyword) => {
    console.log('handleSearch:' + keyword);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/ConfirmForId' element={<ConfirmForId></ConfirmForId>}></Route>
              <Route path='/ConfirmForPassword' element={<ConfirmForIPassword></ConfirmForIPassword>}></Route>
              <Route path='/IdReRegister' element={<IdReRegister></IdReRegister>}></Route>
              <Route path='/PasswordReRegister' element={<PasswordReRegister></PasswordReRegister>}></Route>
              <Route path="/generalMenubar" element={<GeneralMenubar></GeneralMenubar>}></Route>
              <Route path="/eventSearch" element={<EventSearch></EventSearch>}></Route>
              <Route path="/MyReviewList" element={<MyReviewList></MyReviewList>}></Route>
              <Route path='/AdminInquiryList' element={<AdminInquiryList></AdminInquiryList>}></Route>
              <Route path='/GeneralAndSponsorInquiryList' element={<GeneralAndSponsorInquiryList></GeneralAndSponsorInquiryList>}></Route>
              <Route path='/GeneralAndSponsorInquiryDetail' element={<GeneralAndSponsorInquiryDetail></GeneralAndSponsorInquiryDetail>}></Route>
              <Route path='/AdminInquiryDetail' element={<AdminInquiryDetail></AdminInquiryDetail>}></Route>
              <Route path='/NewUserRegister' element={<NewUserRegister></NewUserRegister>}></Route>
              <Route path='/UserEdit' element={<UserEdit></UserEdit>}></Route>
              <Route path='/GuestEventList' element={<GuestEventList handleSearch={this.handleSearch}></GuestEventList>}></Route>
              <Route path='/GeneralEventList' element={<GeneralEventList handleSearch={this.handleSearch}></GeneralEventList>}></Route>
              <Route path='/SponsorEventList' element={<SponsorEventList handleSearch={this.handleSearch}></SponsorEventList>}></Route>
              <Route path='/Timeline' element={<Timeline></Timeline>}></Route>
              <Route path="/guestMenubar" element={<GuestMenubar></GuestMenubar>}></Route>
              <Route path="/generalProfile" element={<GeneralProfile></GeneralProfile>}></Route>
              <Route path="/generalEventDetail" element={<GeneralEventDetail></GeneralEventDetail>}></Route>
              <Route path="/guestEventDetail" element={<GuestEventDetail></GuestEventDetail>}></Route>
              <Route path="/sponsorEventDetail" element={<SponsorEventDetail></SponsorEventDetail>}></Route>
              <Route path="/review" element={<Review></Review>}></Route>
              <Route path='/SponsorProfile' element={<SponsorProfile></SponsorProfile>}></Route>
              <Route path='/MyEventList' element={<MyEventList></MyEventList>}></Route>
              <Route path='/SponsorMenubar' element={<SponsorMenubar></SponsorMenubar>}></Route>
              <Route path='/AdminMenubar' element={<AdminMenubar></AdminMenubar>}></Route>
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
