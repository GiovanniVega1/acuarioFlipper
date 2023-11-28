import { loginWhitEmailPassword, singInWithGoogle, registerUserWithEmailPassword, logoutFirebase } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./"

export const checkingAuthentication = ( ) => {
    return async ( dispatch ) => {

        dispatch( checkingCredentials() );

    }
}

export const startGoogleSingIn = () => {
    return async ( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await singInWithGoogle();
        if ( !result.ok ) return dispatch ( logout( result.errorMessage ) );

        dispatch( login( result ));

    }
}

export const startCreatingUserWhitEmailPassword = ( {email, password, displayName} ) => {

    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if ( !ok ) return dispatch(logout({ errorMessage }));

        dispatch( login( { uid, displayName, email, photoURL } ));

    }

}

export const startLoginWhitEmailPassword = ({ email, password }) => {
    return async (dispatch) => {

        dispatch( checkingCredentials() );

        const result = await loginWhitEmailPassword({ email, password });
        console.log(result);

        if ( !result.ok ) return dispatch ( logout( result ) );
        dispatch( login( result ));

    }
}

export const startLogout = () => {
    return async( dispatch ) => {

        await logoutFirebase();

        dispatch( logout({ }) );

    }
}