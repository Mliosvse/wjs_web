import React, {Component} from 'react';
import logo from '../images/logo.svg';
import style from '../style/App.css';
import {formatDateTime} from '../utils/util'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time:'2018-08-10'
        };
    }

    componentDidMount() {
        console.log(this.state.time);
        let time = formatDateTime(this.state.time);
       this.setState({
           time
       })
        console.log(time);
    }

    render() {
        const {time} = this.state;
        return (
            <div className={style.App}>
                <header className={style["App-header"]}>
                    <img src={logo} className={style["App-logo"]} alt="logo"/>
                    <h1 className={style["App-title"]}>Welcome to React</h1>
                </header>
                <p className={style["App-intro"]}>
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>{time}</p>
            </div>
        );
    }
}

export default Login;
