import { REQUEST, SUCCESS, FAILURE } from '../constants/actionTypes';

const initialState = {
    dustinJohnson: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state
      };
    case SUCCESS:
      return {
          ...state,
          dustinJohnson: action.payload.plrs
      };
    case FAILURE:
      return {
          ...state
      };
    default:
      return state;
  }
};
