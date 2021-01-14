import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "../Pages/Navbar";
import {
	getCourse,
	addCourse,
	deleteCourse
} from "../actions/courseActions";

import {
	Grid,
	Typography,
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow
} from "@material-ui/core";




export class home extends Component {
	state = {
		data: []

	};

	componentDidMount() {
		getCourse().then((res) => {
			this.setState({ data: [res.data.records] });
		});

	}
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleAddCourse = () => {
		const { title, description } = this.state;
		const course = { title, description };
		addCourse(course).then((res) => {
			if (res && res.status === 200) {
				window.location.href = "/home";
			}
		});

	};


	render() {

		return (
			<>
				<Navbar />
				<Grid
					container
					spacing={1}
					style={{ textAlign: "center", marginTop: 10 }}
				>
					<Grid item xs={12}>

						<TableContainer>
							<Table>
								<TableHead>

									<TableRow>
										<TableCell >
											<Typography >Przedmiot</Typography>
										</TableCell>
										<TableCell >
											<Typography align="center">Opis</Typography>
										</TableCell>
										<TableCell >
											<Typography align="center">Egzamin</Typography>
										</TableCell>
										<TableCell >
											<Typography align="center">Akcja</Typography>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{this.state.data[0] && this.state.data[0].map((cours) => {
										return (
											<TableRow key={cours.id}>
												<TableCell>
													<Typography >
														<Link
															to={`/exams/${cours.id}`}
														>
															{cours.title}
														</Link>
													</Typography>
												</TableCell>
												<TableCell>
													<Typography align="center">{cours.description}</Typography>
												</TableCell>
												<TableCell>
													{cours.exams &&
														cours.exams.map((exam, i) => {
															return (
																<div
																	style={{ textAlign: "center" }}
																	key={i}
																>
																	<Typography>
																		Status: {exam.isPassed === false
																			? "Niezaliczony"
																			: "Zaliczony"}
																	</Typography>
																	<Typography>
																		Rodzaj: {exam.description}
																	</Typography>
																</div>
															);
														})}
												</TableCell>
												<TableCell align="center">
													<Button style={{ marginLeft: 10 }}
														variant="contained"
														color="primary"
														onClick={() => {
															deleteCourse(cours.id);
														}}
													>
														Usuń
												</Button>
												</TableCell>
											</TableRow>

										);
									})}

								</TableBody>
							</Table>
						</TableContainer>
					</Grid>

					<Grid item xs={12} style={{ textAlign: "left", marginLeft: 10, marginTop: 30 }}>
						<Button
							variant="contained"
							color="primary"
							onClick={() =>
								this.props.history.push(`/addcurses`)
							}
						>
							Dodaj przedmiot
						</Button>
					</Grid>
				</Grid>

			</>
		);
	}
}



export default home;
