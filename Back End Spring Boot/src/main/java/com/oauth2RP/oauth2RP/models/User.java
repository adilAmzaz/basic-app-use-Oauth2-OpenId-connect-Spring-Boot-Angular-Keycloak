package com.oauth2RP.oauth2RP.models;

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



@Entity
public class User {

	@javax.persistence.Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	private String lastName;
	private String firstName;
	private boolean isFamele;
	private LocalDate birtheDate;
	private String password;
	private String phone;
	private String adress;
	private String zipCode;
	
	@Column(nullable=false,unique = true, length = 50)
	private String username;
	

	private String city;
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "user_roles", 
				joinColumns = @JoinColumn(name = "user_id"), 
				inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();
	public User() {
	}
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public boolean getIsFamele() {
		return isFamele;
	}
	public void setIsFamele(boolean isFamele) {
		this.isFamele = isFamele;
	}
	public LocalDate getBirtheDate() {
		return birtheDate;
	}
	public void setBirtheDate(LocalDate birtheDate) {
		this.birtheDate = birtheDate;
	}
	public String getPassword() {
		return password;
	}
    public void setPassword(String password) {
    	this.password = com.oauth2RP.oauth2RP.utils.Utils.bcryptEncoder.encode(password);
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
	public String getZipCode() {
		return zipCode;
	}
	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
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
		builder.append(lastName);
		builder.append(", firstName=");
		builder.append(firstName);
		builder.append(", isFamele=");
		builder.append(isFamele);
		builder.append(", birtheDate=");
		builder.append(birtheDate);
		builder.append(", password=");
		builder.append(password);
		builder.append(", phone=");
		builder.append(phone);
		builder.append(", adress=");
		builder.append(adress);
		builder.append(", zipCode=");
		builder.append(zipCode);
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
