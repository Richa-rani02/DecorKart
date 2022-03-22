import { LOAD_CATEGORY, IS_LOADING, ERROR, LOAD_PRODUCTS, FILTER_BY_CATEGORY,ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST, SORT_BY_PRICE, SEARCH_PRODUCT, FILTER_BY_RATING, PRICE_RANGE, CLEAR_ALL } from "../utils/constants";
export const stateReducer = (state, action) => {
    switch (action.type) {
        
        case LOAD_CATEGORY:
            return {
                ...state,
                categories: action.payload
            };
        case LOAD_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
            case ADD_TO_WISHLIST:
            return {
                ...state,
                wishlist:action.payload

            };
            case REMOVE_FROM_WISHLIST:
                return {
                    ...state,
                    wishlist:[...action.payload]
                };
        case IS_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading
            }
        case ERROR:
            return {
                ...state,
                isLoading: false,
                setError: action.payload
            }
        case FILTER_BY_CATEGORY:
            return {
                ...state,
                filters: {
                    ...state.filters, productCategory: action.payload.isChecked ?
                        [...state.filters.productCategory, action.payload.value]
                        : state.filters.productCategory.filter((category) => category !== action.payload.value)
                }
            };
        case SORT_BY_PRICE:
            return {
                ...state,
                filters: {
                    ...state.filters, sortByPrice: action.payload
                }
            };
        case SEARCH_PRODUCT:
            return {
                ...state,
                filters: {
                    ...state.filters, searchProduct: action.payload
                }

            };

        case FILTER_BY_RATING:
            return {
                ...state,
                filters: { ...state.filters, filterByRating: action.payload }
            };
        case PRICE_RANGE:
            return {
                ...state,
                filters: { ...state.filters, priceRange: action.payload }
            };
        case CLEAR_ALL:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    searchProduct: "",
                    sortByPrice: "",
                    filterByRating: "",
                    priceRange: "",
                    productCategory: [],
                }

            };
        default:
            throw newError("Undefined Action type");

    }
}