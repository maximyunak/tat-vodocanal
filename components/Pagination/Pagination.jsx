import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = () => {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        // onPageChange={(e) => console.log(e)} // сменить на onChangePage(e.selected + 1)
        pageRangeDisplayed={3}
        pageCount={100}
        renderOnZeroPageCount={null}
        marginPagesDisplayed={1}
      />
    </div>
  );
};

export default Pagination;
