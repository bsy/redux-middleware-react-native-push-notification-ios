'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.middleware = exports.action_on_notification = exports.action_on_register = exports.ON_NOTIFICATION = exports.ON_REGISTER = undefined;

var _reduxActions = require('redux-actions');

var _reduxMiddlewareOneshot = require('redux-middleware-oneshot');

var _reduxMiddlewareOneshot2 = _interopRequireDefault(_reduxMiddlewareOneshot);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ON_REGISTER = exports.ON_REGISTER = 'REDUX_MIDDLEWARE_REACT_NATIVE_PUSH_NOTIFICATION_IOS_ON_REGISTER';
var ON_NOTIFICATION = exports.ON_NOTIFICATION = 'REDUX_MIDDLEWARE_REACT_NATIVE_PUSH_NOTIFICATION_IOS_ON_NOTIFICATION';
var action_on_register = exports.action_on_register = (0, _reduxActions.createAction)(ON_REGISTER);
var action_on_notification = exports.action_on_notification = (0, _reduxActions.createAction)(ON_NOTIFICATION);
var middleware = exports.middleware = (0, _reduxMiddlewareOneshot2.default)(function (dispatch) {
  var onRegister = function onRegister(deviceToken) {
    return dispatch(action_on_register({ deviceToken: deviceToken }));
  };
  var onNotification = function onNotification(notification) {
    return dispatch(action_on_notification({ notification: notification }));
  };
  _reactNative.PushNotificationIOS.addEventListener('notification', onNotification);
  _reactNative.PushNotificationIOS.addEventListener('register', onRegister);
});