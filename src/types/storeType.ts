import { storeRedux } from "../store/store";

export type RootState = ReturnType<typeof storeRedux.getState>;