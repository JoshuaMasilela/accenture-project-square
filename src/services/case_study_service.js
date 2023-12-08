import axios from "axios";

const endpoint = process.env.REACT_APP_CASE_STUDY_URL;
class CaseStudyService {
    getCaseStudies = () => {

        return axios.get(endpoint)
            .then((response) => {
                return response.data
        }).catch((error=> {
            return this.handleError(error)
        }))
    }


    // TODO: any additional methods as needed

    handleError(error) {
        // Error handling logic
        console.error("Request failed:", error);
        throw error;
    }
}

export default CaseStudyService;
