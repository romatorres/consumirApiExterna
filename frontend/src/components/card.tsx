import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title?: string;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export default function Card({
  children,
  title,
  className = "",
  onClick,
  hoverable = false,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white 
        rounded-lg 
        shadow-md 
        p-4 
        ${hoverable ? "hover:shadow-lg transition-shadow duration-300" : ""} 
        ${className}
      `}
    >
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      {children}
    </div>
  );
}
