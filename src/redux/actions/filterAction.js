export const CHANGE_FILTER_CATEGORIES = "CHANGE_FILTER_CATEGORIES";
export const CHANGE_FILTER_RATING = "CHANGE_FILTER_RATING";
export const CHANGE_FILTER_PRICE_RANGE = "CHANGE_FILTER_PRICE_RANGE";
export const CHANGE_FILTER_PRICE_SORT = "CHANGE_FILTER_PRICE_SORT";
export const RESET_FILTER = "RESET_FILTER"

export const changeFilterCategories = (category, assemble) => {
    return {
        type: CHANGE_FILTER_CATEGORIES,
        payload: { category, assemble },
    };
};
export const changeFilterRating = (rating) => {
    return {
        type: CHANGE_FILTER_RATING,
        payload: rating,
    };
};
export const changeFilterPriceRange = ({ from, to }) => {
    return {
        type: CHANGE_FILTER_PRICE_RANGE,
        payload: {
            from,
            to,
        },
    };
};

export const changeFilterPriceSort = (priceSort) => {
    return {
        type: CHANGE_FILTER_PRICE_SORT,
        payload: priceSort,
    };
};

export const resetFilter = () => {
    return {
        type: RESET_FILTER,
    };
};
