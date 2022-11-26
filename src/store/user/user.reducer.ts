import { USER_ACTION_TYPES } from './user.types';
import {
	UserAction,
	signInSuccess,
	signOutSuccess,
	signInFailed,
	signUpFailed,
	signOutFailed,
} from './user.action';

import { UserData } from '../../utlils/firebase/firebase.utils';

export type UserState = {
	readonly currentUser: UserData | null;
	readonly isLoading: boolean;
	readonly error: Error | null;
};
const INITIAL_STATE: UserState = {
	currentUser: null,
	isLoading: false,
	error: null,
};
export const userReducer = (
	state = INITIAL_STATE,
	action = {} as UserAction
) => {
	if (signInSuccess.match(action)) {
		return { ...state, currentUser: action.payload };
	}

	if (signOutSuccess.match(action)) {
		return { ...state, currentUser: null };
	}

	if (
		signOutFailed.match(action) ||
		signInFailed.match(action) ||
		signUpFailed.match(action)
	) {
		return { ...state, error: action.payload };
	}

	return state;
};
