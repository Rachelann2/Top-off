import React from "react";
import "./style.css";

function Orders() {
    return (


        <div class="input-group mb-3">
            <div class="input-group-prepend" id="orderOpt">
                <label class="input-group-text" for="inputGroupSelect01">Please Provide</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01" >
                <option selected>Dieitary Restrictions...</option>
                <option value="1">Vegetarian</option>
                <option value="2">Vegan</option>
                <option value="3">Keto</option>
                <option value="3">Celiac</option>
                <option value="3">None</option>
            </select>
        </div>


    )
}
export default Orders;