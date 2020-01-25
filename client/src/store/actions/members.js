import { LoadingState } from '../reducers'

export const MembersActionTypes = {
  SET_MEMBERS: 'MEMBERS:SET_MEMBERS',
  SET_LOADING_STATE: 'MEMBERS:SET_LOADING_STATE',
}

export const setMembers = members => ({
  type: MembersActionTypes.SET_MEMBERS,
  payload: {
    members,
  },
})

export const setLoadingMembersState = loadingState => ({
  type: MembersActionTypes.SET_LOADING_STATE,
  payload: {
    loadingState,
  }
})

export const loadMembers = socket => dispatch => {
  dispatch(setLoadingMembersState(LoadingState.Loading))
  socket.on('membersLoaded', members => {
    dispatch(setMembers(members))
    dispatch(setLoadingMembersState(LoadingState.Loaded))
  })
}