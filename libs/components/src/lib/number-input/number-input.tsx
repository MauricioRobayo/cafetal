import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

export interface NumberInputProps {
  acceptDecimals?: boolean;
  className?: string;
  formatter: (number: number) => string;
  max?: number;
  min?: number;
  name: string;
  onChange: (value: number, stringValue: string) => void;
  value: number;
}

const StyledNumberInput = styled.input`
  padding: 0.25em;
  border: 1px solid transparent;
  border-bottom: 2px solid ${({ theme }) => theme.colors.brand};
  line-height: normal;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.brand};
    border-bottom: 2px solid ${({ theme }) => theme.colors.brand};
  }
`;

export function NumberInput({
  acceptDecimals = false,
  className = '',
  formatter,
  max = Number.MAX_SAFE_INTEGER,
  min = 0,
  name,
  onChange,
  value,
}: NumberInputProps) {
  const [realValue, setRealValue] = useState(String(value));
  const [stringValue, setStringValue] = useState(formatter(value));
  const [isEditing, setIsEditing] = useState(false);

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    const validation = acceptDecimals ? /^\d*\.?\d{0,2}$/ : /^\d*$/;

    if (!validation.test(e.target.value)) {
      return;
    }

    const value = Number(e.target.value);

    if (value > max || value < min) {
      return;
    }

    const stringValue = formatter(Number(e.target.value));

    setRealValue(e.target.value);
    setStringValue(stringValue);
    onChange(value, stringValue);
  }

  if (isEditing) {
    return (
      <StyledNumberInput
        className={className}
        value={realValue}
        onChange={changeHandler}
        onBlur={() => setIsEditing(false)}
        type="text"
        inputMode={acceptDecimals ? 'decimal' : 'numeric'}
        name={name}
      />
    );
  }

  return (
    <StyledNumberInput
      className={className}
      value={stringValue}
      type="text"
      onFocus={() => setIsEditing(true)}
      name={name}
      readOnly
    />
  );
}

export default NumberInput;
