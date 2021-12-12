import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDataAPI } from '../../utils/fetchData'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import SearchIcon from '@material-ui/icons/Search'
import UserCard from '../UserCard'
import LoadIcon from '../../images/loading.gif'

const Search = () => {
    const [search, setSearch] = useState('')
    const [color, setColor] = useState('')
    const [users, setUsers] = useState([])

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const [load, setLoad] = useState(false)


    const handleSearch = async (e) => {
        e.preventDefault()
        

        try {
            setLoad(true)
            const res = await getDataAPI(`search?gender=${search || 'none'}`)
            setUsers(res.data.users)
            setLoad(false)
        } catch (err) {
            dispatch({
                type: GLOBALTYPES.ALERT, payload: {error: err.response.data.msg}
            })
        }
    }
    
    useEffect(() => {
        const data = sessionStorage.getItem('Subhanallah');
        if (data){
            setUsers(JSON.parse(data));
        }
        
      }, []);
    
       useEffect(() => {
       
        sessionStorage.setItem('Subhanallah',JSON.stringify(users));
    
       },);
 
    return (
        <form onSubmit={handleSearch}>
            <input type="text" name="search" value={search} id="search" title="Enter to Search"
            onChange={e => setSearch(e.target.value)} />
            

           

            

            <button type="submit" > <SearchIcon /></button>

            

        
        </form>
    )
}

export default Search
