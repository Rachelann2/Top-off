import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Gallery from "../components/Animations";


function gallery() {
    return (
        <div>
            <Nav></Nav>
            <Gallery></Gallery>
        </div>
    )
}

export default gallery;