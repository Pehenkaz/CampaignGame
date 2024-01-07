import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";

import { Campaign } from "~/types";
import { api } from "~/api";

type CampaignPageProps = {
  campaign: Campaign;
};

const CampaignPage: FC<CampaignPageProps> = ({ campaign }) => {
  return (
    <>
      <Head>
        <title>{campaign.title}</title>
        <meta name="description" content={campaign.title} />
        <link rel="icon" href="/cube.ico" />
      </Head>
      <section>
        <h1 className="text-3xl font-bold text-slate-800">{campaign.title}</h1>
        <img
          className="h-300 w-300 object-contain"
          src={campaign.image}
          alt={campaign.title}
        />
        <p>
          Количество игроков: {campaign.count_players}
        </p>
        <p>
          Длительность в часах: {campaign.count_hours}
        </p>
        <p>
          Возрастное ограничение: {campaign.age_rating}
        </p>
        <p>
          Жанр: {campaign.genre}
        </p>
      </section>
    </>
  );
};

export default CampaignPage;

export const getServerSideProps: GetServerSideProps<CampaignPageProps> = async (
  ctx,
) => {
  const { params } = ctx;

  const id = params?.id;

  if (typeof id !== "string") {
    return {
      notFound: true,
    };
  }

  const numberId = parseInt(id);

  if (Number.isNaN(numberId)) {
    return {
      notFound: true,
    };
  }

  const response = await api.campaign.getCampaignById(numberId);

  return { props: { campaign: response.data } };
};
