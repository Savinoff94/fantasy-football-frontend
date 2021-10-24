import './LeaderBoards.css';
import React from 'react';
import {connect} from 'react-redux';
import {loadLeaderBoard} from '../redux/actions'

class LeaderBoards extends React.Component{
    componentDidMount(){
        // console.log('leader board did mount')
        this.props.loadLeaderBoard();
    }
    render(){
        console.log('this.props.leaderBoard',this.props.leaderBoard)
        if(this.props.leaderBoard === ''){
            return(
                <div id='LeaderBoadrs'>
                    <h1>LeaderBoards</h1>
                </div>
            )
        }else{
            return(
                <div id='LeaderBoadrs'>
                    <h1>LeaderBoards</h1>
                    {
                        this.props.leaderBoard.map((item) => {
                            return(
                                <h2>{item.email} {Math.round(item.points * 10)/10}</h2>
                            )
                        })
                    }
                </div>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        leaderBoard:state.leaderBoard
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadLeaderBoard: () => dispatch(loadLeaderBoard()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LeaderBoards);