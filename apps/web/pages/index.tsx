import { ChangeEvent } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import YieldFactor from '../components/yield-factor/yield-factor';
import { getYieldFactor } from '@calculadora-cafetera/utils';

const StyledPage = styled.div``;

export function Index() {
  const baseWeight = 189.8;
  const maxWeight = 200;
  const minWeight = 174;
  const baseYieldFactor = getYieldFactor(baseWeight);

  const [premiumGrams, setPremiumGrams] = useState(baseWeight.toFixed(1));
  const [yieldFactor, setYieldFactor] = useState(baseYieldFactor.toFixed(2));

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
      setYieldFactor('');
      setPremiumGrams(gramsString);
      return;
    }

    const yieldFactor = getYieldFactor(grams);

    setYieldFactor(yieldFactor.toFixed(1));
    setPremiumGrams(gramsString);
  };

  return (
    <StyledPage>
      <header>
        <h1>Factor de rendimiento</h1>
      </header>
      <main>
        <section>
          <label htmlFor="grams">Peso cafe excelso:</label>
          <input
            id="grams"
            type="text"
            onChange={onChange}
            value={premiumGrams}
          />
          <h4>Factor de rendimiento:</h4>
          <YieldFactor min={minWeight} max={maxWeight} base={baseWeight} />
        </section>
      </main>
    </StyledPage>
  );
}

export default Index;
