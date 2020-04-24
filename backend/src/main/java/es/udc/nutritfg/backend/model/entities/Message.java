package es.udc.nutritfg.backend.model.entities;

import java.util.Calendar;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Message {
	
	@Id
	@SequenceGenerator(name = "MenssageIdGenerator", sequenceName = "MenssageSeq")
	@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "MenssageIdGenerator")
	@Column(name = "MenssageId", nullable = false, unique = true)
	private Long id;

	@Column(name = "Text")
	String text;

	@Column(name = "DateTime")
    Calendar dateTime;
    
	@Column(name = "Checked")
	boolean checked;
    
   
    @ManyToOne(fetch=FetchType.EAGER, cascade = {CascadeType.DETACH, CascadeType.MERGE,
			CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinColumn(name="senderId")
    User messageSender;
    
    @JsonIgnore
    @ManyToOne(fetch=FetchType.EAGER, cascade = {CascadeType.DETACH, CascadeType.MERGE,
			CascadeType.PERSIST, CascadeType.REFRESH})
    @JoinColumn(name="chatId")
    Chat chat;

	public Message() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Calendar getDateTime() {
		return dateTime;
	}

	public void setDateTime(Calendar dateTime) {
		this.dateTime = dateTime;
	}

	public boolean isChecked() {
		return checked;
	}

	public void setChecked(boolean checked) {
		this.checked = checked;
	}

	public User getMessageSender() {
		return messageSender;
	}

	public void setMessageSender(User messageSender) {
		this.messageSender = messageSender;
	}

	public Chat getChat() {
		return chat;
	}

	public void setChat(Chat chat) {
		this.chat = chat;
	}
    
}
