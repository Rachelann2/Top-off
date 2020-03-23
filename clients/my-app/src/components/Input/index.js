import React from "react";
import "./style.css";


function Input() {
    return (

        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputA">Any Special Requests</span>
            </div>
            <textarea class="form-control" aria-label="With textarea" ></textarea>
        </div>
    )
}

export default Input;