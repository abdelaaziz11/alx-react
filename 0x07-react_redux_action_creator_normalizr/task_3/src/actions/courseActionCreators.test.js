import { UNSELECT_COURSE, SELECT_COURSE } from './courseActionTypes';
import { selectCourse, unSelectCourse } from './courseActionCreators';

describe('tests for actions creators', () => {
    it('should return right payload and type when selectCourse is called', () => {
        expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
    });
    it('should return right action payload and type when unSelectCourse is called', () => {
        expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
    });
});