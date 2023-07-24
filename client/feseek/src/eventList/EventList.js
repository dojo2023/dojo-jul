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
                <div>イベントリストページ</div>
                <ul class="event_ul">
                    <li class="event_li">
                        <a href="">
                            <div class="list_title">eventtitle</div><br></br>
                            <div class="list_genre">ジャンル</div>
                            <div class="list_prefecture">都道府県</div>
                            <div class="list_remarks">詳細</div>
                        </a>
                    </li>
                    <li class="event_li">
                        <a href="">
                            <div class="list_title">eventtitle</div><br></br>
                            <div class="list_genre">ジャンル</div>
                            <div class="list_prefecture">都道府県</div>
                            <div class="list_remarks">詳細</div>
                        </a>
                    </li>
                    <li class="event_li">
                        <a href="">
                            <div class="list_title">eventtitle</div><br></br>
                            <div class="list_genre">ジャンル</div>
                            <div class="list_prefecture">都道府県</div>
                            <div class="list_remarks">詳細</div>
                        </a>
                    </li>
                    <li class="event_li">
                        <a href="">
                            <div class="list_title">eventtitle</div><br></br>
                            <div class="list_genre">ジャンル</div>
                            <div class="list_prefecture">都道府県</div>
                            <div class="list_remarks">詳細</div>
                        </a>
                    </li>
                    <li class="event_li">
                        <a href="">
                            <div class="list_title">eventtitle</div><br></br>
                            <div class="list_genre">ジャンル</div>
                            <div class="list_prefecture">都道府県</div>
                            <div class="list_remarks">詳細</div>
                        </a>
                    </li>
                    <li class="event_li">
                        <a href="">
                            <div class="list_title">eventtitle</div><br></br>
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