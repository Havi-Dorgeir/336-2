
'use client';
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import "./globals.css";
import Menu from "antd/es/menu/menu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Children } from "react";
const items = [
  { key: "home", label: <Link href={"/"}>Home</Link> },
  {
    key: "devices", label: <Link href={"/devices"}>Devices</Link>
  },
  {
    key: "events", label: <Link href={"/events"}>Events</Link>
  },
  {
    key: "about", label: <Link href={"/about"}>About</Link>,
    children: [
        {
        key: "Functions_and_features",
        label: "Functions_and_features",
        children: [
          {
            key: "ABDP",
            label: <Link href={"/ABDP"}>About "Add Device"</Link>
          },
           {
            key: "Viewing_Event_Details",
            label: <Link href={"/Viewing_Event_Details"}>About "View Event Details"</Link>
          },
           {
            key: "Searching_Events",
            label: <Link href={"/Searching_Events"}>About "Search Events"</Link>
          },
            {
            key: "Editing_Event_Data",
            label: <Link href={"/Editing_Event_Data"}>About "Edit Event Data"</Link>
          },

        ]
      },
    ]
  },
  {
    key: "help-parent",
    label: "Help",
    children: [
      {
        key: "general_information",
        label: <Link href={"/General_Information"}>General Information</Link>
      },
      {
        key: "Interface_and_forms",
        label: <Link href={"/Interface_and_Forms"}>Interface and Forms</Link>
      },
      {
        key: "Working_with_links",
        label: <Link href={"/Working_with_links"}>Working with links</Link>
      },
    

    ]
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <Layout style={{ minHeight: "100vh" }}>
          <Header>
            <Menu theme="dark" mode="horizontal" items={items} selectedKeys={[pathname]} style={{ flex: 1, minWidth: 0 }}
            />
          </Header>
          <Content style={{ padding: "0 48px " }}>  {children}</Content>
          <Footer style={{ textAlign: "center" }} >
            Electrick store 2026 Created by  Dmytro Daiduk


          </Footer>
        </Layout>
      </body>
    </html>
  );
}
