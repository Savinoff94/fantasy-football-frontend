import './PlayerInfo.css';
import {connect} from 'react-redux';
import {closePlayerInfo} from '../redux/actions';
import { Doughnut } from 'react-chartjs-2';
import React from 'react';

class PlayerInfo extends React.Component {
    render(){
        const data = {
            labels: [
                'appearences','duels','dribbles','key passes','tackles'
            ],
            datasets: [
                {
                    
                    data:[
                        this.props.playerToPresent.data.statistics[0].games.appearences,
                        this.props.playerToPresent.data.statistics[0].duels.total,
                        this.props.playerToPresent.data.statistics[0].dribbles.attempts,
                        this.props.playerToPresent.data.statistics[0].passes.key,
                        this.props.playerToPresent.data.statistics[0].tackles.total,
                    ],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 206, 86)',
                        'rgba(75, 192, 192)',
                        'rgba(153, 102, 255)'
                    ],
                    borderWidth: 0.5
                }]
        }
        console.log('this.props.playerToPresent',this.props.playerToPresent)
        return(
            <div id='PlayerInfo'>
                <div className='labels'>
                <span id='playerInfoClose' onClick={this.props.closePlayerInfo}>X</span>
                <h1>{this.props.playerToPresent === '' ?null:this.props.playerToPresent.data.player.name}</h1>
                {this.props.playerToPresent === ''?null:<img width='250px' height='250px' src={this.props.playerToPresent.data.player.photo}/>}
                </div>
                <div id='chartContainer'><div id='exactChart'><Doughnut data={data} height={300} width={300}/></div></div>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return{
        filteredPlayers:state.filteredPlayers,
        playerToPresent:state.playerToPresent,
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closePlayerInfo: () => dispatch(closePlayerInfo()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PlayerInfo);