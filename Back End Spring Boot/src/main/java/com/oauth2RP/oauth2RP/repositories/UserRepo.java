package com.oauth2RP.oauth2RP.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oauth2RP.oauth2RP.models.User;


public interface UserRepo extends JpaRepository<User, Integer> {

	//User findByEmail(String email);
	Optional<User> findByUsername(String username);
}
