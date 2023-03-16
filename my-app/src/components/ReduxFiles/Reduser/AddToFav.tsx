import { createSlice } from "@reduxjs/toolkit";

export const AddToFavSlice = createSlice({
  name: "like",

  initialState: {
    likes: [],
  },

  reducers: {
    addLike: (prevState: any, action: any) => {
      const like = action.payload;
      const hadInCart = prevState.likes.includes(
        (prevLike: any) => prevLike.id === like.id
      );

      if (hadInCart) return prevState;
      return {
        ...prevState,
        likes: [...prevState.likes, action.payload],
      };
    },

    removeLike: (prevState, action) => {
      const like: any = action.payload;

      return {
        ...prevState,
        likes: prevState.likes.filter((prev: any) => {
          return prev.id !== like.id;
        }),
      };
    },
  },
});

export const { addLike, removeLike } = AddToFavSlice.actions;
export default AddToFavSlice.reducer;
