import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, success, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;
    const hasSuccess = !!success;

    return (
      <div className="relative mb-6">
        <input
          type={type}
          id={inputId}
          ref={ref}
          className={cn(
            'peer w-full px-4 pt-6 pb-4 bg-white/10 backdrop-blur-sm border rounded-xl',
            'text-base text-neutral-900 transition-all duration-200',
            'focus:outline-none focus:ring-3',
            'placeholder:text-transparent',
            hasError && 'border-red-400 focus:border-red-400 focus:ring-red-400/15',
            hasSuccess && 'border-green-400 focus:border-green-400 focus:ring-green-400/15',
            !hasError && !hasSuccess && 'border-white/20 focus:border-blue-400 focus:ring-blue-400/15',
            className
          )}
          placeholder={label || props.placeholder || ' '}
          {...props}
        />
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'absolute left-4 top-1/2 -translate-y-1/2',
              'text-base text-neutral-500 pointer-events-none transition-all duration-200',
              'peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-blue-600',
              'peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs',
              hasError && 'peer-focus:text-red-600',
              hasSuccess && 'peer-focus:text-green-600'
            )}
          >
            {label}
          </label>
        )}
        {error && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </p>
        )}
        {success && (
          <p className="mt-2 text-sm text-green-600 flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            {success}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
