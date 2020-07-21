User Storage Provider with EJB and JPA
===================================================
I used this project as a basis to use User Storage Provider with an external database: https://github.com/keycloak/keycloak-quickstarts

My Back End application uses its own database and its own user entity, so to allow this users to continue to use my application normally, I was forced to use keycloak storage provider.

Back end and front and applications can add and delete users, so i needed keycloak USP just to read and verify users from the external databases, that’s why I needed to implement specially UserStorageProvider, UserLookupProvider, CredentialInputValidator, you can refer here to see more details about those interfaces.
So we have two kind of users, the first in the external database and the second created by keycloak, that’s why the web application must be adapted to manage those two kind of users. For the moment, in the project I concentrated in external users, so they can use the application correctly, but maybe some errors can appear if we try to connect with keycloak users, and I’ll update the application to be able support the two kinds of users.

## how to use this application :

- Connect mysql server to keycloak :
 You can use this tutorial https://dev.to/donadams50/connect-mysql-server-to-keycloak-3d6e

- I changed manually the configuration of standalone to define ExampleXADS as an xa-datasource : 
```<xa-datasource jndi-name="java:jboss/datasources/ExampleXADS" pool-name="ExampleXADS" enabled="true" use-java-context="true" statistics-enabled="${wildfly.datasources.statistics-enabled:${wildfly.statistics-enabled:false}}">
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
</xa-datasource>```



This is an example of the User Storage SPI implemented using EJB and JPA.  You must first deploy the datasource it uses.
Start up the Keycloak server.  Then in the directory of this example type the following maven command:

    mvn -Padd-datasource install

You only need to execute this maven command once.  If you execute this again, then you will get an error message that the datasource
already exists.

If you open the pom.xml file you'll see that the add-datasource profile creates an XA datasource using the built
in H2 database that comes with the server.  An XA datasource is required because you cannot use two non-xa datasources
in the same transaction.  The Keycloak database is non-xa.

Another thing to note is that the xa-datasource created is in-memory only.  If you reboot the server, any users you've
added or changes you've made to users loaded by this provider will be wiped clean.

To deploy the provider, run the following maven command:

    mvn clean install wildfly:deploy

You can run as many times as you want and the provider will be redeployed.

Login and go to the User Federation tab and you should now see your deployed provider in the add-provider list box.
Add the provider, save it, then any new user you create will be stored and in the custom store you implemented.  You
can modify the example and hot deploy it using the above maven command again.

