"use client";

import React from "react"; 
import { SiteHeader } from "@/components/shared/header";

interface LayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <SiteHeader />
      {children}
    </React.Fragment>
  );
}
