import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Users,
  Boxes,
  UserCog,
} from "lucide-react";

export const NAV_DATA = {
  USER_DATA: {
    name: "Brian Omondi",
    email: "omondi@teki.dev",
    avatar: "/avatars/shadcn.jpg",
  },
  NAV_GROUPS: [
    {
      label: "Overview",
      items: [
        {
          title: "Home",
          url: "#",
          icon: Home,
        },
      ]
    },
    {
      label: "Quick access",
      items: [
        {
          title: "Quotations",
          url: "#",
          icon: Inbox,
          items: [
            {
              title: "All",
              url: "/Dashboard/payments",
              isActive: true,
            },
            {
              title: "Approved",
              url: "#",
            },
            {
              title: "Cancelled",
              url: "#",
            },
          ],
        },
        // ...existing quick access items...
      ]
    },
    {
      label: "Management",
      items: [
        {
          title: "Client Management",
          url: "#",
          icon: Users,
          items: [
            {
              title: "All Clients",
              url: "/Dashboard/customers",
            },
            {
              title: "Active",
              url: "#",
            },
            {
              title: "Archived",
              url: "#",
            }
          ]
        },
        // ...existing management items...
      ]
    },
    {
      label: "System",
      items: [
        {
          title: "Settings",
          url: "#",
          icon: Settings,
        },
      ]
    }
  ],
};
