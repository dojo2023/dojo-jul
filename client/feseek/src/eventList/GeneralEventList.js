import React from "react";
import './EventList.css';

export default class EventList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
                <div>一般イベントリストページ</div>
                <ul class="event_ul">
                    <li class="event_li">
                        <a href="/guestEventDetail">
                            <div class="list_title">ゲストイベント詳細リンク</div><br></br>
                            <div class="list_genre">ジャンル</div>
                            <div class="list_prefecture">都道府県</div>
                            <div class="list_remarks">詳細</div>
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
            </div>
        )
    }
}