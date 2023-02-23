import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "utils/axios";

// ----------------------------------------------------------------------

function objFromArray(array, key = "id") {
  return array.reduce((accumulator, current) => {
    accumulator[current[key]] = current;
    return accumulator;
  }, {});
}

const initialState = {
  isLoading: false,
  error: false,
  user: {}
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET LABELS
    getAllUsersSuccess(state, action) {
      state.isLoading = false;
      state.users = action.payload;
    },
    getUserByIdSuccess(state, action) {
      state.isLoading = false;
      state.user = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function createUser(formdata) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      console.log("formdata", formdata);
      const response = await axios.post("/api/user/create", formdata);
      console.log(response);
      // dispatch(
      //   slice.actions.getAllInfluencersSuccess(response.data.influencers)
      // );
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// export function getAllTokens() {
//   return async (dispatch) => {
//     dispatch(slice.actions.startLoading());
//     try {
//       const response = await axios.get("/api/token/get");
//       dispatch(slice.actions.getAllTokensSuccess(response.data.tokens));
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }

// export function getTokenById(id) {
//   return async (dispatch) => {
//     dispatch(slice.actions.startLoading());
//     try {
//       const response = await axios.get(`/api/token/getbyid/${id}`);
//       dispatch(slice.actions.getTokenByIdSuccess(response.data.token));
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }
