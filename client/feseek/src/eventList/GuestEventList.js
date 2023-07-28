import React from "react";
import axios from "axios";
import GuestMenubar from "../menubar/GuestMenubar";
import './EventList.css';

export default class EventList extends React.Component{

    handleSearch;

    constructor(props) {
        super(props);
        //propから親のイベントハンドラ取り出し
        this.handleSearch = props.handleSearch;
        this.state = {
            events: [],
            list_title:"",
            list_genre:"",
            list_prefecture:"",
            list_remarks:"",
            keyword: "",
            genre: "",
            date: "",
            area: "",
            season: "",
            showModal: false,
        }
    }

    componentDidMount(){
        // const {id,users_id,event_name,janres_id,start_date,end_date,open_time,address,access,map,costs,areas_id,detail,organizer,url,url_first,url_second,url_third,url_forth,url_fifth,contact_address} = this.state;
        // const data = {id,users_id,event_name,janres_id,start_date,end_date,open_time,address,access,map,costs,areas_id,detail,organizer,url,url_first,url_second,url_third,url_forth,url_fifth,contact_address};
    // const usersId = 'aaa';
    // console.log(usersId)
    // const {usersId} = this.state;
    axios.get("/api/event")
    .then( json =>{
        console.log(json.data);
        this.setState({
            events:json.data
        })
    });
}


    onInput = (e) => {
        this.setState({
            keyword:e.target.value
        });
    }

    //モーダルウィンドウの表示切り替え
    toggleModal = () => {
        const{showModal} = this.state;
        this.setState({
            showModal: !showModal
        });
    }

    modSearch = () =>{
        this.toggleModal();
    }

    keywordSearch = () => {
        const {keyword} = this.state;
        this.handleSearch(keyword);

        const data = {keyword:keyword};

        axios.post("/api/search",data)
        .then((json) => {
            console.log(json.data);
            this.setState({
                events:json.data
            })
            this.toggleModal();
        });
    }

    render(){
        const { events,keyword,genre,date,area,season,showModal } = this.state;
        return(
            <div>
                <header>
                    <GuestMenubar></GuestMenubar>
                </header>
                <body>
                    <h1>イベントリスト</h1>
                    <button className="default_button" onClick={() =>{this.modSearch()}}>絞り込み検索</button>
{/*                         
                        <li class="event_li">
                            <a href="/generalEventDetail">
                                <div class="list_title">一般利用者イベント詳細リンク</div><br></br>
                                <div class="list_genre">ジャンル</div>
                                <div class="list_prefecture">都道府県</div>
                                <div class="list_remarks">詳細</div>
                            </a>
                        </li>
                        <li class="event_li">
                            <a href="/sponsorEventDetail">
                                <div class="list_title">主催者イベント詳細リンク</div><br></br>
                                <div class="list_genre">ジャンル</div>
                                <div class="list_prefecture">都道府県</div>
                                <div class="list_remarks">詳細</div>
                            </a>
                        </li> */}
                    
                    {events.map((event,index) =>
                        // <table>
                        //     <tr>
                        //         <td>{event.eventName}</td>
                        //         <td>{event.janresId}</td>
                        //         <td>{event.areasId}</td>
                        //     </tr>
                        // </table>
                        
                        <a href="guestEventDetail">
                            <li class="event_li">
                                <div>{event.eventName}</div>
                                {/* <div>{event.janresId}</div>
                                <div>{event.areasId}</div> */}
                                <div>開催期間：　{event.startDate} ～ {event.endDate}</div>
                                <div>開催時間：　{event.openTime}</div>
                                <div>参加費：　{event.costs}</div>
                            </li>
                        </a>
                        
                    )} 
                   

                {/* モーダルウィンドウ(送信) */}
                {showModal &&
                    <div id="overlay">
                        <div id="content">

                                {/* 件名<input type="text"  onChange={this.onInput}/>
                                内容<input type="text" onChange={this.onInput} /> */}


                    {/* キーワード検索*/}
                    <div className="keywordSearch">
                        <input type="text" onChange={this.onInput} value={keyword} placeholder="キーワード検索"></input>
                        <button type="submit" onClick={this.keywordSearch} name="post">検索</button>
                    </div>
                    <br/>

                    {/* 詳細検索*/}
                    <div className="detailSearch">
                        ジャンル
                        <select name="genre" value={genre}>
                            <option>食べる</option>
                            <option>見る</option>
                            <option>体験する</option>
                            <option>その他</option>
                        </select>
                        <br/>
                        
                        日付
                        <input type="date" value={date}></input>
                        <br/>

                        都道府県
                        <select name="area" value={area}>
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
                        <br/>

                        {/* ラジオボタンのvalueの書き方保留中     */}
                        季節
                        <input type="radio" name="season" value={season} checked/>春
                        <input type="radio" name="season" value={season}/>夏
                        <input type="radio" name="season" value={season}/>秋
                        <input type="radio" name="season" value={season}/>冬
                        <br/>
                            
                        <a href="/GuestEventList"><button onClick={this.detailSearch}>検索</button></a>

                    </div>



                            <button onClick={this.toggleModal}>閉じる</button>
                            {/* <button type="submit" onClick={this.keywordSearch} name="post">検索</button> */}
                        </div>
                    </div>

                    
                }

                </body>
            </div>
        )
    }
}