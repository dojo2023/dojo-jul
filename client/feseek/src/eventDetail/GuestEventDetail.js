import React from 'react';
import axios from 'axios';
import './EventDetail.css';
import GuestMenubar from '../menubar/GuestMenubar';

export default class GuestEventDetail extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            events:[],
            id:"",
            usersId:"",
            eventName:"",
            startDate:"",
            endDate:"",
            openTime:"",
            address:"",
            access:"",
            map:"",
            costs:"",
            areasId:"",
            detail:"",
            url:"",
            urlFirst:"",
            urlSecond:"",
            urlThird:"",
            urlForth:"",
            urlFifth:"",
            contactAddress:"",
        }
    }

    componentDidMount(){
        const{id} = this.state;
        axios.get("/api/event/detail")
    }

    render(){
        const{id,usersId,eventName,startDate,endDate,openTime,address,access,map,costs,areasId,detail,organizer,url,urlFirst,urlSecond,urlThird,urlForth,urlFifth,contactAddress,showModal,events} = this.state;
        return(
            <div className="body">
                <header>
                    <GuestMenubar></GuestMenubar>
                </header>
                <body>
                    <h1>イベント詳細</h1>
                    <img src="　"></img>
                    
                    <p>ここに詳細文をたくさん記載</p>
                </body>
                <h2>基本情報</h2>
                <table className="list">
                    <tr>
                        <th>イベント名</th> <td>{eventName}</td>
                    </tr>
                    <tr>
                        <th>主催者名</th> <td>{organizer}</td>
                    </tr>
                    <tr>
                        <th>開催日時</th> <td>{startDate} ～ {endDate} {openTime}</td>
                    </tr>
                    <tr>
                        <th>住所</th> <td>{address}</td>
                    </tr>
                    <tr>
                        <th>マップURL</th> <td>{map}</td>
                    </tr>
                    <tr>
                        <th>アクセス</th> <td>{access}</td>
                    </tr>
                    <tr>
                        <th>参加費</th> <td>{costs}</td>
                    </tr>
                    <tr>
                        <th>HP　URL</th> <td>{url}</td>
                    </tr>
                    <tr>
                        <th>連絡先</th> <td>{contactAddress}</td>
                    </tr>
                </table>

                <div className="side">
                    <div className="review">
                    <h2>口コミ</h2>
                        <br />
                        <iframe src="./review"></iframe>
                    </div>

                    <div className="timeline">
                    <h2>タイムライン</h2>
                        <br />
                        <iframe src="./Timeline"></iframe>
                    </div>
                </div>


            </div>
        );
    }
}