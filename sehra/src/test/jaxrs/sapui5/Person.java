package test.jaxrs.sapui5;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "T_PERSON")
@NamedQuery(name = "AllPersons", query = "select p from Person p")
@XmlRootElement
public class Person {

	@Id
	@GeneratedValue
	private int id;
	@Basic
	private String firstName;
	@Basic
	private String lastName;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setFirstName(String param) {
		this.firstName = param;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setLastName(String param) {
		this.lastName = param;
	}

	public String getLastName() {
		return lastName;
	}

}