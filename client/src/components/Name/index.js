import React from "react";
import "./style.css";

function Name() {
    return (
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputA">First and Last Name</span>
            </div>
            <input class="form-control" aria-label="With textarea" ></input>
        </div>
    )
}
export default Name;