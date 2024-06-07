export default interface EMIData {
    loan_amount: number;
    interest_rate: number;
    tenure: number;

}
export interface EMISummary {
    total_interest: number;
    total_payment: number;
    monthly_emi: number;
}