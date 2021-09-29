import React from "react";
import {connect} from 'react-redux';
import './InfoBar.css';
import TeamInfo from "./TeamInfo";
import PlayerInfo from "./PlayerInfo";
class InfoBar extends React.Component {
    render(){
        if(this.props.teamInfoOrPlayerInfo === 'teamInfo'){
            return <TeamInfo/>
        }else{
            return<PlayerInfo/>
        }
    }
}

const mapStateToProps = (state) => {
    return{
        teamInfoOrPlayerInfo:state.teamInfoOrPlayerInfo
    }
}

export default connect(mapStateToProps)(InfoBar);