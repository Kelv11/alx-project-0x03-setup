import { ReactNode } from "react";

// Button Props Interface
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

// Layout Props Interface
export interface LayoutProps {
  children: ReactNode;
}

// Page Route Props Interface
export interface PageRouteProps {
  pageRoute: string;
}
