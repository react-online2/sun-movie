import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
  // TRENDING_BASE_URL,
  POPULAR_BASE_URL_TV,
  SEARCH_BASE_URL_TV,
  SEARCH_BASE_URL_MULTI,
  VIDEO_KEY,
} from "./config";

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchSerials: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL_TV}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL_TV}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMulti: async (searchTerm, page) => {
    const endpoint = `${SEARCH_BASE_URL_MULTI}${searchTerm}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchTvShow: async (tvId) => {
    const endpoint = `${API_URL}tv/${tvId}?api_key=${API_KEY}&append_to_response=external_ids`;
    return await (await fetch(endpoint)).json();
  },

  fetchCredits: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },
  fetchCreditsTvShow: async (tvId) => {
    const creditsEndpoint = `${API_URL}tv/${tvId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
  },

  // Similar Movies/Похожие фильмы(Nman videoner)
  //similar
  fetchMoviesSimilar: async (movieId) => {
    const similarMovies = `${API_URL}movie/${movieId}/similar?api_key=${API_KEY}`;
    return await (await fetch(similarMovies)).json();
  },
  fetchTvShowsSimilar: async (tvId) => {
    const similarMovies = `${API_URL}tv/${tvId}/similar?api_key=${API_KEY}`;
    return await (await fetch(similarMovies)).json();
  },
  // Top Rated/Похожие фильмы(Amana Haetni)
  //top_rated
  fetchMoviesTopRated: async () => {
    // http://api.themoviedb.org/3/movie/top_rated?api_key=d218e7539eec66dd4ef9c3de187e9318&language=ru&append_to_response=videos
    const topRated = `${API_URL}movie/top_rated?api_key=${API_KEY}`;
    return await (await fetch(topRated)).json();
  },

  //recommendations/рекомендации
  fetchMoviesRecommend: async (movieId) => {
    // http://api.themoviedb.org/3/movie/top_rated?api_key=d218e7539eec66dd4ef9c3de187e9318&language=ru&append_to_response=videos
    const recommendations = `${API_URL}movie/${movieId}/recommendations?api_key=${API_KEY}`;
    
// https://api.themoviedb.org/3/movie/now_playing?api_key=d218e7539eec66dd4ef9c3de187e9318&language=en-US&page=1
    return await (await fetch(recommendations)).json();
  },
  fetchTvRecommend: async (tvId) => {
    // http://api.themoviedb.org/3/movie/top_rated?api_key=d218e7539eec66dd4ef9c3de187e9318&language=ru&append_to_response=videos
    const recommendations = `${API_URL}tv/${tvId}/recommendations?api_key=${API_KEY}`;
    // api.themoviedb.org/3/tv/airing_today?api_key=d218e7539eec66dd4ef9c3de187e9318&language=en-US&page=1
     return await (await fetch(recommendations)).json();
  },
  //Movie Images
  fetchMoviesImages: async (movieId) => {
    // http://api.themoviedb.org/3/movie/top_rated?api_key=d218e7539eec66dd4ef9c3de187e9318&language=ru&append_to_response=videos
    const movieImage = `${API_URL}movie/${movieId}/images?api_key=${API_KEY}&language=en,ru`;
    return await (await fetch(movieImage)).json();
  },
  fetchTvShowsImages: async (tvId) => {
    // http://api.themoviedb.org/3/movie/top_rated?api_key=d218e7539eec66dd4ef9c3de187e9318&language=ru&append_to_response=videos
    const movieImage = `${API_URL}tv/${tvId}/images?api_key=${API_KEY}&language=en,ru`;
    return await (await fetch(movieImage)).json();
  },

  //Serial Images
  fetchSerialsImages: async (movieId) => {
    // http://api.themoviedb.org/3/movie/top_rated?api_key=d218e7539eec66dd4ef9c3de187e9318&language=ru&append_to_response=videos
    const movieImage = `${API_URL}tv/${movieId}/images?api_key=${API_KEY}&language=en,ru`;
    return await (await fetch(movieImage)).json();
  },
  // Video Tmdb =>(Trailer)
  fetchVideoTrailer: async (movieId) => {
    // http: //api.themoviedb.org/3/movie/157336?api_key=d218e7539eec66dd4ef9c3de187e9318&language=ru&append_to_response=videos
    const videos = `${API_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=ru,en&append_to_response=videos`;
    // https: //api.themoviedb.org/3/movie/379686/videos?api_key=d218e7539eec66dd4ef9c3de187e9318&language=ru
    return await (await fetch(videos)).json();
  },
  fetchVideoTvTrailer: async (tvId) => {
    // http: //api.themoviedb.org/3/movie/157336?api_key=d218e7539eec66dd4ef9c3de187e9318&language=ru&append_to_response=videos
    const videos = `${API_URL}tv/${tvId}/videos?api_key=${API_KEY}&language=ru,en&append_to_response=videos`;
    // https: //api.themoviedb.org/3/movie/379686/videos?api_key=d218e7539eec66dd4ef9c3de187e9318&language=ru
    return await (await fetch(videos)).json();
  },
  // VideoCDN API  GET imdb_id to TMBD(movie) => imdb_id go to VideoCDN

  fetchVideoFull: async (imdbId) => {
    const video = `https://videocdn.tv/api/short?api_token=${VIDEO_KEY}&imdb_id=${imdbId}&translations&language=ru&append_to_response=videos`;
    return await (await fetch(video)).json();
  },

  // Bonus material below for login
  getRequestToken: async () => {
    const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
    return reqToken.request_token;
  },
  authenticate: async (requestToken, username, password) => {
    const bodyData = {
      username,
      password,
      request_token: requestToken,
    };
    // First authenticate the requestToken
    const data = await (
      await fetch(LOGIN_URL, {
        ...defaultConfig,
        body: JSON.stringify(bodyData),
      })
    ).json();
    // Then get the sessionId with the requestToken
    if (data.success) {
      const sessionId = await (
        await fetch(SESSION_ID_URL, {
          ...defaultConfig,
          body: JSON.stringify({ request_token: requestToken }),
        })
      ).json();
      return sessionId;
    }
  },
  rateMovie: async (sessionId, movieId, value) => {
    const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

    const rating = await (
      await fetch(endpoint, {
        ...defaultConfig,
        body: JSON.stringify({ value }),
      })
    ).json();

    return rating;
  },
};

export default apiSettings;
