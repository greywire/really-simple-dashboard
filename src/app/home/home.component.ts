import { Component, OnInit } from '@angular/core';
import { faCocktail, faCompress, faRedo } from '@fortawesome/free-solid-svg-icons';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { DialogModule } from 'primeng/dialog';
import { PrimeIcons } from 'primeng/api';

class widget {
  title: string = '';
  url: string = '';
  width: number = 6;
  scalehalfsize: boolean = false;
  id: number = 0;
  row = 0;
  col = 0;
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
  /* widgets: widget[] = [
    
      {
        title: 'Acura OSS',
        url: 'http://10.1.20.54:4203/customer-appointment/customer-info?token=8a0cc9e77840086c903cc5c10c2b8522',
        width: 6,
        scalehalfsize: false,
        row: 0,
        col: 0,
        id: 0,
      },
      {
        title: 'Honda OSS',
        url: 'http://10.1.20.54:4203/customer-appointment/customer-info?token=8a7ddce709914581bafc23e9ed24ef2b',
        width: 6,
        scalehalfsize: false,
        row: 0,
        col: 1,
        id: 1,
      },
    
    
      {
        title: 'Lexus',
        url: 'http://10.1.20.54:4203/customer-appointment/customer-info?token=51f4ac4f6245c116cefe70133df57dbd',
        width: 6,
        scalehalfsize: false,
        row: 1,
        col: 0,
        id: 2,
      },
      {
        title: 'Toyota Smartpath',
        url: 'http://10.1.20.54:4203/customer-appointment/customer-info?token=3f7edcb0867c9f4443aa064dc8d1af36',
        width: 6,
        scalehalfsize: false,
        row: 1,
        col: 1,
        id: 3,
      },
    
  ];
*/
  widgets: widget[] = [
    {
      title: 'Honda redirect',
      url: 'https://uat-widget.updatepromise.com/service-scheduler/customer-appointment/customer-info?token=8a0cc9e77840086c903cc5c10c2b8522&customer_id=6294469&vehicle_id=2590986&appointment_id=15351329',
      width: 6,
      scalehalfsize: false,
      row: 0,
      col: 0,
      id: 0,
    },
    {
      title: 'Regular Confirm',
      url: 'https://uat-widget.updatepromise.com/customer-appointment/confirm/AEMFJC@2YXJ',
      width: 6,
      scalehalfsize: false,
      row: 0,
      col: 1,
      id: 0,
    },
    {
      title: 'Honda redirect dev',
      url: 'http://10.1.20.54:4203/customer-appointment/customer-info?token=8a0cc9e77840086c903cc5c10c2b8522&customer_id=6294469&vehicle_id=2590986&appointment_id=15351329',
      width: 6,
      scalehalfsize: false,
      row: 1,
      col: 0,
      id: 0,
    },
    {
      title: 'Regular Confirm dev',
      url: 'http://10.1.20.54:4203/customer-appointment/confirm/AEMFJC@2YXJ',
      width: 6,
      scalehalfsize: false,
      row: 1,
      col: 1,
      id: 0,
    },
  ];

  faRedo = faRedo;
  faCompress = faCompress;
  scalehalfsize = false;
  display: boolean = false;
  editText: string = '';
  editURL: string = '';
  selectedWidget = 0;
  grid: widget[][] = [[]];
  gridheight: number = 0;
  gridwidth: number = 0;

  constructor(private quoteService: QuoteService) {}

  showDialog() {
    this.display = true;
  }

  ngOnInit() {
    this.widgets.forEach((widget) => {
      this.gridheight = widget.row > this.gridheight ? widget.row : this.gridheight;
      this.gridwidth = widget.col > this.gridwidth ? widget.col : this.gridwidth;
    });

    this.gridheight++;
    this.gridwidth++;

    this.grid = new Array(this.gridheight).fill(false).map(() => new Array(this.gridwidth).fill(false));

    this.widgets.forEach((widget) => {
      this.grid[widget.row][widget.col] = widget;
    });

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
    console.log(row, col);
    let elem: HTMLIFrameElement = <HTMLIFrameElement>document.getElementById(row + '_' + col);

    elem.src = this.grid[row][col].url;
  }

  setscale(row: number, col: number) {
    this.grid[row][col].scalehalfsize = !this.grid[row][col].scalehalfsize;
  }

  save() {}
}
