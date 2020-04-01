import * as React from 'react'
import { random, size, filter } from 'lodash'
import UniqueId from 'src/app/utils/helpers/uniqueId'
import Member from 'src/app/models/member'
import Detail from 'src/app/models/detail'

const { useState } = React

interface Props {
  details: Detail[],
  members: Member[],
  startPlay: boolean,
  onAddMember: (member: Member) => void,  
  onSelectDetail: (id: number) => void,
}

const FormComponent = (props: Props) => {
  const { 
    onAddMember,
    details,
    onSelectDetail,
    members,
    startPlay,
  } = props
  const [name, setName] = useState('')
  const [gen, setGender] = useState(1)

  const onChangeMember = (e) => {
    setName(e.target.value)  
  }

  const onChangeGender = (e) => {
    setGender(e.target.value)
  }

  const onAdd = () => {
    const id = UniqueId()
    const memberGenders = filter(details, ({ gender }) => { 
      return gen == gender
    }) 
    const num: number = random(0, size(memberGenders) - 1)
    const detail: Detail = memberGenders[num] 
    if (name) {
      const member = {
        id,
        name,
        detail,        
      }
      onAddMember(member)
      onSelectDetail(detail.id)
      setName('')
    }
  }
  
  return (
    <div>      
      { (size(members) <= 5 && !startPlay) && (
          <div className="input-group">
            <input value={name} type="text" className="form-control" onChange={onChangeMember} />
            <div className="form-control">
              <select value={gen} onChange={onChangeGender} className="form-control">
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
            </div>
            <div className="input-group-prepend">
              <button className="btn" onClick={onAdd}>
                  <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default FormComponent