import { Create_Post } from "./type";

const initialSate = {
  post: [],
  fedchPost: [],
};

export const postReduser = (state = initialSate, action) => {
  switch (action.type) {
    case Create_Post:
        return{...state, posts:state.post.concat(action.payload)}
    default:
      return state;
  }
};
