import axios from "axios";



export const getCourse = async () =>  {
    try{
    const token = localStorage.getItem("token");
    const res = await axios.get(`/api/Course?page=1`,{
        headers: {
            Authorization: `Bearer ${token}`
        }   
    });
    return res;
    }catch(error){
        console.log(error);
    }
    
}


export const addCourse = async (curse) =>  {
        try{
        const {title, description} =  curse;
        let bodyFormData = new FormData();
        bodyFormData.append("title", title);
        bodyFormData.append("description", description);

        const token = localStorage.getItem("token");
       
        const res = await axios.post(`/api/Course`,bodyFormData,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res;
        }catch(error){
            console.log(error);
        }
        
}

export const deleteCourse = async (courseId) => {
	try {
		const token = localStorage.getItem("token");
		const res = await axios.delete(`/api/Course/${courseId}`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		return res;
	} catch (error) {
		console.log(error);
	}
};

   