import { render, screen, cleanup } from '@testing-library/react';
import { ImageControls } from '../ImageControls';
import userEvent from '@testing-library/user-event';


const plusButtonClickHandler = jest.fn();
const approveImageHandler = jest.fn();


describe('ImageControls Component', () => {
    beforeEach(() => {
        render(
            <ImageControls
                plusButtonClickHandler={plusButtonClickHandler}
                approveImageHandler={approveImageHandler}
            />
        );
    })
    afterEach(() => {
        cleanup();
    })
    it('should render approve and reject button correctly', () => {
        const rejectNode = screen.getByTestId('reject');
        const approveNode = screen.getByTestId('approve');
        expect(rejectNode).toBeInTheDocument();
        expect(approveNode).toBeInTheDocument();
    })
    it('approve button click event', () => {
        const approveNode = screen.getByTestId('approve');
        userEvent.click(approveNode);
        expect(approveImageHandler).toBeCalledTimes(1);
    })
    it('reject button click event', () => {
        const rejectNode = screen.getByTestId('reject');
        userEvent.click(rejectNode);
        expect(plusButtonClickHandler).toBeCalledTimes(1);
    })
});