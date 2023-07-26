import React from "react";


export default class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title:  "Demo Componet1",
        };


    };

    componentDidMount(){
        fetch("/api/demo")
        .then(res => res.json())
        .then((json) => {
            this.setState({
                title:  json.title,
            })

        });
    }

    render(){
        const {title} = this.state;
        return(
            <div>
                <h1>{title}</h1>
            </div>
        );
    }



}
