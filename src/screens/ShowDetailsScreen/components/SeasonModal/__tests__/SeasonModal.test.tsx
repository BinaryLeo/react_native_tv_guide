import React, { createRef } from 'react';
import { render, act, fireEvent } from '@testing-library/react-native';
import { SeasonModal } from '../SeasonModal';
import { Modalize } from 'react-native-modalize';

describe('SeasonModal', () => {
  it('show all season option', async () => { // Mark the test function as async
    const modalizeRef = createRef<Modalize>();
    const { getAllByText, debug } = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={(season) => console.log(season)}
        selectedSeason='1'
        seasons={['1', '2', '3']}
      />
    );

    await act(async () => {
      try {
        await modalizeRef.current?.open();
      } catch (error) {
        console.log(error)
      }
    });

    debug();
    expect(getAllByText(/season/i).length).toBe(3);
  });
  it('call onSelectSeason with correct season option was pressed', async () => {
    const modalizeRef = createRef<Modalize>();
    const onSelectSeasonMock = jest.fn()
    const { getByText } = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={onSelectSeasonMock}
        selectedSeason='1'
        seasons={['1', '2', '3']}
      />
    );

    await act(async () => { 
      try {
        await modalizeRef.current?.open();
      } catch (error) {
        console.log(error)
      }
    });
    const season2Element = getByText(/season 2/i)
    fireEvent.press(season2Element)
    expect(onSelectSeasonMock).toBeCalledWith('2')
  })
});
