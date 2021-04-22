import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-setting-panel',
  templateUrl: './setting-panel.component.html',
  styleUrls: ['./setting-panel.component.css']
})
export class SettingPanelComponent implements OnInit {

  @Input() setting:TreeNode[];

  constructor() { }

  ngOnInit(): void {
    
  }

}
