import ReactPaginate from "react-paginate";

interface Props {
  pageCount: number;
  handleChangePage: (e: number) => void;
}

export default function Pagination({ pageCount, handleChangePage }: Props) {
  return (
    <ReactPaginate
      nextLabel=">"
      onPageChange={(e) => handleChangePage(e.selected)}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      previousLabel="<"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
    />
  );
}
