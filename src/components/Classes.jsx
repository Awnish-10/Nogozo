import { StarOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import ClassDisplay from './ClassDisplay';
import CourseDisplay from './CourseDisplay';

function Classes() {
	const classData = [
		{ title: '9', desc: 'class IX' },
		{ title: '10', desc: 'class X' },
		{ title: '11', desc: 'class XI' },
		{ title: '12', desc: 'class XII' },
		{ title: 'pre', desc: 'class 1-8' },
	];
	const courseData = [
		{ title: 'IIT', desc: 'IIT JEE' },
		{ title: 'NEET', desc: 'NEET' },
		{ title: 'ICSE', desc: 'ICSE' },
		{ title: 'GOVT', desc: 'GOVT' },
		{ title: 'ENGG.', desc: 'ENGG' },
	];
	return (
		<Wrapper>
			<ClassItem>
				{classData.map((item) => {
					return <ClassDisplay title={item.title} desc={item.desc} />;
				})}
			</ClassItem>
			<Courses>
				{courseData.map((item) => {
					return <CourseDisplay title={item.title} desc={item.desc} />;
				})}
			</Courses>
		</Wrapper>
	);
}

export default Classes;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ClassItem = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 30px;
	margin-bottom: 10px;
`;

const Courses = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;
