import { FC, useState } from "react";

import { CampaignsRequestParams, CampaignsLimit, CampaignsSort } from "~/types";
import { DropDown } from "~/components";

const sortOptions: CampaignsSort[] = ["asc", "desc"];
const limitOptions: CampaignsLimit[] = ["5", "10", "20"];

type FiltersProps = {
  onFiltersChange: (params: CampaignsRequestParams) => void;
};

export const Filters: FC<FiltersProps> = ({ onFiltersChange }) => {
  const [sort, setSort] = useState<CampaignsSort>("asc");
  const [limit, setLimit] = useState<CampaignsLimit>("20");

  const onSortChange = (value: CampaignsSort) => {
    setSort(value);
    onFiltersChange({ sort: value, limit });
  };

  const onLimitChange = (value: CampaignsLimit) => {
    setLimit(value);
    onFiltersChange({ limit: value, sort });
  };

  return (
    <div className="flex gap-4">
      <DropDown value={sort} onChange={onSortChange} options={sortOptions} />
      <DropDown value={limit} onChange={onLimitChange} options={limitOptions} />
    </div>
  );
};
