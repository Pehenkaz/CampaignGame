import { useState } from "react";
import { api } from "~/api";

import {Campaign, CampaignsRequestParams} from "~/types";

export const useCampaigns = (initialCampaigns: Campaign[]) => {
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [isLoading, setIsLoading] = useState(false);

  const refetch = async (params: CampaignsRequestParams) => {
    setIsLoading(true);

    try {
      const response = await api.campaign.getCampaigns(params);

      setCampaigns(response.data);
    } catch {
      // Обработать ошибку, например показать ее через react-toastify
    }

    setIsLoading(false);
  };

  return { campaigns, isLoading, refetch };
};
