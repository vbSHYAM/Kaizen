import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  // Success message
  success(message: string, title?: string): void {
    this.toastr.success(message, title);
  }

  // Show info
  showInfo(message: string, title?: string): void {
    this.toastr.info(message, title);
  }

  // Show warning
  warning(message: string, title?: string): void {
    this.toastr.warning(message, title);
  }

  // Show Error
  error(message: string, title?: string): void {
    this.toastr.error(message, title);
  }

}
