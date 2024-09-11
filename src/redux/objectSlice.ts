// store/objectSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MyObject {
  [key: string]: any; // Flexible object type with string keys
}

interface ObjectState {
  data: MyObject;
}

const initialState: ObjectState = {
  data: {}, // Initial state of the object
};

const objectSlice = createSlice({
  name: 'object',
  initialState,
  reducers: {
    setObject: (state, action: PayloadAction<MyObject>) => {
      state.data = action.payload; // Sets the entire object
    },
    clearObject: (state) => {
      state.data = {}; // Clears the entire object
    },
  },
});

export const { setObject, clearObject } = objectSlice.actions;
export default objectSlice.reducer;
