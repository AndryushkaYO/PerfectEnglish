import React from 'react';
import * as ReactDOM from "react-dom";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import "../../styles/video-react.css";
import "../../styles/video-audio.css";
import { Player } from 'video-react';
import ReactAudioPlayer from 'react-audio-player';

import './modal.scss';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: '620px',
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
  answerC: 'broken',
  scores: 5
}, {
  questionID: '2',
  typeID: '1',
  question: `Sorry, but this chair is _____.`,
  rightAnswer: 'mine',
  answerA: 'me',
  answerB: 'my',
  answerC: 'our',
  scores: 5
}, {
  questionID: '3',
  typeID: '2',
  url: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
  question: `Which emotion did rabbit feel in the end of the video?`,
  rightAnswer: 'Fear',
  answerA: 'Happiness',
  answerB: 'Joynes',
  answerC: 'Pleasure',
  scores: 5
},  {
  questionID: '4',
  typeID: '1',
  question: `I _____ to the cinema.`,
  rightAnswer: 'don\'t usually go',
  answerA: 'usually don\'t go',
  answerB: 'don\'t go usually',
  answerC: 'do not go usually',
  scores: 5
}, {
  questionID: '5',
  typeID: '3',
  url: 'http://www.talkenglish.com/audio871/audiote1/l23/practice/l23p2.mp3',
  question: `What movie do these people plan on watching?`,
  rightAnswer: 'Lord of the Rings',
  answerA: 'Matrix Revolution',
  answerB: 'The Two Towers',
  answerC: 'The Last Samurai',
  scores: 5
}, {
  questionID: '6',
  typeID: '3',
  url: 'http://www.talkenglish.com/audio871/audiote1/l23/practice/l23p4.mp3',
  question: `What do they plan on doing before the movie?`,
  rightAnswer: 'Eat Lunch',
  answerA: 'Play pool',
  answerB: 'Eat Dinner',
  answerC: 'Nothing',
  scores: 5
}, {
  questionID: '7',
  typeID: '3',
  url: 'http://www.talkenglish.com/audio871/audiote1/l26/practice/l26p2.mp3',
  question: `Why does this person not like horror movies?`,
  rightAnswer: 'Stupid and childish',
  answerA: 'Too scary',
  answerB: 'Too boring',
  answerC: 'Predictable and obvious',
  scores: 5
}, {
  questionID: '8',
  typeID: '3',
  url: 'http://www.talkenglish.com/audio871/AudioTE1/L26/practice/L26P3.mp3',
  question: `When are they going to see the movie?`,
  rightAnswer: 'Tomorrow after class',
  answerA: 'On the weekend after lunch',
  answerB: 'Next week after the final exams',
  answerC: 'On Friday after class',
  scores: 5
}, {
  questionID: '9',
  typeID: '3',
  url: 'http://www.talkenglish.com/audio871/AudioTE1/L31/practice/L31P3.mp3',
  question: `What was his favorite class?`,
  rightAnswer: 'Business communication',
  answerA: 'Biology',
  answerB: 'Chemistry',
  answerC: 'Philosophy',
  scores: 5
}, {
  questionID: '10',
  typeID: '1',
  question: `The test is _____ February.`,
  rightAnswer: 'in',
  answerA: 'at',
  answerB: 'on',
  answerC: 'over',
  scores: 5
}, {
  questionID: '11',
  typeID: '1',
  question: `I don't have _____ free time.`,
  rightAnswer: 'any',
  answerA: 'many',
  answerB: 'a lot',
  answerC: 'some',
  scores: 5
}, {
  questionID: '12',
  typeID: '1',
  question: `We went to the market _____ some vegetables.`,
  rightAnswer: 'to buy',
  answerA: 'for buy',
  answerB: 'for to buy',
  answerC: 'for buying',
  scores: 5
}, {
  questionID: '13',
  typeID: '1',
  question: `_____ are very friendly and very intelligent.`,
  rightAnswer: 'Dolphins',
  answerA: 'The dolphins',
  answerB: 'A dolphin',
  answerC: 'The dolphin',
  scores: 5
}, {
  questionID: '14',
  typeID: '1',
  question: `I couldn't eat _____ before the exam.`,
  rightAnswer: 'anything',
  answerA: 'nothing',
  answerB: 'everything',
  answerC: 'something',
  scores: 5
}, {
  questionID: '15',
  typeID: '1',
  question: `I'll call you when I _____ home.`,
  rightAnswer: 'arrive',
  answerA: '\'m going to arrive',
  answerB: 'will arrive',
  answerC: 'arrived',
  scores: 5
}, {
  questionID: '16',
  typeID: '2',
  url: 'https://r12---sn-3c27sn7s.googlevideo.com/videoplayback?id=o-AIzTXhDrgpjRV32Gydysc2WPRluZGmmqNtuIcSu1mnbv&itag=18&source=youtube&requiressl=yes&pl=20&ei=prXjXKfzHM_k1gbkx4T4Bg&mime=video%2Fmp4&gir=yes&clen=2250484&ratebypass=yes&dur=52.152&lmt=1540063170632823&fvip=4&beids=9466586&c=WEB&txp=5431432&ip=51.75.151.160&ipbits=0&expire=1558448646&sparams=clen,dur,ei,expire,gir,id,ip,ipbits,ipbypass,itag,lmt,mime,mip,mm,mn,ms,mv,nh,pl,ratebypass,requiressl,source&signature=458CA92D3A300E127E97947F952BDC4B3894556D.29287C8181F9266CA70E0A68654CC088454CF1C2&key=cms1&video_id=s4OpGYSLsws&title=Learn+English+-+numbers+0-20+-++Speak+English%2C+Learn+English%2C&rm=sn-4g5ede7z,sn-foxu-3c2l7l&fexp=9466586&req_id=4b523d217880a3ee&ipbypass=yes&mip=217.20.186.33&redirect_counter=2&cms_redirect=yes&mm=29&mn=sn-3c27sn7s&ms=rdu&mt=1558427025&mv=m&nh=IgpwcjAyLmticDAyKgkxMjcuMC4wLjE',
  question: `Where were the keys? `,
  rightAnswer: 'In the door',
  answerA: 'At the table',
  answerB: 'In the garden',
  answerC: 'Don\'t know',
  scores: 5
}];

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

