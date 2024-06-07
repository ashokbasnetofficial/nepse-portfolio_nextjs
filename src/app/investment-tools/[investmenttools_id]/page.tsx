'use client'
import Form from "@/components/Form";
import SIP from "@/interfaces/sipInterface";
import { sipActions } from "@/redux/slices/sipCalSlice";
import { useDispatch, useSelector } from "react-redux";
import { SIPOut } from './../../../interfaces/sipInterface';
const InvestmentToolsCalculator = ({ params }: { params: { investmenttools_id: string } }) => {
    const dispatch = useDispatch();
    const result = useSelector((state: any) => state.sip);
    const formHandler = (data: SIP) => {
        dispatch(sipActions.sipCalculator(data))

    }
    console.log(result);
    const { investmenttools_id } = params
    return <div>
        <h4 className="text-center my-5 text-2xl">{investmenttools_id}</h4>
        <Form onSubmit={formHandler} />
    </div>
};
export default InvestmentToolsCalculator;
