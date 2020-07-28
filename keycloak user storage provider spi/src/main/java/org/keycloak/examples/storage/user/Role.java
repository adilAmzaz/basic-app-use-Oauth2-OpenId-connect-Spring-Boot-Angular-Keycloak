package org.keycloak.examples.storage.user;


import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.keycloak.models.RoleContainerModel;
import org.keycloak.models.RoleModel;



@Entity
@Table(name = "roles")
public class Role implements RoleModel{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "role_id")
	private Integer roleId;

	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private ERole name;

	public Role() {

	}

	public Role(ERole name) {
		this.name = name;
	}


	public void setId(Integer id) {
		this.roleId = id;
	}



	public void setName(ERole name) {
		this.name = name;
	}

	@Override
	public String getName() {
		// TODO Auto-generated method stub
		return this.name.name();
	}

	@Override
	public String getDescription() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void setDescription(String description) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public String getId() {
		// TODO Auto-generated method stub
		return Integer.toString(this.roleId);
	}

	@Override
	public void setName(String name) {
		for (ERole s : ERole.values())
	    {
	            if (name.equals(s.toString()))
	        {
	           this.setName(s);

	        }
	    }
	}

	@Override
	public boolean isScopeParamRequired() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void setScopeParamRequired(boolean scopeParamRequired) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean isComposite() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void addCompositeRole(RoleModel role) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void removeCompositeRole(RoleModel role) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Set<RoleModel> getComposites() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean isClientRole() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public String getContainerId() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public RoleContainerModel getContainer() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean hasRole(RoleModel role) {
		// TODO Auto-generated method stub
		if(this.name.name().equals(role.getName()))
			return true;
		return false;
	}
}
