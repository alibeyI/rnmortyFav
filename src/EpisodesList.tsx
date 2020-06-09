import React from "react";
import { IEpisode } from "./interfaces";

const EpisodesList = (props: any): Array<JSX.Element> => {
  const { epis, toggleFavAction, favourites, store } = props;
  const { state, dispatch } = store;
  return (
    epis &&
    epis.map(function (epi: IEpisode) {
      return (
        <section
          key={epi.id}
          style={{
            padding: ".5rem",
          }}
        >
          <img src={epi.image.medium} alt={epi.name} />
          <h3> {epi.name} </h3>
          <section style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              Season : {epi.season} Number:{epi.number}
            </div>
            <button type="button" onClick={() => toggleFavAction(state,dispatch,epi)}>
              {favourites.find((fav: IEpisode) => fav.id === epi.id)
                ? "Unfav"
                : "Favy"}
            </button>
            <button>
              <a href={epi.url}>Click to watch</a>
            </button>
          </section>
        </section>
      );
    })
  );
};

export default EpisodesList;
