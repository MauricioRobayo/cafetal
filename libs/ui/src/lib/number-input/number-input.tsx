import { ChangeEvent } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NumberInputProps {
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: number;
  step?: number;
}

const StyledNumberInput = styled.input``;

export function NumberInput({ id, onChange, value, step }: NumberInputProps) {
  return (
    <StyledNumberInput
      id={id}
      value={value}
      step={step}
      onChange={onChange}
      type="number"
    />
  );
}

export default NumberInput;
