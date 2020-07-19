package com.oauth2RP.oauth2RP.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.oauth2RP.oauth2RP.models.Role;


public interface RoleRepo extends JpaRepository<Role, Integer>{

}
