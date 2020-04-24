package es.udc.nutritfg.backend.rest.dtos;

import es.udc.nutritfg.backend.model.entities.Message;

public class UserChatReducedDto {
	
	 private String userName;
	 
	 private Message lastMessage;

	 public UserChatReducedDto() {
		super();
	 }

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Message getLastMessage() {
		return lastMessage;
	}

	public void setLastMessage(Message lastMessage) {
		this.lastMessage = lastMessage;
	}
	 

}
