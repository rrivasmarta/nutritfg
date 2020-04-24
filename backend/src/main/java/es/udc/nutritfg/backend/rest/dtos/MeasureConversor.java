package es.udc.nutritfg.backend.rest.dtos;

import java.util.List;
import java.util.stream.Collectors;

import es.udc.nutritfg.backend.model.entities.Measure;

public class MeasureConversor {
	
	private MeasureConversor() {}

	public final static List<MeasureDto> toOrderMeasureDtos(List<Measure> measures) {
		return measures.stream().map(o -> toMeasureDto(o)).collect(Collectors.toList());
	}

	public final static MeasureDto toMeasureDto(Measure measure) {

		MeasureDto measureDto = new MeasureDto();
		measureDto.setId(measure.getId());
		measureDto.setPatientId(measure.getPatient().getId());
		measureDto.setDay(measure.getDay());
		measureDto.setWeight(measure.getWeight());
		measureDto.setHeight(measure.getHeight());
		measureDto.setHipCircunference(measure.getHipCircunference());
		measureDto.setWaistCircunference(measure.getWaistCircunference());
		measureDto.setAbdominalSkinFold(measure.getAbdominalSkinFold());
		measureDto.setMidaxillaryFold(measure.getMidaxillaryFold());
		measureDto.setPectoralFold(measure.getPectoralFold());
		measureDto.setSubscapularFold(measure.getSubscapularFold());
		measureDto.setTricipitaFold(measure.getTricipitaFold());
		measureDto.setAntheriorThighFold(measure.getAntheriorThighFold());
		measureDto.setFatMass(measure.getFatMass());
		measureDto.setMuscularMass(measure.getMuscularMass());
		
		return measureDto;
	}

	public final static Measure toMeasure (MeasureDto measureDto) {

		Measure measure = new Measure();
		measure.setId(measureDto.getId());
		measure.setPatient(measureDto.getPatient());
		measure.setDay(measureDto.getDay());
		measure.setWeight(measureDto.getWeight());
		measure.setHeight(measureDto.getHeight());
		measure.setHipCircunference(measureDto.getHipCircunference());
		measure.setWaistCircunference(measureDto.getWaistCircunference());
		measure.setAbdominalSkinFold(measureDto.getAbdominalSkinFold());
		measure.setMidaxillaryFold(measureDto.getMidaxillaryFold());
		measure.setPectoralFold(measureDto.getPectoralFold());
		measure.setSubscapularFold(measureDto.getSubscapularFold());
		measure.setTricipitaFold(measureDto.getTricipitaFold());
		measure.setAntheriorThighFold(measureDto.getAntheriorThighFold());
		measure.setFatMass(measureDto.getFatMass());
		measure.setMuscularMass(measureDto.getMuscularMass());

		return measure;
	}


}
