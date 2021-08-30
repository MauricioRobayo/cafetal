import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

function formatCurrency(number: number, showDecimals: boolean): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: showDecimals ? 2 : 0,
  });

  return formatter.format(number);
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
  const [stringValue, setStringValue] = useState(
    String(Math.round(value * 100) / 100)
  );

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^\d*\.?\d{0,2}$/.test(e.target.value)) {
      return;
    }

    setStringValue(e.target.value);
    onChange(Number(e.target.value));
  };

  return (
    <StyledNumberInput
      className={className}
      value={stringValue}
      onChange={changeHandler}
      type="text"
      {...props}
    />
  );
}

export default NumberInput;
