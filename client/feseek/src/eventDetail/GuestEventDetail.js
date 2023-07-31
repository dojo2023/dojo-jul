import React from 'react';
import axios from 'axios';
import './EventDetail.css';
import GuestMenubar from '../menubar/GuestMenubar';

export default class GuestEventDetail extends React.Component{

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
        modSubject: "",
        modsatisfaction: "",
        modsecurity: "",
        modagain: "",
        modatmosphere: "",
        modcontinuation: "",
        modcomment: "",
        modrevImage: "",
        
    }
}



componentDidMount(){
    const{id} = this.state;

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
        <div>
            <header>
                <GuestMenubar></GuestMenubar>
            </header>
            <body>
            <div className="eventh1">
                    <h1>イベント詳細</h1>
                    </div>
                    <br />
                    <p className='top_title'>{event.eventName}</p>
                    <p><img src={event.urlFirst} height="300px"></img></p>
                    <p className='top_detail'>{event.detail}</p>

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
                    <button className="btnP" onClick={() =>{this.modDetail()}}>投稿</button>
                    <br />
                    <iframe src="./review"></iframe>
                </div>

                <div className="timeline">
                <h2>タイムライン</h2>
                    <br />
                    <iframe className="iframe_tl" src="./Timeline"></iframe>
                </div>
            </div>
        </body>

            {/* モーダルウィンドウ(送信) */}
            {showModal &&
                <div id="overlay">
                    <div id="content">
                        <button class="round_btn" onClick={this.toggleModal}></button>
                        <div><h3>口コミ投稿</h3></div>
                            件名<input type="text" name="modSubject"/>
                            <br />
                            評価<div>
                                    <input type="checkbox" id="item1" name="modsatisfaction" />
                                    <label for="modsatisfaction">満足か</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="item2" name="modatmosphere" />
                                    <label for="modatmosphere">雰囲気が良い</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="item3" name="modsecurity" />
                                    <label for="modsecurity">治安が良い</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="item4" name="modagain" />
                                    <label for="modagain">また来たい</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="item15" name="modcontinuation" />
                                    <label for="horns">続いて欲しい</label>
                                </div>

                            内容<br />
                            <textarea name="modcomment" rows="4" cols="70"></textarea>
                            <br />
                            画像<br />
                            <input type="file" name="modrevImage" accept="image/*"></input>
                            
                            <br />
                        <button class="btn" type="submit" name="post">投稿</button>
                    </div>
                </div>
            }


        </div>
    );
}
}