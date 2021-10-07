export const FETCH_PLAYERS = 'FETCH_PLAYERS';
export const FILTER_PLAYERS = 'FILTER_PLAYERS';
export const PLAYERsearch_LEADERBOARDS_TOGGLE = 'PLAYERsearch_LEADERBOARDS_TOGGLE';
export const TEAMinfo_PLAYERinfo_TOGGLE = 'TEAMinfo_PLAYERinfo_TOGGLE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const CURRENT_PAGE_ONE = 'CURRENT_PAGE_ONE';
export const BLOCK_INFINITE_LOOP_PAGING = 'BLOCK_INFINITE_LOOP_PAGING'
export const FILTER_INPUT = 'FILTER_INPUT'
export const OPEN_PLAYER_INFO = 'OPEN_PLAYER_INFO'
export const CLEAR_PLAYER_TO_PRESENT = 'CLEAR_PLAYER_TO_PRESENT'
export const SAVE_PLAYER_TO_FRONTEND = 'SAVE_PLAYER_TO_FRONTEND'
export const LOAD_USER = 'LOAD_USER'
export const LOAD_LEADER_BOARD = 'LOAD_LEADER_BOARD'
export const TEAM_INFO_CHART_DATA = 'TEAM_INFO_CHART_DATA' 
export const LOG_OUT = 'LOG_OUT'
// export const getSearchPlayerList = (number,position) => {
//     return{
//         type: SEARCH_PLAYER_LIST,
//         payload:[
//         {
//         number:number,
//         position:position
//         },
//         'playersList'
//         ]   
//     }
// }

export const logOut = () => {
    return {
        type: LOG_OUT,
    }
}

export const closePlayerInfo = () => {
    return {
        type: TEAMinfo_PLAYERinfo_TOGGLE,
        payload: 'teamInfo'
    }
}

export const closePlayerSearch = () => {
    return {
        type: PLAYERsearch_LEADERBOARDS_TOGGLE,
        payload: 'leaderBoards'
    }
}

// export const fetchPlayers = (position,page) => (dispatch) => {
//     fetch(`https://api-football-v1.p.rapidapi.com/v3/players?league=39&season=2021&page=${page}`, {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "50969f14d2msh82dec1198045588p14141ajsnb8e0ca0d164b"
// 	}
//     })
//     .then(response => response.json())
//     .then(response =>{
//         console.log("response", response);
//         const data = response.response.filter((item) => item.statistics[0].games.position === position);
//         data.sort((a,b) => b.statistics[0].games.rating - a.statistics[0].games.rating);
//         dispatch({type:FETCH_PLAYERS, payload:[data,response.paging.total]})
//     })
//     .catch(err => {
//         console.error(err);
//     });
// }

// export const fetchPlayers = (number,position,page) => (dispatch) => {
//     console.log(`https://api-football-v1.p.rapidapi.com/v3/players?league=39&season=2021&page=${page}`)
//     // fetch(`https://api-football-v1.p.rapidapi.com/v3/players?league=39&season=2021&page=${page}`, {
// 	// "method": "GET",
// 	// "headers": {
// 	// 	"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
// 	// 	"x-rapidapi-key": "50969f14d2msh82dec1198045588p14141ajsnb8e0ca0d164b"
// 	// }
//     // })
//     // .then(response => response.json())
//     // .then(response =>{
//     //     console.log("response", response);
//     //     const data = response.response.filter((item) => item.statistics[0].games.position === position);
//     //     data.sort((a,b) => b.statistics[0].games.rating - a.statistics[0].games.rating);
//     //     dispatch({type:FETCH_PLAYERS, payload:[data,response.paging.total,number,position]})
//     // })
//     // .catch(err => {
//     //     console.error(err);
//     // });
//     return {
//         type: FETCH_PLAYERS,
//         payload: [[],37,number,position]
//     }
// }
export const fetchPlayers = (number,position,page) => (dispatch) => {
    // console.log('number',number);
    // console.log('position',position);
    // console.log('page',page);
    // console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH')
    // console.log(`https://api-football-v1.p.rapidapi.com/v3/players?league=39&season=2021&page=${page}`)
    fetch(`https://api-football-v1.p.rapidapi.com/v3/players?league=39&season=2021&page=${page}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com",
		"x-rapidapi-key": KEY
	}
    })
    .then(response => response.json())
    .then(response =>{
        console.log("response", response);
        const data = response.response.filter((item) => item.statistics[0].games.position === position);
        data.sort((a,b) => b.statistics[0].games.rating - a.statistics[0].games.rating);
        dispatch({type:FETCH_PLAYERS, payload:[data,response.paging.total,number,position]})
    })
    .catch(err => {
        console.error(err);
    });
    // return {
    //     type: FETCH_PLAYERS,
    //     payload: [[],37,number,position]
    // }
}

export const nextPage = () => {
    return{
        type: NEXT_PAGE,
    }
}

export const currentPageOne = () => {
    return{
        type: CURRENT_PAGE_ONE,
        payload:1
    }
}

export const filterInput = (arr) => {
    return{
        type: FILTER_INPUT,
        payload:arr
    }
}

export const openPlayerInfo = (index) => {
    return{
        type: OPEN_PLAYER_INFO,
        payload:index
    }
}

export const clearPlayerToPresent = () => {
    return{
        type: CLEAR_PLAYER_TO_PRESENT,
        payload:''
    }
}

export const savePlayerToFrontEnd = (number,data) => {
    console.log('action')
    console.log('number', number)
    console.log('data',data)
    console.log('action')
    return{
        type: SAVE_PLAYER_TO_FRONTEND,
        payload:{
            number:number,
            data:data,
            closePlayerSearch:'leaderBoards'
        }
    }
}

export const loadUser = (data) => {
    return{
        type:LOAD_USER,
        payload:{
            user:{
                id:data.user.id,
                name:data.user.name,
                email:data.user.email,
                joined:data.user.joined
            },
            token:data.token
        }
    }  
}

export const loadTeamInfo = (data) => {
    return{
        type:TEAM_INFO_CHART_DATA,
        payload:data
    }
}

export const loadLeaderBoard = () => (dispatch) => {
    fetch('http://localhost:4000/leaderBoards')
    .then(response => response.json())
    .then(response =>{
        console.log("load leader board", response);
        dispatch({type:LOAD_LEADER_BOARD, payload:response})
    })
    .catch(err => {
        console.error(err);
    });
}
