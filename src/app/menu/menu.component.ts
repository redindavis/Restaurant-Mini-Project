import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: any[] = [
    {
      name: 'Noodles',
      price: 150,
      category: 'breakfast',
      image: 'assets/food1.jpg',
      details: 'good food'
    },
    {
      name: 'Paneer',
      price: 200,
      category: 'lunch',
      image: 'assets/food2.jpg'
    },
    {
      name: 'Pasta',
      price: 180,
      category: 'dinner',
      image: 'assets/food3.jpg'
    },
    {
      name: 'Burger',
      price: 200,
      category: 'breakfast',
      image: 'assets/food4.jpg'
    },
    {
      name: 'Rice',
      price: 130,
      category: 'dinner',
      image: 'assets/food5.jpg'
    },
    {
      name: 'Kulcha',
      price: 80,
      category: 'lunch',
      image: 'assets/food6.jpg'
    },
    
  ];

 

  filteredItems: any[] = [];

  ngOnInit(): void {
    this.filteredItems = this.menuItems; // Display all menu items initially
  }

  filterItems(category: string): void {
    if (category === 'all') {
      this.filteredItems = this.menuItems;
    } else {
      this.filteredItems = this.menuItems.filter(item => item.category === category);
    }
  }
}
