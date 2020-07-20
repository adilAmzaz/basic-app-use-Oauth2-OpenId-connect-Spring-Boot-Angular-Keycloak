# basic-app-uses-Oauth2-OpenId-conncet-Spring-Boot-Angular-Keycloak
Cette application web est une application basic qui contient trois pages en mode hors ligne: page d’accueil, page d’inscription et page de connexion. En mode en ligne une page qui affiche toutes les utilisateurs dans le cas d’un utilisateur admin s’ajoute.
L’application s’intéresse surtout à utiliser le protocole oauthe2 et OpenId connect, le but au début a été d’utiliser Spring Security pour permettre ça, mais vu que le developpement va s’arrêter pour ce protocole par la communauté Spring, parmi les solutions les plus réputés et alternatives est Keycloak. Pour permettre aux utilisateurs de se connecter en  mode sécurisé utilise les technologies suivantes :

## Technologies:
- Spring Boot 2.3
- Spring Security 
- Angular 9.0
- Keycloak 10.0
- Spring Data JPA
- Mysql 8.0

L’application a la particularité d’utiliser une base de donnée externe en utilisant Keycloak user storage provider (plus de details dans le projet « »), le front le moment de l’inscription permet le stockage des données d’utilisateur dans cette base externe, Keycloak user Storage provider permet la récupération et la vérification des données pour permettre l’authentification.


