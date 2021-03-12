import React from 'react';
import "./EmailList.css";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SettingsIcon from "@material-ui/icons/Settings";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import InboxIcon from "@material-ui/icons/Inbox";
import Section from "./Section";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PeopleIcon from "@material-ui/icons/People";
import EmailRow from './EmailRow';
import "./EmailRow.css"


function EmailList() {
    return (
    <div className="emailList">
        <div className="emailList__settings">
            <div className="emailList__settingsLeft">
                <Checkbox />
                <IconButton>
                <ArrowDropDownIcon></ArrowDropDownIcon>
                </IconButton>
                <IconButton>
                <RedoIcon></RedoIcon>
                </IconButton>
                <IconButton>
                <MoreVertIcon></MoreVertIcon>
                </IconButton>                
            </div>
            <div className="emailList__settingsRight">
                <IconButton>
                    <ChevronLeftIcon></ChevronLeftIcon>
                </IconButton>
                <IconButton>
                    <ChevronRightIcon></ChevronRightIcon>
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon></KeyboardHideIcon>
                </IconButton>
                <IconButton>
                    <SettingsIcon></SettingsIcon>
                </IconButton>
            </div>
        </div>
        <div className="emailList__sections">
            <Section Icon={InboxIcon} title="primary" color="red" selected></Section>
            <Section Icon={PeopleIcon} title="Social" color="blue" ></Section>
            <Section Icon={LocalOfferIcon} title="Promotions" color="green" ></Section>
        </div>
        <div className="emailList__list">
            <EmailRow 
            title="twitch"
            subject="heey whts'up !!!"
            description="this is a test"
            time="10am"
            ></EmailRow>
            <EmailRow 
            title="twitch"
            subject="heey whts'up !!!"
            description="this is a test"
            time="10am"
            ></EmailRow>
            <EmailRow 
            title="twitch"
            subject="heey whts'up !!!"
            description="this is a testthis is a testthis is a testthis is a testthis is a testthis is a test"
            time="10am"
            ></EmailRow>
        </div>
    </div>)
}


export default EmailList;