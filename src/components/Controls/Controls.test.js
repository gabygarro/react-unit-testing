import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

describe('Controls', () => {
  describe('Index input', () => {
    it('renders correct index', () => {
      const { getByTestId } = render(<Controls currentIndex={5} />);
      const input = getByTestId('indexInput');
      expect(input.value).toBe('6');
    });

    it('only changes current index if it is within bounds', () => {
      const mocked = jest.fn();
      const { getByTestId } = render(
        <Controls currentIndex={2} seedsLength={4} setCurrentIndex={mocked} />,
      );
      const input = getByTestId('indexInput');
      fireEvent.change(input, { target: { value: '5' } });
      expect(mocked).not.toHaveBeenCalled();
      fireEvent.change(input, { target: { value: '4' } });
      expect(mocked).toHaveBeenCalledWith(3);
    });
  });

  describe('Previous button', () => {
    it('calls render last picture function', () => {
      const mocked = jest.fn();
      const { getByTestId } = render(
        <Controls currentIndex={1} loading={false} renderLastPicture={mocked} />,
      );
      const button = getByTestId('previousButton');
      expect(button).not.toBeDisabled();
      expect(mocked).not.toHaveBeenCalled();
      fireEvent.click(button);
      expect(mocked).toHaveBeenCalled();
    });

    it('renders disabled if index is first', () => {
      const { getByTestId } = render(<Controls currentIndex={0} loading={false} />);
      expect(getByTestId('previousButton')).toBeDisabled();
    });
  });

  describe('Next button', () => {
    it('calls render next picture function', () => {
      const mocked = jest.fn();
      const { getByTestId } = render(
        <Controls currentIndex={0} seedsLength={2} renderNextPicture={mocked} />,
      );
      const button = getByTestId('nextButton');
      expect(button).not.toBeDisabled();
      expect(mocked).not.toHaveBeenCalled();
      fireEvent.click(button);
      expect(mocked).toHaveBeenCalled();
    });

    it('renders disabled if index is last', () => {
      const { getByTestId } = render(<Controls currentIndex={1} seedsLength={2} />);
      expect(getByTestId('nextButton')).toBeDisabled();
    });
  });

  describe('New Button', () => {
    it('calls render new picture function on click', () => {
      const mocked = jest.fn();
      const { getByTestId } = render(<Controls currentIndex={0} renderNewPicture={mocked} />);
      const button = getByTestId('newButton');
      expect(button).not.toBeDisabled();
      expect(mocked).not.toHaveBeenCalled();
      fireEvent.click(button);
      expect(mocked).toHaveBeenCalled();
    });
  });

  describe('Loading', () => {
    it('disables all buttons', () => {
      const { getByTestId } = render(<Controls currentIndex={0} seedsLength={1} loading />);
      expect(getByTestId('previousButton')).toBeDisabled();
      expect(getByTestId('nextButton')).toBeDisabled();
      expect(getByTestId('newButton')).toBeDisabled();
    });
  });
});
