package com.oauth2RP.oauth2RP;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.oauth2RP.oauth2RP.models.ERole;
import com.oauth2RP.oauth2RP.models.Role;
import com.oauth2RP.oauth2RP.models.User;
import com.oauth2RP.oauth2RP.repositories.RoleRepo;
import com.oauth2RP.oauth2RP.repositories.UserRepo;



@SpringBootApplication
public class Oauth2RpApplication implements CommandLineRunner {

	@Autowired
	UserRepo userRepo;
	@Autowired
	RoleRepo roleRepo;
	public static void main(String[] args) {
		SpringApplication.run(Oauth2RpApplication.class, args);
	}

	
	@Override
	public void run(String... args) throws Exception {

		Role role = new Role(ERole.ROLE_ADMIN);
		Set<Role> setRole = new HashSet<Role>();
		setRole.add(role);
		roleRepo.save(role);
		User firstAdmin = new User();
		firstAdmin.setPassword("123");
		firstAdmin.setUsername("admin@admin.com");
		firstAdmin.setFirstName("root");
		firstAdmin.setLastName("root");
		firstAdmin.setRoles(setRole);
		firstAdmin.setAdress("69 rue de la République");
		firstAdmin.setBirtheDate( LocalDate.of(1993, 11, 01));
		firstAdmin.setCity("Paris");
		firstAdmin.setIsFamele(false);
		firstAdmin.setPhone("0612345678");
		firstAdmin.setZipCode("93100");
		userRepo.save(firstAdmin);
		
		Role role2 = new Role(ERole.ROLE_USER);
		Set<Role> setRole2 = new HashSet<Role>();
		setRole2.add(role2);
		roleRepo.save(role2);
		
		User firstUser = new User();
		firstUser.setPassword("123");
		firstUser.setUsername("user@user.com");
		firstUser.setFirstName("user");
		firstUser.setLastName("user");
		firstUser.setRoles(setRole2);
		userRepo.save(firstUser);
	}
}
