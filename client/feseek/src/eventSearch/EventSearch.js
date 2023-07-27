import React from 'react';
import axios from 'axios';

export default class EventSearch extends React.Component{

    handleSearch;

    constructor(prop){
        super(prop);
        //propから親のイベントハンドラ取り出し
        this.handleSearch = prop.handleSearch;
        //stateの設定
        this.state = {
            events:[],
            areas:[],
            keyword: "",
            genre: "",
            date: "",
            area: "",
            season: "",
        }
    }

// 都道府県取得したい
    // //マウント後に自動で動作する
    // componentDidMount(){
    //     //学習用にaxiosでなく、標準のfetchを利用している。
    //     fetch("/api/book")
    //     .then(res => res.json())
    //     .then(json => {
    //         console.log(json);
    //         //stateのbooksに受け取ったデータを保持する。
    //         //stateが変わると自動的に画面が再描画される。
    //         this.setState({
    //             books:json
    //         })
    //     });
    // }

    onInput = (e) => {
        this.setState({
            keyword:e.target.value
        });
    }

    keywordSearch = () => {
        const {keyword} = this.state;
        this.handleSearch(keyword);

        const data = {keyword:keyword};
        axios.post("/api/event/keysearch",data)
        .then((json) => {
          this.setState({
            events:json.data
          })
        });
    }

    // keywordSearch = (keyword) => {
    //     console.log("BookList:search:" + keyword);
    //     //POSTするデータを作る
    //     const data = {keyword:keyword};
    //     axios.post("/api/book/search",data)
    //     .then((json) => {
    //       this.setState({
    //         // books:json.data
    //       })
    //     });
    //   }

    detailSearch = () => {
        const {genre,date,area,season} = this.state;
        this.handleSearch(genre,date,area,season);

        const data = {genre:genre,date:date,area:area,season:season};
        axios.post("/api/search",data)
        .then((json) => {
          this.setState({
            events:json.data
            })
        });
    }

    render(){

        const {keyword,genre,date,area,season} = this.state;

        return(
            
            <div>
                <body>
                    <h1>イベント検索ページ</h1>

                    {/* キーワード検索*/}
                    <div className="keywordSearch">
                        <input type="text" onChange={this.onInput} value={keyword} placeholder="キーワード検索"></input>
                        <button onClick={this.keywordSearch}>検索</button>
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
                            <option>北海道</option>
                            <option>b</option>
                            <option>c</option>
                            <option>d</option>
                        </select>
                        <br/>

                        {/* ラジオボタンのvalueの書き方保留中     */}
                        季節
                        <input type="radio" name="season" value={season} checked/>春
                        <input type="radio" name="season" value={season}/>夏
                        <input type="radio" name="season" value={season}/>秋
                        <input type="radio" name="season" value={season}/>冬
                        <br/>
                            
                        <button onClick={this.detailSearch}>検索</button>
                        {/* <a href="/GuestEventList"></a> */}

                    </div>
                </body>


            </div>
        );
    }
}