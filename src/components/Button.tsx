import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  asLink = false,
  href,
  target,
  rel,
  className = '',
  ...props
}) => {
  const baseClasses =
    'relative inline-flex items-center justify-center font-mono font-medium transition-all duration-300 select-none group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#080D18] disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 rounded-sm',
    md: 'text-sm px-5 py-2.5 gap-2 rounded-sm',
    lg: 'text-base px-6 py-3.5 gap-2.5 rounded-sm',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-cyan-500/20 border border-cyan-400/30 hover:border-cyan-300 hover:shadow-cyan-500/40 active:translate-y-0.5',
    secondary:
      'bg-[#101827]/80 dark:bg-[#101827]/80 light:bg-slate-100 text-slate-100 dark:text-slate-100 light:text-slate-800 border border-slate-700/80 hover:border-cyan-400/50 hover:bg-slate-800/60 light:hover:bg-slate-200 active:translate-y-0.5 backdrop-blur-sm',
    outline:
      'bg-transparent text-cyan-400 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-950/20 active:translate-y-0.5',
    ghost:
      'bg-transparent text-slate-400 hover:text-cyan-300 hover:bg-cyan-950/20',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (asLink && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
