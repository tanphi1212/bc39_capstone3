import * as ActionType from "./types";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const DSRapPhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.DS_RAP_PHIM_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return {...state}
        }

        case ActionType.DS_RAP_PHIM_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return {...state}
        }

        case ActionType.DS_RAP_PHIM_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return {...state}
        }

        default:
            return {...state}
    }
};

export default DSRapPhimReducer;
