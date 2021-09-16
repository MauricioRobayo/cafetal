import styled from 'styled-components';
import { YieldCalculator } from '@cafetal/components';

const StyledPage = styled.div`
  text-align: center;
`;

export function Index() {
  return (
    <StyledPage>
      <header>
        <h1>Factor de rendimiento</h1>
      </header>
      <main>
        <YieldCalculator />
      </main>
    </StyledPage>
  );
}

export default Index;
