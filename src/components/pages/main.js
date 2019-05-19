import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import Footer from '../footer/footer'
import './main.scss';

const content = [
  {
    title: '',
    description: '',
    button: '',
    image: 'https://i.imgur.com/fTcXkyL.jpg'
  },
  {
    title: 'Слайд 2',
    description: 'Опис слайду.',
    button: '',
    image: ''
  }
];

class Main extends Component {
  render() {
    return (
      <div className={'main-page'}>
        <Slider>
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{background: `url('${item.image}') no-repeat center center`}}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>

        <main className={'main'}>
          <div className={'main__why-blocks-wrapper'}>
            <h1 className={'main__why-blocks-title'}>Кому це потрібно?</h1>
            <div className={'main__why-blocks-container'}>
              <WhyBlock title={'Хто прагне кращої роботи'}
                        text={'У сучасному світі знайти високооплачувану роботу без знання англійської - дуже важко.'}/>
              <WhyBlock title={'Хто любить подорожувати'}
                        text={'Практично в усіх куточках земної кулі вас зрозуміють, якщо ви розмовляєте англійською.'}/>
              <WhyBlock title={'Хто готується до тестів'}
                        text={'Міжнародні та українські тести з англійської. IELTS, TOEFL, ЗНО - ми підготуємо вас до будь яких тестів.'}/>
              <WhyBlock title={'Хто хоче вести бізнес з іноземцями'}
                        text={'Можливості для бізнесу в епоху Інтернету - безмежні. Все, що вас стримує - це недостатній рівень англійської. Ми це виправимо.'}/>
              <WhyBlock title={'Хто піклується про свою дитину'}
                        text={'Привчіть дитину до англійської змалку. Це найкраща інвестиція у її майбутнє, яку ви можете їй дати.'}/>
              <WhyBlock title={'Хто любить розвиватись'}
                        text={'Ви любите відкривати для себе щось нове. Англійська - це основа. Вивчіть її і перед вами відкриється безліч можливостей.'}/>
            </div>
          </div>

          <div className={'main__start-quiz'}>
            <TitleWithParagraph title={'Не знаєш який в тебе рівень знань?'}
                                paragraph={'Пройди тест та визнач свій рівень англійської за 5 хв.'}/>
            <button className={'main__button'}>Пройти</button>
          </div>

          <div className={'main__why-blocks-wrapper'}>
            <h1 className={'main__why-blocks-title'}>Наші переваги</h1>
            <div className={'main__why-blocks-container'}>
              <WhyBlock title={'Персоналізоване навчання'}
                        text={'Заняття адаптуються до стилю навчання кожного учня. Вправи розроблені так, щоб ви могли ефективніше вивчати нові слова й закріплювати вже наявний словниковий запас.'}/>
              <WhyBlock title={'Миттєве оцінювання знань'}
                        text={'Інтерактивні вправи дають змогу миттєво побачити результат, тому ви зможете швидко вдосконалювати свої знання з англійської мови.'}/>
              <WhyBlock title={'Мотивація за допомогою нагород'}
                        text={'Заробляйте віртуальні монети, розблоковуйте нові рівні та стежте за покращенням свого рівня володіння мовою, вивчаючи нові слова, фрази й граматичні правила.'}/>
              <WhyBlock title={'Швидко підвищуйте свій рівень'}
                        text={'Ефективність доведено. Дослідження показало, що...'}/>
            </div>
          </div>

          {/* TODO: change */}
          <div className={'test'}>
            <TitleWithParagraph title={'Почни навчання зараз!'}
                                paragraph={'Спробуй пройти короткий тест, щоб визначити свій рівень англійської.'}/>
            <button className={'main__button'}>Почати</button>
          </div>
        </main>

        <Footer/>
      </div>
    );
  }
}

function WhyBlock(props) {
  return <div className={'main__why-block'}>
    <h2>{props.title}</h2>
    <p>{props.text}</p>
  </div>;
}

// TODO: class in component?
function TitleWithParagraph(props) {
  return <div className={'main__title-with-paragraph'}>
    <h1>{props.title}</h1>
    <p>{props.paragraph}</p>
  </div>;
}

export default Main;
