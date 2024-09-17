"use client";

import { usePathname } from "next/navigation";

export default function ResponsiveMain({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <main
      className={isHomePage ? "" : "mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12"}
    >
      {children}
    </main>
  );
}
