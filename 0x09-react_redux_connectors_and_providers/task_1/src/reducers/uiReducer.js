import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';
import { Map } from 'immutable';

const defaultState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
});

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return defaultState.set('isNotificationDrawerVisible', true);
        case HIDE_NOTIFICATION_DRAWER:
            return defaultState.set('isNotificationDrawerVisible', false)
        case LOGIN_SUCCESS:
            return defaultState.set('isUserLoggedIn', true);
        case LOGIN_FAILURE:
        case LOGOUT:
            return defaultState.set('isUserLoggedIn', false);
        default:
            return state;
    }
};

export default uiReducer;