import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { ActivatedRoute } from '@angular/router';
import { Iitem } from '../../shared/interface/items/iitem';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-item',
  imports: [CurrencyPipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  private readonly activatedRoute = inject(ActivatedRoute);
  itemId: any;
  itemData: Iitem = {} as Iitem;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (para) => {
        this.itemId = para.get("id");
        this.productsService.getSpecificItems(this.itemId).subscribe({
          next: (res) => {
            this.itemData = res;
          }
        })
      }
    })
  }
}