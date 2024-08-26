import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { SELECT_COURSE } from '../actions/courseACtionTypes';

describe('tests the suite for our simple reducer', () => {
    it('Verifies initial state returned when no action is passed to uiReducer', () => {
        const myState = uiReducer(defaultState, '');
        expect(myState.toJS()).toEqual(defaultState.toJS());
    });

    it('Verifies the state equals the initial state when the action SELECT_COURSE is passed', () => {
        const myState = uiReducer(defaultState, SELECT_COURSE());
		expect(myState.toJS()).toEqual(defaultState.toJS());
    });

    it('Verifies property isNotificationDrawerVisible is true when DISPLAY_NOTIFICATION_DRAWER passed', () => {
        const myState = uiReducer(defaultState, DISPLAY_NOTIFICATION_DRAWER());
		expect(myState.toJS().isNotificationDrawerVisible).toEqual(true);
    });
});