package es.udc.nutritfg.backend.model.daos;

import java.util.Optional;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import es.udc.nutritfg.backend.model.entities.Dietician;

public interface DieticianDao extends PagingAndSortingRepository<Dietician, Long>{

	Optional<Dietician> findByUserName(String userName);

	boolean existsByUserName(String userName);

	Dietician findDieticianById(Long id);

	@Query("SELECT d FROM Dietician d WHERE d.dieticianOffice.id = :officeId ORDER BY d.lastName")
	Slice<Dietician> findByOfficeIdDieticians(@Param("officeId")Long officeId, Pageable pageable);

	//	@Query("SELECT d FROM Dietician d WHERE d.dieticianOffice.id := dieticianOfficeId")
	//	Slice<Dietician> findByDieticianOfficeIdOrderByLastNameAsc(Long dieticianOfficeId, Pageable pageable);
}
