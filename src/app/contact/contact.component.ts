import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  titre: string = 'Prenez contact';
  contact: string = 'Veuillez remplir le formulaire de contact !';

  nom: string = '';
  prenom: string = '';
  email: string = '';
  telephone: string = '';
  subject: string = '';
  message: string = '';

  formIncomplete: boolean = false;
  formSubmitted: boolean = false;

  submitForm() {
    this.formSubmitted = true;

    this.nom = '';
    this.prenom = '';
    this.email = '';
    this.telephone = '';
    this.subject = '';
    this.message = '';

    setTimeout(() => {
      this.formSubmitted = false;
    }, 10000);

    this.formIncomplete = false;

    // Vérifier si tous les champs sont remplis
    if (
      !this.nom ||
      !this.prenom ||
      !this.email ||
      !this.telephone ||
      !this.subject ||
      !this.message
    ) {
      this.formIncomplete = true;
      return;
    }

    // Vérifier la longueur du message
    if (this.message.length > 2000) {
      this.formIncomplete = true;
      return;
    }

    // Envoyer le formulaire (traitement côté serveur)
    // ...

    this.formSubmitted = true;
  }
}
