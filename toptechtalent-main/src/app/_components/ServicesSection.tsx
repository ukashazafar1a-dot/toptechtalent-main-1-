import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import FinanceService from "./FinanceService";
const tabs = [
  {
    title: "Finance & Accounting",
    value: "finance",
  },
  {
    title: "Technology",
    value: "technology",
  },
  {
    title: "Marketing & Creative",
    value: "marketing",
  },
  {
    title: "Administrative & Customer Support",
    value: "admin",
  },
];



const ServicesSection = () => {
  return (
    <div className="px-0 md:px-16 my-8">
      <div className="md:rounded-[50px] bg-blueish px-4 md:px-8 py-4 md:py-8">
        <h1 className="h1 text-heading my-6 w-full text-center text-balance">
          Add specialized talent across your organization
        </h1>
        <Tabs defaultValue="finance" className="w-full bg-transparent">
          <TabsList className="w-full overflow-x-auto lg:overflow-hidden justify-start lg:justify-center bg-transparent rounded-none p-0">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="border-0 border-b-2 border-[#B7B7B7] rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-black text-base text-left justify-start"
              >
                {tab?.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="finance">
            <FinanceService />
          </TabsContent>
          <TabsContent value="technology">
            <FinanceService />
          </TabsContent>
          <TabsContent value="marketing">
            <FinanceService />
          </TabsContent>
          <TabsContent value="admin">
            <FinanceService />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ServicesSection;
