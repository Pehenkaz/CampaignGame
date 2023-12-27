export type CampaignsSort = "asc" | "desc";

export type CampaignsLimit = "5" | "10" | "20";

export type CampaignsRequestParams = {
  sort: CampaignsSort;
  limit: CampaignsLimit;
};

export type Campaign = {
  id: number;
  title: string;
  count_players: number;
  age_rating: number;
  genre: string;
  count_hours: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type CampaignCreate = {
  title: string;
  count_players: number;
  age_rating: number;
  genre: string;
  count_hours: number;
  image: string;
};

export type CampaignUpdate = CampaignCreate;
