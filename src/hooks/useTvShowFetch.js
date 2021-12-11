import { useEffect, useState } from "react";
import API from "../API";
// Helpers
import { isPersistedState } from "../helpers";

export function useTvShowFetch(tvId) {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        setError(false);
        const tv = await API.fetchTvShow(tvId);
        const credits = await API.fetchCreditsTvShow(tvId);
        const similarMovies = await API.fetchTvShowsSimilar(tvId);
      //   const topRated = await API.fetchMoviesTopRated(tvId);
        const recommentTv = await API.fetchTvRecommend(tvId);
        const popularTv = await API.fetchSerials(undefined, Math.floor(Math.random() * (500 - 1)) + 1);
        const image = await API.fetchTvShowsImages(tvId);
        const videoTrailer = await API.fetchVideoTvTrailer(tvId);
        const videoFull = await API.fetchVideoFull(tv.external_ids.imdb_id);


        setState({
          ...tv,
          actors: credits.cast,
          similarMovies,
          credits,
          recommentTv,
          popularTv,
          image,
          videoTrailer,
          videoFull,
        });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    const sessionState = isPersistedState(`tv-${tvId}`);

    if (sessionState) {
      setTimeout(function () {
        setState(sessionState);
        setLoading(false);
        return;
      }, 1);
    }
    fetchData();
  }, [tvId]);

  //  Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(`tv-${tvId}`, JSON.stringify(state));
  }, [tvId, state]);
  return { state, loading, error };
}
