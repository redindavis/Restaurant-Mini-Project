import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.component.html',
  styleUrls: ['./menu-item-details.component.css']
})
export class MenuItemDetailsComponent implements OnInit {
  menuItem: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const itemId = Number(this.route.snapshot.paramMap.get('id'));
    this.menuItem = this.getMenuItemById(itemId);
  }

  getMenuItemById(id: number): any {
    const menuItems: any[] = [
      {
        id: 1,
        name: 'Item 1',
        price: 10.99,
        category: 'breakfast',
        image: 'assets/item1.jpg',
        details: 'This is item 1 details.'
      },
      // Add more menu items here
    ];

    return menuItems.find(item => item.id === id);
  }
}
