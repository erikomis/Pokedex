import { ReactNode } from "react";

export interface IButtonProps {
  current?:string
  children?: ReactNode;
  onClick?: () => void;
}