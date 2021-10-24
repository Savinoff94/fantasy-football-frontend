import React from 'react';
import './PlayerIcon.css';
import {connect} from 'react-redux';
import {savePlayerToFrontEnd,clearPlayerToPresent,fetchPlayers,currentPageOne,closePlayerInfo} from '../redux/actions'
import "animate.css"
class PlayerIcon extends React.Component {
    componentDidMount(){
        console.log("Player Icon")
        fetch('http://localhost:4000/downloadplayerdata',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify ({
                    email:this.props.user.email,
                    player_index:this.props.number
                })
            })
            .then(response => {
                if(response.status === 404){
                    throw new Error (`404:${this.props.number}`)
                }else{
                    return response.json()
                }
            })
            .then(data => {
                console.log('data',data)
                this.props.savePlayerToFrontEnd(this.props.number,data)
            })
            .catch(e => {
            console.log(e);
        })
    } 
    clickHandler = () => {
        console.log('1')
        this.props.currentPageOne();
        console.log('2');
        this.props.closePlayerInfo();
        this.props.clearPlayerToPresent();
        this.props.fetchPlayers(this.props.number,this.props.position,1)
    }

    
    render(){
        const {number,position,team} = this.props;
        // console.log('pageCurrentPlayers',pageCurrentPlayers)
        // console.log('number',number)
        // console.log('position',position)
        // return <button onClick={() => this.props.getSearchPlayerList(number,position)}>Player</button>
        // return <button onClick={() => this.props.fetchPlayers(number,position,pageCurrentPlayers)}>Player</button>
        // return <button onClick={() => this.props.fetchPlayers(number,position,1)}>Player</button>
        if(team[`${number}`] === ''){
            return <button id='playerButton' onClick={this.clickHandler}>Player</button>
        }else{
            return (
                <div>
                    <img id='playerImg' onClick={this.clickHandler} src={this.props.team[this.props.number].data.player.photo}/>
                </div>
            ) 
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        user:state.user,
        pageCurrentPlayers:state.pageCurrentPlayers,
        whichPositionLookFor:state.whichPositionLookFor,
        team:state.team
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        // getSearchPlayerList: (number,position) => dispatch(getSearchPlayerList(number,position))
        fetchPlayers: (number,position,page) => dispatch(fetchPlayers(number,position,page)),
        currentPageOne: () => dispatch(currentPageOne()),
        closePlayerInfo: () => dispatch(closePlayerInfo()),
        clearPlayerToPresent: () => dispatch(clearPlayerToPresent()),
        savePlayerToFrontEnd: (number,data) => dispatch(savePlayerToFrontEnd(number,data))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PlayerIcon);

