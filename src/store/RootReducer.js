import { ACTIONS } from "./Actions";

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
    default:
      return state;
  }
};
