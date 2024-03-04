import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrasi',
  templateUrl: './registrasi.component.html',
  styleUrls: ['./registrasi.component.scss']
})
export class RegistrasiComponent {

  isSpinning:boolean = false;
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private authService : AuthService,
    private message: NzMessageService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidate]],
    })
  }

  confirmationValidate = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registerForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  }

  register() {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value).subscribe((res) =>{
      console.log(res);
      if (res.id != null) {
        this.message.success("Registrasi Sukses", { nzDuration: 5000 });
        this.router.navigateByUrl("/login")
      } else {
        this.message.error("Ada yang salah coba lagi kembali", { nzDuration: 5000 });
      }
    })
  }

}
