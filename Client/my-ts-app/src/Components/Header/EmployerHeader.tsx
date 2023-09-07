import React, { useState } from "react";
// import { Navbar } from "@material-tailwind/react";
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  // Cog6ToothIcon,
  InboxArrowDownIcon,
  // LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";

interface ProfileMenuItem {
  label: string;
  icon: React.ElementType;
}

const profileMenuItems: ProfileMenuItem[] = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  // {
  //   label: "Edit Profile",
  //   icon: Cog6ToothIcon,
  // },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  // {
  //   label: "Help",
  //   icon: LifebuoyIcon,
  // },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border border-blue-500 p-0.5"
            src="https://avatars.githubusercontent.com/u/113935267?v=4"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
function EmployerHeader() {
  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:pl-6 bg-foundItBg">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <nav className="flex items-center justify-between bg-foundItBg text-black p-4">
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dgjwhf8i3/image/upload/v1685793152/Screenshot_2023-06-03_172145_pfhklc.jpg"
              alt="Logo"
              className="w-auto h-6 mr-2"
            />
          </div>
        </nav>
        <ProfileMenu />
      </div>
    </Navbar>
  );
}

export default EmployerHeader;