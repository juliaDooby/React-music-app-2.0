import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//delete - if path is ok
// fetch('https://shazam.p.rapidapi.com/charts/track', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '367d97e0d1msh37aed431a4b5cf2p1cd6dcjsn5ab9c1c9041d');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track' }),
    getSongDetails: builder.query({query: ({songid}) => `/tracks/details?track_id=${songid}` }),
  }),
});

export const { useGetTopChartsQuery , useGetSongDetailsQuery} = shazamCoreApi;
1 / 48 / 30;!!!!!
