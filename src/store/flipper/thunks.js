import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyComent, setActiveComment, savingNewComment, setComent } from './';
import { loadComents } from '../../helpers';

export const startNewComent = ({ quest1, quest2, quest3, quest4 }) => {

    return async( dispatch, getState ) => {

        dispatch( savingNewComment() );

        const { uid } = getState().auth;

        const newComent = {
            quest1: quest1,
            quest2: quest2,
            quest3: quest3,
            quest4: quest4,
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/comment/comments` ) );
        await setDoc( newDoc, newComent );

        newComent.id = newDoc.id;

        //! dispatch
        dispatch( addNewEmptyComent( newComent ) );
        dispatch( setActiveComment( newComent ) );

    }

}

export const startLoadingComment = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        if( !uid ) throw new Error('El uid del usuario no existe');

        const comments = await loadComents( uid );
        dispatch( setComent( comments ) )

    }
}

export const startSavingComment = () => {
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;

        const commentToFireStore = { ...comment };
    }
}