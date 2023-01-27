import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  shorten(text: string | null, maxLength: number) {
    if (text && text.length > maxLength) {
      return text.slice(0, maxLength - 3) + "...";
    }
    return text;
  }
}
