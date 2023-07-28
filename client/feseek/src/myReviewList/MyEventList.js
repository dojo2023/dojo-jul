import React from "react";
import axios from "axios";
import SponsorMenubar from "../menubar/SponsorMenubar";
import './MyEventList.css';

/* 主催者画面　投稿したイベントの一覧表示 */
export default class MyEventList extends React.Component{
    constructor(props){
        super(props);
        //stateの設定
        this.state = {
            events:[],
            id:"idです",
            users_id:"users_idです",    //自分のイベントだけ取得するため
            event_name:"event_nameです",
            janres_id:"janres_idです",
            start_date:"start_dateです",
            end_date:"end_dateです",
            open_time:"open_timeです",
            address:"addressです",
            access:"accessです",
            map:"mapです",
            costs:"constsです",
            areas_id:"area_idです",
            detail:"detailです",
            organizer:"organizerです",
            url:"urlです",
            url_first:"url_firstです",
            url_second:"url_secondです",
            url_third:"url_thirdです",
            url_forth:"url_forthです",
            url_fifth:"url_fifthです",
            contact_address:"contact_addressです",
            showModal:false,
            // events:[],
            // id:"",
            // users_id:"",
            // event_name:"",
            // start_date:"",
            // end_date:"",
            // open_time:"",
            // address:"",
            // access:"",
            // map:"",
            // costs:"",
            // areas_id:"",
            // detail:"",
            // url:"",
            // url_first:"",
            // url_second:"",
            // url_third:"",
            // url_forth:"",
            // url_fifth:"",
            // contact_address:"",
            // showModal:false,
        }
    }

    //マウント後に動作する
    componentDidMount(){
        // axios.get("/api/EventList")
    }

    //投稿ボタンでモーダル呼び出し
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

    render(){
        const{id,users_id,event_name,janres_id,start_date,end_date,open_time,address,access,map,costs,areas_id,detail,organizer,url,url_first,url_second,url_third,url_forth,url_fifth,contact_address,showModal} = this.state;
        return(
            <div>
                <header>
                    <SponsorMenubar></SponsorMenubar>   {/*上部メニュー*/}
                </header>
                <body>
                    {/* イベント一覧表示部分 */}
                    <div class="eventList">
                        <h1>投稿したイベント一覧</h1>
                    {/*投稿したイベントの個数文回す */}
                    <table class="list">
                        <tr>
                                <th>イベント名</th>
                                <td>{event_name}</td>
                                <th>ジャンル</th>
                                <td>{janres_id}</td>
                            </tr>
                            <tr>
                                <th>主催期間</th>
                                <td>{start_date} ～ {end_date}</td>
                                <th>開催時間</th>
                                <td>{open_time}</td>
                            </tr>
                            <tr>
                                <th>都道府県</th>
                                <td>{areas_id}</td>
                                <th>住所</th>
                                <td>{address}</td>
                            </tr>
                            <tr>
                                <th>マップURL</th>
                                <td>{map}</td>
                                <th>アクセス</th>
                                <td>{access}</td>
                            </tr>
                            <tr>
                                <th>参加費</th>
                                <td>{costs}</td>
                                <th>ホームページURL</th>
                                <td>{url}</td>
                            </tr>
                            <tr>
                                <th>主催者</th>
                                <td>{organizer}</td>
                                <th>連絡先</th>
                                <td>{contact_address}</td>
                            </tr>
                            <tr>
                                <th>詳細</th>
                                <td>{detail}</td>
                            </tr>
                            <tr>
                                <th>写真</th>
                                <td>{url_first}</td>
                                <td>{url_second}</td>
                                <td>{url_third}</td>
                                <td>{url_forth}</td>
                                <td>{url_fifth}</td>
                            </tr>
                        </table>

                        {/*投稿モーダルを開くボタン*/}
                        <button className="default_button" onClick={() =>{this.postEvent()}}>イベント投稿</button>
                    </div>
                </body>
                {/* イベント投稿モーダル */}
                {showModal &&
                    <div id="overlay">
                        <div id="content">
                            <table>
                                <tr>
                                    <th>イベント名</th>
                                    <td><input type="text" placeholder="※必須"></input></td>
                                </tr>
                                <tr>
                                    <th>ジャンル</th>
                                    <td>
                                        <input type="checkbox" value="1" />
                                        <label>食べる</label>
                                        <input type="checkbox" value="2" />
                                        <label>見る</label>
                                        <input type="checkbox" value="3" />
                                        <label>体験する</label>
                                        <input type="checkbox" value="4" />
                                        <label>その他</label>
                                    </td>
                                </tr>
                                <tr>
                                    <th>開催期間</th>
                                    <td>
                                        開始日<input type="date"></input>
                                        終了日<input type="date"></input>
                                    </td>
                                </tr>
                                <tr>
                                    <th>開催時間</th>
                                    <td><input type="text" placeholder="※必須"></input></td>
                                </tr>
                                <tr>
                                    <th>都道府県</th>
                                    <td>
                                        <select name="pref">
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
                                    <td><td><input type="text" placeholder="※必須"></input></td></td>
                                </tr>
                                <tr>
                                    <th>マップURL</th>
                                    <td><td><input type="text" placeholder="※必須"></input></td></td>
                                </tr>
                                <tr>
                                    <th>アクセス</th>
                                    <td><td><input type="text" placeholder="※必須"></input></td></td>
                                </tr>
                                <tr>
                                    <th>詳細</th>
                                    <td><td><input type="text" placeholder="※必須"></input></td></td>
                                </tr>
                                <tr>
                                    <th>参加費</th>
                                    <td><td><input type="text" placeholder="※必須"></input></td></td>
                                </tr>
                                <tr>
                                    <th>主催者</th>
                                    <td><td><input type="text" placeholder="※必須"></input></td></td>
                                </tr>
                                <tr>
                                    <th>ホームページURL</th>
                                    <td><td><input type="text"></input></td></td>
                                </tr>
                                <tr>
                                    <th>連絡先</th>
                                    <td><td><input type="text"></input></td></td>
                                </tr>
                                <tr>
                                    <th>写真</th>
                                    <td><input type="file"></input></td>
                                </tr>
                            </table>
                            <button>投稿</button>
                            <button onClick={this.toggleModal}>閉じる</button>
                        </div>
                    </div>
                }
            </div>   
        );
    }
}