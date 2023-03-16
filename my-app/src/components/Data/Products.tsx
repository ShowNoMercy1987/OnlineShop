import { RootState } from "../ReduxFiles/Redux/Store";

interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: string;
  image: string;
  count?: any;
  rating?: IRating;
}

export interface ISeazon {
  id: number;
  title: string;
  image: string;
}

export const selectCart = (state: RootState) => state.cart;

export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj:any) => obj.id === id);