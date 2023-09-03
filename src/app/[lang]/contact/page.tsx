const fnCallJson = async () => {
	const response = await fetch('https://opentdb.com/api.php?amount=10');
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
		incorrect_answers: Array<string>;
	}[] = await fnCallJson();

	return (
		<main>
			{trivia.map((elm, idx) => (
				<div className='my-4' key={idx}>
					<p className='text-lg my-2'>{elm.question}</p>
					<p className='text-sm rounded-lg italic'>{elm.category}</p>
					<p className='text-xs text-gray-400'>{elm.correct_answer}</p>
					<p className='text-sm text-red-600'>{elm.difficulty}</p>
					<p>{elm.incorrect_answers.join(' - ')}</p>
					<p>{elm.type}</p>
				</div>
			))}
		</main>
	);
};
export default About;
