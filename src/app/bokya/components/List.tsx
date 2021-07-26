import * as React from 'react'
import FormContainer from '../containers/Form'
import Member from 'src/app/models/member'
import { map, size } from 'lodash'

const { Fragment } = React

interface Props {
  members: Member[],
  startPlay: boolean,
  onDeleteMember: (id: string) => void,
  setLastMember: (member: Member) => void,
}

const ListMembers = ({ 
    members,
    startPlay,
    onDelete,
    onShow, 
  }) => {
  return (
    <Fragment>
      {
        map(members, (member) => {
          const { id, name } = member
          return (
            <li className="list-group-item" key={id}>
              <div className="row">
                <div className="col-10">
                  {name}
                </div>
                <div className="col-2">
                  {
                    !startPlay && (
                      <button className="btn" onClick={() => onDelete(id)}>
                        <i className="fa fa-times-circle"></i>
                      </button>
                    )
                  }
                  {
                    (size(members) === 1 && startPlay) && (
                      <button className="btn" onClick={() => onShow(member)}>
                        show
                      </button>
                    )
                  }
                </div>                
              </div>                            
            </li>
          )
        })
      }
    </Fragment>
  )
}

const ListComponent = (props: Props) => {    
  const { members, startPlay, onDeleteMember, setLastMember } = props
  const onDelete = (id) => {
    onDeleteMember(id)
  }

  const onShow = (member: Member) => {
    const { id } = member
    setLastMember(member)
    onDeleteMember(id)
  }
 
  return (
    <div className="member-list">
      <h5>Add your 5 friends name here</h5>
      <ul className="list-group">
        <ListMembers 
          members={members}
          onDelete={onDelete}
          startPlay={startPlay}
          onShow={onShow}
        />
        { size(members) < 5 &&
          <li className="list-group-item">
            <FormContainer/>
          </li>
        }
        log test
      </ul>
      <br/>      
    </div>
  )
}

export default ListComponent