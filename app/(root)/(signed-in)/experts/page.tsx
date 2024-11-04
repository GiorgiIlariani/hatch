import ExpertsCard from "@/components/shared/cards/ExpertsCard";
import { PaginationComponent } from "@/components/shared/Pagination";

const ExpertsPage = () => {
  return (
    <div className="w-full flex flex-col">
      <ExpertsCard />
      <ExpertsCard />
      <ExpertsCard />
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

export default ExpertsPage;
