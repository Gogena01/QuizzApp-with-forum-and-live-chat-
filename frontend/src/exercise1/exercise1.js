import React, { Component} from 'react';
import { Navigate } from 'react-router-dom';
import './exercise.css';
import Button from 'react-bootstrap/esm/Button';
import firebase from 'firebase/compat/app';
//const button = document.createElement('button');
//button.remove();


class Exercise1 extends Component {
    //const[rightAnswer, setRightAnswer] = useState("FrontEnd");

    constructor(props) {
        super(props);
        this.state = {
            apiResponse: '',
            apiResponse2: '',
            exerciseId: this.props.exerciseId,
            isNext: false
        };

        this.isNextButtonClicked = false;
    }

    callAPI() {
        fetch('http://localhost:9000/exercises')
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err)
    }


    componentDidMount() {
        this.callAPI();

    }


    callNext() {
        if (this.isNextButtonClicked) {
            fetch(`http://localhost:9000/exercises/getNext/${this.state.exerciseId}`)
            .then(res => res.json())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err)
        }
    }

    handleNextButtonClick() {
        this.isNextButtonClicked = true;
        this.callNext();
    }



    hint = () => {
        if (document.querySelector('.divHint').style.display === 'none') {
            document.querySelector('.divHint').style.display = 'block';
        } else {
            document.querySelector('.divHint').style.display = 'none';
        }
    }

    answer = () => {
        if (this.state.apiResponse.questionId !== undefined) {
            const index = this.state.apiResponse.questionId[this.state.apiResponse.questionId.length - 1]

            if (document.querySelectorAll('input').length > 1) {
                const index0 = this.state.apiResponse.questionId[this.state.apiResponse.questionId.length - 1];
                const index1 = this.state.apiResponse.questionId1[this.state.apiResponse.questionId.length - 1];

                console.log(document.querySelectorAll('input')[0].value, document.querySelectorAll('input')[1].value)

                if (document.querySelector('.answer').style.display === 'none') {
                    if (this.state.apiResponse.answer[index0].trim().toUpperCase() === document.querySelectorAll('input')[0].value.toUpperCase().trim() && this.state.apiResponse.answer[index1].trim().toUpperCase() === document.querySelectorAll('input')[1].value.toUpperCase().trim()) {
                        document.getElementById('answerH2').textContent = 'That\'s true';
                        document.querySelector('.answer').style.display = 'block';
                        this.state.isNext = true;
                    } else {
                        document.getElementById('answerH2').textContent = 'The answer is wrong';
                        document.querySelector('.answer').style.display = 'block';
                    }
                } else {
                    document.querySelector('.answer').style.display = 'none';
                }

            } else {
                if (document.querySelector('.answer').style.display === 'none') {
                    if (this.state.apiResponse.answer[index].trim().toUpperCase() === document.querySelector('input').value.toUpperCase().trim()) {
                        document.querySelector('.answer').style.display = 'block';
                        document.getElementById('answerH2').textContent = 'That\'s true'
                        document.querySelector('.answer').className = 'answer true'
                        this.state.isNext = true;
                    } else {
                        document.querySelector('.answer').style.display = 'block';
                        document.getElementById('answerH2').textContent = 'The answer is wrong';
                        document.querySelector('.answer').className = 'answer false'
                    }
                } else {
                    document.querySelector('.answer').style.display = 'none';
                }
            }




            /*if (document.querySelector('.true') !== undefined) {
                button.textContent = 'Next question';
                document.querySelector('.answer').appendChild(button)
                button.style.marginLeft = '70px';
                button.style.marginTop = '30px';
                button.className = 'next';
                this.state.isNext = true;

            } else {
                button.remove();
            }*/

            if (this.state.isNext === true) {
                document.querySelector('.next').addEventListener('click',() => {
                    this.handleNextButtonClick();
                    this.state.isNext = false;
                    document.querySelector('.answer').style.display = 'none'
                } 
            
            )}


        }


    }






    render() {
        const currUser = firebase.auth().currentUser;
        console.log(currUser.length)
        
        if (!currUser) {
            return <Navigate to='/login' />;
        }
        

        
        return (
            <div className='main'>
                <h1>Fill the blanks with the right answer</h1>
                <div className='exercise'>
                    <h2>{this.state.apiResponse.description ? this.state.apiResponse.description : null }</h2>
                    <div dangerouslySetInnerHTML={{ __html: this.state.apiResponse.question }} />
                    <br />
                    <Button onClick={this.hint} style={{ width: '120px' }}>Hint</Button>
                    <div className="divHint">
                        <p style={{ fontSize: '20px', position: 'center' }}>{this.state.apiResponse.hint}</p>
                    </div>
                </div>
                <div className='answer'>
                    <p id='answerH2'></p>
                </div>
                <br />
                <Button className='button' onClick={this.answer}>Submit Answer</Button>
                <Button className='next' style={{ marginLeft: '50px', marginRight: '30px' }}>Next Question</Button>
            </div>
        );
    }
    




};





export default Exercise1;