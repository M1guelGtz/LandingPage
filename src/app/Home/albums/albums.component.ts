import { Component } from '@angular/core';
import { Album } from '../Interfaces/album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  albums : Album[] = [
    {id : 1, title : "Homegrizzy Boys", img : "HomeGrizzyBoys.jpeg"},
    {id : 2, title : "Homegrizzylies", img : "HomeGrizzyLies.jpeg"},
    {id : 3, title : "Fantasma", img : "Fantasmas.jpeg"},
    {id : 4, title : "Por el $", img : "PorEl.jpeg"},
    {id : 5, title : "No te confundas", img : "NoTeConfundas.jpeg"},
    {id : 6, title : "Blanca naviidad", img : "BlancaNavidad.png"}
  ]
  comentarios: string[] = [
    "Este album es muy bueno, sinceramente me gusta la letra de la cancion",
    "Este album es muy malo",
    "Este album es muy bueno",
    "Este album es muy malo",
  ] 

}
