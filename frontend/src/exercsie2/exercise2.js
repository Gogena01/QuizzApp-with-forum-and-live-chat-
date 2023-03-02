import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';



class Exercise2 extends Component {
    //const[rightAnswer, setRightAnswer] = useState("FrontEnd");

    constructor(props) {
        super(props);
        this.state = { apiResponse: '' };
    }

    callAPI() {
        fetch('http://localhost:9000/Exercise2')
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err)
    }

    componentDidMount() {
        this.callAPI();
    }



    hint = () => {
        if (document.querySelector('.divHint').style.display == 'none') {
            document.querySelector('.divHint').style.display = 'block';
        } else {
            document.querySelector('.divHint').style.display = 'none';
        }
    }

    answer = () => {
        if (this.state.apiResponse.questionId !== undefined) {
            const index = this.state.apiResponse.questionId[this.state.apiResponse.questionId.length - 1];
            const index1 = this.state.apiResponse.questionId1[this.state.apiResponse.questionId.length - 1];


            if (document.querySelector('.answer').style.display == 'none') {
                if (this.state.apiResponse.answer[index].trim().toUpperCase() == document.querySelectorAll('input')[0].value.toUpperCase().trim() && this.state.apiResponse.answer[index1].trim().toUpperCase() == document.querySelectorAll('input')[1].value.toUpperCase().trim()) {
                    document.querySelector('.answer').style.display = 'block';
                    document.getElementById('answerH2').textContent = 'That\'s true'
                } else {
                    document.querySelector('.answer').style.display = 'block';
                    document.getElementById('answerH2').textContent = 'The answer is wrong';
                }
            } else {
                document.querySelector('.answer').style.display = 'none'
            }

        }
    }

    render() {

        console.log(this.state.apiResponse)
        return (

            <div className='main' >
                <h1>Create a variable called carName and assign the value Volvo to it.</h1>
                <div className='exercise'>
                    <div dangerouslySetInnerHTML={{ __html: this.state.apiResponse.question }} />
                    <br />
                    <Button onClick={this.hint}>Hint</Button>
                    <div className="divHint">
                        <p className='pResult'>{this.state.apiResponse.hint}</p>
                    </div>
                </div>
                <div className='answer'>
                    <p id='answerH2'></p>
                </div>

                <br />

                <Button className='button' onClick={this.answer}>Submit Answer</Button>
            </div>
        )
    }




};




export default Exercise2;