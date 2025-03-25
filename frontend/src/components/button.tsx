import { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "danger" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  isLoading?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  isLoading = false,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = `px-4 py-2 rounded-md font-medium transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
    ${fullWidth ? "w-full" : ""}`;
  const variantClasses = {
    primary:
      "bg-amber-400 text-gray-700 hover:bg-amber-500 focus:ring-blue-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
    outline:
      "border border-2 border-gray-600 text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Carregando...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
