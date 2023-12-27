import {Campaign, CampaignsRequestParams} from "~/types";
import { apiInstance } from "./instance";

export const getCampaigns = (params?: CampaignsRequestParams) => {
  return apiInstance.get<Campaign[]>("/campaigns", { params });
};

export const getCampaignById = (id: number) => {
  return apiInstance.get<Campaign>(`/campaigns/${id}`);
};
