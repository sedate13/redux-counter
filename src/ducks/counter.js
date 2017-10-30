// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND=false;

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const initialState = { currentValue: 0 };

export default function counter( state = initialState, action ) {
	switch ( action.type ) {
		case INCREMENT:
			return  Object.assign ({}, state, { currentValue: state.currentValue + action.amount });
		case DECREMENT:
			return { 
                ...state,
                currentValue: state.currentValue - action.amount 
            }
		default:
			return state;
	}
}

export function increment( amount ) {
	return { amount, type: INCREMENT };
}

export function decrement( amount ) {
	return { amount, type: DECREMENT };
}

// export const decrement = amount => {{
    // type:DECREMENT,
    // amount});


