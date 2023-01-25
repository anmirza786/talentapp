import React from "react";
import { Stack } from "@mui/material";
import { Pagination } from "@mui/material";

const CardPagination = (props) => {
  const { itemsCount, pageSize, page, handlePageChange } = props;
  //   const [page, setPage] = React.useState(1);
  const pageCount = Math.ceil(itemsCount / pageSize);
  console.log(page);
  if (pageCount === 1) return null;
  return (
    <Stack spacing={4}>
      <Pagination count={pageCount} page={page} onChange={handlePageChange} />
    </Stack>
  );
};

export default CardPagination;
