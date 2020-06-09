export type Dispatch = React.Dispatch<IAction>

export interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<IEpisode>
}
export interface IAction {
  type: string;
  payload: Array<IEpisode> | any;
}
export interface IEpisode {
  airdate: string,
  airstamp: string,
  airtime: string,
  id: number,
  image: { medium: string; original: string },
  name: string,
  number: number,
  runtime: number,
  season: number,
  summary: string,
  url: string
}
export interface IEpisodeProps {
  epis: IEpisode,
  store:{state:IState,dispatch:Dispatch},
  toggleFavAction: (state: IState, dispatch: Dispatch, episode: IEpisode) => IAction,
  favourites: Array<IEpisode>
}
