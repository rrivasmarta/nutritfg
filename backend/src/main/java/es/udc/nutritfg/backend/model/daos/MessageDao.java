package es.udc.nutritfg.backend.model.daos;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import es.udc.nutritfg.backend.model.entities.Chat;
import es.udc.nutritfg.backend.model.entities.Message;

public interface MessageDao extends PagingAndSortingRepository<Message, Long>{
	
	@Query("SELECT m FROM Message m WHERE m.chat.id = :chatId ORDER BY m.dateTime")
	public List<Message> getMessagesFromChat(Long chatId);
	    
	@Query("SELECT m FROM Message m WHERE m.dateTime = (SELECT max(me.dateTime) FROM Message me WHERE me.chat=:chat )")
	public Message getLastMessageFromChat (Chat chat);

}
