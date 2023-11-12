import { useState } from 'react';
import User from '../User/User';
import './Users.css';

const Users = ({ users = [] }) => {

  const [expanded ,setExpanded] = useState([])

  const handleExpandedToggle = (id) => {
    if(!expanded.includes(id)){
      const newExpanded = [...expanded, id];
      setExpanded(newExpanded);
    }else{
      const removed = expanded.filter((currId) => currId !== id)
      setExpanded(removed)
    }
  }

  console.log(users)
  return (
    <article className="Users">
      {users.data.map((user) => {
        const { id } = user;
        return <User key={id} user={user} expanded={expanded.includes(user.id)} onClick={()=> handleExpandedToggle(user.id)} />;
      })}
    </article>
  );
};

export default Users;
