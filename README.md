# React-native
Recipe-app

J'ai utilisé react-native-web en travaillant sur l'appareil Iphone 12 pro .donc si vous démarrer l'app sur le web browser veuillez utiliser le responsive 
iphone 12 pro.

Outils Principale:
AWS amplify : Authentification,
Rest API : EDAMAM,
Hooks : useState,useEffect,useContext,
Auth Validation : React-hook-form,

Problèmes rencontrés:
J'ai utilisé aws amplify puisque j'ai rencontré des problèmes avec firebase puisqu'il est pas compatible avec react-native-web,j'ai mis en commentaire
le code concernant l'authentification (app.js) parceque j'arrive pas à accéder à aws console (problèmes de leur part , j'ai envoyé un mail au service) du coup je peux 
pas faire la configuration manuel.donc meme si l'utilisateur ne se crée pas on arrive a accéder à la page home puisque j'ai ajouter navigation.navigate("recipe")
soit il est crée soit non.c'est la seule solution que j'ai trouvé en attendant.

Issues:
j'ai pris note des remarques d'hier du coup j'ai supprimer le bouton view detail , et dès qu'on clique sur la card on arrive à accéder 
à la page detail, aussi j'ai mis un coeur rouge et dès qu'on ajoute une card dans favorites ,on recoit une alert comme quoi c'est ajouté.



