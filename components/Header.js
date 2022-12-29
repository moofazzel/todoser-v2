import { Navbar } from "flowbite-react";
import { Text, Dropdown, User } from "@nextui-org/react";
import Link from "next/link";

import { BiPlus } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { MdTaskAlt } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        // console.error(error);
      });
  };

  


  return (
    <div className="bg-primary">
      <Navbar className="container !bg-inherit">
        <Navbar.Toggle />

        <Navbar.Brand href="https://flowbite.com/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            TODOser
          </span>
        </Navbar.Brand>

        <div className="md:hidden">
          <Dropdown placement="bottom-right">
            <Dropdown.Trigger>
              {user?.uid ? (
                <User src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
              ) : (
                <>
                  <Link href="/login">Login</Link>
                </>
              )}
            </Dropdown.Trigger>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="warning"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  {user?.displayName}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                <Link href="#" onClick={handleLogOut}>
                  Log Out
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Navbar.Collapse>
          <li className="mb-2 md:mb-0">
            <Link className="flex items-center text-inactiveText" href={"/"}>
              <BiPlus className="text-2xl" />
              Add Task
            </Link>
          </li>
          <li className="mb-2 md:mb-0">
            <Link
              className="flex items-center text-inactiveText"
              href={"/my_task"}
            >
              <TbListDetails className="text-2xl" />
              My Task
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center text-inactiveText"
              href={"/completed_task"}
            >
              <MdTaskAlt className="text-2xl" />
              Completed Task
            </Link>
          </li>
        </Navbar.Collapse>

        <div className="hidden md:block">
          <Dropdown placement="bottom-right">
            <Dropdown.Trigger>
              {user?.uid ? (
                <User src={user?.photoURL} name={user?.displayName} />
              ) : (
                <>
                  <Link href="/login">Login</Link>
                </>
              )}
            </Dropdown.Trigger>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="warning"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  {user?.displayName}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                <Link href="#" onClick={handleLogOut}>
                  Log Out
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
