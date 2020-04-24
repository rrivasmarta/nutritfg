package es.udc.nutritfg.backend.model.services;

import java.util.List;

import javax.management.InstanceNotFoundException;

import es.udc.nutritfg.backend.model.entities.Message;
import es.udc.nutritfg.backend.rest.dtos.ChatDto;
import es.udc.nutritfg.backend.rest.dtos.MessageDto;
import es.udc.nutritfg.backend.rest.dtos.UserChatReducedDto;

public interface ChatService {
	
	public List<Message> storeMessage(MessageDto messageDTO) throws InstanceNotFoundException;
    
	public List<Message> getMessages(ChatDto chatDTO);
    
	public ChatDto startChat(ChatDto chatDTO) throws InstanceNotFoundException;
    
	List<UserChatReducedDto> getChats(String userToken);

}