let quizQuestion = React.createRef();
let scores = 0;

function ModalType1(props) {
  let setQuestionText = text => {
    quizQuestion.current.textContent = text;
  };

  let checkQuestion = (e) => {
    if (props.content.rightAnswer === e.target.textContent) {
      rightQuestions++;
      scores += 5;
      console.log(`Right Answer! Count of right questions: ${rightQuestions}.`);
    } else {
      console.log('Wrong Answer!');
    }

    setQuestionText(props.content.question.replace('_____', e.target.textContent));

    e.target.className = 'clicked-button';
    if (e.target.parentNode.className.match('button')) {
      e.target.parentNode.className = 'clicked-button';
    }
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

function ModalType2(props) {
  let checkQuestion = (e) => {
    if (props.content.rightAnswer === e.target.textContent) {
      rightQuestions++;
      scores += 5;
      console.log(`Right Answer! Count of right questions: ${rightQuestions}.`);
    } else {
      console.log('Wrong Answer!');
    }

    e.target.className = 'clicked-button';
    if (e.target.parentNode.className.match('button')) {
      e.target.parentNode.className = 'clicked-button';
    }
  };

  return (
    <div className={'modal__quiz-content'}>
      <p className={'modal__quiz-question'} ref={quizQuestion}>
        {props.content.question}
      </p>

      <div id="video-player">
        <Player
          playsInline
          poster="/assets/poster.png"
          src={props.content.url}/>
      </div>
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

function ModalType3(props) {
  let checkQuestion = (e) => {
    if (props.content.rightAnswer === e.target.textContent) {
      rightQuestions++;
      scores += 5;
      console.log(`Right Answer! Count of right questions: ${rightQuestions}.`);
    } else {
      console.log('Wrong Answer!');
    }

    e.target.className = 'clicked-button';
    if (e.target.parentNode.className.match('button')) {
      e.target.parentNode.className = 'clicked-button';
    }
  };

  return (
    <div className={'modal__quiz-content'}>
      <p className={'modal__quiz-question'} ref={quizQuestion}>
        {props.content.question}
      </p>

      <ReactAudioPlayer
        src={props.content.url}
        autoPlay
        controls
      />

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

  console.log(`randomQuestion(data) -> data[randomNumber]:`);
  console.log(data[randomNumber - 1]);
  return data[randomNumber - 1];
};

let renderQuestion = (data) => {
  if (+data.typeID === 1) {
    return <ModalType1 content={data}/>
  } else if (+data.typeID === 2) {
    return <ModalType2 content={data}/>
  } else if (+data.typeID === 3) {
    return <ModalType3 content={data}/>
  }
};

function quizResult(countOfQuestions, countOfRightQuestions) {
  let level = '';
  if (scores <= 25) {
    level = 'A1 (Beginner)';
  } else if (scores <= 40) {
    level = 'A2 (Elementary English)';
  } else if (scores <= 55) {
    level = 'B1 (Intermediate English)';
  } else if (scores <= 75) {
    level = 'B2 (Upper-Intermediate)';
  } else if (scores <= 90) {
    level = 'C1 (Advanced English)';
  } else if (scores === 95) {
    level = 'C2 (Proficiency)';
  }

  return (
    <div className={'quiz-result'}>
      <p className={'quiz-result__title'}>Ви відповіли на всі питання, ваш результат:</p>
      <p className={'quiz-result__details'}>{countOfRightQuestions} з {countOfQuestions}</p>
      <p className={'quiz-result__level'}>{level}</p>
    </div>
  )
}

class SimpleModal extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.quizQuestionCount = React.createRef();

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

  nextQuestion = () => {
    let obj = randomQuestion(data);
    const myNode = this.myRef.current;

    if (this.questionCount < 20) {
      this.questionCount++;
      let render = `${this.questionCount}/20`;
      ReactDOM.unmountComponentAtNode(this.quizQuestionCount.current);
      ReactDOM.render(render, document.getElementById('modal__quiz-question-count'));
      ReactDOM.unmountComponentAtNode(myNode);
      ReactDOM.render(renderQuestion(obj), document.getElementById('modal__quiz-content'));
    } else {
      ReactDOM.unmountComponentAtNode(myNode);
      ReactDOM.render(quizResult(this.questionCount, rightQuestions), document.getElementById('modal__quiz-content'));
    }
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={'quiz'}>
        <Button className={'quiz__start-button'} onClick={this.handleOpen} variant="contained" color="primary">
          Почати тест
        </Button>

        <Modal open={this.state.open} onClose={this.handleClose}>
          <div className={classes.paper} style={getModalStyle()}>
            <div className={'modal__header'}>
              <span className={'modal__header-title'}>Тестування</span>
              <div className={classes.modalHeaderBlock1}/>
              <div className={classes.modalHeaderBlock2}/>
              <div className={classes.modalHeaderBlock3}/>
            </div>

            <div className={'modal__quiz-container'}>
              <div className={'modal__quiz-header'}>
                <span id={'modal__quiz-question-count'} ref={this.quizQuestionCount}>{this.questionCount}/20</span>
              </div>

              <div id={'modal__quiz-content'} ref={this.myRef}>
                {renderQuestion(randomQuestion(data))}
              </div>

              <Button className={'modal__quiz-next-button'} onClick={this.nextQuestion}>Далі</Button>
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
