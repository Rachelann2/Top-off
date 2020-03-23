import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar">
            <div>
                <a className="navbar-brand" href="/top-off" id="nav">
                    Our story
            </a>
                <a className="navbar-brand" href="/gallery" id="nav">
                    Gallery
            </a>
                <a className="navbar-brand" href="/menu" id="nav">
                    Menu
            </a>
            </div>

            <a className="navbar-brand" href="/" id="navTop">
                Top Off Catering
      </a>

            <div>
                <a className="navbar-brand" href="/contact" id="nav">

                    Contact us

</a>
                <a className="navbar-brand" href="/cater" id="nav">

                    Online Ordering


            </a>


            </div>


        </nav>


    );
}

export default Nav;

