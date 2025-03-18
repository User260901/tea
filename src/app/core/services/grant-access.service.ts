import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GrantAccessService {
  access: boolean = false
  constructor() { }
}
