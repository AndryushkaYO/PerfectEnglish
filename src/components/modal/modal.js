import React from 'react';
import * as ReactDOM from "react-dom";
import PropTypes from 'prop-types';

/* TODO mb edit "withStyles" */
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import './modal.scss';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 70,
    height: '450px',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  modalHeaderBlock1: {
    width: '100px',
    backgroundColor: '#67d440'
  },
  modalHeaderBlock2: {
    width: '80px',
    backgroundColor: '#4ebf49'
  },
  modalHeaderBlock3: {
    width: '30px',
    borderRadius: '0 5px 5px 0',
    backgroundColor: '#87ec37'
  }
});

/* TODO delete data */
let data = [{
  questionID: '1',
  typeID: '1',
  question: `Give yourself a _____ and get some rest.`,
  rightAnswer: 'break',
  answerA: 'brake',
  answerB: 'broke',
  answerC: 'broken'
}, {
  questionID: '2',
  typeID: '1',
  question: `Solomiia a _____ sweat girl!`,
  rightAnswer: 'Yes',
  answerA: 'No',
  answerB: 'Yes',
  answerC: 'Yes'
},{
  questionID: '3',
    typeID: '2',
    url: 'https://www.youtube.com/watch?v=lTTajzrSkCw',
    question: `Which emotion did rabbit feel in the end of the video? `,
    rightAnswer: 'WTF!?',
    answerA: 'happiness',
    answerB: 'joyness',
    answerC: 'pleasure'
  },
  {
    questionID: '4',
    typeID: '3',
    url: 'http://basicenglishspeaking.com/wp-content/uploads/2016/audio/100/098-04.mp3',
    question: `Please write what you've heard in the audio.`,
    rightAnswer: 'You are not to take photos in the museum'
  },{
    questionID: '5',
    typeID: '3',
    url: 'http://basicenglishspeaking.com/wp-content/uploads/2016/audio/100/095-03.mp3',
    question: `Please write what you've heard in the audio.`,
    rightAnswer: 'Whether or not we like it, we have to accept it'
  },
  {
    questionID: '6',
    typeID: '2',
    url: 'https://www.youtube.com/watch?v=NWTRQFLk2Ew',
    question: `Where were the keys? `,
    rightAnswer: 'In the door',
    answerA: 'At the table',
    answerB: 'In the garden',
    answerC: 'Don\'t know'
  }
];

let rightQuestions = 0;

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

/* TODO move to new file */
function ModalType1(props) {
  let quizQuestion = React.createRef();

  let setQuestionText = text => {
    quizQuestion.current.textContent = text;
  };

  let checkQuestion = (e) => {
    if (props.content.rightAnswer === e.target.textContent) {
      /* TODO add stopPropagation or some stop, need +1 */
      rightQuestions++;
      console.log(`Right Answer! Count of right questions: ${rightQuestions}.`);
    } else {
      console.log('Wrong Answer!');
    }

    setQuestionText(props.content.question.replace('_____', e.target.textContent));
  };

  return (
    <div className={'modal__quiz-content'}>
      <p className={'modal__quiz-question'} ref={quizQuestion}>
        {props.content.question}
      </p>

      <hr className={'modal__horizontal-line'}/>

      <div className={'modal__quiz-answers'}>
        <Button className={'modal__quiz-answer-button'}
                onClick={checkQuestion}>{props.content.rightAnswer}</Button>
        <Button className={'modal__quiz-answer-button'}
                onClick={checkQuestion}>{props.content.answerA}</Button>
        <Button className={'modal__quiz-answer-button'}
                onClick={checkQuestion}>{props.content.answerB}</Button>
        <Button className={'modal__quiz-answer-button'}
                onClick={checkQuestion}>{props.content.answerC}</Button>
      </div>
    </div>
  )
}

let randomQuestion = (data) => {
  let minID = 1;
  let maxID = data.length + 1;
  let randomNumber = Math.floor(Math.random() * (+maxID - +minID)) + +minID;

  /* TODO del */
  console.log(`Random data question:`);
  console.log(data[randomNumber - 1]);
  return data[randomNumber - 1];
};

function renderQuestion(data) {
  return <ModalType1 content={data}/>
}

class SimpleModal extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
      text: []
    }
  }

  state = {
    open: false
  };

  questionCount = 1;

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  test = () => {
    let obj = randomQuestion(data);
    const myNode = this.myRef.current;

    ReactDOM.unmountComponentAtNode(myNode);
    ReactDOM.render(renderQuestion(obj), document.getElementById('modal__quiz-content'));
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={'quiz'}>
        <Button className={'quiz__start-button'} onClick={this.handleOpen} variant="contained" color="primary">
          Почати тест
        </Button>

        <Modal open={this.state.open} onClose={this.handleClose}>
          {/* TODO mb edit class type */}
          <div className={classes.paper} style={getModalStyle()}>
            <div className={'modal__header'}>
              <span className={'modal__header-title'}>Testimonial</span>
              <div className={classes.modalHeaderBlock1}/>
              <div className={classes.modalHeaderBlock2}/>
              <div className={classes.modalHeaderBlock3}/>
            </div>

            <div className={'modal__quiz-container'}>
              <div className={'modal__quiz-header'}>
                <span className={'modal__quiz-question-count'}>{this.questionCount}/20</span>
              </div>

              <div id={'modal__quiz-content'} ref={this.myRef}>
                {renderQuestion(randomQuestion(data))}
              </div>

              <Button className={'modal__quiz-next-button'} onClick={this.test}>Далі</Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};

const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;