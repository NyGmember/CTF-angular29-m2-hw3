import { Component, OnInit, Output,  EventEmitter} from '@angular/core';
import { NodeService } from '../nodeservice';
import { TreeNode } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-category-tree',
  templateUrl: './category-tree.component.html',
  styleUrls: ['./category-tree.component.css'],
  providers: [MessageService]
})

export class CategoryTreeComponent implements OnInit {
  files1: TreeNode[];
  

  selectedFile: TreeNode;

  @Output()
  OnSelected: EventEmitter<TreeNode[]> = new EventEmitter();
  
  constructor(private nodeService: NodeService) { }

  ngOnInit() {
      this.nodeService.getFiles().then(files => this.files1 = files);
  }

  nodeSelect(event) {
      //this.messageService.add({severity: 'info', summary: 'Node Selected', detail: event.node.label});
      this.OnSelected.emit([event.node])
      //console.log(event.node)
  }
  
  nodeUnselect(event) {
      //this.messageService.add({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
      this.OnSelected.emit(this.files1)
  }

}
