import React, { Component } from 'react';
import Modal from './../../Modal/Modal';

import './QuizPage.scss';
import Header from '../../Header/Header';
import Footer from "../../Footer/Footer";


class QuizPage extends Component {
  render() {
    return <div>
      <Header/>
      <Introduce/>
      <Footer/>
    </div>
  }
}

function Introduce() {
  return <div>
    <div className={'introduce'}>
      <div>
        <h1 className={'introduce__title'}>Безкоштовний тест для перевірки англійської мови</h1>
        <p className={'introduce__paragraph'}>Пройдіть безкоштовний онлайн тест з англійської мови, щоб дізнатися свій рівень і знайти відповідні навчальні матеріали.</p>
        <p className={'introduce__paragraph'}>Під час тесту вам буде запропоновано 20 запитань – уважно читайте та думайте, перш ніж відповісти. Після кожного запитання вам потрібно вказати рівень впевненості у відповіді.</p>
        <p className={'introduce__paragraph'}>Коли ви закінчите тест, ви дізнаєтеся свій приблизний рівень англійської мови. Потім ви можете знайти матеріали на веб-сайті за рівнем або за тематикою.</p>
      </div>

      <Modal className={'introduce__button'} open={false}>
        some
      </Modal>
    </div>
  </div>
}

export default QuizPage;
