package es.udc.nutritfg.backend.rest.dtos;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import es.udc.nutritfg.backend.model.entities.Chat;
import es.udc.nutritfg.backend.model.entities.Message;

public class ChatConversor {
	
	private ChatConversor() {}
	
	public static final Chat toChat (ChatDto chatDto) {
			
		Chat chat = new Chat();
		 
		chat.setId(chatDto.getId());
			
		return chat;
	}
		    
	public static final ChatDto toChatDto (Chat chat) {
		
		ChatDto chatDto = new ChatDto();
			
		chatDto.setId(chat.getId());
		chatDto.setMessages(chat.getMessages());
			
		return chatDto;
	}
		    
	public static final Message toMessage (MessageDto messageDto) {
	
		Message message = new Message();
		message.setDateTime(Calendar.getInstance());
		message.setText(messageDto.getText());
			
		return message;
	}
		    
	public static final MessageDto toMessageDto (Message message) {

		MessageDto messageDto = new MessageDto();
		messageDto.setChatId(message.getChat().getId());
		messageDto.setDateTime(message.getDateTime());
		messageDto.setId(message.getId());
		messageDto.setText(message.getText());
		messageDto.setUsername(message.getMessageSender().getUserName());
		
		return messageDto;
	}
		    
	public static final List<MessageDto> toMessageDtoList(List<Message> messageList){

		List<MessageDto> messageDTOList = new ArrayList<>();
		messageList.forEach((message)->{
		   messageDTOList.add(toMessageDto(message));
		});
			
		return messageDTOList;
	}
		    

}
