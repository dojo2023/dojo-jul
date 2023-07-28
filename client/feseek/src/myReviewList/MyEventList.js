import React from "react";
import axios from "axios";
import SponsorMenubar from "../menubar/SponsorMenubar";
import './MyEventList.css';

/* 主催者画面　投稿したイベントの一覧表示とイベント投稿処理 */
export default class MyEventList extends React.Component{
    constructor(props){
        super(props);
        //stateの設定
        this.state = {
            events:[],
            //idをBootからもらってくる必要がある(apiのURLに必要)
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
            showModal:false,
        }
    }

    componentDidMount(){
            // const {id,users_id,event_name,janres_id,start_date,end_date,open_time,address,access,map,costs,areas_id,detail,organizer,url,url_first,url_second,url_third,url_forth,url_fifth,contact_address} = this.state;
            // const data = {id,users_id,event_name,janres_id,start_date,end_date,open_time,address,access,map,costs,areas_id,detail,organizer,url,url_first,url_second,url_third,url_forth,url_fifth,contact_address};
        // const usersId = 'aaa';
        // console.log(usersId)
        // const {usersId} = this.state;
        axios.get("/api/event/sponser")
        .then( json =>{
            console.log(json.data);
            this.setState({
                events:json.data
            })
        });
    }

    onInput = (e) =>{
        //onChangeイベントでテキストボックスに入力された値を、stateに格納する処理
        this.setState ({
            [e.target.name]:e.target.value
        });
    }

    //投稿フォームモーダル呼び出し
    postEvent = () => {
        this.toggleModal();
    }

    //モーダルの表示切替
    toggleModal = () => {
        const{showModal} = this.state;
        this.setState({
            showModal: !showModal
        });
    }

    //投稿する時の処理
    eventPost = () =>{
        console.log("eventPost");
        const {usersId,eventName,startDate,endDate,openTime,address,access,map,costs,areasId,detail,organizer,url,urlFirst,urlSecond,urlThird,urlForth,urlFifth,contactAddress,showModal,events} = this.state;
        const data = {
            eventName:eventName,
            startDate:startDate,
            endDate:endDate,
            openTime:openTime,
            address:address,
            access:access,
            map:map,
            costs:costs,
            areasId:areasId,
            detail:detail,
            organizer:organizer,
            url:url,
            urlFirst:urlFirst,
            urlSecond:urlSecond,
            urlThird:urlThird,
            urlForth:urlForth,
            urlFifth:urlFifth,
            contactAddress:contactAddress
        };
        axios.post('/api/events/add',data)
        .then(json =>{
            console.log(json);
            this.toggleModal();
            this.componentDidMount();
        })
    }

