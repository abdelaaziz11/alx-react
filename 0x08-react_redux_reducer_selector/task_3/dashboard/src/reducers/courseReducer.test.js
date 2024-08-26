import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { courseReducer } from './courseReducer';

describe('tests for course reducer', () => {
	const defaultState = [];
	const data = [
		{
			id: 1,
			name: 'ES6',
			credit: 60,
		},
		{
			id: 2,
			name: 'Webpack',
			credit: 20,
		},
		{
			id: 3,
			name: 'React',
			credit: 40,
		},
	];

	it('should return empty array if no action passed', () => {
		expect(courseReducer(defaultState, 'null')).toEqual([]);
	});

	it('should return correct data on successful fetch', () => {
		const data = [
			{
				id: 1,
				name: 'ES6',
				credit: 60,
			},
			{
				id: 2,
				name: 'Webpack',
				credit: 20,
			},
			{
				id: 3,
				name: 'React',
				credit: 40,
			},
		];

		expect(courseReducer(data, FETCH_COURSE_SUCCESS())).toEqual(
			data.map((course) => ({
				...course,
				isSelected: false,
			}))
		);
	});

	it('should return data with the right item selected', () => {
		const data = [
			{
				id: 1,
				name: 'ES6',
				isSelected: false,
				credit: 60,
			},
			{
				id: 2,
				name: 'Webpack',
				isSelected: false,
				credit: 20,
			},
			{
				id: 3,
				name: 'React',
				isSelected: false,
				credit: 40,
			},
		];

		const selected = [
			{
				id: 1,
				name: 'ES6',
				isSelected: false,
				credit: 60,
			},
			{
				id: 2,
				name: 'Webpack',
				isSelected: true,
				credit: 20,
			},
			{
				id: 3,
				name: 'React',
				isSelected: false,
				credit: 40,
			},
		];

		expect(courseReducer(data, SELECT_COURSE(2))).toEqual(selected);
	});

	it('should return data with the right item unselected', () => {
		const data = [
			{
				id: 1,
				name: 'ES6',
				isSelected: false,
				credit: 60,
			},
			{
				id: 2,
				name: 'Webpack',
				isSelected: true,
				credit: 20,
			},
			{
				id: 3,
				name: 'React',
				isSelected: false,
				credit: 40,
			},
		];

		const unSelected = [
			{
				id: 1,
				name: 'ES6',
				isSelected: false,
				credit: 60,
			},
			{
				id: 2,
				name: 'Webpack',
				isSelected: false,
				credit: 20,
			},
			{
				id: 3,
				name: 'React',
				isSelected: false,
				credit: 40,
			},
		];

		expect(courseReducer(data, UNSELECT_COURSE(2))).toEqual(unSelected);
	});
});