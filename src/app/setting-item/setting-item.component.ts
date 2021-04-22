import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-setting-item',
  templateUrl: './setting-item.component.html',
  styleUrls: ['./setting-item.component.css']
})
export class SettingItemComponent implements OnInit {

  @Input() item:any;

  selectedValue:any;

  constructor() { }

  ngOnInit(): void {
    this.selectedValue = this.item.value;
  }

}
