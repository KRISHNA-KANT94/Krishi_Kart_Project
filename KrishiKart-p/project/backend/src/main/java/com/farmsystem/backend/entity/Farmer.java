package com.farmsystem.backend.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="farmers")
public class Farmer 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="fid")
	private int fid;
	
	@Column(name="firstname",nullable = false)
	private String firstname;
	
	@Column(name="lastname",nullable = false)
	private String lastname;
	
	@Column(name="contact",unique = true,nullable = false)
	private String contact;
	
	@Column(name="email",unique = true,nullable = false)
	private String email;
	
	@Column(name="password",nullable = false)
	private String password;

	@Column(name="address",nullable = false)
	private String address;
	
	@Column(name="user_name",unique = true,nullable = false)
	private String user_name;
	
//	@OneToMany(mappedBy = "farmer", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//	private List<Order> order = new ArrayList<Order>();
//	
//	@OneToMany(mappedBy = "farmer", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//	private List<Product> product = new ArrayList<Product>();
	
	


//	public List<Order> getOrder() {
//		return order;
//	}
//
//	public void setOrder(List<Order> order) {
//		this.order = order;
//	}
//
//	public List<Product> getProduct() {
//		return product;
//	}
//
//	public void setProduct(List<Product> product) {
//		this.product = product;
//	}

	public int getFid() {
		return fid;
	}

	public void setFid(int fid) {
		this.fid = fid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	

	public Farmer(int fid, String firstname, String lastname, String contact, String email, String password,
			String address, String user_name) {
		super();
		this.fid = fid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.contact = contact;
		this.email = email;
		this.password = password;
		this.address = address;
		this.user_name = user_name;
		
	}

	public Farmer() {
		
	}

	
}
