import './App.css';
import { Flowbite, Sidebar, DarkThemeToggle } from 'flowbite-react';
import { HiChartPie, HiViewBoards, HiInbox, HiUser, HiShoppingBag, HiArrowSmRight, HiTable } from 'react-icons/hi';
function App() {
  return (
    <>
      <Flowbite>
        <DarkThemeToggle />
      </Flowbite>
      <div className="w-fit bg-gray-50">
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                href="#"
                icon={HiChartPie}
              >
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiViewBoards}
                label="Pro"
                labelColor="alternative"
              >
                Kanban
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiInbox}
                label="3"
              >
                Inbox
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiUser}
              >
                Users
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiShoppingBag}
              >
                Products
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiArrowSmRight}
              >
                Sign In
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiTable}
              >
                Sign Up
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
}

export default App;
