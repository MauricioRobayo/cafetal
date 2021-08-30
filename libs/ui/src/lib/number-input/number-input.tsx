import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

type Modify<T, R> = Omit<T, keyof R> & R;

export type NumberInputProps = Modify<
  React.InputHTMLAttributes<HTMLInputElement>,
  {
    className?: string;
    onChange: (value: number, stringValue: string) => void;
    value: number;
    inputMode?: 'numeric' | 'decimal';
  }
>;

const StyledNumberInput = styled.input`
  padding: 0.25em;
  border: none;
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
  inputMode = 'numeric',
  ...props
}: NumberInputProps) {
  const [stringValue, setStringValue] = useState(String(value));

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStringValue(e.target.value);
    onChange(Number(e.target.value), stringValue);
  };

  return (
    <StyledNumberInput
      className={className}
      value={stringValue}
      onChange={changeHandler}
      type="text"
      inputMode={inputMode}
      {...props}
    />
  );
}

export default NumberInput;
