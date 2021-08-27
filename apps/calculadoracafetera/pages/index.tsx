import { ChangeEvent } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const StyledPage = styled.div``;

function getYieldFactor(weight: number): number {
  const coffeeBagWeightKg = 70;
  const CPS = 250;
  return (CPS * coffeeBagWeightKg) / weight;
}

export function Index() {
  const baseWeight = 189.8;
  const maxWeight = 250;
  const minWeight = 90;

  const [grams, setGrams] = useState(baseWeight.toFixed(1));
  const [yieldFactor, setYieldFactor] = useState(
    getYieldFactor(baseWeight).toFixed(2)
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
      setYieldFactor('');
      setGrams(gramsString);
      return;
    }

    const yieldFactor = getYieldFactor(grams);

    setYieldFactor(yieldFactor.toFixed(1));
    setGrams(gramsString);
  };

  return (
    <StyledPage>
      <header>
        <h1>Factor de rendimiento</h1>
      </header>
      <main>
        <section>
          <label htmlFor="grams">Peso cafe excelso:</label>
          <input id="grams" type="text" onChange={onChange} value={grams} />
          <h4>Factor de rendimiento:</h4>
          <div>{yieldFactor}</div>
        </section>
      </main>
    </StyledPage>
  );
}

export default Index;
