package es.udc.nutritfg.backend.rest.dtos;

import java.util.List;
import java.util.stream.Collectors;

import es.udc.nutritfg.backend.model.entities.Patient;

public class PatientSignUpConversor {

	private PatientSignUpConversor() {}

	public final static List<PatientSignUpDto> toOrderPatientsDtos(List<Patient> patients) {
		return patients.stream().map(o -> toPatientSignUpDto(o)).collect(Collectors.toList());
	}

	public final static PatientSignUpDto toPatientSignUpDto(Patient patient) {

		PatientSignUpDto patientDto = new PatientSignUpDto();
		patientDto.setId(patient.getId());
		patientDto.setUserName(patient.getUserName());
		patientDto.setPassword(patient.getPassword());
		patientDto.setRoleType(patient.getRole());
		patientDto.setEmail(patient.getEmail());

		patientDto.setGeneralData(patient.getGeneralData());
		patientDto.setHabitData(patient.getHabitData());
		patientDto.setMedicalData(patient.getMedicalData());
		
		patientDto.setMacroDataPatient(patient.getMacroDataPatient());

		return patientDto;
	}

	public final static Patient toPatient(PatientSignUpDto patientDto) {


		Patient patient = new Patient();
		patient.setId(patientDto.getId());
		patient.setUserName(patientDto.getUserName());
		patient.setPassword(patientDto.getPassword());
		patient.setEmail(patientDto.getEmail());
		patient.setGeneralData(patientDto.getGeneralData());
		patient.setHabitData(patientDto.getHabitData());
		patient.setMedicalData(patientDto.getMedicalData());
		
		patient.setMacroDataPatient(patientDto.getMacroDataPatient());

		return patient;
	}

	public final static AuthenticatedPatientSignUpDto toAuthenticatedPatientSignUpDto(String serviceToken, Patient patient) {

		return new AuthenticatedPatientSignUpDto(serviceToken, toPatientSignUpDto(patient));

	}

}
