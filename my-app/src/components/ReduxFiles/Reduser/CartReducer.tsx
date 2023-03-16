import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state:any, action:PayloadAction<any>){
      const findItem = state.items.find((obj:any) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      }else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
    },

    removeItem(state, action:PayloadAction<string | number>){
      state.items = state.items.filter((obj:any) => obj.id !== action.payload);
    },

    clearItems(state:any) {
      state.items = [];
      state.totalPrice = 0;
    },

    plusItem(state, action) {
      const findItem:any = state.items.find((obj:any) => obj.id === action.payload);
      
      if (findItem) {
        findItem.count++;
      }
    },

    minusItem(state, action) {
      const findItem:any = state.items.find((obj:any) => obj.id === action.payload);

      if (findItem.count === 1) {
        return
      } else {
        findItem.count--;
      }
    },    
  }})

  export const { addItem, removeItem, clearItems, plusItem, minusItem } = cartSlice.actions;
  export default cartSlice.reducer;