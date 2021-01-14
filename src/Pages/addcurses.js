import React, { Component } from "react";
import {
    addCourse
} from "../actions/courseActions";

import {
	Grid,
	Typography,
	Button,
	TextField
} from "@material-ui/core";



class addcourse extends Component {
	state = {
		title: "",
		description: ""
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
    };
    
    handleAddCourse = () => {
		const {title,description} = this.state;
		const course = {title,description};
        addCourse(course).then((res) => {
            if(res && res.status === 200){
                window.location.href = "/home";
            }
	    });
	
	};

    render() {
        
		return (
			<>	
				<Grid container style={{ textAlign: "center", marginTop: 15 }}>
                    <Grid item xs={12}>
						<Typography variant="h5">
							Dodanie kursu
						</Typography>
					</Grid>
					
					<Grid item xs={12} style={{ marginTop: 15 }}>
						<Grid container>
							<Grid item xs={false} md={4} />
							<Grid item xs={12} md={4}>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<TextField
											
											id="title"
											name="title"
											onChange={this.handleChange}
											label="Tytuł"
											required
											variant="outlined"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											
											id="description"
											name="description"
											onChange={this.handleChange}
											label="Opis"
											required
											variant="outlined"
										/>
									</Grid>  
								</Grid>
							</Grid>
							<Grid item xs={false} md={4} />
						</Grid>
					</Grid>
					<Grid item xs={12}></Grid>
					
					<Grid item xs={12} style={{ marginTop: 20 }}>
						<Button  variant="contained" color="primary" onClick={this.handleAddCourse}>
							Dodaj
						</Button>
					</Grid>
					
				</Grid>	
			</>
		);
	}
}




export default addcourse;
