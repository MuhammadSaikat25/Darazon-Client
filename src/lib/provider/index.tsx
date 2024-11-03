"use client";
import { Toaster } from "sonner";

import { useRouter } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "@/app/context/user.context";

export interface ProvidersProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <UserProvider>{children}</UserProvider>
    </QueryClientProvider>
  );
}
