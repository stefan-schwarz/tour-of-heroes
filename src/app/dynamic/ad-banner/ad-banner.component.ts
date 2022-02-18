import {Component, Input, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { AdItem } from '../ad-item';
import { AdHostDirective } from '../ad-host.directive';


@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements AfterViewInit, OnDestroy {
  @Input() ads: AdItem[] = [];

  currentAdIndex = -1;

  @ViewChild(AdHostDirective, {static: true}) appAdHost!: AdHostDirective;
  interval: number|undefined;

  constructor() { }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngAfterViewInit(): void {
  }

}
