import React, { Component } from "react";
import Navbar from "./Navbar";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
import { createExam } from "../actions/examActions";

class AddExam extends Component {
	state = {
		description: ""
	};

	handleSaveExam = () => {
		const { description } = this.state;
		const { courseId } = this.props.match.params;
		const exam = { description, courseId };
		createExam(exam).then((res) => {
			if (res && res.status === 200) {
				this.props.history.push(`/exams/${courseId}`);
			}
		});
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<>
				<Navbar />
				<Grid container style={{ textAlign: "center", marginTop: 10 }}>
					<Grid item xs={12}>
						<Typography variant="h4">Dodaj egzamin</Typography>
					</Grid>
					<Grid item xs={12} style={{ marginTop: 20 }}>
						<TextField
							onChange={(e) => this.handleChange(e)}
							id="description"
							name="description"
							label="Egzaminu"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} style={{ marginTop: 20 }}>
						<Button
							variant="contained"
							onClick={this.handleSaveExam}
							color="primary"
						>
							Zapisz
						</Button>
					</Grid>
				</Grid>
			</>
		);
	}
}

export default AddExam;
