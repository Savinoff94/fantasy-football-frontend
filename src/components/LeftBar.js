import React from "react";
import './LeftBar.css';
import LeaderBoards from './LeaderBoards';
import PlayerList from './PlayerList';
import {connect} from 'react-redux';
class LeftBar extends React.Component {
    render(){
        if(this.props.playerSearchOrLeaderBoards === 'leaderBoards'){
            return <LeaderBoards/>
        }else{
            return <PlayerList/>
        }
    }
}

const mapStateToProps = (state) => {
    return{
        playersList:state.playersList,
        pagesPlayers:state.pagesPlayers,
        pageCurrentPlayers:state.pageCurrentPlayers,
        filteredPlayers:state.filteredPlayers,
        playerSearchOrLeaderBoards:state.playerSearchOrLeaderBoards,
    }
}


export default connect(mapStateToProps)(LeftBar);