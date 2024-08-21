import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

describe('tests for UI notification action creators', () => {
    it('should create proper action for login', () => {
        const email = "abdel@gmail.com";
        const password = 'papapapa';

        expect(login(email, password)).toEqual({
            type: LOGIN, user: { email: 'abdel@gmail.com', password: 'papapapa' },
        });
    });

    it('should create proper action for logout', () => {
        expect(logout()).toEqual({ type: LOGOUT });
    });

    it('should create proper action for displayNotificationDrawer', () => {
        expect(displayNotificationDrawer()).toEqual({
            type: DISPLAY_NOTIFICATION_DRAWER,
        });
    });

    it('should create proper action for hideNotificationDrawer', () => {
        expect(hideNotificationDrawer()).toEqual({
            type: HIDE_NOTIFICATION_DRAWER,
        });
    });
});