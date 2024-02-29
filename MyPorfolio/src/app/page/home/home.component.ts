import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Escuchar cambios en los fragmentos (secciones)
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        // Desplazarse a la sección correspondiente utilizando JavaScript
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

}
