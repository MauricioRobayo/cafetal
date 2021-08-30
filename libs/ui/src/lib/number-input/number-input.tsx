import { ChangeEvent } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NumberInputProps {
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: number;
  step?: number;
  className?: string;
}

const StyledNumberInput = styled.input`
  padding: 0.5em;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.color.brand};
`;

export function NumberInput({
  className,
  id,
  onChange,
  value,
  step,
}: NumberInputProps) {
  return (
    <StyledNumberInput
      className={className}
      id={id}
      value={value}
      step={step}
      onChange={onChange}
      type="number"
    />
  );
}

export default NumberInput;
