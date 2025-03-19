import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Home,
  Inbox,
  NotebookTabsIcon,
  Quote,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import NavUser from "./ui/nav-user";

// Menu items.
const NAV_DATA = {
  USER_DATA: {
    name: "Brian Omondi",
    email: "omondi@teki.dev",
    avatar: "/avatars/shadcn.jpg",
  },
  NAV_MAIN: [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Invoices",
      url: "#",
      icon: Inbox,
      items: [
        {
          title: "All",
          url: "#",
        },
        {
          title: "Paid",
          url: "#",
        },
        {
          title: "Unpaid",
          url: "#",
        },
      ],
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
};

export const AppSidebar = () => {
  return (
    <Sidebar side="left" variant="inset" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={"/"}>
                <NotebookTabsIcon className="size-5" />
                <span className="text-base font-bold">Teki Quotes.</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_DATA.NAV_MAIN.map((item) => (
                <Collapsible
                  key={item.title}
                  defaultOpen
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <item.icon />
                        <span>{item.title}</span>
                        {/* Icons with styling depending on sidebar state */}
                        <ChevronDown className="ml-auto hidden group-data-[state=closed]/collapsible:block" />
                        <ChevronUp className="ml-auto hidden group-data-[state=open]/collapsible:block" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>

                    {item.items?.length ? (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subitem) => (
                            <SidebarMenuSubItem key={subitem.title}>
                              <SidebarMenuSubButton asChild>
                                <Link href={subitem.url}>
                                  {/* <Quote /> */}
                                  <span>{subitem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    ) : (
                      ""
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={NAV_DATA.USER_DATA} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
