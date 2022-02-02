import React from 'react';
import {Link} from "react-router-dom";

export default function Header() {

    return (
        <header>
            <h1 align='center'>Conc<a>Air</a>ge</h1>
            <nav>
                <ul>
                    <li><Link to="/">ホーム</Link></li>
                    <li><Link to="/form">レコメンド</Link></li>
                </ul>       
            </nav>
        </header>
    )
}