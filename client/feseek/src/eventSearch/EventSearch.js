import React from 'react';
import axios from 'axios';

export default class EventSearch extends React.Component{

    render(){
        return(
            <div>
                <h1>イベント検索ページ</h1>

                {/* キーワード検索*/}
                <div class="keywordSearch">
                    <input type="text" placeholder="キーワード検索"></input>
                    <button>検索</button>
                </div>
                <br/>

                {/* 詳細検索*/}
                <div class="detailSearch">
                    ジャンル
                    <select name="genre">
                        <option>食べる</option>
                        <option>見る</option>
                        <option>体験する</option>
                        <option>その他</option>
                    </select>
                    <br/>
                    
                    日付
                    <input type="date"></input>
                    <br/>

                    都道府県
                    <select name="prefectures">
                        <option>北海道</option>
                        <option>b</option>
                        <option>c</option>
                        <option>d</option>
                    </select>
                    <br/>
                        
                    季節
                    <input type="radio" name="season" value="1" checked/>春
                    <input type="radio" name="season" value="2"/>夏
                    <input type="radio" name="season" value="3"/>秋
                    <input type="radio" name="season" value="4"/>冬
                    <br/>
                        
                    <button>検索</button>

                    <div>
                        <a href="./EventList">戻る</a>
                    </div>
                </div>



            </div>
        );
    }
}