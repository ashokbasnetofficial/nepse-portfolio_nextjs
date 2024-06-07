'use client'
import Form from "@/components/Form";
import SIP from "@/interfaces/sipInterface";
import { sipActions } from "@/redux/slices/sipCalSlice";
import { useDispatch, useSelector } from "react-redux";
import { SIPOut } from './../../../interfaces/sipInterface';
import classes from '../investmentTools.module.css';
const InvestmentToolsCalculator = ({ params }: { params: { investmenttools_id: string } }) => {
    const dispatch = useDispatch();
    const result: SIPOut = useSelector((state: any) => state.sip);
    const formHandler = (data: SIP) => {
        dispatch(sipActions.sipCalculator(data))

    }
    console.log(result);
    const { investmenttools_id } = params
    return <>
        <h4 className="bg-navy-blue my-5 text-2xl font-bold text-white rounded w-full h-auto uppercase text-left py-5 pl-5">Calculator</h4>
        <div className="bg-gray-200 p-4 sm:p-6 md:p-8 rounded">
            <p className={`sm:text-xl text-navy-blue uppercase md:text-lg font-semibold mb-4 relative ${classes.custom_heading_two}`}>{investmenttools_id}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="mb-6">
                    <Form onSubmit={formHandler} />
                </div>
                <div className="bg-blue-900 text-white p-4 rounded-lg">
                    <p className="md:text-xl  track">Total Investment</p>
                    <p className="lg:text-3xl md:text-2xl sm:text-xl font-bold mb-2">Rs. {result.total_investment.toFixed(1)}</p>
                    <hr className="mb-2 border-2 border-white" />
                    <p className="mb-2 text-xl flex justify-between">Estimated Return  <span className="">Rs.{result.estimated_return.toFixed(1)}</span> </p>
                    <p className="mb-2 text-2xl flex  font-bold justify-between">Estimated Total Return <span>Rs.{result.estimated_total_return.toFixed(1)}</span></p>
                </div>
            </div>
        </div>
    </>
};
export default InvestmentToolsCalculator;
