import React from 'react';

export default class EventSearch extends React.Component{

    render(){
        return(
            <div>
                <h1>イベント検索ページ</h1>

                {/* キーワード検索*/}
                <p>キーワード検索</p>
                <div class="keywordSearch">
                    <input type="text"></input>
                    <button>検索</button>
                </div>

                {/* 詳細検索*/}
                <p>詳細検索</p>
                <div class="detailSearch">
                    ジャンル
                    <select name="genre">
                        <option>ジャンル</option>
                        <option>b</option>
                        <option>c</option>
                        <option>d</option>
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
                    <input type="radio" name="season" value="1" checked/>a
                    <input type="radio" name="season" value="2"/>a
                    <input type="radio" name="season" value="3"/>a
                    <input type="radio" name="season" value="4"/>a 
                        

                    <div>
                        <a href="./EventList">戻る</a>
                    </div>
                </div>



            </div>
        );
    }
}