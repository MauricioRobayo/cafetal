import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type Modify<T, R> = Omit<T, keyof R> & R;
type ModifiedInputProps = Modify<
  React.InputHTMLAttributes<HTMLInputElement>,
  {
    className?: string;
    onChange: (value: number, stringValue: string) => void;
    value: number;
    formatter: (number: number) => string;
  }
>;
export type NumberInputProps = Omit<ModifiedInputProps, 'type'>;

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
  className = '',
  onChange,
  value,
  formatter,
  ...props
}: NumberInputProps) {
  const [realValue, setRealValue] = useState(value);
  const [stringValue, setStringValue] = useState(formatter(value));
  const [isEditing, setIsEditing] = useState(false);

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    if (!/^\d*\.?\d{0,2}$/.test(e.target.value)) {
      return;
    }

    const value = Number(e.target.value);
    setRealValue(value);
    setStringValue(formatter(value));
    onChange(realValue, stringValue);
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
        {...props}
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
