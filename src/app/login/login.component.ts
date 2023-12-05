// login.component.ts (Frontend)
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
    imports: [FormsModule, NgIf]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  authenticationMessage: string = ''; // Ajoutez une propriété pour afficher le message d'authentification

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {

    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        // Gérez la réponse de l'API ici
        console.log(response);

        if (response && response.success) {
          // La connexion est réussie, vous pouvez rediriger l'utilisateur vers une page appropriée ici
          this.router.navigate(['/admin']); 

          // Afficher le message d'authentification réussie dans la variable authenticationMessage
          this.authenticationMessage = 'Authentification réussie';
        } else {
          // Le backend a renvoyé une réponse indiquant que l'authentification a échoué
          console.log('Identifiants de connexion invalides');

          // Réinitialiser la variable authenticationMessage en cas d'échec d'authentification
          this.authenticationMessage = '';
        }
      }
    );
  }
}
