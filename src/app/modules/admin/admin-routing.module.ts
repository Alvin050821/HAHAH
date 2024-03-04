import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostProdukComponent } from './components/post-produk/post-produk.component';
import { UpdateProdukComponent } from './components/update-produk/update-produk.component';

const routes: Routes = [
  { path: "dashboard", component: AdminDashboardComponent},
  { path: "produk", component: PostProdukComponent},
  { path: "produk/:id", component: UpdateProdukComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
