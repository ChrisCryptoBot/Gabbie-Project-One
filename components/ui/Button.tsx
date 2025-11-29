'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'primary', size = 'md', loading = false, disabled, children, ...props },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-semibold rounded-xl cursor-pointer transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';

    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const variantStyles = {
      primary:
        'bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:text-white shadow-[0_4px_14px_rgba(37,99,235,0.25),0_8px_24px_rgba(37,99,235,0.15)] hover:scale-[1.02] active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity [&>*]:!text-white',
      secondary:
        'bg-white/10 backdrop-blur-sm border border-white/20 text-neutral-700 hover:bg-white/15 hover:border-blue-300 hover:text-blue-600 hover:scale-[1.02] active:scale-[0.98]',
      ghost: 'bg-transparent text-neutral-600 hover:bg-neutral-100 hover:text-blue-600',
      danger:
        'bg-gradient-to-br from-red-600 to-red-700 text-white hover:text-white shadow-[0_4px_14px_rgba(239,68,68,0.25)] hover:scale-[1.02] active:scale-[0.98]',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        style={variant === 'primary' ? { color: 'white' } : undefined}
        onMouseEnter={(e) => {
          if (variant === 'primary') {
            e.currentTarget.style.setProperty('color', 'white', 'important');
          }
          props.onMouseEnter?.(e);
        }}
        onMouseLeave={(e) => {
          if (variant === 'primary') {
            e.currentTarget.style.setProperty('color', 'white', 'important');
          }
          props.onMouseLeave?.(e);
        }}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <span className="opacity-0">{children}</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-transparent border-t-current rounded-full animate-spin" />
            </div>
          </>
        ) : variant === 'primary' ? (
          <span style={{ color: 'white' }}>{children}</span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
