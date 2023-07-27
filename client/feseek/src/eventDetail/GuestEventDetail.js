import React from 'react';
import axios from 'axios';

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
        axios.get("/api/event/detail/"+id)
    }

    render(){
        const{id,usersId,eventName,startDate,endDate,openTime,address,access,map,costs,areasId,detail,organizer,url,urlFirst,urlSecond,urlThird,urlForth,urlFifth,contactAddress,showModal,events} = this.state;
        return(
            <div class="body">
                <h1>ゲストイベント詳細画面　タイトル</h1>
                <img src="　"></img>
                
                <p>ここに詳細文をたくさん記載</p>

                <h2>基本情報</h2>
                <table class="list">
                    <tr>
                        <th>イベント名</th> <td>{eventName}</td>
                    </tr>
                    <tr>
                        <th>主催者名</th> <td>い</td>
                    </tr>
                    <tr>
                        <th>開催日時</th> <td>う</td>
                    </tr>
                    <tr>
                        <th>住所</th> <td>え</td>
                    </tr>
                    <tr>
                        <th>マップURL</th> <td>お</td>
                    </tr>
                    <tr>
                        <th>アクセス</th> <td>か</td>
                    </tr>
                    <tr>
                        <th>参加費</th> <td>き</td>
                    </tr>
                    <tr>
                        <th>HP　URL</th> <td>く</td>
                    </tr>
                    <tr>
                        <th>連絡先</th> <td>け</td>
                    </tr>
                </table>

                <div class="side">
                    <div class="review">
                    <h3>口コミ</h3>
                        <br />
                        <iframe src="./review"></iframe>
                    </div>

                    <div class="timeline">
                    <h3>タイムライン</h3>
                        <br />
                        <iframe src="./Timeline"></iframe>
                    </div>
                </div>


            </div>
        );
    }
}