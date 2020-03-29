import React from "react";
import "./style.css";

function DayOrders() {
    return (


        <div class="input-group mb-3">
            <div class="input-group-prepend" id="orderOpt">
                <label class="input-group-text" for="inputGroupSelect01">Please Provide</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01" >
                <option selected>Specific Order Request</option>
                <option value="1">Monday</option>
                <option value="2">Tuesday</option>
                <option value="3">Wednesday</option>
                <option value="3">Thursday</option>
                <option value="3">Friday</option>
                <option value="3">Future Date - Large Catering</option>
            </select>
        </div>


    )
}
export default DayOrders;