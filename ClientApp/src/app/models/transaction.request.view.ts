export interface TransactionRequest {
  processingCode: string;
  systemTraceNr: string;
  functionCode: string;
  cardNo: string;
  cardHolder: string;
  amountTrxn: number;
  currencyCode: string;
  key: string;
}
