import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_KEY,
};

const baseUrl = "https://coinranking1.p.rapidapi.com/";

const createRequest = (url) => ({
  url,
  headers: cryptoHeaders,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (id) => createRequest(`coin/${id}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ cryptoId, timeperiod }) =>
        createRequest(`coin/${cryptoId}/history/${timeperiod}`),
    }),
    getExchanges: builder.query({
      query: () =>
        createRequest('exchanges'),
    }),

  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery } = cryptoApi;
