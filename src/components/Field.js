import React from "react";
import './Field.css'
import PlayerIcon from "./PlayerIcon";
import {connect} from 'react-redux';
import {loadTeamInfo} from '../redux/actions';

class Field extends React.Component {
    componentDidUpdate(){
        fetch('http://localhost:4000/teamInfo',{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify ({
                email:this.props.user.email
            })
        })
        .then(response => response.json())
        .then(response => {
            const {data} = response;
            const playerNames = [];
            const playerPoints = [];
            const cloneTeam = JSON.parse(JSON.stringify(this.props.team))
            Object.keys(cloneTeam).forEach(item => {
                console.log(item)
                if(cloneTeam[item] === ''){
                    console.log('in delete')
                    delete cloneTeam[item];
                }
            })
            data.forEach(item => {
                console.log('playerNames',playerNames)
                console.log('playerNames',playerNames)
                Object.keys(cloneTeam).forEach(player => {
                    console.log("item['player_id']",item['player_id'])
                    console.log("cloneTeam[player][player.id]",cloneTeam[player].player.id)
                    if(item['player_id'] === cloneTeam[player].player.id){
                        playerNames.push(cloneTeam[player]['player'].name)
                        playerPoints.push(item['earned_points'])
                        delete cloneTeam[player];
                    }
                })
            })
            console.log('!!!!)!)!)!!)!)!)!)!)', playerNames);
            this.props.loadTeamInfo({
                labels: playerNames,
                datasets: [{
                    data:playerPoints,
                    backgroundColor:[
                        'rgb(128, 0, 0, 0.2)','rgb(0, 255, 0, 0.2)',
                        'rgb(128, 0, 128, 0.2)','rgb(0, 128, 0, 0.2)'
                        ,'rgb(255, 0, 255, 0.2)',
                        'rgb(0, 128, 100, 0.2)','rgb(128, 128, 0, 0.2)',
                        'rgb(255, 0, 0, 0.2)','rgb(0, 0, 255, 0.2)',
                        'rgb(0, 128, 128, 0.2)','rgb(0, 255, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgb(128, 0, 0)','rgb(0, 255, 0)',
                        'rgb(128, 0, 128)','rgb(0, 128, 0)'
                        ,'rgb(255, 0, 255)',
                        'rgb(0, 128, 100)','rgb(128, 128, 0)',
                        'rgb(255, 0, 0)','rgb(0, 0, 255)',
                        'rgb(0, 128, 128)','rgb(0, 255, 255)'
                    ],
                    borderWidth: 0.5
                    }],
            })
            console.log('playerNames',playerNames)
            console.log('playerPoints',playerPoints)
            console.log('cloneTeam',cloneTeam)
            console.log('teamInfo list', response)
        })
        .catch((e) => console.log(e))
    }
    render(){
        return(
            <div id='Field'>
                <div className='fieldLayer'>
                    <PlayerIcon number='p1' position='Goalkeeper'/>
                </div>
                <div className='fieldLayer'>
                    <PlayerIcon number='p2' position='Defender'/>
                    <PlayerIcon number='p3' position='Defender'/>
                    <PlayerIcon number='p4' position='Defender'/>
                </div>
                <div className='fieldLayer'>
                    <PlayerIcon number='p5' position='Midfielder'/>
                    <PlayerIcon number='p6' position='Midfielder'/>
                </div>
                <div className='fieldLayer midfielder'>
                    <PlayerIcon number='p7' position='Midfielder'/>
                    <PlayerIcon number='p8' position='Midfielder'/>
                    <PlayerIcon number='p9' position='Midfielder'/>
                </div>
                <div className='fieldLayer'>
                    <PlayerIcon number='p10' position='Attacker'/>
                    <PlayerIcon number='p11' position='Attacker'/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        team:state.team,
        user:state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadTeamInfo: (data) => dispatch(loadTeamInfo(data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Field);