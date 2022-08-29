import { TransactionRequest } from './../../models/transaction.request.view';
import { PaymentService } from './../../services/payment.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
})
export class TransactionComponent implements OnInit {
  submitted = false;
  transactionForm: FormGroup;
  encryptedData: any;
  response: any;

  constructor(
    private fb: FormBuilder,
    private _paymentService: PaymentService
  ) {
    this.transactionForm = this.fb.group({
      processingCode: ['999000', Validators.required],
      systemTraceNr: ['36', Validators.required],
      functionCode: ['1324', Validators.required],
      cardNo: ['4712345601012222', Validators.required],
      cardHolder: ['Ahmed Mohamed', Validators.required],
      amountTrxn: ['1000', Validators.required],
      currencyCode: ['840 ', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit(form: FormGroup) {
    this.submitted = true;
    if (form.valid) {
      this.encrypt(form.value);
    }
  }

  encrypt(transactionData: TransactionRequest) {
    this._paymentService.encrypt(transactionData).subscribe((d) => {
      this.encryptedData = d;
      this.process(this.encryptedData);
    });
  }

  process(transactionData: TransactionRequest) {
    this._paymentService.process(transactionData).subscribe((d) => {
      this.response = d;
    });
  }
}
