import React from "react";
import { Store } from "./Store";
import { IAction, IEpisode, IEpisodeProps } from "./interfaces";
import { fetchingDataAction, toggleFavAction } from "./Actions";

const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

const HomePage = () => {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchingDataAction(dispatch);
  }, []);
  const epis: IEpisode = state.episodes;

  const props: IEpisodeProps = {
    epis: epis,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <>
      <React.Suspense fallback={<div>loading...</div>}>
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            minWidth: "100vh",
          }}
        >
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </>
  );
};

export default HomePage;
