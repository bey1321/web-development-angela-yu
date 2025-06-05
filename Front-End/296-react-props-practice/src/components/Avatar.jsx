import React from "react";

export function Avatar(props) {
    return (
        <img
            src={props.img}
            alt="avatar_img"
            className="circle-img"
        />
    )
}