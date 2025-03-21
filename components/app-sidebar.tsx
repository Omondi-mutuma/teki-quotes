import {
  ChevronDown,
  ChevronUp,
  NotebookTabsIcon,
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
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import NavUser from "./ui/nav-user";
import { NAV_DATA } from "@/lib/navigation";


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
        {NAV_DATA.NAV_GROUPS.map((navGroup) => (
          <SidebarGroup key={navGroup.label}>
            <SidebarGroupLabel>{navGroup.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navGroup.items.map((navItem) => {
                  const { title, url, icon: NavIcon, items: subItems } = navItem;
                  const hasSubItems = Boolean(subItems?.length);

                  return (
                    <div key={title}>
                      {hasSubItems ? (
                        <Collapsible className="group/collapsible">
                          <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                              <SidebarMenuButton>
                                <NavIcon />
                                <span>{title}</span>
                                <ChevronDown className="ml-auto hidden group-data-[state=closed]/collapsible:block" />
                                <ChevronUp className="ml-auto hidden group-data-[state=open]/collapsible:block" />
                              </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <SidebarMenuSub>
                                {subItems.map((subItem) => (
                                  <SidebarMenuSubItem key={subItem.title}>
                                    <SidebarMenuSubButton
                                      asChild
                                      isActive={subItem.isActive}
                                    >
                                      <Link href={subItem.url}>
                                        <span>{subItem.title}</span>
                                      </Link>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                ))}
                              </SidebarMenuSub>
                            </CollapsibleContent>
                          </SidebarMenuItem>
                        </Collapsible>
                      ) : (
                        <SidebarMenuItem>
                          <SidebarMenuButton asChild>
                            <Link href={url}>
                              <NavIcon />
                              <span>{title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )}
                    </div>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={NAV_DATA.USER_DATA} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
