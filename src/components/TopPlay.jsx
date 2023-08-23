import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import 'swiper/css';
import 'swiper/css/freemode';

import { TopCharts } from '../pages';

const TopChartCard = ({ song, i }) => (
  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
    {song.title}
  </div>
);

useEffect(() => {
  divRef.current.scrollIntoView({ behavior: 'smooth' });
});
const TopPlay = () => {
  dispatch = useDispatch();
  const { activeSong, isPlaying } = useState((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6  flex-1 xl:max-w-[500px] max-w-[full] flex flex-col"
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <link to="/top charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {TopPlays?.map((song, i) => {
            <TopChartCard key={song.key} song={song} i={i} />;
          })}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Artists</h2>
          <link to="/top artists">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </link>
        </div>

        <Swiper
          slidersPerView="auto"
          spaceBetween={15}
          FreeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
        {topPlays?map((song, i) => (<SwiperSlide key={song?.key} style={{width: '25%', height: 'auto'}} 
        className="shadow-lg rounded-full animate-slideright">
<Link to={`/artists/${song?.artists[0].adamid}`}>
<img src={song?.images.background} alt="name" className="rounded-full w-full object-cover" />
</Link>
        </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;
