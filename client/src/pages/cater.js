import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import { Container, Row, Col } from "../components/Grid";
import Orders from "../components/Orders";
import "./cater.css";
import Input from "../components/Input";
import DayOrder from "../components/DayOrder";
import Name from "../components/Name";



function cater() {
    return (
        <div>
            <Nav></Nav>

            <Container>
                <br></br>
                <br></br>

                <h1>Place Your Orders</h1>
                <br></br>
                <br></br>


                <Name></Name>
                <br></br>
                <DayOrder></DayOrder>
                <Orders></Orders>
                <Input></Input>


                <br></br>
                <button id="btnFix">Submit Order</button>
            </Container>


        </div>
    )
}

export default cater;