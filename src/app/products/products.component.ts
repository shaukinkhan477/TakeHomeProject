import { Component, Injector, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  [x: string]: any;

  constructor(private router: Router, injector: Injector , public zone: NgZone) { }

  ngOnInit(): void {
  }

  // productDetails() {
  //   this.router.navigate(['/details'])
  // }

  // ngZone.run(
  //   () => {
  //     this.router.navigate(['/details'])
  //   }
  // );

// this.zone.run(() => { this.router.navigate(['/details']); });

}
