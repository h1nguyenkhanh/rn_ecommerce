import {
  CHANGE_FILTER_CATEGORIES,
  CHANGE_FILTER_PRICE_RANGE,
  CHANGE_FILTER_PRICE_SORT,
  CHANGE_FILTER_RATING,
  RESET_FILTER,
} from '../actions/filterAction';

const initialState = {
  params: {
    categories: {
      label: 'categoryId',
      operator: 'in',
      value: [],
    },
    rating: {
      label: 'rating',
      operator: '==',
      value: 0,
    },
    fromPrice: {
      label: 'price',
      operator: '>=',
      value: 0,
    },
    toPrice: {
      label: 'price',
      operator: '<=',
      value: 0,
    },
  },
  sort: {
    label: 'price',
    value: '',
  },
};

const filtersReducer = (state = initialState, action) => {
  const preFilter = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case CHANGE_FILTER_CATEGORIES: {
      if (action.payload.assemble) {
        const {value} = preFilter.params.categories;

        const index = value.indexOf(action.payload.category);

        if (index > -1) {
          value.splice(index, 1);
        } else {
          value.push(action.payload.category);
        }
        preFilter.params.categories.value = value;
      } else {
        preFilter.params.categories.value =
          action.payload.category !== 'all' ? [action.payload.category] : [];
      }
      return preFilter;
    }

    case CHANGE_FILTER_RATING: {
      preFilter.params.rating.value =
        preFilter.params.rating.value === action.payload ? 0 : action.payload;
      return preFilter;
    }

    case CHANGE_FILTER_PRICE_RANGE: {
      const {from, to} = action.payload;
      if (
        preFilter.params.fromPrice.value === from &&
        preFilter.params.toPrice.value === to
      ) {
        preFilter.params.fromPrice.value = 0;
        preFilter.params.toPrice.value = 0;
      } else {
        preFilter.params.fromPrice.value = from;
        preFilter.params.toPrice.value = to;
      }
      return preFilter;
    }

    case CHANGE_FILTER_PRICE_SORT: {
      preFilter.sort.value = action.payload !== 'default' ? action.payload : '';
      return preFilter;
    }

    case RESET_FILTER: {
      return initialState;
    }

    default:
      return state;
  }
};

export default filtersReducer;
