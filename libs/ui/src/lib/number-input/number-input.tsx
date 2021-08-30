import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NumberInputProps {
  className?: string;
  id: string;
  onChange: (value: number, stringValue: string) => void;
  precision: number;
  step?: number;
  value: number;
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
  precision,
  step,
  value,
}: NumberInputProps) {
  const [stringValue, setStringValue] = useState(value.toFixed(precision));

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStringValue(e.target.value);
    onChange(value, stringValue);
  };

  return (
    <StyledNumberInput
      className={className}
      id={id}
      value={stringValue}
      step={step}
      onChange={changeHandler}
      type="number"
    />
  );
}

export default NumberInput;
