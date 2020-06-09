import { IState, IEpisode, IAction } from "./interfaces";

export  const fetchingDataAction = async (dispatch:any) => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJson = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJson._embedded.episodes,
    });
  };


export const toggleFavAction = (state:IState,dispatch:any,episode: IEpisode | any): IAction => {
    const episodeInFav = state.favourites.includes(episode);

    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode,
    };

    if (episodeInFav) {
      const favWithoutEpisode = state.favourites.filter(
        (fav: any) => fav.id !== episode.id
      );

      //   console.log(favWithoutEpisode,"again");
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode,
      };
    }
    return dispatch(dispatchObj);
  };