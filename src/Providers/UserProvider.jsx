/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useEffect, useState, createContext, useContext } from "react";
import { v4 } from "uuid";

const UsersContext = createContext({});

export const UsersProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [order, setOrder] = useState("");

  useEffect(()=>{
    setOrder(v4());
  }, [])

  return (
    <UsersContext.Provider
      value={{
        user,
        setUser,
        order,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => {
  const context = useContext(UsersContext);
  return {
    user: context.user,
    setUser: context.setUser,
    order: context.order,
  };
};
