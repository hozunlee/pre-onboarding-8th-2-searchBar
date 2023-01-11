import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { searchResultState } from '../utils/store';

import { debounce } from '../utils/timer-utils';
import AutoRecommendation from './AutoRecommendation';

const BASE_URL = 'http://localhost:4000/sick';

const SearchBar = () => {
  const [saveData, setSavaData] = useRecoilState(searchResultState);
  console.log('🚀 ~ file: SearchBar.tsx:15 ~ SearchBar ~ saveData', saveData);
  const [data, setData] = useState();

  const inputHandler = (e) => {
    search(e.target.value);
  };

  const searchCall = async (keyword) => {
    if (keyword && !Object.keys(saveData).includes(keyword)) {
      console.log('기존 값 없음');
      const { data } = await axios.get(`${BASE_URL}?q=${encodeURIComponent(keyword.trim())}`);
      setData(data);
      console.info('calling api');

      setSavaData({ ...saveData, [keyword]: data });
    } else {
      console.log('기존 값 있음');
      setData(saveData[keyword]);
    }
  };

  const search = debounce(searchCall, 500);

  return (
    <>
      <div className=" flex h-12 box-border text-base bg-red-100 w-60 border ">
        <input type="text" onChange={inputHandler} />
        <button>보내기</button>
      </div>

      <div>
        <AutoRecommendation results={data} />
      </div>
    </>
  );
};

export default SearchBar;
