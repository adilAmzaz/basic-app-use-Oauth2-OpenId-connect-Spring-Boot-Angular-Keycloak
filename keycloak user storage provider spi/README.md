User Storage Provider with EJB and JPA
===================================================
I used this project as a basis to use User Storage Provider with an external database: https://github.com/keycloak/keycloak-quickstarts

My Back End application uses its own database and its own user entity, so to allow this users to continue to use my application normally, I was forced to use keycloak storage provider.

Back end and front and applications can add and delete users, so i needed keycloak USP just to read and verify users from the external databases, that’s why I needed to implement specially UserStorageProvider, UserLookupProvider, CredentialInputValidator, you can refer here to see more details about those interfaces.
So we have two kind of users, the first in the external database and the second created by keycloak, that’s why the web application must be adapted to manage those two kind of users. For the moment, in the project I concentrated in external users, so they can use the application correctly, but maybe some errors can appear if we try to connect with keycloak users, and I’ll update the application to be able support the two kinds of users.

## how to use this application :
- Start up the Keycloak server

- Connect mysql server to keycloak :
 You can use this tutorial https://dev.to/donadams50/connect-mysql-server-to-keycloak-3d6e

- Verify  the configuration of standalone to define ExampleXADS as an xa-datasource, the configuration must be something like this : 
```
<xa-datasource jndi-name="java:jboss/datasources/ExampleXADS" pool-name="ExampleXADS" enabled="true" use-java-context="true" statistics-enabled="${wildfly.datasources.statistics-enabled:${wildfly.statistics-enabled:false}}">
       <driver>mysql</driver>
     <xa-datasource-property name="URL">jdbc:mysql://localhost:3306/keycloak</xa-datasource-property> 
       <security>
       <user-name>root</user-name>
       <password>root</password>
       </security>
       <validation>
       <valid-connection-checker class-name="org.jboss.jca.adapters.jdbc.extensions.mysql.MySQLValidConnectionChecker"/>
       <validate-on-match>true</validate-on-match>
       <exception-sorter class-name="org.jboss.jca.adapters.jdbc.extensions.mysql.MySQLExceptionSorter"/>
   </validation
</xa-datasource>
```

- Generate the jar of this project and put it in standalone/deployments or you can use this following maven command in the directory of this project :

```
mvn install
```



To deploy the provider, run the following maven command:
```
mvn clean install wildfly:deploy
```



Login and go to the User Federation tab and you should now see your deployed provider in the add-provider list box.
Add the provider, save it, then any new user you create will be stored and in the custom store you implemented.

