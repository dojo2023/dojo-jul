import React from 'react';
import axios from 'axios';
// import './EventSearch.css';

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
            showModal: false,
            list_title:"",
            list_genre:"",
            list_prefecture:"",
            list_remarks:"",
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

        axios.post("/api/search",data)
        .then((json) => {
            console.log(json.data);
            this.setState({
                events:json.data
            })
            this.toggleModal();
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
        const {genre,date,area,season,} = this.state;
        this.handleSearch(genre,date,area,season);

        const data = {genre:genre,date:date,area:area,season:season};
        axios.post("/api/search",data)
        .then((json) => {
          this.setState({
            events:json.data
            })
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

    render(){

        const {keyword,genre,date,area,season,showModal,list_title , list_genre , list_prefecture , list_remarks} = this.state;

        return(
            
            <div>
                <body>
                    <h1>イベント検索</h1>

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


                        <ul className="event_ul">
                        <a href="/generalEventDetail">
                            <li className="event_li">
                                <div className="list_title" value={list_title}> title </div><br></br>
                                <div className="list_genre" value={list_genre}> genre </div>
                                <div className="list_prefecture" value={list_prefecture}> area </div>
                                <div className="list_remarks"><textarea rows="5" cols="125" value={list_remarks}></textarea> </div>
                            </li>
                        </a>
                        
                        <li className="event_li">
                            <a href="/generalEventDetail">
                                <div className="list_title">一般利用者イベント詳細リンク</div><br></br>
                                <div className="list_genre">ジャンル</div>
                                <div className="list_prefecture">都道府県</div>
                                <div className="list_remarks">詳細</div>
                            </a>
                        </li>
                        <li className="event_li">
                            <a href="/sponsorEventDetail">
                                <div className="list_title">主催者イベント詳細リンク</div><br></br>
                                <div className="list_genre">ジャンル</div>
                                <div className="list_prefecture">都道府県</div>
                                <div className="list_remarks">詳細</div>
                            </a>
                        </li>
                    </ul>

                            
                        <a href="/GuestEventList"><button onClick={this.detailSearch}>検索</button></a>

                        <button onClick={() =>{this.modSearch()}}>検索モーダル</button>

                    </div>
                </body>

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


            </div>
        );
    }
}