import Member from 'src/app/models/member';
import { 
  ADD_MEMBER,
  DELETE_MEMBER,
  SELECT_DETAIL,
  SET_DETAILS,
  SET_PLAY,
  SET_LAST,
} from './actionTypes'
import Detail from 'src/app/models/detail';

export const addMember = (member: Member) => ({
  type: ADD_MEMBER,
  payload: member
})

export const deleteMember = (id: string) => ({
  type: DELETE_MEMBER,
  payload: id
})

export const setDetails = (details: Detail[]) => ({
  type: SET_DETAILS,
  payload: details
})

export const selectDetail = (id: number) => ({
  type: SELECT_DETAIL,
  payload: id
})

export const setPlay = (play: boolean) => ({
  type: SET_PLAY,
  payload: play
})

export const setLast = (member: Member) => ({
  type: SET_LAST,
  payload: member
})
