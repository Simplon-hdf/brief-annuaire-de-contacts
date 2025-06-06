export interface ModeleDeContact {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    typeDeContact: 'Client' | 'Fournisseur';
    dateDeCreation?: Date;
   
}
