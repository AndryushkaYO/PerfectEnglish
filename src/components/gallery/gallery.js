import React, { Component } from 'react';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "../../styles/gallery.css";
import ImageGallery from 'react-image-gallery';
import girl from '../../img/gallery/girl.png';
import boy from '../../img/gallery/boy.png';
const images = [
    {
        original: 'http://study.com/cimages/course-image/gace-english-practice-study-guide_181464_large.jpg',
        thumbnail: 'http://study.com/cimages/course-image/gace-english-practice-study-guide_181464_large.jpg'
      },
      {
      original: 'https://www.cranbrookcollege.com/wp-content/uploads/2017/09/words_800.jpg.pagespeed.ce_.u6XuaHe5fU.jpg',
      thumbnail: 'https://www.cranbrookcollege.com/wp-content/uploads/2017/09/words_800.jpg.pagespeed.ce_.u6XuaHe5fU.jpg',
    },
    {
      original: 'https://taqoh.com/wp-content/uploads/2017/10/english5.jpeg',
      thumbnail: 'https://taqoh.com/wp-content/uploads/2017/10/english5.jpeg'
    },
    {
      original: 'https://cdn.japantimes.2xx.jp/wp-content/uploads/2017/10/p7-Ishikura-a-20171009-870x580.jpg',
      thumbnail: 'https://cdn.japantimes.2xx.jp/wp-content/uploads/2017/10/p7-Ishikura-a-20171009-870x580.jpg'
    },
    {
      original: 'https://mythgyaan.com/wp-content/uploads/2018/10/English-flow-1.jpg',
      thumbnail: 'https://mythgyaan.com/wp-content/uploads/2018/10/English-flow-1.jpg'
    },
    {
      original: 'https://cdn.static-economist.com/sites/default/files/20170805_USP511.jpg',
      thumbnail: 'https://cdn.static-economist.com/sites/default/files/20170805_USP511.jpg'
    },
    {
      original: 'https://www.kaplaninternational.com/blog/files/styles/max_1300x1300/public/2018-02/Do%20you%20speak%20english.jpg?itok=FZoz74oa',
      thumbnail: 'https://www.kaplaninternational.com/blog/files/styles/max_1300x1300/public/2018-02/Do%20you%20speak%20english.jpg?itok=FZoz74oa'
    }

  ]
class Gallery extends Component {
    render() {
        return (
        <div >
            <h1></h1>
            <div id='gallery'>
            <img src={girl} className="girl"/>
            <img src={boy} className="boy"/>
            <ImageGallery items={images} />
            </div>
          </div>);
    }
}

export default Gallery;