import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
})
export class HomePage implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor() {
    console.log('Constructor llamado');
    // afterNextRender y afterEveryRender se usan aquí
  }

  ngOnInit() {
    console.log('ngOnInit llamado');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges llamado', changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck llamado');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit llamado');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked llamado');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit llamado');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked llamado');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy llamado');
  }
}
