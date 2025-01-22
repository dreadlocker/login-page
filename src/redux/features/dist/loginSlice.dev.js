"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setSuccessMes = exports.setIsAuth = exports.savePassword = exports.saveEmail = exports.loginSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  isAuth: null,
  email: "",
  password: "",
  successMes: "Success"
};
var loginSlice = (0, _toolkit.createSlice)({
  name: "login",
  initialState: initialState,
  reducers: {
    saveEmail: function saveEmail(state, action) {
      state.email = action.payload;
    },
    savePassword: function savePassword(state, action) {
      state.password = action.payload;
    },
    setIsAuth: function setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
    setSuccessMes: function setSuccessMes(state, action) {
      state.successMes = action.payload;
    }
  }
});
exports.loginSlice = loginSlice;
var _loginSlice$actions = loginSlice.actions,
    saveEmail = _loginSlice$actions.saveEmail,
    savePassword = _loginSlice$actions.savePassword,
    setIsAuth = _loginSlice$actions.setIsAuth,
    setSuccessMes = _loginSlice$actions.setSuccessMes;
exports.setSuccessMes = setSuccessMes;
exports.setIsAuth = setIsAuth;
exports.savePassword = savePassword;
exports.saveEmail = saveEmail;
var _default = loginSlice.reducer;
exports["default"] = _default;