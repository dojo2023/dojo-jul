import React from "react";
import SponsorMenubar from "../menubar/SponsorMenubar";
// import './EventList.css';

export default class EventList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            list_title:"",
            list_genre:"",
            list_prefecture:"",
            list_remarks:"",
        }
    }

    render(){
        const { list_title , list_genre , list_prefecture , list_remarks } = this.state;
        return(
            <div>
                <header>
                    <SponsorMenubar></SponsorMenubar>
                </header>
                <body>
                    <h1>イベントリスト</h1>
                    <ul class="event_ul">
                        <a href="/sponsorEventDetail">
                                <li class="event_li">
                                <div className="list_title" value={list_title}> title </div><br></br>
                                <div className="list_genre" value={list_genre}> genre </div>
                                <div className="list_prefecture" value={list_prefecture}> area </div>
                                <div className="list_remarks"><textarea rows="5" cols="125" value={list_remarks}></textarea> </div>
                            </li>
                        </a>

                        <li class="event_li">
                            <a href="/guestEventDetail">
                                <div className="list_title">ゲストイベント詳細リンク</div><br></br>
                                <div className="list_genre">ジャンル</div>
                                <div className="list_prefecture">都道府県</div>
                                <div className="list_remarks">詳細</div>
                            </a>
                        </li>
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
                        </li>
                    </ul>
                </body>
            </div>
        )
    }
}