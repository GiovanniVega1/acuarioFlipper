import { createSlice } from '@reduxjs/toolkit';

export const flipperSlice = createSlice({
   name: 'fliper',
   initialState: {
       isSaving: false,
       messageSaved: '',
       comments: [],
       active: null
   },
   reducers: {
       savingNewComment: ( state ) => {
            state.isSaving = true;
       },
       addNewEmptyComent: (state, action) => {
            state.isSaving = false;
       },
       setActiveComment: ( state, action ) => {
            state.active = action.payload;
       },
       setComent: (state, action) => {
            state.comments = action.payload;
       },
       setSaving: (state) => {

       },
   }
});


// Action creators are generated for each case reducer function
export const { 
    addNewEmptyComent,
    setComent,
    setSaving,
    setActiveComment,
    savingNewComment,
 } = flipperSlice.actions;