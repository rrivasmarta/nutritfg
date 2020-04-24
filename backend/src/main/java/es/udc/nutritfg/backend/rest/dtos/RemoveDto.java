package es.udc.nutritfg.backend.rest.dtos;

public class RemoveDto {

	public interface AllValidations {}

	public interface UpdateValidations {}

	private String userName;

	public RemoveDto() {
		super();
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

}
