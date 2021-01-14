import React, { Component } from "react";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import { addRegister } from "../actions/authActions";


export class Register extends Component {
	state = {
		email: "",
		firstName: "",
		indexNumber: "",
		password: "",
		confirmPassword: ""
	};


	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.errors !== prevState.errors) {
			return { errors: nextProps.errors };
		} else {
			return null;
		}
	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};


	handleSaveRegister = () => {
		const { email, firstName, indexNumber, password, confirmPassword } = this.state;
		const register = { email, firstName, indexNumber, password, confirmPassword };
		addRegister(register).then((res) => {
			if (res && res.status === 200) {
				window.location.href = "/";
			}
		});


	};

	render() {

		return (

			<Grid container style={{ textAlign: "center", marginTop: 15 }}>
				<Grid item xs={12}>
					<Typography variant="h5">
						Rejestracja
						</Typography>
				</Grid>

				<Grid item xs={12} style={{ marginTop: 15 }}>
					<Grid container>
						<Grid item xs={false} md={4} />
						<Grid item xs={12} md={4}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField

										id="email"
										name="email"
										onChange={this.handleChange}
										label="Email"
										required
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField

										id="firstName"
										name="firstName"
										onChange={this.handleChange}
										label="Imię"
										required
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField

										id="indexNumber"
										name="indexNumber"
										onChange={this.handleChange}
										label="Numer indeksu"
										required
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField

										type="password"
										id="password"
										name="password"
										label="Hasło"
										onChange={this.handleChange}
										required
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField

										type="confirmPassword"
										id="confirmPassword"
										name="confirmPassword"
										label="Potwierdz hasło"
										onChange={this.handleChange}
										required
										variant="outlined"
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={false} md={4} />
					</Grid>
				</Grid>
				<Grid item xs={12} style={{ marginTop: 20 }}>
					<Button variant="contained" color="primary" onClick={this.handleSaveRegister}>
						Zarejestruj
						</Button>
				</Grid>
			</Grid>

		);
	}
}



export default Register;
