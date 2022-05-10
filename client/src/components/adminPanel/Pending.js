import React, { useEffect, useState } from 'react'

import { Grid, makeStyles, CircularProgress, Typography} from '@material-ui/core'
import ReactPaginate from 'react-paginate'
import { useSelector, useDispatch } from 'react-redux'

import UserCard from '../UserCard'

import { getPendingBiodatas } from '../../redux/actions/pendingAction';

const useStyles = makeStyles((theme)=>({
    bioSearchSelect: {
      minWidth:300,
      
},
        inputLabel:{
            alignItems:'center'
        }

   
  }));
  
const Pending = () => {
    
    const classes = useStyles();
    

    const { loading, pendingBiodatas } = useSelector(state => state.pendingBiodatas)
    const dispatch = useDispatch()
    const [pageNumber, setPageNumber] = useState(0);
   
    const biodatasPerPage = 9;
    const pagesVisited = pageNumber * biodatasPerPage;
   
    const displayBiodatas = pendingBiodatas.slice(pagesVisited, pagesVisited + biodatasPerPage)
    
   
    const pageCount = Math.ceil(pendingBiodatas.length / biodatasPerPage);
    
    const changePage = ({ selected }) => {
        setPageNumber(selected);
      };

  useEffect(() => {
     dispatch(getPendingBiodatas())
  }, [dispatch])
   
   
    
    return (
      <div className='biodatas_page'> {loading?<div className='loading'><CircularProgress/> </div>  : 
            <div className='biodatas_page'>
          
        
           <Grid
           container
           spacing={2}
           direction="row"
           justify="flex-start"
           alignItems="flex-start"
           style={{padding:'20px'}}
       >
         {displayBiodatas.map((user) => (

                  <Grid item xs={12} sm={6} md={4} key={user._id} >
                          <UserCard 
                          
                          user={user} 
                          border="border"
        
                          />
                        </Grid>
        
    ))}
           

            </Grid>
         
           

           
        
 
      

      {loading? null : displayBiodatas.length===0? <div className='biodatas_page' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}><Typography>No biodata is pending approval!</Typography></div>:
      <div className='my-5'>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        pageCount={pageCount}
        onPageChange={changePage}
        
      /> </div>}
     
      
      </div>}
      </div>
      
    )
}

export default Pending
