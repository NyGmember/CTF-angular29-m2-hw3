import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../nodeservice';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  providers: [MessageService]
})
export class SettingComponent implements OnInit {

  files1: TreeNode[];
  test:any;

  constructor(private nodeService: NodeService) { 

  }

  ngOnInit(): void {
    this.test = this.nodeService.getFiles().then(files => this.files1 = files);
  }

  selectSetting(node:TreeNode[]){
    console.log(node)
    this.files1 = node;
  }
}
