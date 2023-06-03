import { createContext } from 'react'

const AuthContext = createContext({ username: "", setUsername: () => {}});
export default AuthContext;