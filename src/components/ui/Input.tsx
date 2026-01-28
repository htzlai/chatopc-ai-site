import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      className = '',
      type = 'text',
      ...props
    },
    ref
  ) => {
    const inputElement = (
      <input
        ref={ref}
        type={type}
        className={`
          w-full rounded-xl border border-[var(--color-border)] 
          bg-[var(--color-bg-card)] px-4 py-3
          text-white placeholder:text-[var(--color-text-dim)]
          transition-all duration-300
          focus:border-[var(--color-primary)] focus:outline-none
          focus:ring-2 focus:ring-[var(--color-primary)]/20
          hover:border-[var(--color-border-hover)]
          ${className}
        `}
        {...props}
      />
    );

    if (label) {
      return (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white">
            {label}
            {props.required && <span className="ml-1 text-[var(--color-primary)]">*</span>}
          </label>
          {inputElement}
        </div>
      );
    }

    return inputElement;
  }
);

Input.displayName = 'Input';

export default Input;
