import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { SELECT_COURSE } from '../actions/courseACtionTypes';

describe('tests the suite for our simple reducer', () => {
    const defaultState = {
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {},
    };

    it('should return state when no action is passed', () => {
        expect(uiReducer(defaultState, 'null')).toEqual(defaultState);
    });

    it('should return state when wrong action is passed', () => {
        expect(uiReducer(defaultState, { type: SELECT_COURSE })).toEqual(defaultState);
    });

    it('should return state when correctly action is passed', () => {
        expect(
            uiReducer(defaultState, { type: DISPLAY_NOTIFICATION_DRAWER })
        ).toEqual( { ...defaultState, isNotificationDrawerVisible: true });
    });
});