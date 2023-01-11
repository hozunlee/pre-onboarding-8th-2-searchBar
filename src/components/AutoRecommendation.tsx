import { BeakerIcon } from '@heroicons/react/24/solid';

const AutoRecommendation = ({ results }) => {
  return (
    <div>
      {results &&
        results?.map((item) => {
          return (
            <ul key={item.sickCd}>
              <li className="flex">
                <BeakerIcon className="h-6 w-6 text-blue-500" />
                {item.sickNm}
              </li>
            </ul>
          );
        })}
    </div>
  );
};

export default AutoRecommendation;
