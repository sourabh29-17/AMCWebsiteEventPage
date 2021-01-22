
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

// var NewComponent = React.createClass(

     function Cards() {
      return (
        <div>
          <div className="heading">
            <h1>EVENTS</h1>
            <div className="underline"></div>
          </div>
          <div className="event-card">
            <div className="meta">
              <div className="photo" style={{backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)'}} />
              <ul className="details">
                <li className="item1"><a href="#">John Doe</a></li>
                <li className="item2"><a href="#">Aug. 24, 2015</a></li>
                <li className="tags">
                  <ul>
                    <li><a href="#">Learn</a></li>
                    <li><a href="#">Code</a></li>
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="description">
              <h1>Learning to Code</h1>
              <h2>Opening a door to the future</h2>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
              
            </div>
          </div>
          <div className="event-card alt">
            <div className="meta">
              <div className="photo" style={{backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)'}} />
              <ul className="details">
                <li className="item1"><a href="#">Jane Doe</a></li>
                <li className="item2"><a href="#">July. 15, 2015</a></li>
                <li className="tags">
                  <ul>
                    <li><a href="#">Learn</a></li>
                    <li><a href="#">Code</a></li>
                    <li><a href="#">JavaScript</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="description">
              <h1>Mastering the Language</h1>
              <h2>Java is not the same as JavaScript</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
              
            </div>
          </div>
          <div className="event-card">
            <div className="meta">
              <div className="photo" style={{backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)'}} />
              <ul className="details">
                <li className="item1"><a href="#">John Doe</a></li>
                <li className="item2"><a href="#">Aug. 24, 2015</a></li>
                <li className="tags">
                  <ul>
                    <li><a href="#">Learn</a></li>
                    <li><a href="#">Code</a></li>
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="description">
              <h1>Learning to Code</h1>
              <h2>Opening a door to the future</h2>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
             
            </div>
          </div>
        </div>
      );
    }


  export default Cards;