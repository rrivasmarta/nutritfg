package es.udc.nutritfg.backend.model.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import es.udc.nutritfg.backend.model.entities.DieticianOffice;

public interface DieticianOfficeDao extends PagingAndSortingRepository<DieticianOffice, Long>, CustomizedDieticianDao{


	boolean existsByName(String name);

	boolean existsByUserName(String userName);

	@Query("SELECT do FROM DieticianOffice do where LOWER(do.name) like CONCAT('%',CONCAT(LOWER(:name),'%'))")
	DieticianOffice findDieticianOffice(String name);

	Optional<DieticianOffice> findByUserName(String userName);

	//	Slice<Dietician> findByOfficeIdDieticianByLastNameAsc(Long dieticianOfficeId, Pageable pageable);
}
