import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { Box, Button, CircularProgress, FormControl, Grid, InputLabel, makeStyles, Paper, Select, Typography } from '@material-ui/core'
import ReactPaginate from 'react-paginate'
import { useSelector, useDispatch } from 'react-redux'
import { getDataAPI } from '../utils/fetchData'
import { GLOBALTYPES } from '../redux/actions/globalTypes'
import UserCard from '../components/UserCard'
import LoadIcon from '../images/loading.gif'
import pdivisionsData from '../components/FormComponents/Data'
import { getBiodatas, getBiodatasBySearch } from '../redux/actions/getBiodatasAction'
import BioSearch from '../components/home/BioSearch';
const useStyles = makeStyles((theme)=>({
    bioSearchSelect: {
      minWidth:300,
      
},
        inputLabel:{
            alignItems:'center'
        }

   
  }));
 

const Biodatas = () => {
    const { biodatas, isLoading } = useSelector(state => state.biodatas)
    const dispatch = useDispatch()
    
   
   
    const classes = useStyles();
   
    const [pageNumber, setPageNumber] = useState(0);
   
    const biodatasPerPage = 9;
    const pagesVisited = pageNumber * biodatasPerPage;
   
    const displayBiodatas = biodatas.slice(pagesVisited, pagesVisited + biodatasPerPage)
    .map((user) => (
        <UserCard 
        key={user._id} 
        user={user} 
        border="border"
        
        />
    ))
   
    const pageCount = Math.ceil(biodatas.length / biodatasPerPage);
    
    const changePage = ({ selected }) => {
        setPageNumber(selected);
      };

    
   
    
    return (
            <div className='biodatas_page'>
          <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-4 ">
        <BioSearch/>
        </div>
        </div>
        {isLoading? <div className="biodatas mt-5 d-flex align-items-center justify-content-center"><CircularProgress/></div>  :
          <div className='biodatas'>
         
           

         {displayBiodatas}
           
        
 
      </div>}

      {isLoading? null : displayBiodatas.length===0? <div className="biodatas d-flex align-items-center justify-content-center mt-5"><Typography>আফওয়ান! আপনার সার্চ অনুযায়ী বায়োডাটা পাওয়া যায়নি।</Typography> </div>:
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
     
      
      </div>
    )
}

export default Biodatas
