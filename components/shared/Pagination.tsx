"use client";

import { Pagination } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

export function PaginationComponent({
  count,
  page,
}: //   setPage,
PaginationComponentProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Calculate the total number of pages
  const totalPages = Math.ceil(count / 4);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    // setPage(value);
    router.push(`${pathname}?page=${value}`);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        color="primary"
        shape="rounded"
        variant="outlined"
        size="large"
      />
    </div>
  );
}
