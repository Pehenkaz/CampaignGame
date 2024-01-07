import {Campaign, CampaignsRequestParams} from "~/types";
import { apiInstance } from "./instance";
import { Page } from "~/types/page";

export const getCampaigns = (params?: CampaignsRequestParams) => {
  return apiInstance.get<Page<Campaign[]>>("/campaigns", { params });
};

export const getCampaignById = (id: number) => {
  return apiInstance.get<Campaign>(`/campaigns/${id}`);
};
