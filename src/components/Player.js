import './Player.css'
import {connect} from 'react-redux';
import {savePlayerToFrontEnd,openPlayerInfo} from '../redux/actions'

const Player = (props) => {
    const {info,index,filteredPlayers,whichPositionLookFor} = props;
    const {number} = whichPositionLookFor;
    const clickHandler = (number,data) => {
        console.log('number',number)
        console.log('data',data)
        
        fetch('http://localhost:4000/saveplayer',{
            method:'POST',
            headers: {
        'Content-type':'application/json'
            },
            body: JSON.stringify({
                email:props.user.email,
                player_index:number,
                player_id:data.data.player.id,
                team_id:data.data.statistics[0].team.id
            })
        })
        .catch((e) => {
            console.log(e)
            return null;
        })
        
        
        props.savePlayerToFrontEnd(number,data)
    }
    return(
        <div id='Player'>
            <div className='player_rep_face'>
            <h3>{info.data.player.name}</h3>
            <img width='60px' height='60px' src={info.data.player.photo}/>
            </div>
            
            <div className='player_rep_team'>
            <span>{info.data.statistics[0].team.name}</span>
            <img id='team_icon' width='45px' height='45px' src={info.data.statistics[0].team.logo}/>
            </div>
            <div className='player_rep_stats'>
            <p>Appearences: {info.data.statistics[0].games.appearences === null? 0:info.data.statistics[0].games.appearences}</p>
            <p>Rating: {info.data.statistics[0].games.rating ===null? 0:Math.round(info.data.statistics[0].games.rating * 10)/10}</p>
            </div>
            <div id='buttonsPlayer'>
            <button onClick={(e) => props.openPlayerInfo(filteredPlayers[e.target.value])} value={index}>Info</button>
            <button value={index} onClick={(e) => clickHandler(number,filteredPlayers[e.target.value])}>Buy</button>
            </div>
            
        </div>

    )
}

const mapStateToProps = (state) => {
    return{
        user:state.user,
        filteredPlayers:state.filteredPlayers,
        whichPositionLookFor:state.whichPositionLookFor
    }
}

const mapDispatchToProps = (dispatch) => {
return {
    openPlayerInfo:(index) => dispatch(openPlayerInfo(index)),
    savePlayerToFrontEnd: (number,data) => dispatch(savePlayerToFrontEnd(number,data))
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Player);