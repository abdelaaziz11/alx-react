import { shallow, mount } from 'enzyme';
import React from 'react';
import App, { listNotificationsInitialState, mapStateToProps } from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { user, logOut, AppContext } from './AppContext';
import { fromJS } from "immutable";
import { createStore } from "redux-mock-store";
import { Provider } from "react-redux";
import uiReducer, { initialState } from "../reducers/uiReducer";


// describe('<App />', () => {
//   beforeAll(() => {
//     StyleSheetTestUtils.suppressStyleInjection();
//   });
//   afterAll(() => {
//     StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
//   });

//   it('render without crashing', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.exists());
//   });

//   it('contain Notifications component', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('Notifications')).toHaveLength(1);
//   });

//   it('contain Header component', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('Header')).toHaveLength(1);
//   });

//   it('contain Login component', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('Login')).toHaveLength(1);
//   });

//   it('contain Footer component', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('Footer')).toHaveLength(1);
//   });

//   it('CourseList', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.find('CourseList')).toHaveLength(0);
//   });

//   it('logOut', () => {
//     const logOut = jest.fn(() => undefined);
//     const wrapper = shallow(<App logOut={logOut} />);
//     expect(wrapper.exists());
//     const alert = jest.spyOn(global, 'alert');
//     expect(alert);
//     expect(logOut);
//     jest.restoreAllMocks();
//   });

//   it('default state for displayDrawer is false', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.state().displayDrawer).toEqual(false);
//   });

//   it('displayDrawer toggle handleDisplayDrawer', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.state().displayDrawer).toEqual(false);
//     const instance = wrapper.instance();
//     instance.handleDisplayDrawer();
//     expect(wrapper.state().displayDrawer).toEqual(true);
//   });

//   it('displayDrawer toggle handleDisplayDrawer and handleHideDrawer', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.state().displayDrawer).toEqual(false);
//     wrapper.instance().handleDisplayDrawer();
//     expect(wrapper.state().displayDrawer).toEqual(true);
//     wrapper.instance().handleHideDrawer();
//     expect(wrapper.state().displayDrawer).toEqual(false);
//   });

//   it('<AppContext.Provider />', () => {
//     const wrapper = shallow(
//       <AppContext.Provider value={{ user, logOut }}>
//         <App />
//       </AppContext.Provider>
//     );
//     expect(wrapper.exists());
//   });
// });

const store = createStore(uiReducer, initialState);

describe("<App />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("CourseList is not displayed with isLoggedIn false by default", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
});

describe("App Redux", () => {
  it("mapStateToProps returns the right object from user Login", () => {
    let state = {
      ui: fromJS({
        isUserLoggedIn: true,
      }),
    };

    const result = mapStateToProps(state);

    expect(result).toEqual({ isLoggedIn: true });
  });
  it("mapStateToProps returns the right object from display Drawer", () => {
    let state = {
      ui: fromJS({
        isNotificationDrawerVisible: true,
      }),
    };

    const result = mapStateToProps(state);

    expect(result).toEqual({ displayDrawer: true });
  });
});