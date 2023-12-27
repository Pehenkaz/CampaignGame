import { GetServerSideProps } from "next";
import Head from "next/head";
import { FC } from "react";

import { Campaign } from "~/types";
import { api } from "~/api";

type ProductPageProps = {
  product: Campaign;
};

const CampaignPage: FC<ProductPageProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.title} />
        <link rel="icon" href="/cube.ico" />
      </Head>
      <section>
        <h1 className="text-4xl font-bold text-slate-800">{product.title}</h1>
      </section>
    </>
  );
};

export default CampaignPage;

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (
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

  return { props: { product: response.data } };
};
