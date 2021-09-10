import React, { useState } from "react";
import {Chat} from './Chat/Chat'
import { Events } from "./Events/Events";
import { Profile } from "./Profile/Profile";

export function Site() {
    const [page, setPage] = useState('events')
    let pageCode = <Events />;

    if (page === "chat") {
        pageCode = <Chat />;
    } else if (page === "profile") {
        pageCode = <Profile />;
    }

    return <>
        <NavBar currentPage={page} onClick={setPage}/>
        {pageCode}
        </>;
}

function NavBar({currentPage, onClick})  {

    function navClass({page}) {
        let className = "nav-item";
        if (page === currentPage) {
            className = "active";
        }
        return className;
    }

    return (<nav className="navbar">
    <a href="" className="">Kevent</a>
    <ul>
        <li className={navClass("events")}>
            <a href="#" className="nav-link" onClick={() => onClick('events')} >EVENTS</a>
        </li>
        <li className="nav-item">
            <a href="#" className={navClass("chat")} onClick={() => onClick('chat')}>CHAT</a>
        </li>
        <li className="nav-item">
            <a href="#" className={navClass("profile")} onClick={() => onClick('profile')}>PROFILE</a>
        </li>
    </ul>
</nav>);
}