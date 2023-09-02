const fnCallJson = async () => {
	const response = await fetch('https://opentdb.com/api.php?amount=10', {});
	const result = await response.json();
	return result.results;
};

const About = async () => {
	const trivia: {
		category: string;
		type: string;
		difficulty: string;
		question: string;
		correct_answer: string;
		incorrect_answers: string;
	}[] = await fnCallJson();

	return (
		<main>
			{trivia.map(elm => (
				<>
					<p className='text-lg'>{elm.question}</p>
					<p>{elm.category}</p>
					<p>{elm.correct_answer}</p>
					<p>{elm.difficulty}</p>
					<p>{elm.incorrect_answers}</p>
					<p>{elm.type}</p>
				</>
			))}
		</main>
	);
};
export default About;
