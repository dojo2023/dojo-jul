import React from 'react';
import axios from 'axios';
import './EventDetail.css';
import SponsorMenubar from '../menubar/SponsorMenubar';

export default class SponsorEventDetail extends React.Component{

     //親コンポーネントから受け取るデータなどがpropsに入っている。
    constructor(props) {
        super(props);
        //stateの設定。
        this.state = {
            event:[],
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

            eventDetail: "",
            showModal: false,
            modinformation: "",
            
        }
    }

    componentDidMount(){
        const test_id = 1;
        
        axios.get("/api/user/detail/"+test_id)
        .then(json =>{
            console.log(json.data)
            this.setState({
                event:json.data
            })
        })
    }

    //モーダルウィンドウの表示切り替え
    toggleModal = () => {
        const{showModal} = this.state;
        this.setState({
            showModal: !showModal
        });
    }

    //口コミ投稿ボタンを押下したときに実行する
    modDetail = () => {
        this.toggleModal();
    }

    render(){
        const{id,usersId,eventName,startDate,endDate,openTime,address,access,map,costs,areasId,detail,organizer,url,urlFirst,urlSecond,urlThird,urlForth,urlFifth,contactAddress,showModal,event} = this.state;

        return(
            <div className="body">
                <header>
                    <SponsorMenubar></SponsorMenubar>
                </header>
                <body>
                    <h1>イベント詳細</h1>
                    <img src="　"></img>

                    <p>ここに詳細文をたくさん記載</p>

                    <h2>基本情報</h2>
                    <table className="list">
                        <tr>
                            <th>イベント名</th> <td>{event.eventName}</td>
                        </tr>
                        <tr>
                            <th>主催者名</th> <td>{event.organizer}</td>
                        </tr>
                        <tr>
                            <th>開催期間</th> <td>{event.startDate} ～ {event.endDate}</td>
                        </tr>
                        <tr>
                            <th>開催時間</th> <td>{event.openTime}</td>
                        </tr>
                        <tr>
                            <th>住所</th> <td>{event.address}</td>
                        </tr>
                        <tr>
                            <th>マップURL</th> <td>{event.map}</td>
                        </tr>
                        <tr>
                            <th>アクセス</th> <td>{event.access}</td>
                        </tr>
                        <tr>
                            <th>参加費</th> <td>{event.costs}</td>
                        </tr>
                        <tr>
                            <th>HP　URL</th> <td>{event.url}</td>
                        </tr>
                        <tr>
                            <th>連絡先</th> <td>{event.contactAddress}</td>
                        </tr>
                    </table>

                    <div className="side">
                        <div className="review">
                        <h2>口コミ</h2>
                            <br />
                            <iframe className="iframe_tl" src="./review"></iframe>
                        </div>

                        <div class="timeline">
                        <h2>タイムライン</h2>
                        <br />
                            <button className="btn"　onClick={() =>{this.modDetail()}}>投稿</button>
                            <br />
                            <iframe src="./Timeline"></iframe>
                        </div>
                    </div>

                        {/* モーダルウィンドウ(送信) */}
                    {showModal &&
                        <div id="overlay">
                            <div id="content">
                            <button class="round_btn" onClick={this.toggleModal}></button>
                                <div><h3>イベントの最新情報を発信します</h3></div>
                                    内容<br />
                                    <textarea required name="modinformation" rows="10" cols="70"></textarea>
                                    <br />
                                <button type="submit" name="post">投稿</button>
                            </div>
                        </div>
                    }
                </body>
            </div>
        );
    }
}