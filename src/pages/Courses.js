import { Fragment } from 'react';
import CourseCard from '../components/CourseCard';
import coursesData from '../data/coursesData';


export default function Courses() {

	// console.log(coursesData);
	// console.log(coursesData[0]);

	const courses = coursesData.map(course => {
		return (
			<CourseCard  key={course.id} courseProp={course} />
		)
	})

	return (
		<Fragment>
			<h1>Courses</h1>
			{courses}
		</Fragment>

	)
}