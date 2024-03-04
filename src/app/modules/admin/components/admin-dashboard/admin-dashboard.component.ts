// admin-dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

interface Produk {
[x: string]: any;
  merek: string;
  nama: string;
  deskripsi: string;
  harga: number;
  warna: string;
  prosesor: string;
  jenis: string;
  tahun: Date;
  returnedImage: string;
  processedImg: string;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  produks: Produk[] = [];

  constructor(private adminService: AdminService,
    private message: NzMessageService) { }

  ngOnInit() {
    this.getAllProduks();
  }

  getAllProduks() {
    this.adminService.getAllProduks().subscribe((res: Produk[]) => {
      console.log(res);
      this.produks = res.map(produk => ({
        ...produk,
        processedImg: 'data:image/jpeg;base64,' + produk.returnedImage
      }));
    });
  }

  deleteProduk(id: number) {
    console.log(id);
    this.adminService.deleteProduk(id).subscribe((res) => {
      this.getAllProduks();
      this.message.success("Produk berhasil di delete", { nzDuration: 5000 })
    })
  }
}
