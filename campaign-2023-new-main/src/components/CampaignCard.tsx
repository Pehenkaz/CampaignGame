/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import Link from "next/link";

import { Campaign } from "~/types";

type CampaignCardProps = {
  campaign: Campaign;
};

export const CampaignCard: FC<CampaignCardProps> = ({ campaign }) => {
  return (
    <Link href={`/product/${campaign.id}`}>
      <div className="flex flex-col gap-3">
        <div className="flex h-96 items-center justify-center bg-white p-4">
          <img
            className="h-full w-full object-contain"
            src={campaign.image}
            alt={campaign.title}
          />
        </div>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap">
          {campaign.title}
        </p>
      </div>
    </Link>
  );
};
