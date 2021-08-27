import { ChangeEvent } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import YieldFactor from '../components/yield-factor/yield-factor';
import {
  getYieldFactor,
  getWeightBasedOnYieldFactor,
} from '@calculadora-cafetera/utils';

const StyledPage = styled.div`
  text-align: center;
`;

export function Index() {
  const maxWeight = 200;
  const minWeight = 174;
  const baseYieldFactor = 94;
  const baseWeight = getWeightBasedOnYieldFactor(baseYieldFactor);

  const [premiumGrams, setPremiumGrams] = useState(baseWeight.toFixed(2));
  const [yieldFactor, setYieldFactor] = useState<number | null>(
    baseYieldFactor
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const gramsString = e.target.value;

    if (!/^\d*\.?\d{0,2}$/.test(gramsString)) {
      return;
    }

    const grams = Number(gramsString);

    if (Number.isNaN(grams)) {
      return;
    }

    if (grams > maxWeight || grams < minWeight) {
      setYieldFactor(null);
      setPremiumGrams(gramsString);
      return;
    }

    const yieldFactor = getYieldFactor(grams);

    setYieldFactor(yieldFactor);
    setPremiumGrams(gramsString);
  };

  return (
    <StyledPage>
      <header>
        <h1>Factor de rendimiento</h1>
      </header>
      <main>
        <section>
          <label htmlFor="grams">Peso cafe excelso</label>
          <input
            id="grams"
            type="text"
            onChange={onChange}
            value={premiumGrams}
          />
          <span>gramos.</span>
          <div>
            Factor de rendimiento:{' '}
            {typeof yieldFactor === 'number' ? yieldFactor.toFixed(2) : ''}
          </div>
          <YieldFactor min={89} max={99} base={baseYieldFactor} />
        </section>
      </main>
    </StyledPage>
  );
}

export default Index;
