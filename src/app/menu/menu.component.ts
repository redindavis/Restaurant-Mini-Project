import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: any[] = [
    {
      id: 1,
      name: 'Noodles',
      price: 150,
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
    },
    
  ];

 

  // Example menu item objects
filteredItems = [
  { id: 1, name: 'Item 1', price: 10.99, image: 'assets/food1.jpg' },
  { id: 2, name: 'Item 2', price: 8.99, image: 'assets/food2.jpg' },
  { id: 3, name: 'Item 3', price: 12.99, image: 'assets/food3.jpg' },
  { id: 4, name: 'Item 4', price: 12.99, image: 'assets/food4.jpg' },
  { id: 5, name: 'Item 5', price: 12.99, image: 'assets/food5.jpg' },
  { id: 6, name: 'Item 6', price: 12.99, image: 'assets/food6.jpg' },
  // ... more items
];


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
