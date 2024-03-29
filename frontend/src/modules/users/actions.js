import * as actionTypes from './actionTypes';
import backend from '../../backend';

const signUpCompleted = authenticatedUser => ({
    type: actionTypes.SIGN_UP_COMPLETED,
    authenticatedUser
});

export const signUp = (user, onSuccess, onErrors) => dispatch =>
    backend.userService.signUp(user,
        authenticatedUser => {
            dispatch(signUpCompleted(authenticatedUser));
            onSuccess();
        },
        onErrors);

const loginCompleted = authenticatedUser => ({
    type: actionTypes.LOGIN_COMPLETED,
    authenticatedUser
}, console.log("PASO 3 LOGIN COMPLETED"),console.log(authenticatedUser));

export const login = (userName, password, onSuccess, onErrors, reauthenticationCallback) => dispatch =>
    backend.userService.login(userName, password,
        authenticatedUser => {
            dispatch(loginCompleted(authenticatedUser));
            onSuccess();
        },
        onErrors,
        reauthenticationCallback
    );

export const tryLoginFromServiceToken = reauthenticationCallback => dispatch => {
    console.log("PASO 2: TRY LOGIN ACTIONS");
    backend.userService.tryLoginFromServiceToken(
        authenticatedUser => {
            console.log(authenticatedUser);
            if (authenticatedUser) {
                dispatch(loginCompleted(authenticatedUser));
                console.log(authenticatedUser);
            }
        },
        reauthenticationCallback
    ) ;
}   

export const logout = () => {

    backend.userService.logout();

    return {type: actionTypes.LOGOUT};

};

export const updateProfileCompleted = user => ({
    type: actionTypes.UPDATE_PROFILE_COMPLETED,
    user
})

export const updateProfile = (user, onSuccess, onErrors) => dispatch =>
    backend.userService.updateProfile(user, 
        user => {
            dispatch(updateProfileCompleted(user));
            onSuccess();
        },
        onErrors);

export const changePassword = (id, oldPassword, newPassword, onSuccess, onErrors) => dispatch =>
    backend.userService.changePassword(id, oldPassword, newPassword, onSuccess, onErrors);