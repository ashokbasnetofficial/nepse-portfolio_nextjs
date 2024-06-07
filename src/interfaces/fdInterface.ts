export default interface FixedDepositData {
    principal_amount: number;
    interest_rate: number;
    compound_type: string;
    tenure: number;

}
export interface FDSummary {
    total_interest: number;
    total_return_amount: number;

}