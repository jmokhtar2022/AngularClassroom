import { Component, OnInit } from '@angular/core';
import { Article } from '../Models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  titre: String = "Les articles du jour";
  listeArticles!: Article[];
  searchTerm: string = '';
  filteredArticle!: Article[];



  ngOnInit(): void {
    this.listeArticles=
    [{ titre: 'Le championnat du monde', contenu: 'Le champion du monde de cette armee est ', auteur: 'Med Taher', date: '12/12/2005', categorie: 'Sport' },
    {
      titre: 'Les nouveaux parents', contenu: 'Tes nouveaux parents. ', auteur: 'Ahmed Said', date: '111/11/2018', categorie: 'Educationl'
    },
    { titre: 'Comment ecrire votre CV', contenu: 'Pour reussir a decraucher un emploi ...', auteur: 'Marie Elsa', date: '02/04/2017', categorie: 'Travaill' }]

this.filteredArticle=this.listeArticles;
  }
  search() {
    this.filteredArticle = this.listeArticles.filter(article => article.auteur.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}
