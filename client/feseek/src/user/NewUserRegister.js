import React from "react";
import axios from "axios";
import './UserInfo.css';

export default class User extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            User:[],
            id:"",
            password:"",
            userName:"",
            mail:"",
            categoriesId:"",
        }
    }

    //マウント後に自動で動作する。
    componentDidMount(){
        //学習用にaxiosでなく、標準のfetchを利用している。
        fetch("/api/login")
        .then(res => res.json())
        .then(json => {
            console.log(json);
            //stateのbooksに受け取ったデータを保持する。
            //stateが変わると自動的に画面が再描画される。
            this.setState({
                User:json
            })
        });
    }

    //画面で何か入力された時に、その値をstateとして保持する。
    //これにより、JavaScript動作時に毎回画面を見に行くのではなく、画面と連動したstateだけを見ればよくなる。
    onInput = (e) => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    }    

    //新規登録処理
    newUser = () => {
        //利用するstateの値の宣言
        const {User, id, pasword, userName, mail, categoriesId} = this.state;
        //stateの値を利用しpostデータの作成
        const data = {id:id , pasword:pasword , userName:userName , mail:mail , categoriesId:categoriesId};
        //axiosだとpostが記述しやすい
        axios.post("/api/create",data)
        .then((json) => {
            console.log(json);
            this.setState({
                id:"",pasword:"",userName:"",mail:"",categoriesId:""
            });
            //追加したら再読み込み
            this.componentDidMount();
        });
    }    

    render(){
        return(
            <div className="body">
                <h1>新規登録</h1>
                <div className="around_textbox">
                    {/* <p class="user_p">ID</p> */}
                    <input type="text" className="default_textbox" name="id" onChange={this.onInput} minlength="5" required placeholder="ID(5~12文字で入力ください)"></input><br></br>
                    {/* <p class="user_p">Password</p> */}
                    <input type="password" className="default_textbox" name="pasword" onChange={this.onInput} minlength="8" required placeholder="Password(8~20文字で入力ください)"></input><br></br>
                    {/* <p class="user_p">ユーザー名</p> */}
                    <input type="text" className="default_textbox" name="userName" onChange={this.onInput} minlength="2" required placeholder="ユーザー名(2~20文字で入力ください)"></input><br></br>
                    {/* <p class="user_p">メールアドレス</p> */}
                    <input type="text" className="default_textbox" name="mail" onChange={this.onInput} required placeholder="メールアドレス"></input><br></br>
                    {/* <p class="user_p">権限選択</p> */}
                    <select className="default_select" name="categoriesId" onChange={this.onInput} >
                        <option value="">---選択してください---</option>
                        <option value="0">一般利用者</option>
                        <option value="1">主催者</option>
                    </select>
                </div>
                <p className = "Hissu" >すべて必須項目です</p>
                <input type="button" className="default_button" value="登録" onClick={this.newUser}></input>
            </div>
        )
    }
}