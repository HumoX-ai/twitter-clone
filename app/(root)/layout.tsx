import Auth from "@/components/auth";
import { authOptions } from "@/lib/auth-options";
import { getServerSession } from "next-auth";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session: any = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="container h-screen mx-auto ">
        <Auth />
      </div>
    );
  }

  return <div>{children}</div>;
};

export default Layout;
