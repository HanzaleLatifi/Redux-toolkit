import { useState , useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

function UsersContainer() {
  const userData = useSelector((state) => state.users);
  const { data, error, loading } = userData;
  const dispatch = useDispatch();
useEffect(() => {
    dispatch(fetchUsers())
}, [])
  const renderUsers = () => {
    if (error) return <p>{error}</p>;
    if (loading) return <p> loading.....</p>;
    if (!loading && data)
      return (
        <div>
            {data.map((u)=>(
                <p>{u.name}</p>
            ))}
        </div>
      );
  };
  return <div>{renderUsers()}</div>;
}

export default UsersContainer;
