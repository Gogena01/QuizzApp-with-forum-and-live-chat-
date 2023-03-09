import React, { useState, useEffect } from 'react';
import './stepsToSuccess.css'

const Quiz = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [data, setData] = useState('');
    const [questionOne, setQuestionOne] = useState('');
    const [questionTwo, setQuestionTwo] = useState('');
    const [questionThree, setQuestionThree] = useState('');
    const [questionFour, setQuestionFour] = useState('');
    const [questionFive, setQuestionFive] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let score = 0;
        if (questionOne === 'a') {
            score += 1;
        }
        if (questionTwo === 'c') {
            score += 1;
        }
        if (questionThree === 'b') {
            score += 1;
        }
        if (questionFour === 'd') {
            score += 1;
        }
        if (questionFive === 'c') {
            score += 1;
        }
        if (score === 0) {
            setResult(`Sorry based on your responses, it seems like you may not be a good fit for any programming language.`);
        } else if (score <= 2) {
            setResult(`Based on your responses, you might enjoy learning Python.`);
        } else if (score <= 4) {
            setResult(`Based on your responses, you might enjoy learning Java.`);
        } else {
            setResult(`Based on your responses, you might enjoy learning JavaScript.`);
        }

    };


    useEffect(() => {
        fetch('http://localhost:9000/quest/langquest')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);



    const getNext = async () => {
        fetch(`http://localhost:9000/quest/langquest/${data.id}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error))
    }

    return (
        <div className='findLang'>
            <form onSubmit={handleSubmit}>
                <h1>Which programming language would suit you the best?</h1>
                {data.id === 1 && (
                    <>

                        <p style={{ fontSize: "30px", fontWeight: "700" }}>
                            {data && data.question}
                        </p>
                        <label className="lab">
                            a) {data && data.answers[0]}
                            <input
                                type="radio"
                                name="question-one"
                                value="a"
                                onChange={(e) => setQuestionOne(e.target.value)}
                            />
                        </label>
                        <br />
                        <label className="lab">
                            b) {data && data.answers[1]}
                            <input
                                type="radio"
                                name="question-one"
                                value="b"
                                onChange={(e) => setQuestionOne(e.target.value)}
                            />
                        </label>
                        <br />
                        <label className="lab">
                            c) {data && data.answers[2]}
                            <input
                                type="radio"
                                name="question-one"
                                value="c"
                                onChange={(e) => setQuestionOne(e.target.value)}
                            />
                        </label>
                        <br />
                        <label className="lab">
                            d) {data && data.answers[3]}
                            <input
                                type="radio"
                                name="question-one"
                                value="d"
                                onChange={(e) => setQuestionOne(e.target.value)}
                            />
                        </label>
                        {/* render other answer options */}

                    </>
                )
                }
                {
                    data.id === 2 && (
                        <>

                            <p style={{ fontSize: "30px", fontWeight: "700" }}>
                                {data && data.question}
                            </p>
                            <label className="lab">
                                a) {data && data.answers[0]}
                                <input
                                    type="radio"
                                    name="question-two"
                                    value="a"
                                    onChange={(e) => setQuestionTwo(e.target.value)}
                                />
                            </label>
                            <label className="lab">
                                b) {data && data.answers[1]}
                                <input
                                    type="radio"
                                    name="question-one"
                                    value="b"
                                    onChange={(e) => setQuestionTwo(e.target.value)}
                                />
                            </label><label className="lab">
                                c) {data && data.answers[2]}
                                <input
                                    type="radio"
                                    name="question-one"
                                    value="c"
                                    onChange={(e) => setQuestionTwo(e.target.value)}
                                />
                            </label>
                            <label className="lab">
                                d) {data && data.answers[3]}
                                <input
                                    type="radio"
                                    name="question-one"
                                    value="d"
                                    onChange={(e) => setQuestionTwo(e.target.value)}
                                />
                            </label>

                        </>
                    )
                }
                <hr></hr>
                <button type='submit'>Find out</button>
            </form>
            <br />
            <button onClick={getNext}>Next question</button>
            <p>{result}</p>
        </div >
    )


}




export default Quiz
