import React, { Component } from 'react';
import  { 
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import '../styles/Page.css';
import logo from '../images/logo.png';

const Home = props => (
    <h1>
        Serviços das Lojas
    </h1>
);

const Carregadores = props => (
    <h1>
        Carregadores de Celular e WiFi
    </h1>
);

const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/carregadores', name: 'Carregadores de Celular e WiFi', Component: Carregadores }
];


class Page extends Component {

    transitionStart(){
        let deco = document.querySelectorAll('.Page-deco.is-bottom.is-right')[0];
        let width = window.innerHeight*2;
        deco.style.borderBottom = `${ width }px solid #fff`;
        deco.style.borderLeft = `${ width }px solid transparent`;
    }

    transitionEnd(){
        let deco = document.querySelectorAll('.Page-deco.is-bottom.is-right')[0];
        deco.style.borderBottom = `307.2px solid #fff`;
        deco.style.borderLeft = `307.2px solid transparent`;
    }

    componentDidMount(){
        // setInterval(() => {
        //     this.transitionStart();
        //     setTimeout(this.transitionEnd, 3000);
        // }, 5000);
    }

    render(){

        return (
            <Router>
                <div className="Page">

                    <div className="Page-background"></div>

                    <div className="Page-content">
                        <ul>
                        {
                            // menu
                            routes.map(route => (
                                <li>
                                    <Link key={route.path} to={ route.path } className="Page-link">
                                        { route.name }
                                    </Link>
                                </li>
                            ))
                        }
                        </ul>
                        {
                            // componentes
                            routes.map(({ path, Component }) => (
                                <Route key={path} exact path={ path } component={ Component } />
                            ))
                        }
                    </div>

                    <div className="Page-deco is-bottom is-right"></div>
                    <img src={logo} className="Page-deco__logo" alt="Carrefour" title="Carrefour" />

                </div>
            </Router>
        );

    }

}

export default Page;