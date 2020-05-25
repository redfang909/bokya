import * as React from 'react'
import Member from 'src/app/models/member'
import { includes, random, size, filter } from 'lodash'

const { useState, useEffect } = React

interface Props {
  members: Member[],
  startPlay: boolean,
  last: Member,
  onRemoveMember: (id: string) => void,
  onStartPlay: (val: boolean) => void,
}

const StartButton = ({onPlay}) => {
  return (
    <div className="startroll-btn">
      <button className="btn" onClick={onPlay}>
        start roll
      </button>
    </div> 
  )
}


const RollMember = (props: { 
  name: string,
}) => {
  const { name } = props
  return (
    <div className="roll-member">
      <div className="row">
        <div className="col">
          <div className="member-name">
            <h1>{name}</h1>
          </div>
        </div>     
      </div>      
    </div>
  )
}

const SelectedMember = (props: { 
    member: Member,
  }) => {
  const { member } = props
  const [show, setShow] = useState(false)
  const { detail, name } = member
  const { description, image } = detail

  const onShow = () => {
    setShow(true)
  }

  const isShow = show ? 'in' : ''
  return (
    <div className="selected-member">
      <div className="row">
        <div className="col-sm-6">
          <div className="member-img">
            <div className={`show ${isShow}`}>
              <button className="btn" onClick={onShow}>show</button>
            </div>
            {<img src={`images/${image}`} alt="" className="img-fluid"/>}
          </div>
        </div>     
        <div className="col-sm-6">
          <div className="member-desc">              
            <h2>
              Who is {name}
            </h2>
            <div className="desc">
              {description}
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

const HeaderComponent = (props: Props) => {
  const {
    members,
    startPlay,
    last,
    onRemoveMember,
    onStartPlay,
  } = props
  const [member, setMember] = useState(null)
  const [play, setPlay] = useState(false)

  useEffect(() => {
    if(member && !play) {
      const { id } = member          
      onRemoveMember(id)    
    }

    if(last){ 
      setMember(last);
    }
  }, [member, play, last])

  useEffect(() => {
    if (play) {          
      const setRollerInterval = setInterval(() => {
        evaluateMembers()
      }, 200)
      const setRollerTimeout = setTimeout(() => {     
        setPlay(false)
        
      }, 8000)
      return () => {
        clearTimeout(setRollerTimeout)
        clearInterval(setRollerInterval)        
      }
    }    
  }, [play]);

  const getRandomValue = (newMembers: Member[]) => {    
    let list: Member[] = members
    if (size(newMembers) && size(newMembers) < size(members)) {
      list = filter(members, m => !includes(newMembers, m.id))
    }
    const num = random(0, size(list) - 1)
    return list[num]
  }

  const evaluateMembers = (newMembers: Member[] = []) => {
    const data: Member = getRandomValue(newMembers)
    if (!includes(newMembers, data.id)) {
      newMembers = [...newMembers, data.id] as Member[]
      setMember(data)
    } else {
      const list = size(newMembers) >= size(members) ? [] : newMembers
      newMembers = evaluateMembers(list)
    }
    return newMembers
  }
  
  const onPlay = () => {    
    if (size(members)) {
      setPlay(true)
      onStartPlay(true)
    } else {
      alert('Please add your friends')
    }
  }

  const selected = last || member
  const startBtn = (size(members) === 1 && startPlay)
  return (
    <div className="container">
      <div className="row">
        <div className="col header-box">
          {
            (play && member) && 
              <RollMember
                name={member.name}
              />
          }
          { 
            (!play && member) && 
              <SelectedMember
                member={selected}
              />
          }
          {
            !(play || startBtn) && <StartButton onPlay={onPlay} />
          }   
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent