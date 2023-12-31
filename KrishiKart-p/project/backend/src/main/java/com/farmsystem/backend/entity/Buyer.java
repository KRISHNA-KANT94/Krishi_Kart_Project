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
@Table(name="buyers")
public class Buyer
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="bid")
	private int bid ;
	
	@Column(name="firstname", nullable = false )
	private String firstname ;
	
	@Column(name="lastname", nullable = false )
	private String lastname ;
	
	@Column(name="contact",nullable = false )
	private String contact ;
	
	@Column(name="email", unique = true,nullable = false )
	private String email ;
	
	@Column(name="user_name",unique = true,nullable = false )
	private String user_name ;
	
	@Column(name="password",nullable = false )
	
	private String password ;
	

	@Column(name="address")
	private String address ;
	
//	@OneToMany(mappedBy = "buyer", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//	private List<Order> order = new ArrayList<Order>();
//	
	
//	public List<Order> getOrder() {
//		return order;
//	}
//	public void setOrder(List<Order> order) {
//		this.order = order;
//	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getBid() {
		return bid;
	}
	public void setBid(int bid) {
		this.bid = bid;
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
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public Buyer(int bid, String firstname, String lastname, String contact, String email, String user_name,
			String password,String address) {
		super();
		this.bid = bid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.contact = contact;
		this.email = email;
		this.user_name = user_name;
		this.password = password;
		this.address = address;
	}

	public Buyer() {
		
	}
	
}
