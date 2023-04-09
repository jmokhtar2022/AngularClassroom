import { Component, OnInit } from '@angular/core';
import { Emploi } from '../Models/emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {
  listeEmploi!: Emploi[];
  searchTerm: string = '';
  filteredEmploi!: Emploi[];
  ngOnInit(): void {

    this.listeEmploi =
      [
        { reference: 1, titre: "DevOps", entreprise: "RFC", etat: true },
        { reference: 2, titre: "SoftwareEngineer", entreprise: "KPMG", etat: true },
        { reference: 3, titre: "data analyst", entreprise: "EY", etat: false }
      ]
    this.filteredEmploi = this.listeEmploi;
  }

  count() {
    const length = this.listeEmploi.filter(emploi => emploi.etat == true).length;
    alert(`Nombre d'emplois: ${length}`);
  }
  search() {
    this.filteredEmploi = this.listeEmploi.filter(emploi => emploi.entreprise.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}

