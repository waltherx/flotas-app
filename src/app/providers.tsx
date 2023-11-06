"use client";

import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(new QueryClient());
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
