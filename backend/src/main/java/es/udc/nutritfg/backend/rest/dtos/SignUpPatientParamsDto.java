package es.udc.nutritfg.backend.rest.dtos;

public class SignUpPatientParamsDto {

	private PatientSignUpDto patient;
	private Long idDietician;

	public SignUpPatientParamsDto() {
		super();
	}

	public PatientSignUpDto getPatient() {
		return patient;
	}

	public void setPatient(PatientSignUpDto patientSignUpDto) {
		this.patient = patientSignUpDto;
	}

	public Long getIdDietician() {
		return idDietician;
	}

	public void setIdDietician(Long idDietician) {
		this.idDietician = idDietician;
	}



}
