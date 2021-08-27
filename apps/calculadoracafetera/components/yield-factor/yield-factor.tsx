import styled from 'styled-components';

/* eslint-disable-next-line */
export interface YieldFactorProps {}

const StyledYieldFactor = styled.div`
  color: pink;
`;

export function YieldFactor(props: YieldFactorProps) {
  return (
    <StyledYieldFactor>
      <h1>Welcome to YieldFactor!</h1>
    </StyledYieldFactor>
  );
}

export default YieldFactor;
