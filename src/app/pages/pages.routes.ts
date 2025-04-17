import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

export const PagesRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Início',
      urls: [
        { title: 'Home', url: '/home' },
        { title: 'Pagina Inicial' },
      ],
    },
  },
];
