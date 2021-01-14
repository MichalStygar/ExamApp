import React, { Component } from "react";
import Navbar from "../Pages/Navbar";
import { getExams, passExam, deleteExam } from "../actions/examActions";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Grid,
    Button
} from "@material-ui/core";



class Exam extends Component {
    state = {
        exams: ""
    };

    componentDidMount() {
        const { courseId } = this.props.match.params;
        getExams(courseId).then((res) => {
            if (res && res.status === 200) {
                this.setState({ exams: res.data.records });
            }
        });
    }

    render() {
        const { exams } = this.state;
        const { courseId } = this.props.match.params;
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
                                        <TableCell>
                                            <Typography>
                                                Nazwa egzaminu
											</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography align="center">
                                                Status
											</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography align="center">
                                                Akcje
											</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {exams
                                        ? exams.map((exam, index) => {
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell>
                                                        <Typography>{exam.description}</Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography align="center">
                                                            {exam.isPassed === false ? "Niezaliczony" : "Zaliczony"}
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        <Button
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={() => {
                                                                passExam(exam.id);
                                                            }}
                                                        >
                                                            Zmień status
                                                                </Button>
                                                        <Button style={{ marginLeft: 10 }}
                                                            variant="contained"
                                                            color="primary"
                                                            onClick={() => {
                                                                deleteExam(exam.id);
                                                            }}
                                                        >
                                                            Usuń
                                                                </Button>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })
                                        : null}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} style={{ textAlign: "left", marginLeft: 10, marginTop: 30 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() =>
                                this.props.history.push(`/exams/${courseId}/addExam`)
                            }
                        >
                            Dodaj egzamin
						</Button>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default Exam;