    render(){
        // const{id,users_id,event_name,janres_id,start_date,end_date,open_time,address,access,map,costs,areas_id,detail,organizer,url,url_first,url_second,url_third,url_forth,url_fifth,contact_address,showModal} = this.state;
        const {id,usersId,eventName,startDate,endDate,openTime,address,access,map,costs,areasId,detail,organizer,url,urlFirst,urlSecond,urlThird,urlForth,urlFifth,contactAddress,showModal,events} = this.state;
        return(
            <div>
                <header>
                {/*上部メニュー*/}
                    <SponsorMenubar></SponsorMenubar>
                </header>
                <body>
                {/* イベント一覧表示部分 */}
                    <div className="eventList">
                        <h3>投稿したイベント一覧</h3>
                        {/*投稿したイベントの個数分回す */}
                        {events.map((event,index) =>
                            <div>
                                <table className="list">
                                    <tr>
                                            <th>イベント名</th>
                                            <td>{event.eventName}</td>
                                            <th>ジャンル</th>
                                            <td>{event.janresId}</td>
                                        </tr>
                                        <tr>
                                            <th>主催期間</th>
                                            <td>{event.startDate} ～ {event.endDate}</td>
                                            <th>開催時間</th>
                                            <td>{event.openTime}</td>
                                        </tr>
                                        <tr>
                                            <th>都道府県</th>
                                            <td>{event.areasId}</td>
                                            <th>住所</th>
                                            <td>{event.address}</td>
                                        </tr>
                                        <tr>
                                            <th>マップURL</th>
                                            <td>{event.map}</td>
                                            <th>アクセス</th>
                                            <td>{event.access}</td>
                                        </tr>
                                        <tr>
                                            <th>参加費</th>
                                            <td>{event.costs}</td>
                                            <th>ホームページURL</th>
                                            <td>{event.url}</td>
                                        </tr>
                                        <tr>
                                            <th>主催者</th>
                                            <td>{event.organizer}</td>
                                            <th>連絡先</th>
                                            <td>{event.contactAddress}</td>
                                        </tr>
                                        <tr>
                                            <th>詳細</th>
                                            <td>{event.detail}</td>
                                        </tr>
                                        {/* <tr>
                                            <th>写真</th>
                                            <td>{event.urlFirst}</td>
                                            <td>{event.urlSecond}</td>
                                            <td>{event.urlThird}</td>
                                            <td>{event.urlForth}</td>
                                            <td>{event.urlFifth}</td>
                                        </tr> */}
                                    </table>
                                    <div className="btnPosition">
                                        <button className="eventbtn">編集</button>
                                        <button className="eventbtn">削除</button>
                                    </div>
                            </div>
                        )} 
{/* ------------------------------------------------------------------------------------------------------------------------- */}
                    {/*投稿モーダルを開くボタン*/}
                    <button className="PostBtn" onClick={() =>{this.postEvent()}}>イベント投稿する</button>
                </div>
                </body>
                {/* イベント投稿モーダル */}
                {/* <form action="" method="POST"> */}
                {showModal &&
                    <div id="overlay">
                        <div id="content">
                            <table>
                                <tr>
                                    <th>イベント名</th>
                                    <td><input type="text" placeholder="※必須" onChange={this.onInput} value={eventName} name="eventName"></input></td>
                                </tr>
                                <tr>
                                    <th>ジャンル</th>
                                    <td>
                                        <input type="checkbox" value="1" onChange={this.onInput} />
                                        <label>食べる</label>
                                        <input type="checkbox" value="2" onChange={this.onInput} />
                                        <label>見る</label>
                                        <input type="checkbox" value="3" onChange={this.onInput} />
                                        <label>体験する</label>
                                        <input type="checkbox" value="4" onChange={this.onInput} />
                                        <label>その他</label>
                                    </td>
                                </tr>
                                <tr>
                                    <th>開催期間</th>
                                    <td>
                                        開始日<input type="date" onChange={this.onInput} value={startDate} name="startDate"></input>
                                        終了日<input type="date" onChange={this.onInput} value={endDate} name="endDate"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <th>開催時間</th>
                                    <td><input type="text" placeholder="※必須" onChange={this.onInput} value={openTime} name="openTime"></input></td>
                                </tr>
                                <tr>
                                    <th>都道府県</th>
                                    <td>
                                        <select name="areasId" onChange={this.onInput}>
                                        <option value="" selected>都道府県</option>
                                        <option value="1">北海道</option>
                                        <option value="2">青森県</option>
                                        <option value="3">岩手県</option>
                                        <option value="4">宮城県</option>
                                        <option value="5">秋田県</option>
                                        <option value="6">山形県</option>
                                        <option value="7">福島県</option>
                                        <option value="8">茨城県</option>
                                        <option value="9">栃木県</option>
                                        <option value="10">群馬県</option>
                                        <option value="11">埼玉県</option>
                                        <option value="12">千葉県</option>
                                        <option value="13">東京都</option>
                                        <option value="14">神奈川県</option>
                                        <option value="15">新潟県</option>
                                        <option value="16">富山県</option>
                                        <option value="17">石川県</option>
                                        <option value="18">福井県</option>
                                        <option value="19">山梨県</option>
                                        <option value="20">長野県</option>
                                        <option value="21">岐阜県</option>
                                        <option value="22">静岡県</option>
                                        <option value="23">愛知県</option>
                                        <option value="24">三重県</option>
                                        <option value="25">滋賀県</option>
                                        <option value="26">京都府</option>
                                        <option value="27">大阪府</option>
                                        <option value="28">兵庫県</option>
                                        <option value="29">奈良県</option>
                                        <option value="30">和歌山県</option>
                                        <option value="31">鳥取県</option>
                                        <option value="32">島根県</option>
                                        <option value="33">岡山県</option>
                                        <option value="34">広島県</option>
                                        <option value="35">山口県</option>
                                        <option value="36">徳島県</option>
                                        <option value="37">香川県</option>
                                        <option value="38">愛媛県</option>
                                        <option value="39">高知県</option>
                                        <option value="40">福岡県</option>
                                        <option value="41">佐賀県</option>
                                        <option value="42">長崎県</option>
                                        <option value="43">熊本県</option>
                                        <option value="44">大分県</option>
                                        <option value="45">宮崎県</option>
                                        <option value="46">鹿児島県</option>
                                        <option value="47">沖縄県</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th>住所</th>
                                    <td><input type="text" placeholder="※必須" onChange={this.onInput} value={address} name="address"></input></td>
                                </tr>
                                <tr>
                                    <th>マップURL</th>
                                    <td><input type="text" placeholder="※必須" onChange={this.onInput} value={map} name="map"></input></td>
                                </tr>
                                <tr>
                                    <th>アクセス</th>
                                    <td><input type="text" placeholder="※必須" onChange={this.onInput} value={access} name="access"></input></td>
                                </tr>
                                <tr>
                                    <th>詳細</th>
                                    <td><input type="text" placeholder="※必須" onChange={this.onInput} value={detail} name="detail"></input></td>
                                </tr>
                                <tr>
                                    <th>参加費</th>
                                    <td><input type="text" placeholder="※必須" onChange={this.onInput} value={costs} name="costs"></input></td>
                                </tr>
                                <tr>
                                    <th>主催者</th>
                                    <td><input type="text" placeholder="※必須" onChange={this.onInput} value={organizer} name="organizer"></input></td>
                                </tr>
                                <tr>
                                    <th>ホームページURL</th>
                                    <td><input type="text" onChange={this.onInput} value={url} name="url"></input></td>
                                </tr>
                                <tr>
                                    <th>連絡先</th>
                                    <td><input type="text" onChange={this.onInput} value={contactAddress} name="contactAddress"></input></td>
                                </tr>
                                {/* <tr>
                                    <th>写真</th>
                                    <td><input type="file" onChange={this.onInput} value={urlFirst}></input></td>
                                    <td><input type="file" onChange={this.onInput} value={urlSecond}></input></td>
                                    <td><input type="file" onChange={this.onInput} value={urlThird}></input></td>
                                    <td><input type="file" onChange={this.onInput} value={urlForth}></input></td>
                                    <td><input type="file" onChange={this.onInput} value={urlFifth}></input></td>
                                </tr> */}
                            </table>
                            <button onClick={this.eventPost}>投稿</button>
                            <button onClick={this.toggleModal}>閉じる</button>
                        </div>
                    </div>
                }
                {/* </form> */}
            </div>   
        );
    }
}