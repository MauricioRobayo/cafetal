import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

export interface NumberInputProps {
  acceptDecimals?: boolean;
  className?: string;
  formatter: (number: number) => string;
  name: string;
  onChange: (value: number, stringValue: string) => void;
  value: number;
}

const StyledNumberInput = styled.input`
  padding: 0.25em;
  border: 1px solid transparent;
  border-bottom: 2px solid ${({ theme }) => theme.color.brand};
  line-height: normal;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.brand};
    border-bottom: 2px solid ${({ theme }) => theme.color.brand};
  }
`;

export function NumberInput({
  acceptDecimals = false,
  className = '',
  formatter,
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
      readOnly
    />
  );
}

export default NumberInput;
