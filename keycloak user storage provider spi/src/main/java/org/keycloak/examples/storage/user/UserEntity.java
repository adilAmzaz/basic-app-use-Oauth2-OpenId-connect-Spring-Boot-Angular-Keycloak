/*
 * Copyright 2016 Red Hat, Inc. and/or its affiliates
 * and other contributors as indicated by the @author tags.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.keycloak.examples.storage.user;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;


/**
 * @author <a href="mailto:bill@burkecentral.com">Bill Burke</a>
 * @version $Revision: 1 $
 */
@NamedQueries({
        @NamedQuery(name="getUserByUsername", query="select u from user u where u.username = :username"),
        @NamedQuery(name="getUserByEmail", query="select u from user u where u.email = :email"),
        @NamedQuery(name="getUserCount", query="select count(u) from user u"),
        @NamedQuery(name="getAllUsers", query="select u from user u"),
        @NamedQuery(name="searchForUser", query="select u from user u where " +
                "( lower(u.username) like :search or u.email like :search ) order by u.username"),
})
@Entity(name = "user")
public class UserEntity {
	@javax.persistence.Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	private String last_name;
	private String first_name;
	private boolean is_famele;
	private LocalDate birthe_date;
	private String password;
	private String phone;
	private String adress;
	private String zip_code;
	public boolean isIs_famele() {
		return is_famele;
	}
	public void setIs_famele(boolean is_famele) {
		this.is_famele = is_famele;
	}
	private String email;
	@Column(nullable=false,unique = true, length = 50)
	private String username;
	

	private String city;
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "user_roles", 
				joinColumns = @JoinColumn(name = "user_id"), 
				inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();

	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public LocalDate getBirthe_date() {
		return birthe_date;
	}
	public void setBirthe_date(LocalDate birthe_date) {
		this.birthe_date = birthe_date;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}




	public String getPassword() {
		return this.password;
	}
    public void setPassword(String password) {
    	//this.password = com.oauth2RP.oauth2RP.utils.Utils.bcryptEncoder.encode(password);
    	this.password = password;
    }
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAdress() {
		return adress;
	}
	public void setAdress(String adress) {
		this.adress = adress;
	}

	public String getZip_code() {
		return zip_code;
	}
	public void setZip_code(String zip_code) {
		this.zip_code = zip_code;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
		if(this.email == null)
			this.email = username;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public Set<Role> getRoles() {
		return roles;
	}
	public void setRoles(Set<Role> roles) {
		if(roles != null) {
			this.roles.clear();
			this.roles.addAll(roles);
		}
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("User [Id=");
		builder.append(Id);
		builder.append(", lastName=");
		builder.append(last_name);
		builder.append(", firstName=");
		builder.append(first_name);
		builder.append(", isFamele=");
		builder.append(is_famele);
		builder.append(", birtheDate=");
		builder.append(birthe_date);
		builder.append(", password=");
		builder.append(password);
		builder.append(", phone=");
		builder.append(phone);
		builder.append(", adress=");
		builder.append(adress);
		builder.append(", zipCode=");
		builder.append(zip_code);
		builder.append(", username=");
		builder.append(username);
		builder.append(", city=");
		builder.append(city);
		builder.append(", roles=");
		builder.append(roles);
		builder.append("]");
		return builder.toString();
	}
	
}
