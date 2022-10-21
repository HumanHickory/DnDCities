export interface Campaign{
    id: number;
    name: string;
}

export interface CampaignLocation{
    id: number;
    campaignId: number;
    cityId: number;
    show: boolean;
}
