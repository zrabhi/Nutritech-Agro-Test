"use client"
import { error } from "console";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface BiographyType {
  isBioOpen: boolean;
  isBioResumed: boolean;
  setIsBioOpen: (Open: boolean) => void;
  setIsBioResumed: (Resumed: boolean) => void;
}

interface ResumeType {
  isResumeOpen: boolean;
  isResumeResumed: boolean;
  setIsResumeOpen: (Open: boolean) => void;
  setIsResumeResumed: (Resumed: boolean) => void;
}

interface ContactMeType {
  isContactMeOpen: boolean;
  isContactMeResumed: boolean;
  setIsContactMeOpen: (Open: boolean) => void;
  setIsContactMeREsumed: (Resumed: boolean) => void;
}
interface WindowData {
  height: number;
  width: number;
  setHeight: (height: number) => void;
  setWidth: (Width: number) => void;
}
interface AppContextType {
  // BioData: BiographyType;
  // ResumeData: ResumeType;
  // WindowData: WindowData;
  // Clicked: string;
  // setClicked: React.Dispatch<React.SetStateAction<string>>;
  // ContactMeData: ContactMeType
    success: (message: string) => string;
    error: (message: string) => string;
}

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppContext = React.createContext<AppContextType | null>(null);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  
  const success = (message: string) => toast.success(message);
  const error = (message: string) => toast.error(message);
  return (
    <AppContext.Provider
      value={
        {success: success,
          error:error,
        }
      }
    >
      {children}
    </AppContext.Provider>
  );
};
