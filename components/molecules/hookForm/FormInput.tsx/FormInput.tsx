import React, { KeyboardEventHandler } from "react";
import { useFormContext, Path, FieldValues } from "react-hook-form";
import FormErrorText from "../FormErrorText/FormErrorText";
import { S, StyledLabel } from "./FormInput.style";

interface Props<T>
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: Path<T>;
  label?: string;
  className?: string;
  margin?: string;
  required?: boolean;
  disabledValid?: boolean;
  maxWidth?: string;
  height?: string;
  disabled?: boolean;
  color?: string;
  fontSize?: string;
  isFocusing?: boolean;
  enterKey?: boolean;
  readOnly?: boolean;
  visibleError?: boolean;
}

export default function FormInput<T extends FieldValues>({
  className,
  margin,
  isFocusing,
  name,
  required,
  label,
  disabled,
  maxWidth,
  height,
  enterKey = false,
  readOnly,
  visibleError = true,
  ...rest
}: Props<T>) {
  const {
    formState: { errors },
    register,
    setFocus,
    watch,
    clearErrors,
  } = useFormContext<T>();

  const watchValue = watch(name);

  React.useEffect(() => {
    if (watchValue && watchValue.length !== 0) clearErrors(name);
  }, [clearErrors, name, watchValue]);

  React.useEffect(() => {
    if (isFocusing) setFocus(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocusing]);

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!enterKey && event.key === "Enter") event.preventDefault();
  };

  return (
    <S.FormInputA
      margin={margin}
      className={className}
      maxWidth={maxWidth}
      height={height}
      disabled={disabled}
      readOnly={readOnly}
    >
      <div className="input-container">
        {label && (
          <StyledLabel required={required && !disabled} htmlFor={name}>
            {label}
          </StyledLabel>
        )}
        <input
          id={name}
          className="input-container__content"
          disabled={disabled || readOnly}
          autoComplete="off"
          onKeyDown={handleKeyDown}
          {...register(name)}
          {...rest}
        />
        {visibleError && <FormErrorText errors={errors} name={name} />}
      </div>
    </S.FormInputA>
  );
}
