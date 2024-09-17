import { SIPBreakDown } from "@/interfaces/sipInterface";
import React from "react";
interface BreakDownSIPProps {
  monthlybreakdowns: SIPBreakDown[];
  investmenttools_id: string;
}
const BreakDownSIP: React.FC<BreakDownSIPProps> = (props) => {
  return (
    <>
      {props.investmenttools_id === "sip-calculator" &&
      props.monthlybreakdowns.length > 0 ? (
        <div className="relative overflow-x-auto mt-8 mb-4">
          <h2 className="text-left sm:text-center md:text-left lg:text-xl xl:text-2xl text-blue-900 mb-3">
            Monthly breakdown of SIP in{" "}
            <span className="font-bold">Returns</span> and{" "}
            <span className="font-bold">Balance</span> components
          </h2>
          <div className="max-h-60 overflow-y-auto">
            {" "}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white uppercase bg-blue-800">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Periods
                  </th>
                  <th scope="col" className="px-6 py-3">
                    SIP Amount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Returns
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.monthlybreakdowns.map((monthlybreakdown) => {
                  return (
                    <tr className="bg-white border-b dark:bg-gray-100 dark:border-gray-300">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap "
                      >
                        {monthlybreakdown.periods}
                      </th>
                      <td className="px-6 py-4 font-medium text-gray-600">
                        Rs.{monthlybreakdown.amount}
                      </td>
                      <td className="px-6 py-4 flex font-medium text-gray-600">
                        Rs.{monthlybreakdown.returns}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-600">
                        Rs.{monthlybreakdown.balance}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default BreakDownSIP;
