import { atom } from 'recoil';

const searchResultState = atom({
  key: 'searchResultState',
  default: {},
});

export { searchResultState };
