import { Iitem } from './../../shared/interface/items/iitem';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { JoinPipe } from '../../shared/pipe/join/join.pipe';
import { SearchPipe } from '../../shared/pipe/search/search.pipe';
import { CurrencyPipe, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-allitems',
  imports: [FormsModule, JoinPipe, SearchPipe, CurrencyPipe, SlicePipe, RouterLink],
  templateUrl: './allitems.component.html',
  styleUrl: './allitems.component.scss'
})
export class AllitemsComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  products: Iitem[] = [];
  searchInput: string = '';

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.productsService.getAllitems().subscribe({
      next: (res) => {
        this.products = res;
      }
    })
  }
}
