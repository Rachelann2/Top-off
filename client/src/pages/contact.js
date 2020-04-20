import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Contact from "../components/Contact";


function contact() {
    return (
        <div>
            <Nav></Nav>

            <Contact></Contact>
            <br></br>
            <br></br>
        </div>
    )
}

export default contact;