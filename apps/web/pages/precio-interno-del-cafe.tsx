import { RefPriceRepository } from '@cafetal/repositories';
import type { RefPrice } from '@cafetal/models';
import { formatCurrency, formatLongDateCO } from '@cafetal/utils';
import styled from 'styled-components';

const repo = new RefPriceRepository();

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PageTitle = styled.h1`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
`;

const Ticker = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

interface RefPriceProps {
  currentDate: number;
  refPrice: RefPrice;
}
export default function RefPricePage({ currentDate, refPrice }: RefPriceProps) {
  return (
    <Header>
      <PageTitle>Precio Interno del Café Hoy</PageTitle>
      <div>{formatLongDateCO(currentDate)}</div>
      <Ticker>{formatCurrency(refPrice.internal.premium)}</Ticker>
      <div>Actualizado el {refPrice.date}</div>
    </Header>
  );
}

export async function getStaticProps() {
  const latestRefPrice = await repo.getLatest();
  const currentDate = Date.now();

  return {
    props: {
      currentDate,
      refPrice: latestRefPrice?.refPrice || {},
    },
  };
}
