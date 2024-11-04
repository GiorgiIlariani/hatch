import JobsCard from "@/components/shared/cards/JobsCard";
import { PaginationComponent } from "@/components/shared/Pagination";
import React from "react";

const JobsPage = async () => {
  const searchedJobs = [1, 2, 3, 4];

  return (
    <div className="w-full flex flex-col">
      <JobsCard />
      <JobsCard />
      <JobsCard />
      <div className="mt-14">
        <PaginationComponent
          count={40}
          page={10}
          // setPage={() => {}}
        />
      </div>
    </div>
  );
};

export default JobsPage;
