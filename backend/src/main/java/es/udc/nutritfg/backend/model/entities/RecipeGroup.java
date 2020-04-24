package es.udc.nutritfg.backend.model.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class RecipeGroup {
	
	@Id
	@SequenceGenerator(name = "RecipeGroupIdGenerator", sequenceName = "RecipeSeq")
	@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "FoodGroupIdGenerator")
	@Column(name = "FoodGroupId", nullable = false, unique = true)
	private Long id;
	
	@Column(name = "Name", nullable = false, unique= true)
	private RecipeGroupType name;
	
	@Column(name = "Description", nullable = false)
	private String description;
	
	@OneToMany(mappedBy = "recipeGroup", fetch = FetchType.EAGER)
	@JsonIgnore
	Set<Recipe> listRecipes = new HashSet<>();

	public RecipeGroup() {
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

	public Set<Recipe> getListRecipes() {
		return listRecipes;
	}

	public void setListRecipes(Set<Recipe> listRecipes) {
		this.listRecipes = listRecipes;
	}

}
