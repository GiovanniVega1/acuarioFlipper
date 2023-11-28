import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadComents = async( uid = '' ) => {

    if( !uid ) throw new Error('El uid del usuario no existe');

    const collectionRef = collection( FirebaseDB, `${ uid }/comment/comments` );
    const docs = await getDocs(collectionRef);

    const commetns = [];
    docs.forEach( doc => {
        commetns.push({ id: doc.id, ...doc.data() });
    } );

    console.log(commetns);
    return commetns;

}