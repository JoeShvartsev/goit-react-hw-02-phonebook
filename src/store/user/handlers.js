export const handlePanding = state => {
  state.isLoading = true;
  state.error = '';
}
export const handleFullfilledSignUp =(state, {payload}) => {
  state.isLoading = false;
  state.token = payload.token;
  state.profile = payload.user
}
export const handleFullfilledSignIn =(state,{payload}) => {
  state.isLoading = false;
  state.token = payload.token
  state.profile = payload.user
}
export const handleRejected =(state, {payload}) => {
  state.isLoading = false;
  state.error = payload;
}
  export const handleFullfilledLogOut =(state) => {
    state.isLoading = false;
    state.token = ''
    state.profile = null
  }