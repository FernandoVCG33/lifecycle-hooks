import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, DoCheck, OnChanges, OnDestroy, OnInit, signal, SimpleChanges
} from '@angular/core';
import {Title} from '../../components/title/title';


const log=(...messages:any[])=>{
  console.log(`${messages[0]} %c${ messages.slice(1).join(',')}`, `color:#baba55`, ...messages.slice(1))
}

@Component({
  selector: 'app-home-page',
  imports: [
    Title
  ],
  templateUrl: './home-page.html',
})
export class HomePage implements OnInit {
  tradicionalProperty='Fernando';
  signalPrperty=signal('Fernando Signal');
  constructor() {
    log('Constructor llamado');
    // afterNextRender y afterEveryRender se usan aquí
  }

  changeTradiciona(){
    this.tradicionalProperty='Fernando Catacora';
  }
  changeSingna(){
    this.signalPrperty.set('Fernando Signal Catacora');
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
