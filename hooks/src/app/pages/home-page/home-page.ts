import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges
} from '@angular/core';


const log=(...messages:any[])=>{
  console.log(`${messages[0]} %c${ messages.slice(1).join(',')}`, `color:#baba55`, ...messages.slice(1))
}

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
})
export class HomePage implements OnInit {
  constructor() {
    log('Constructor llamado');
    // afterNextRender y afterEveryRender se usan aquí
  }

  ngOnInit() {
    log('ngOnInit llamado');
  }

  ngOnChanges(changes: SimpleChanges) {
    log('ngOnChanges llamado', changes);
  }

  ngDoCheck() {
    log('ngDoCheck llamado');
  }

  ngAfterContentInit() {
    log('ngAfterContentInit llamado');
  }

  ngAfterContentChecked() {
    log('ngAfterContentChecked llamado');
  }

  ngAfterViewInit() {
    log('ngAfterViewInit llamado');
  }

  ngAfterViewChecked() {
    log('ngAfterViewChecked llamado');
  }

  ngOnDestroy() {
    log('ngOnDestroy llamado');
  }
}
