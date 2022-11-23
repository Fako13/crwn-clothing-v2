import {
	createAction,
	ActionWithPayload,
	Action,
	withMatcher,
} from '../../utlils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES, Category } from './categories.types';

export type FetchCategoriesStart =
	Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
	CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
	Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
	CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
	Error
>;

export type CategoryAction =
	| FetchCategoriesStart
	| FetchCategoriesSuccess
	| FetchCategoriesFailed;

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => {
	return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
});

export const fetchCategoriesSuccess = withMatcher(
	(categoriesArray: Category[]): FetchCategoriesSuccess => {
		return createAction(
			CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
			categoriesArray
		);
	}
);

export const fetchCategoriesFailed = withMatcher(
	(error: Error): FetchCategoriesFailed => {
		return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
	}
);
