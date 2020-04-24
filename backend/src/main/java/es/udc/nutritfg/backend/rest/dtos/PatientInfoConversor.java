package es.udc.nutritfg.backend.rest.dtos;

import es.udc.nutritfg.backend.model.entities.Patient;

public class PatientInfoConversor {

	private PatientInfoConversor() {}

	public final static PatientInfoDto toPatientInfoDto(Patient patient) {

		PatientInfoDto patientDto = new PatientInfoDto();
		patientDto.setUserName(patient.getUserName());
		patientDto.setEmail(patient.getEmail());
		patientDto.setGeneralData(patient.getGeneralData());
		patientDto.setHabitData(patient.getHabitData());
		patientDto.setMedicalData(patient.getMedicalData());
		patientDto.setMacroDataPatient(patient.getMacroDataPatient());
		patientDto.setId(patient.getId());

		return patientDto;
	}

	public final static Patient toPatient(PatientInfoDto patientDto) {


		Patient patient = new Patient();
		patient.setUserName(patientDto.getUserName());
		patient.setEmail(patientDto.getEmail());
		patient.setGeneralData(patientDto.getGeneralData());
		patient.setHabitData(patientDto.getHabitData());
		patient.setMedicalData(patientDto.getMedicalData());
		patient.setMacroDataPatient(patientDto.getMacroDataPatient());
		patient.setId(patientDto.getId());

		return patient;
	}

}
