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
        name: 'Noodles',
        price: 10.99,
        category: 'breakfast',
        image: 'assets/food1.jpg',
        
      },
      {
        id: 2,
        name: 'Paneer',
        price: 200,
        category: 'lunch',
        image: 'assets/food2.jpg'
      },
      {
        id: 3,
        name: 'Pasta',
        price: 180,
        category: 'dinner',
        image: 'assets/food3.jpg'
      },
      {
        id: 4,
        name: 'Burger',
        price: 200,
        category: 'breakfast',
        image: 'assets/food4.jpg'
      },
      {
        id: 5,
        name: 'Rice',
        price: 130,
        category: 'dinner',
        image: 'assets/food5.jpg'
      },
      {
        id: 6,
        name: 'Kulcha',
        price: 80,
        category: 'lunch',
        image: 'assets/food6.jpg'
      }
      
    ];

    return menuItems.find(item => item.id === id);
  }
}
