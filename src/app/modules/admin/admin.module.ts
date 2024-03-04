import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostProdukComponent } from './components/post-produk/post-produk.component';
import { NgZorroImportsModule } from 'src/app/NgZorroImportsModule';
import { UpdateProdukComponent } from './components/update-produk/update-produk.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    PostProdukComponent,
    UpdateProdukComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroImportsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
