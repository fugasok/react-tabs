import { useEffect, useState } from "react";
import Jobinfo from "./Jobinfo";
import BtnContainer from "./BtnContainer";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	const [currentItem, setCurrentItem] = useState(1);
	//currentItem

	const fetchJobs = async () => {
		const response = await fetch(url);
		const newJobs = await response.json();
		setJobs(newJobs);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	if (isLoading) {
		return (
			<section className="jobs-center">
				<div className="loading"></div>
			</section>
		);
	}

	return (
		<section className="jobs-center">
			<BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
			<Jobinfo jobs={jobs} currentItem={currentItem} />
		</section>
	);
};
export default App;
