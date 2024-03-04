import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-produk',
  templateUrl: './update-produk.component.html',
  styleUrls: ['./update-produk.component.scss']
})
export class UpdateProdukComponent implements OnInit {

  produkId!: number; // Use non-null assertion operator

  constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // Use '+' to convert string to number
      this.produkId = +params['id'];
      this.getProdukById();
    });
  }

  getProdukById() {
    this.adminService.getProdukById(this.produkId).subscribe((res) => {
      console.log(res);
      const ProdukDto = res;
      console.log(ProdukDto)
    });
  }
}
