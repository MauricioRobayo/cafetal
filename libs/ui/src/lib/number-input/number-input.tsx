import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

function formatCurrency(number: number): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currencyDisplay: 'narrowSymbol',
    currency: 'COP',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  return formatter.format(number);
}

type Modify<T, R> = Omit<T, keyof R> & R;
type ModifiedInputProps = Modify<
  React.InputHTMLAttributes<HTMLInputElement>,
  {
    className?: string;
    onChange: (value: number, stringValue: string) => void;
    value: number;
  }
>;
export type NumberInputProps = Omit<ModifiedInputProps, 'type'>;

const StyledNumberInput = styled.input`
  padding: 0.25em;
  border: 1px solid transparent;
  border-bottom: 2px solid ${({ theme }) => theme.color.brand};
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.brand};
    border-bottom: 2px solid ${({ theme }) => theme.color.brand};
  }
`;

export function NumberInput({
  className = '',
  onChange,
  value,
  ...props
}: NumberInputProps) {
  const [realValue, setRealValue] = useState(value);
  const [stringValue, setStringValue] = useState(formatCurrency(value));
  const [isEditing, setIsEditing] = useState(false);

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    setRealValue(value);
    setStringValue(formatCurrency(value));
    onChange(realValue, stringValue);
  }

  function onStringValueFocus() {
    setIsEditing(true);
  }

  if (isEditing) {
    return (
      <StyledNumberInput
        className={className}
        value={realValue}
        onChange={changeHandler}
        onBlur={() => setIsEditing(false)}
        type="text"
        inputMode="decimal"
      />
    );
  }

  return (
    <StyledNumberInput
      className={className}
      value={stringValue}
      type="text"
      onFocus={onStringValueFocus}
      readOnly
      {...props}
    />
  );
}

export default NumberInput;
