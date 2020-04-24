package es.udc.nutritfg.backend.model.entities;

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
public class Diet {
	
	@Id
	@SequenceGenerator(name = "DietIdGenerator", sequenceName = "DietSeq")
	@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "DietIdGenerator")
	@Column(name = "DietId", nullable = false, unique = true)
	private Long id;
	
	@ManyToOne(fetch=FetchType.EAGER, cascade = {CascadeType.DETACH, CascadeType.MERGE,
			CascadeType.PERSIST, CascadeType.REFRESH})
	@JoinColumn(name = "PatientId")
	private Patient patient;
	
	@OneToMany(mappedBy = "diet", fetch = FetchType.EAGER)
	@JsonIgnore
	private Set<DietDay> listDay = new HashSet<>();

	public Diet() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Set<DietDay> getListDay() {
		return listDay;
	}

	public void setListDay(Set<DietDay> listDay) {
		this.listDay = listDay;
	}

	
}
