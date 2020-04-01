import Member from "src/app/models/member"
import Detail from "src/app/models/detail"

interface MemberState {
  list: Member[]
  details: Detail[]
}

interface RollerState {
  play: boolean,
  last: Member,
}

export const getMembers = (state: MemberState) => state.list
export const getDetails = (state: MemberState) => state.details
export const getPlay = (state: RollerState) => state.play
export const getLast = (state: RollerState) => state.last
