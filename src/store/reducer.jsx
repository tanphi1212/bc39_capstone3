import { combineReducers } from "redux";
import DSRapPhimReducer from "../pages/HomeTemplate/HomePage/DSRapPhim/duck/reducer";
import listMovieReducer from "../pages/HomeTemplate/HomePage/ListMoviePage/duck/reducer";
import listMoviesReducer from "../pages/HomeTemplate/ListMoviesPage/duck/reducer";
import detailMovieReducer from "../pages/HomeTemplate/DetailMoviePage/duck/reducer";
import lichChieuReducer from "../pages/HomeTemplate/DetailMoviePage/LichChieuPhim/duck/reducer";
import ticketRoomReducer from "../pages/HomeTemplate/TicketRoomPage/duck/reducer";
import addUserReducer from "../pages/AdminTemplate/AddUserPage/duck/reducer";
import authLoginReducer from "../pages/AdminTemplate/AuthPage/duck/reducer";
const rootReducer = combineReducers({
    DSRapPhimReducer,
    listMovieReducer,
    listMoviesReducer,
    detailMovieReducer,
    lichChieuReducer,
    ticketRoomReducer,
    addUserReducer,
    authLoginReducer
})

export default rootReducer;