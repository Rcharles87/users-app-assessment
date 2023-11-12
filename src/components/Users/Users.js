import User from '../User/User';
import './Users.css';

const Users = ({ users = [] }) => {

  console.log(users)
  return (
    <article className="Users">
      {users.data.map((user) => {
        const { id } = user;
        return <User key={id} user={user} />;
      })}
    </article>
    // <div>
    //   {users.map((user)=>{
    //     return user
    //   })}
    // </div>
  );
};

export default Users;
