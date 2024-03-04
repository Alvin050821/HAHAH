import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-produk',
  templateUrl: './post-produk.component.html',
  styleUrls: ['./post-produk.component.scss']
})
export class PostProdukComponent implements OnInit {
  postProdukForm!: FormGroup;
  isSpinning: boolean = false;
  selectedFile: any;
  imagePreview: string | ArrayBuffer | null = null; // Declare imagePreview property

  DaftarMerek = ["LENOVO", "Apple", "ASUS", "HP", "ACER", "DELL", "ADVAN", "AXIOO"];
  JenisProduk = ["Laptop", "Notebook", "MacBook"];
  DaftarWarna = ["Putih", "Hitam", "Silver", "Biru"];
  DaftarProsesor = ["Intel", "AMD"];

  constructor(private fb: FormBuilder,
    private adminService: AdminService,
    private message: NzMessageService,
    private router: Router) { }

  ngOnInit() {
    this.postProdukForm = this.fb.group({
      merek: [null, Validators.required],
      nama: [null, Validators.required],
      jenis: [null, Validators.required],
      prosesor: [null, Validators.required],
      warna: [null, Validators.required],
      tahun: [null, Validators.required],
      harga: [null, Validators.required],
      deskripsi: [null, Validators.required]
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  submitPostProduk() {
    console.log(this.postProdukForm.value);
    this.isSpinning = true;
    const formData: FormData = new FormData();
    formData.append('merek', this.postProdukForm.get('merek')!.value);
    formData.append('nama', this.postProdukForm.get('nama')!.value);
    formData.append('jenis', this.postProdukForm.get('jenis')!.value);
    formData.append('prosesor', this.postProdukForm.get('prosesor')!.value);
    formData.append('warna', this.postProdukForm.get('warna')!.value);
    formData.append('tahun', this.postProdukForm.get('tahun')!.value);
    formData.append('harga', this.postProdukForm.get('harga')!.value);
    formData.append('deskripsi', this.postProdukForm.get('deskripsi')!.value);
    console.log(formData);
    this.adminService.postProduk(formData).subscribe((res) => {
      this.isSpinning = false;
      this.message.success("berhasil dibuat", { nzDuration: 5000 });
      this.router.navigateByUrl("/admin/dashboard");
      console.log(res);
    }, error => {
      this.message.error("error ", { nzDuration: 5000 });
    });
  }
}
