import {Component, HostListener, OnInit} from '@angular/core'; 

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css']
})
export class InfiniteScrollComponent implements OnInit {

  public linesToWrite: Array<string>; 
  private finishPage = 5;
  private actualPage: number;
  public showGoUpButton: boolean;
  showScrollHeight = 50;
  hideScrollHeight = 10;

  constructor() { 
    this.actualPage = 1;
    this.showGoUpButton = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (( window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if ( this.showGoUpButton && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop)
      < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }

  ngOnInit() {
    this.linesToWrite = new Array<string>();
    this.add40lines();
  }

  add40lines() {
    const line = 'Another new line -- ';
    let lineCounter = this.linesToWrite.length;
    for (let i = 1; i < 50; i++) {
      this.linesToWrite.push(line  + lineCounter);
      lineCounter++;
    }
  }

  onScroll() {

    if (this.actualPage < this.finishPage) {
      this.add40lines();
      this.actualPage ++;
    } else {
      console.log('No more lines. Finish page!');
    }
  }

  scrollTop() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Other
  }
}