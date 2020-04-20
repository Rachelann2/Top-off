import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import { Container, Row, Col } from "../components/Grid";
import Card from "../components/Card";


function Index() {
    return (
        <div>
            <Nav></Nav>

            <Container>
                <br></br>
                <br></br>
                <Card></Card>
            </Container>
        </div>
    )
}

export default Index;