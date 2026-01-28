import { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      className = '',
      rows = 4,
      ...props
    },
    ref
  ) => {
    const textareaElement = (
      <textarea
        ref={ref}
        rows={rows}
        className={`
          w-full rounded-xl border border-[var(--color-border)] 
          bg-[var(--color-bg-card)] px-4 py-3
          text-white placeholder:text-[var(--color-text-dim)]
          transition-all duration-300
          focus:border-[var(--color-primary)] focus:outline-none
          focus:ring-2 focus:ring-[var(--color-primary)]/20
          hover:border-[var(--color-border-hover)]
          resize-none
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
          {textareaElement}
        </div>
      );
    }

    return textareaElement;
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
