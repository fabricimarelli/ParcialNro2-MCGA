import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  SET_ALL_PRODUCTS,
  SET_ERROR,
  SET_LOADING_TRUE,
} from '../types/productsTypes';//aciones que puede tener el producto

const initialState = {//se inicializa un objeto product
  list: [],
  error: '',
  isLoading: false,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        error: '',
        list: [...state.list, action.payload],
        isLoading: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        error: '',
        list: state.list.map((product) =>
          product._id === action.payload._id ? action.payload : product
        ),
        isLoading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        error: '',
        list: state.list.filter((product) => product._id !== action.payload),
        isLoading: false,
      };
    case SET_ALL_PRODUCTS:
      return {
        ...state,
        error: '',
        list: action.payload,
        isLoading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload || 'An error ocurred',
        isLoading: false,
      };
    case SET_LOADING_TRUE:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
