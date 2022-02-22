import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { CurrentImage } from '../CurrentImage';
import { store } from '../../../store/CreateStore';
import userEvent from '@testing-library/user-event';


const mockResponse = {
    id: 100,
    urls: {
        regular: 'test-url'
    },
    description: 'alt text'
};

global.fetch = () => Promise.resolve({
    json: () => Promise.resolve(mockResponse)
})

describe('CurrentImage component', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <CurrentImage />
            </Provider>
        );
    })
    afterEach(() => {
        cleanup();
    })
    it('should render correctly with the plus image icon', () => {
        let pattern = /^Click on the/;
        let regex = new RegExp(pattern);
        const fakeNode = screen.getByText(regex);
        expect(fakeNode).toBeInTheDocument();
    })
})