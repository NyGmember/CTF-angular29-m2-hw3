import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SettingComponent } from './setting/setting.component';
import { SearchComponent } from './search/search.component';
import { SearchCountComponent } from './search-count/search-count.component';
import { CategoryTreeComponent } from './category-tree/category-tree.component';
import { SettingPanelComponent } from './setting-panel/setting-panel.component';
import { SettingItemComponent } from './setting-item/setting-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeModule } from 'primeng/tree';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NodeService } from './nodeservice';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    SearchComponent,
    SearchCountComponent,
    CategoryTreeComponent,
    SettingPanelComponent,
    SettingItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TreeModule,
    ToastModule,
    ButtonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component: AppComponent}

		]),
    DropdownModule,
    CheckboxModule,
    InputTextModule,
    InputNumberModule
  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
