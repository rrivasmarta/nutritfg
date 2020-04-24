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

@Entity(name= "FoodGroup")
public class FoodGroup {
	
	@Id
	@SequenceGenerator(name = "FoodGroupIdGenerator", sequenceName = "FoodSeq")
	@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "FoodGroupIdGenerator")
	@Column(name = "FoodGroupId", nullable = false, unique = true)
	private Long id;
	
	@Column(name = "Name", nullable = false, unique= true)
	private FoodGroupType name;
	
	@Column(name = "Description", nullable = false)
	private String description;
	
	@OneToMany(mappedBy = "foodGroup", fetch = FetchType.EAGER)
	@JsonIgnore
	Set<Food> listFoods = new HashSet<>();

	public FoodGroup() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public FoodGroupType getName() {
		return name;
	}

	public void setName(FoodGroupType name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Set<Food> getListFoods() {
		return listFoods;
	}

	public void setListFoods(Set<Food> listFoods) {
		this.listFoods = listFoods;
	}

	
}
