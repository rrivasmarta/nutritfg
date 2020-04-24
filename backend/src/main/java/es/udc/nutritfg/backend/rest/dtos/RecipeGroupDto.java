package es.udc.nutritfg.backend.rest.dtos;

import es.udc.nutritfg.backend.model.entities.RecipeGroupType;

public class RecipeGroupDto {
	
	private Long id;
	
	private RecipeGroupType name;
	
	private String description;

	public RecipeGroupDto() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public RecipeGroupType getName() {
		return name;
	}

	public void setName(RecipeGroupType name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
