import React from "react";
import { RegisterOptions } from "react-hook-form";

export interface InputProps {
  placeholder: string;
  hooks: {
    register: any;
    errors: any;
  };
  id: string;
  vals: RegisterOptions;
  style: {
    input: React.CSSProperties;
    inputBox: React.CSSProperties;
    inputRoot: React.CSSProperties;
  };
  suffix: string;
  showErrors: boolean;
  label: string;
}
