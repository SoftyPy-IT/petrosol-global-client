"use client";

import {
  Controller,
  useFormContext,
  FieldValues,
  Path,
} from "react-hook-form";
import {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useId,
  useState,
} from "react";

type InputTypes =
  | "text"
  | "email"
  | "password"
  | "number"
  | "search"
  | "url"
  | "tel"
  | "date"
  | "time"
  | "datetime-local"
  | "month"
  | "week";

interface TextInputProps<T extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "name"> {
  name: Path<T>;
  label?: ReactNode;
  containerClassName?: string;
  type?: InputTypes;
  required?: boolean;
}

function classNames(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps<any>>(
  (
    {
      name,
      label,
      type = "text",
      containerClassName,
      className,
      required,
      ...props
    },
    ref
  ) => {
    const { control } = useFormContext();
    const inputId = useId();
    const [showPassword, setShowPassword] = useState(false);

    return (
      <Controller
        name={name}
        control={control}
        rules={{
          required: required ?? false,
        }}
        render={({ field, fieldState }) => {
          const { error } = fieldState;
          const isPassword = type === "password";
          const inputType = isPassword
            ? showPassword
              ? "text"
              : "password"
            : type;

          return (
            <div className={classNames("space-y-1", containerClassName)}>
              {/* LABEL */}
              {label && (
                <label
                  htmlFor={inputId}
                  className="block text-sm font-medium text-[var(--text-dark)]"
                >
                  {label}
                  {required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>
              )}

              {/* INPUT WRAPPER */}
              <div className="relative">
                <input
                  {...field}
                  {...props}
                  ref={ref}
                  id={inputId}
                  type={inputType}
                  aria-invalid={!!error}
                  aria-describedby={error ? `${inputId}-error` : undefined}
                  className={classNames(
                    "w-full px-4 py-3 rounded-lg",
                    "bg-white text-[var(--text-dark)]",
                    "border transition-all duration-200",
                    "placeholder:text-gray-400",
                    "focus:outline-none focus:ring-2",
                    isPassword && "pr-16",
                    error
                      ? "border-red-500 focus:ring-red-500"
                      : "border-[var(--border)] focus:ring-[var(--primary)] focus:border-[var(--primary)]",
                    className
                  )}
                />

                {/* PASSWORD TOGGLE */}
                {isPassword && (
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-3 flex items-center text-sm text-[var(--primary)] hover:text-[var(--primary-dark)]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                )}
              </div>

              {/* ERROR MESSAGE */}
              {error && (
                <p
                  id={`${inputId}-error`}
                  className="text-sm text-red-500 mt-1"
                >
                  {typeof error.message === "string"
                    ? error.message
                    : "This field is required"}
                </p>
              )}
            </div>
          );
        }}
      />
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
