import React from "react";
import "./style.css";


function Index() {
    return (


        <div class="card">
            <h5 class="card-header" id="head">This Weeks Menu</h5>
            <div class="card-body">
                <h5 class="card-title">Delivery Dinner $14 per meal</h5>
                <p class="card-text">We all have such busy lives and thinking about what to cook for dinner is the last thing anyone wants to do at the end of a long day. Let Top Off Catering bring you and your family dinner, book now!</p>



                <div class="card-header" id="smallCard">
                    Weekly Wendi Wegener Menu
  </div>
                <ul class="list-group list-group-flush" id="smallCard">
                    <li class="list-group-item">Monday: </li>
                    <li class="list-group-item">Tuesday: </li>
                    <li class="list-group-item">Wednesday: </li>
                    <li class="list-group-item">Thursday: </li>
                    <li class="list-group-item">Friday: </li>
                </ul>
                <br></br>
                <a href="#" class="btn btn-primary" id="btnGo">Book Now!</a>

            </div>
        </div>

    )
}
export default Index;