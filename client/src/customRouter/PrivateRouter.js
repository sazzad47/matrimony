import { Route, Redirect} from 'react-router-dom'

const PrivateRouter = (props) => {
    const firstLogin = localStorage.getItem('firstLogin')
    return firstLogin && <Route {...props} /> 
}

export default PrivateRouter
