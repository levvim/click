export function scorePos(state, payload) {
        return {...state, posTotal : state.posTotal + payload }
}

export function scoreNeg(state, payload) {
        return {...state, negTotal : state.negTotal + payload }
}

export function scoreMaj(state, payload) {
        return {...state, majTotal : state.majTotal + payload }
}
