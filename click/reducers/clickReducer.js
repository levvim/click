import * as click from "../actions/clickActions"

export default function reducer (state={
    score: 0,
    posTotal: 0,
    negTotal: 0,
    majTotal: 0,
}, action) {
    switch(action.type) {
        case "scorePos": {
            return click.scorePos(state,action.payload)
        }
        case "scoreNeg": {
            return click.scoreNeg(state,action.payload)
        }
        case "scoreMaj": {
            return click.scoreMaj(state,action.payload)
        }
        case "scoreReset": {
            return {...state, 
                    score:0,
                    posTotal:0,
                    negTotal:0,
                    majTotal:0,
            }
        }
        default:
            return state
    }
}
