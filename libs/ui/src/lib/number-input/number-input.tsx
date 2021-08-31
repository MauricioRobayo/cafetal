import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

function formatCurrency(number: number): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  return formatter.format(number);
}

function parseCurrency(number: string): number | null {
  const value = Number(number.replace(/,/g, ''));
  if (Number.isNaN(value)) {
    return null;
  }

  return value;
}

type Modify<T, R> = Omit<T, keyof R> & R;
type ModifiedInputProps = Modify<
  React.InputHTMLAttributes<HTMLInputElement>,
  {
    className?: string;
    onChange: (value: number) => void;
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
  const [stringValue, setStringValue] = useState(formatCurrency(value));

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseCurrency(e.target.value);

    if (value === null) {
      return;
    }

    setStringValue(formatCurrency(value));
    onChange(value);
  };

  return (
    <StyledNumberInput
      className={className}
      value={stringValue}
      onChange={changeHandler}
      type="text"
      inputMode="decimal"
      {...props}
    />
  );
}

export default NumberInput;
