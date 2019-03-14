import React, { Component } from 'react';
import '../styles/Page.css';
import logo from '../images/logo.png';

class Page extends Component {

    transitionStart(){
        let deco = document.querySelectorAll('.Page-deco.is-top.is-left')[0];
        let width = window.innerWidth*2;
        deco.style.borderTop = `${ width }px solid #52bfdb`;
        deco.style.borderRight = `${ width }px solid transparent`;
    }

    transitionEnd(){
        let deco = document.querySelectorAll('.Page-deco.is-top.is-left')[0];
        deco.style.borderTop = `100px solid #fff`;
        deco.style.borderRight = `100px solid transparent`;
    }

    componentDidMount(){
        // setInterval(() => {
        //     this.transitionStart();
        //     setTimeout(this.transitionEnd, 1000);
        // }, 5000);
    }

    render(){

        return (
            <div className="Page">

                <div className="Page-deco is-top is-left"></div>
                <div className="Page-deco is-top is-right"></div>

                <div className="Page-content">
                    1024x1366
                </div>

                <div className="Page-deco is-bottom is-right">
                    <img src={logo} className="Page-deco__logo" alt="Carrefour" title="Carrefour" />    
                </div>
                <div className="Page-deco is-bottom is-left"></div>

            </div>
        );

    }

}

export default Page;