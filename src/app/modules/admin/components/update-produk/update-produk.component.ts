import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-produk',
  templateUrl: './update-produk.component.html',
  styleUrls: ['./update-produk.component.scss']
})
export class UpdateProdukComponent {

  produkId:number = this.activatedRoute.snapshot.params["id"];

  constructor(private adminService: AdminService,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit () {
      this.getProdukById();
    }

    getProdukById() {
      this.adminService.getProdukById(this.produkId).subscribe((res) => {
        console.log(res);
      })
    }

}
