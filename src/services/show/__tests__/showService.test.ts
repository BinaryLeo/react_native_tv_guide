import { showMocks } from 'test/mocks/showMocks';
import { showService } from '../showService';
import { api } from 'src/services/api';

describe('showService', () => {
  describe('getEpisodes', () => {
    it('when API return episode list return a list of episodes grouped by season ', async () => {
      const spyFn = jest.spyOn(api, 'get')
      const groupedEpisodes = await showService.getEpisodes('300')
      console.log('episode',groupedEpisodes.seasons[1][0])
      expect(spyFn).toBeCalledTimes(1);
    });

  });

})