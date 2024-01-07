import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";

import {Campaign} from "~/types";
import { CampaignCard, Filters } from "~/components";
import { useCampaigns } from "~/hooks";
import { api } from "~/api";
import { Page } from "~/types/page";

type HomeProps = {
  campaigns: Page<Campaign[]>;
};

const Home: FC<HomeProps> = ({ campaigns: initialCampaigns }) => {
  const { campaigns, isLoading, refetch } = useCampaigns(initialCampaigns);

  return (
    <>
      <Head>
        <title>Главная</title>
        <meta name="description" content="Главная" />
        <link rel="icon" href="/cube.ico" />
      </Head>
      <section className="rounded-lg bg-slate-200 p-4">
        <Filters onFiltersChange={refetch} />
      </section>
      <section className="mt-4 grid grid-cols-1 justify-between gap-10 rounded-lg bg-slate-200 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {!isLoading &&
          campaigns.content.map((p) => <CampaignCard key={p.id} campaign={p} />)}
      </section>
      <section className="mt-4 rounded-lg bg-slate-200 p-4">Pagination</section>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await api.campaign.getCampaigns();

  return { props: { products: response.data } };
};
