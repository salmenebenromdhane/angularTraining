import { Component, OnInit } from '@angular/core';
import { Article } from 'src/models/Article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  titre="Les articles du jour";
  listeArticles:Article[]=[]
  constructor() { }

  ngOnInit(): void {
    this.listeArticles=[{titre:"Le championnat du monde",contenu:"Le champion du monde de cette",auteur:"salmene",date:"05/11/1996"},
    {titre:"Le championnat de tunisie",contenu:"ababaabba de cette",auteur:"salmene",date:"05/11/5151"}]
  }

}
