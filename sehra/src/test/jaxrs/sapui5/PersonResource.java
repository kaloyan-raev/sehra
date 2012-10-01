package test.jaxrs.sapui5;

import java.util.HashMap;
import java.util.Map;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.sql.DataSource;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.eclipse.persistence.config.PersistenceUnitProperties;

@Path("/persons")
@Produces(MediaType.APPLICATION_JSON)
public class PersonResource {
	
	private static EntityManagerFactory emf;
	
	public static EntityManagerFactory getEmf() throws NamingException {
		if (emf == null) {
			InitialContext ctx = new InitialContext();
			DataSource ds = (DataSource) ctx.lookup("java:comp/env/jdbc/DefaultDB");
			
			Map properties = new HashMap();
			properties.put(PersistenceUnitProperties.NON_JTA_DATASOURCE, ds);
			
			emf = Persistence.createEntityManagerFactory("sehra", properties);
		}
		
		return emf;
	}
	
	@GET
	public Person[] getPersons() throws NamingException {
		EntityManager em = getEmf().createEntityManager();
		return (Person[]) em.createNamedQuery("AllPersons").getResultList().toArray(new Person[] {});
	}
	
	@GET
	@Path("{id}")
	public Person getPerson(@PathParam("id") int id) throws NamingException {
		EntityManager em = getEmf().createEntityManager();
		return em.find(Person.class, id);
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void createPerson(Person person) throws NamingException {
		EntityManager em = getEmf().createEntityManager();
		try {
			em.getTransaction().begin();
			em.persist(person);
			em.getTransaction().commit();
		} finally {
			em.close();
		}
	}
	
	@POST
	public void createPerson(@FormParam("firstName") String firstName, @FormParam("lastName") String lastName) throws NamingException {
		Person person = new Person();
		person.setFirstName(firstName);
		person.setLastName(lastName);
		
		EntityManager em = getEmf().createEntityManager();
		try {
			em.getTransaction().begin();
			em.persist(person);
			em.getTransaction().commit();
		} finally {
			em.close();
		}
	}
	
	@PUT
	@Path("{id}")
	public void updatePerson(@PathParam("id") int id, Person update) throws NamingException {
		EntityManager em = getEmf().createEntityManager();
		Person person = em.find(Person.class, id);
		if (person != null) {
			person.setFirstName(update.getFirstName());
			person.setLastName(update.getLastName());
			try {
				em.getTransaction().begin();
				em.merge(person);
				em.getTransaction().commit();
			} finally {
				em.close();
			}
		}
	}
	
	@DELETE
	@Path("{id}")
	public void deletePerson(@PathParam("id") int id) throws NamingException {
		EntityManager em = getEmf().createEntityManager();
		Person person = em.find(Person.class, id);
		if (person != null) {
			try {
				em.getTransaction().begin();
				em.remove(person);
				em.getTransaction().commit();
			} finally {
				em.close();
			}
		}
	}

}
