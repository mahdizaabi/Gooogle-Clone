import React from 'react';
import "./SidebarOption.css";
import { Avatar, IconButton } from "@material-ui/core";


const SideBarOption = ({Icon, title, number, selected}) => {
    return(
        <div className={`Sidebaroption ${selected && "Sidebaroption--active" }`}>
            <Icon />
            <h3> {title} </h3>
            <p> {number} </p>
        </div>
    )
}

export default SideBarOption;