import React from 'react';

export default class GuestEventDetail extends React.Component{

    render(){
        return(
            <div>
                <h1>ゲストイベント詳細画面　タイトル</h1>
                <img src="　"></img>
                
                <p>ここに詳細文をたくさん記載</p>

                <h2>基本情報</h2>
                <table border="1">
                    <tr>
                        <th>イベント名</th> <td>あ</td>
                    </tr>
                    <tr>
                        <th>主催者名</th> <td>い</td>
                    </tr>
                    <tr>
                        <th>開催日時</th> <td>う</td>
                    </tr>
                    <tr>
                        <th>住所</th> <td>え</td>
                    </tr>
                    <tr>
                        <th>マップURL</th> <td>お</td>
                    </tr>
                    <tr>
                        <th>アクセス</th> <td>か</td>
                    </tr>
                    <tr>
                        <th>参加費</th> <td>き</td>
                    </tr>
                    <tr>
                        <th>HP　URL</th> <td>く</td>
                    </tr>
                    <tr>
                        <th>連絡先</th> <td>け</td>
                    </tr>
                </table>

                <h3>口コミ</h3>
                <br />
                <iframe src="./review" width="500" height="400"></iframe>

                <h3>タイムライン</h3>
                <br />
                <iframe src="./Timeline" width="500" height="400"></iframe>




            </div>
        );
    }
}