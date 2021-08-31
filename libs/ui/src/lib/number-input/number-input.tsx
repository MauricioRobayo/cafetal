import { createComponentStoriesFile } from '@nrwl/react/src/generators/component-story/component-story';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [stringValue, setStringValue] = useState(formatCurrency(value));
  const [cursorPosition, setCursorPosition] = useState([0, 0]);

  useEffect(() => {
    const [cursorPositionStart, cursorPositionEnd] = cursorPosition;

    const offset = [...stringValue]
      .slice(0, cursorPositionEnd)
      .filter((char) => char === ',').length;

    inputRef.current?.setSelectionRange(
      cursorPositionStart + offset,
      cursorPositionEnd + offset
    );
  }, [stringValue, cursorPosition]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const cursorPositionStart = Number(inputRef.current?.selectionStart);
    const cursorPositionEnd = Number(inputRef.current?.selectionEnd);
    const offset = [...rawValue]
      .slice(0, cursorPositionEnd)
      .filter((char) => char === ',').length;

    const value = parseCurrency(rawValue);

    if (value === null) {
      return;
    }

    setCursorPosition([
      cursorPositionStart - offset,
      cursorPositionEnd - offset,
    ]);

    const stringValue = formatCurrency(value);
    setStringValue(stringValue);
    onChange(value, stringValue);
  };

  return (
    <StyledNumberInput
      className={className}
      value={stringValue}
      onChange={changeHandler}
      type="text"
      inputMode="decimal"
      ref={inputRef}
      {...props}
    />
  );
}

export default NumberInput;
