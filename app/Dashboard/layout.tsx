import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import { cookies } from "next/headers";
import "../globals.css";
import { geistMono, ubuntu } from "@/components/ui/fonts";
import { SiteHeader } from "@/components/site-header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "open";

  return (
    <div className={`${geistMono.className} antialiased`}>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <SidebarInset>
          <SiteHeader />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
