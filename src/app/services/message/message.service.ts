import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';  

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor(private toastr: ToastrService) { }

  add(message: string): void {
    this.toastr.info(message);
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }
}
