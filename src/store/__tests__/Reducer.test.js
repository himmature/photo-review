import {RootReducer} from '../RootReducer';
import {RootState} from '../RootState';
import {ACTIONS} from '../Actions';

describe('Reducer test suite', () => {
    const image = {
        id: 100,
        url: 'image-url',
        alt: 'alternate text'
    }
    it('should handle "CURRENT" action type', () => {
        const action = {
            type: ACTIONS.CURRENT,
            payload: image
        }
        const receivedState = RootReducer(RootState, action);
        const expectedState = {
            approvedImages: [],
            currentImage: image
        }
        expect(receivedState).toEqual(expectedState);
    })
    it('should handle "CURRENT" action type', () => {
        const action = {
            type: ACTIONS.APPROVE,
            payload: image
        }
        const receivedState = RootReducer(RootState, action);
        const expectedState = {
            approvedImages: [image],
            currentImage: {}
        }
        expect(receivedState).toEqual(expectedState);
    })
})