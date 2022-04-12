import { Component, OnInit, Output } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { menu } from '../../../interfaces/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu: menu[] = [];
  constructor(private _menuService: MenuService) { }

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu(){
    this._menuService.getMenu().subscribe(data => { this.menu = data});
  }
}
