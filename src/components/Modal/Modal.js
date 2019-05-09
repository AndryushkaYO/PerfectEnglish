import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import './Modal.scss';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    height: '350px',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  modalHeaderBlock1: {
    width: '90px',
    backgroundColor: '#67d440'
  },
  modalHeaderBlock2: {
    width: '70px',
    backgroundColor: '#4ebf49'
  },
  modalHeaderBlock3: {
    width: '20px',
    borderRadius: '0 5px 5px 0',
    backgroundColor: '#87ec37'
  }
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

class SimpleModal extends React.Component {
  constructor(props) {
    super(props);

    this.quizQuestion = React.createRef();

    this.setText = text => {
      this.quizQuestion.current.textContent = text;
    }
  }

  rightQuestions = 0;
  questionCount = 1;

  data = [{
    questionID: '1',
    typeID: '1',
    question: `Give yourself a _____ and get some rest.`,
    rightAnswer: 'break',
    answerA: 'brake',
    answerB: 'broke',
    answerC: 'broken'
  }];

  state = {
    open: false,
    text: ''
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  checkQuestion = (e) => {
    this.data[0].question.replace('_____', e.target.textContent);
    let q = this.data[0].question.replace('_____', e.target.textContent);

    this.setState({
      text: this.quizQuestion.current.textContent.replace('_____', e.target.textContent)
    });

    this.setText(q);

    if (this.data[0].rightAnswer === e.target.textContent) {
      this.rightQuestions++;
      console.log(`Right Answer! Count of right questions: ${this.rightQuestions}.`);
    } else {
      console.log('Wrong Answer!');
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

              <div className={'modal__quiz-content'}>
                <p className={'modal__quiz-question'} ref={this.quizQuestion}>
                  {/* TODO random i! to edit! */}
                  {this.data[0].question}
                </p>

                <hr className={'modal__horizontal-line'}/>

                <div className={'modal__quiz-answers'}>
                  <Button className={'modal__quiz-answer-button'}
                          onClick={this.checkQuestion}>{this.data[0].rightAnswer}</Button>
                  <Button className={'modal__quiz-answer-button'}
                          onClick={this.checkQuestion}>{this.data[0].answerA}</Button>
                  <Button className={'modal__quiz-answer-button'}
                          onClick={this.checkQuestion}>{this.data[0].answerB}</Button>
                  <Button className={'modal__quiz-answer-button'}
                          onClick={this.checkQuestion}>{this.data[0].answerC}</Button>
                </div>
              </div>

              <button className={'modal__quiz-next-button'}>Далі</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
