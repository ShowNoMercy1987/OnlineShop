import React from 'react';
import ReactPaginate from 'react-paginate';
import "../Pagination/Pagination.css"

type PaginationProps = {
  pages: number;
  setCurrentPage: (page: number) => void;
};


const Pagination:React.FC<PaginationProps> = ({pages , setCurrentPage}) => {


  const activePage = (e: any) => {
    let page = e.selected + 1;
    setCurrentPage(page);
    localStorage.setItem('page', page)
  }


  return (
    <>
        <ReactPaginate
          containerClassName="pagination-main-container"
          pageClassName="pagination-list-main"
          previousClassName="pagination-list-main"
          previousLinkClassName="pagination-text pagination-container pagination-next-prev pagination-buttons"
          nextClassName="pagination-list-main"
          nextLinkClassName="pagination-text pagination-container pagination-next-prev pagination-buttons"
          pageLinkClassName="pagination-container pagination-text pagination-list pagination-buttons"
          activeClassName="pagination-active-button"
          breakClassName="pagination-list-main"
          breakLinkClassName="pagination-container pagination-text pagination-list pagination-buttons"
          breakLabel="..."
          nextLabel="следующая >"
          onPageChange={activePage}
          pageRangeDisplayed={3}
          pageCount={pages}
          previousLabel="< предыдущая"
        />
    </>
  );
};

export default Pagination;
