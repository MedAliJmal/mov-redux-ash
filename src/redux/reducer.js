import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "./actionTypes";

const initState = {
  moviesData: [
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
      rating: 5,
      name: "Star Wars: The Rise Of Skywalker",
      date: "December 2019",
      category: "SF",
    },
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      rating: 4,
      name: "Avengers: Infinity War",
      date: "April 2018",
      category: "SF",
    },
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
      rating: 4,
      name: "Frozen II",
      date: "November 2019",
      category: "Cartoon",
    },
    {
      id: Math.random(),
      image:
        "https://i1.wp.com/easttennessean.com/wp-content/uploads/2016/11/FantasticBeasts.png?fit=500%2C639&ssl=1",
      rating: 3,
      name: "Fantastic Beasts and Where to Find Them",
      date: "November 2016",
      category: "SF",
    },
    {
      id: Math.random(),
      image:
        "https://m.media-amazon.com/images/M/MV5BMTI5MDU3MTYyMF5BMl5BanBnXkFtZTYwODgyODc3._V1_FMjpg_UX1000_.jpg",
      rating: 2,
      name: "Cat In The Hat",
      date: "November 2003",
      category: "Kids",
    },
  ],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case DELETE_MOVIE:
      return {
        ...state,
        moviesData: state.moviesData.filter((el) => el.id !== payload),
      };
    case ADD_MOVIE:
      return {
        ...state,
        moviesData: [...state.moviesData, payload],
      };
    case EDIT_MOVIE:
      return {
        ...state,
        moviesData: state.moviesData.map((el) =>
          el.id === payload.id ? payload : el
        ),
      };
    default:
      return state;
  }
};

export default reducer;
