import {render} from '@testing-library/react-native';
import React from 'react';
import {StarRating} from '../StarRating';

describe('StarRating', () => {
  describe ('rating was passed',()=>{
    it('show the average',()=>{
      const {getByText} = render(<StarRating rating={{average: 7}} />);
      expect(getByText('7')).toBeTruthy();
    });
    it('show star icon',()=>{
      const {getByTestId} = render(<StarRating rating={{average: 7}} />);
      expect(getByTestId('starIcon')).toBeTruthy();
    })
  })
  describe('rating was NOT passed', () => {
    it('return nothing', () => {
      const { queryByText } = render(<StarRating />, { wrapper: undefined });
      expect(queryByText('7')).toBeNull();
    });
  });
});
