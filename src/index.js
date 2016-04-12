import { createAction } from 'redux-actions';
import createOneShotMiddleware from 'redux-middleware-oneshot';
import { PushNotificationIOS } from 'react-native';

export const ON_REGISTER = 'REDUX_MIDDLEWARE_REACT_NATIVE_PUSH_NOTIFICATION_IOS_ON_REGISTER';
export const ON_NOTIFICATION = 'REDUX_MIDDLEWARE_REACT_NATIVE_PUSH_NOTIFICATION_IOS_ON_NOTIFICATION';
export const action_on_register = createAction(ON_REGISTER);
export const action_on_notification = createAction(ON_NOTIFICATION);
export const middleware = createOneShotMiddleware((dispatch) => {
  const onRegister = (deviceToken) => dispatch(action_on_register({ deviceToken }));
  const onNotification = (notification) => dispatch(action_on_notification({ notification }));
  PushNotificationIOS.addEventListener('notification', onNotification);
  PushNotificationIOS.addEventListener('register', onRegister);
});
