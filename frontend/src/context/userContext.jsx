import React from 'react'

export const userDataContext = React.createContext()

const UserContext = ({children}) => {
    const[user, setUser] = React.useState({

       fullName:{
            firstName: '',
            lastName: ''
        },
        email: ''
        
    })
  return (
    <div>
        <userDataContext.Provider value={{user, setUser}}>
        {children}
        </userDataContext.Provider>
  
    </div>
  )
}

export default UserContext
