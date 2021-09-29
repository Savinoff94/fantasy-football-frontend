import React from 'react';
import './PlayerList.css';
import {connect} from 'react-redux';
import {filterInput,closePlayerSearch, fetchPlayers, nextPage} from '../redux/actions'
import Player from './Player';

class PlayerList extends React.Component {
    changeHandler = (arg) => {
        const tmp = this.props.playersList.filter((item) => {
            return arg.toLowerCase() === item.player.firstname.toLowerCase().split(" ")[0].substr(0,arg.length) || arg.toLowerCase() === item.player.lastname.toLowerCase().split(" ")[0].substr(0,arg.length)
        })
        this.props.filterInput(tmp);
    }
    clickHandler = () => {
        if(this.props.pageCurrentPlayers == this.props.pagesPlayers){
            return null
        }else{
            this.props.nextPage();
            // console.log('this.props.pageCurrentPlayers',this.props.pageCurrentPlayers)
            this.props.fetchPlayers(this.props.whichPositionLookFor.number,this.props.whichPositionLookFor.position,this.props.pageCurrentPlayers)
        }
    }
    render(){
        return(
            <div id='PlayerList'>
                <div id='playerInputClose' className='flex-sides'>
                    <input onChange={(e) => this.changeHandler(e.target.value) } id='playerInput' type='text' autoComplete='off' maxLength='10' placeholder='Player name'/>
                    <button onClick={this.props.closePlayerSearch} id='playerListClose'>X</button>
                </div>
                {this.props.filteredPlayers.length === 0? null: this.props.filteredPlayers.map((item,i) => <Player info={item} index={i}/>)}
                <button id='nextPage' onClick={this.clickHandler}>Next page</button>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        playersList:state.playersList,
        pagesPlayers:state.pagesPlayers,
        pageCurrentPlayers:state.pageCurrentPlayers,
        filteredPlayers:state.filteredPlayers,
        whichPositionLookFor:state.whichPositionLookFor
    }
}

const mapDispatchToProps = (dispatch) => {
return {
    closePlayerSearch: () => dispatch(closePlayerSearch()),
    fetchPlayers: (number,position,page) => dispatch(fetchPlayers(number,position,page)),
    nextPage: () => dispatch(nextPage()),
    filterInput: (arr) => dispatch(filterInput(arr)),
    
}
}

export default connect(mapStateToProps,mapDispatchToProps)(PlayerList);