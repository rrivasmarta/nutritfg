package es.udc.nutritfg.backend.model.entities;

import java.util.Calendar;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class DietDay {

	@Id
	@SequenceGenerator(name = "DietDayIdGenerator", sequenceName = "DietDaySeq")
	@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "DietDayIdGenerator")
	@Column(name = "DietDayId", nullable = false, unique = true)
	private Long id;
	
	private Calendar realDate;
	
	@OneToMany(mappedBy = "dietDay", fetch = FetchType.EAGER)
	@JsonIgnore
	private Set<Meal> meals = new HashSet<>();
	
	private Macronutrient totalMacroDay;
	
	@ManyToOne(fetch=FetchType.EAGER, cascade = {CascadeType.DETACH, CascadeType.MERGE,
			CascadeType.PERSIST, CascadeType.REFRESH})
	@JoinColumn(name = "DietId")
	private Diet diet;

	public DietDay() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
	public Calendar getRealDate() {
		return realDate;
	}

	public void setRealDate(Calendar realDate) {
		this.realDate = realDate;
	}

	public Set<Meal> getMeals() {
		return meals;
	}

	public void setMeals(Set<Meal> meals) {
		this.meals = meals;
	}

	public Macronutrient getTotalMacroDay() {
		return totalMacroDay;
	}

	public void setTotalMacroDay(Macronutrient totalMacroDay) {
		this.totalMacroDay = totalMacroDay;
	}

	public Diet getDiet() {
		return diet;
	}

	public void setDiet(Diet diet) {
		this.diet = diet;
	}
	
}
