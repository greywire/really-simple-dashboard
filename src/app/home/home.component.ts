import { Component, OnInit } from '@angular/core';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

class widget {
  title: string = '';
  url: string = '';
  width: number = 6;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  urlroot = '';
  widgets: widget[][] = [
    [
      {
        title: 'Acura OSS',
        url: 'http://10.1.20.54:4203/customer-appointment/customer-info?token=8a0cc9e77840086c903cc5c10c2b8522',
        width: 6,
      },
      {
        title: 'Honda OSS',
        url: 'http://10.1.20.54:4203/customer-appointment/customer-info?token=8a7ddce709914581bafc23e9ed24ef2b',
        width: 6,
      },
    ],
    [
      {
        title: 'Lexus',
        url: 'http://10.1.20.54:4203/customer-appointment/customer-info?token=51f4ac4f6245c116cefe70133df57dbd',
        width: 6,
      },
      {
        title: 'Toyota Smartpath',
        url: 'http://10.1.20.54:4203/customer-appointment/customer-info?token=3f7edcb0867c9f4443aa064dc8d1af36',
        width: 6,
      },
    ],
  ];

  faRedo = faRedo;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }

  reload(row: number, col: number) {
    let elem: HTMLIFrameElement = <HTMLIFrameElement>document.getElementById(row + '_' + col);

    elem.src = this.widgets[row][col].url;
  }
}
