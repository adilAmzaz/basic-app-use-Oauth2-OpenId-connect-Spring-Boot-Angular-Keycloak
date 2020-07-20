# basic-app-uses-Oauth2-OpenId-conncet-Spring-Boot-Angular-Keycloak


This web application is a basic web application and its main goal is using the protocol oauth2 and openId connect, it demonstrate how we can use it with spring boot and angular. At first i wanted to use spring security to implement this protocol, but The Spring Security OAuth project is deprecated, among the best alternatives is keycloak. 
## Technologies:
- Spring Boot 2.3
- Spring Security 
- Angular 9.0
- Keycloak 10.0
- Spring Data JPA
- Mysql 8.0

One of the characteristics of this application is that it uses an external database of keycloak, by using keycloak user storage spi [documentation here](https://www.keycloak.org/docs/latest/server_development/#_user-storage-spi) (more details in the project [keycloak user storage provider spi](keycloak%20user%20storage%20provider%20spi))


