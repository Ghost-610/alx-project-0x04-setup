export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

export interface PageRouteProps {
  pageRoute: string;
}
export interface LayoutProps {
  children: React. ReactNode;
}

export interface HeaderProps {
  title?: string;
  subtitle?: string;
}
