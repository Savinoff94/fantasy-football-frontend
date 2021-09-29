import './TeamInfo.css';
import React from 'react';
import {connect} from 'react-redux';
import {loadTeamInfo} from '../redux/actions';
import { Bar } from 'react-chartjs-2';

class TeamInfo extends React.Component {
    render(){
        const options = {
            plugins: {
                title: {
                  display: true,
                  text: "Players impact",
                  font:{
                      size:'25'
                  }
                },
                legend: {
                  display: false,
               }
            }
        }
        if(this.props.teamInfoChartData === ''){
            return(
                <div id='TeamInfo'>
                    <h1>TeamInfo</h1>
                </div>
            )
        }else{
            return(
                <div id='TeamInfo'>
                    <div id='barContainer'><Bar width={110}	height={60} options={{ responsive: true }} data={this.props.teamInfoChartData} options={options}/></div>
                </div>
            )
        }
        
    }
}

const mapStateToProps = (state) => {
    return{
        teamInfoChartData:state.teamInfoChartData,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadTeamInfo: (data) => dispatch(loadTeamInfo(data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TeamInfo);