import {State} from "../store/store.types";

export const isAuthenticated = (state: State) => !!state.user.data
export const isLoading = (state: State) => state.user.settings.isLoading
export const errorMessage = (state: State) => state.user.error
