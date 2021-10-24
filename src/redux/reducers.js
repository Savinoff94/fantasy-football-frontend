import {LOG_OUT,TEAM_INFO_CHART_DATA,LOAD_LEADER_BOARD,LOAD_USER,SAVE_PLAYER_TO_FRONTEND,CLEAR_PLAYER_TO_PRESENT,OPEN_PLAYER_INFO,FILTER_INPUT,CURRENT_PAGE_ONE,FETCH_PLAYERS,FILTER_PLAYERS,PLAYERsearch_LEADERBOARDS_TOGGLE,TEAMinfo_PLAYERinfo_TOGGLE,NEXT_PAGE} from './actions';

let initState = {
    teamInfoChartData:'',
    leaderBoard:'',
    user:{
        id:'',
        name:'',
        email:'',
        joined:''
    },
    token:null,
    playersList:[],
    pagesPlayers:2,
    pageCurrentPlayers:1,
    filteredPlayers:[],
    playerSearchOrLeaderBoards:'leaderBoards',
    teamInfoOrPlayerInfo:'teamInfo',
    playerToPresent:'',
    whichPositionLookFor:'',
    preventInfiniteLoopNextPage:false,
    team :{
        p1:'',
        p2:'',
        p3:'',
        p4:'',
        p5:'',
        p6:'',
        p7:'',
        p8:'',
        p9:'',
        p10:'',
        p11:''
    }
}

export const reducer = (state=initState, action={}) => {
    switch(action.type){
        case LOG_OUT:
            return{...initState}
        case TEAM_INFO_CHART_DATA:
            return{...state,teamInfoChartData:action.payload}
        case LOAD_LEADER_BOARD:
            return{...state,leaderBoard:action.payload.data}
        case LOAD_USER:
            return {...state,user:action.payload.user,token:action.payload.token}
        case SAVE_PLAYER_TO_FRONTEND:
            const key = action['payload']['number'];
            console.log('key', key);
            console.log('action["payload"]["number"]',action.payload.number)
            // let tmp = JSON.stringify(initState.team);
            let tmp = JSON.stringify(state.team);
            tmp = JSON.parse(tmp);
            tmp[`${key}`] = action.payload.data;
            console.log('initState.team',state.team)
            // console.log('initState.team',initState.team)
            console.log('tmp',tmp)
            return{...state,team:tmp,playerSearchOrLeaderBoards:action.payload.closePlayerSearch}
        case CLEAR_PLAYER_TO_PRESENT:
            return{...state,playerToPresent:action.payload}
        case OPEN_PLAYER_INFO:
            return{...state,playerToPresent:action.payload,teamInfoOrPlayerInfo:'playerInfo'}
        case FILTER_INPUT:
            return{...state, filteredPlayers:action.payload}
        case CURRENT_PAGE_ONE:
            return{...state, pageCurrentPlayers:action.payload}
        case FETCH_PLAYERS:
            return{...state,filteredPlayers:action.payload[0],playersList:action.payload[0], playerSearchOrLeaderBoards:'playerSearch',whichPositionLookFor:{number:action.payload[1],position:action.payload[2]}}
        case FILTER_PLAYERS:
            return{...state,filteredPlayers:action.payload}
        case PLAYERsearch_LEADERBOARDS_TOGGLE:
            return{...state,playerSearchOrLeaderBoards:action.payload,pagesPlayers:2,pageCurrentPlayers:1}
        case TEAMinfo_PLAYERinfo_TOGGLE:
            return{...state,teamInfoOrPlayerInfo:action.payload}
        case NEXT_PAGE:
            return{...state,pageCurrentPlayers: state.pageCurrentPlayers + 1}
        default:
            return{...state}
    }
}