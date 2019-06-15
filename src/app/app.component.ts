import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon blog';
  posts = [
    {
      title: 'Mon Premier post',
      content: 'Ce post est populaire mais assez ancien... Peut-être que c\'est parce qu\'il est plus long que les autres ? Je ne sais pas... En tout cas, il s\'affiche sur plusieurs lignes !',
      loveIts: 10,
      created_at: new Date('December 17, 1995 03:24:00'),
    },
    {
      title: 'Mon Deuxieme post',
      content: 'Personne n\'aime ce post... :( ',
      loveIts: -5,
      created_at: new Date('May 22, 2010 10:00:00')
    },
    {
      title: 'Mon Dernier post',
      content: 'Ce post vient d\'être créé ! Si, je vous assure ! Regardez la date...',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
