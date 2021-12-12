import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { getBiodatas } from '../redux/actions/getBiodatasAction';

const Paginate = ({ page }) => {
    const dispatch = useDispatch();
    const {  numberOfPages } = useSelector(state => state.biodatas)

    useEffect(() => {
        if (page) {
          dispatch(getBiodatas(page));
        }
      }, [dispatch, page]);
    return (
        <Pagination
      
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/biodatas?page=${item.page}`} />
      )}
    />
    )
}

export default Paginate
