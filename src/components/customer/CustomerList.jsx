import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../AppNavbar';
import { Link } from 'react-router-dom';


class CustomerList extends Component {

	constructor(props) {
		super(props);
		this.state = { customers: [] };
		this.remove = this.remove.bind(this);
		this.baseRestUrl = 'http://localhost:8085/cidr-rest';
	}

	///////////////////////////////////////////////////////////
	//
	//  DID MOUNT
	//
	///////////////////////////////////////////////////////////	
	componentDidMount() {
		fetch(this.baseRestUrl + '/customers')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				this.setState({ customers: data })
			});
	}
	
	///////////////////////////////////////////////////////////
	//
	//  REMOVE
	//
	///////////////////////////////////////////////////////////	
	async remove(id) {
		await fetch(this.baseRestUrl + `/customers/${id}`, {
			method: 'DELETE',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then(() => {
			let updatedCustomers = [...this.state.customers].filter(i => i.id !== id);
			this.setState({ customers: updatedCustomers });
		});
	}
	
	///////////////////////////////////////////////////////////
	//
	//  RENDER
	//
	///////////////////////////////////////////////////////////	
	render() {
		const { customers, isLoading } = this.state;

		if (isLoading) {
			return <p>Loading...</p>;
		}

		const customerList = customers.map(customer => {

			return <tr key={customer.id}>
				<td style={{ whiteSpace: 'nowrap' }}>{customer.firstName}</td>
				<td style={{ whiteSpace: 'nowrap' }}>{customer.lastName}</td>
				<td>{customer.email}</td>
				<td style={{ whiteSpace: 'nowrap' }}>{customer.dateOfBirth}</td>
				<td>
					<ButtonGroup>
						<Button size="sm" color="primary" tag={Link} to={"/customers/" + customer.id}>Edit</Button>
						 {" "}
						<Button size="sm" color="danger" onClick={() => this.remove(customer.id)}>Delete</Button>
					</ButtonGroup>
				</td>
			</tr>
		});

		return (
			<div>
				<AppNavbar />
				<Container fluid>

					<h3>Customers</h3>
					<Table className="mt-4">
						<thead>
							<tr>
								<th width="30%">First Name</th>
								<th width="30%">Last Name</th>
								<th width="30%">Email</th>
								<th width="30%">Date Of Birth</th>
								<th width="40%">Actions</th>
							</tr>
						</thead>
						<tbody>
							{ customerList}
						</tbody>
					</Table>

					<br />

					<div className="float-right">
						<Button color="success" tag={Link} to="/customers/new">Add Customer</Button>
					</div>

				</Container>
			</div>
		);
	}
}
export default CustomerList;