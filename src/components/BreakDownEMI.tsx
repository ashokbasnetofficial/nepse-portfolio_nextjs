import { EMIBreakDown } from "@/interfaces/emiInterface";
import React from "react";
interface BreakDownEMIProps {
  monthlybreakdowns: EMIBreakDown[];
  investmenttools_id: string;
}
const BreakDownEMI: React.FC<BreakDownEMIProps> = (props) => {
  return (
    <>
      {props.investmenttools_id === "loan-calculator" &&
      props.monthlybreakdowns.length > 0 ? (
        <div className="relative overflow-x-auto mt-8 mb-4">
          <h2 className="text-left sm:text-center md:text-left lg:text-xl xl:text-2xl text-blue-900 mb-3">
            Monthly breakdown of EMI in{" "}
            <span className="font-bold">Principal</span> and{" "}
            <span className="font-bold">Interest</span> components
          </h2>

          <div className="max-h-80 overflow-y-auto">
            {" "}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white uppercase bg-blue-800">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Month
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Principal
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Interest
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
                        {monthlybreakdown.month}
                      </th>
                      <td className="px-6 py-4 font-medium text-gray-600">
                        Rs.{monthlybreakdown.principal}
                      </td>
                      <td className="px-6 py-4 flex font-medium text-gray-600">
                        Rs.{monthlybreakdown.interest}
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
export default BreakDownEMI;
