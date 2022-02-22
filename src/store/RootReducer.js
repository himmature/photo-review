import { ACTIONS } from "./Actions";
import { RootState } from "./RootState";

export const RootReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CURRENT:
      return {
        ...state,
        currentImage: action.payload,
      };
    case ACTIONS.APPROVE:
      return {
        ...state,
        approvedImages: [...state.approvedImages, action.payload],
      };
    case ACTIONS.RESET:
      return RootState;
    default:
      return state;
  }
};
