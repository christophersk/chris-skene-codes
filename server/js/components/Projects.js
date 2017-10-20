import React from 'react';
import Scrollchor from 'react-scrollchor';

export default function Projects() {
  const styles = {
    background: {
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundImage: 'url(\'/images/madison-bilsborough-382093.jpg\')',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      filter: 'opacity(10%) grayscale(100%)',
    },
    parent: {
      position: 'absolute',
      height: '100%',
      width: '100%',
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      fontSize: '1.7rem',
      marginTop: '-6rem',
    },
    fullHeight: {
      height: '100%',
    }
  };

  function handleClick() {

  }

  return (
    <div>
      <div style={styles.background} />
      <div className="container" style={styles.parent}>
        <div className="row" style={{height: '100%'}}>
          <div className="col-md-8 col-md-offset-2" style={styles.fullHeight}>
            <div style={styles.container}>
              <h2>Projects</h2>
              <hr/>
              <p style={{fontSize: '3 rem'}}>
              <Scrollchor to="#soundCrowd" className="nav-link">SoundCrowd</Scrollchor> | <Scrollchor to="#middlePlace" className="nav-link">MiddlePlace</Scrollchor> | <Scrollchor to="#graceShopper" className="nav-link">Grace Shopper</Scrollchor>
              </p>
            </div>
            <div style={{textAlign: 'center', fontSize: '2.5rem'}}><Scrollchor to="#middlePlace" className="nav-link"><span className="glyphicon glyphicon-menu-down" /></Scrollchor></div>
          </div>
        </div>
        <div className="row" style={styles.fullHeight} id="soundCrowd">
          <div className="col-md-8 col-md-offset-2" style={styles.fullHeight}>
            <div style={{textAlign: 'center', fontSize: '2.5rem', position: 'relative', top: '60px'}}>
              <Scrollchor to="#" className="nav-link">
                <span className="glyphicon glyphicon-menu-up" />
              </Scrollchor>
            </div>
            <div style={styles.container}>
              <h4>SoundCrowd</h4>
              <p><a href="https://github.com/Team-Paper/soundcrowd" target="new">GitHub</a> | <a href="https://thesoundcrowd.herokuapp.com/" target="new">Website</a></p>
              <p style={{textAlign: 'center'}}><em>An in-browser digital audio workstation plus social network.</em></p>
              <img className="img img-responsive" src="http://via.placeholder.com/320x180" />
              <p style={{textAlign: 'center', paddingTop: '1rem'}}><b>Technologies:</b> Web Audio API, Firebase, React, Redux, React-Redux, NodeJS/ExpressJS, React-Router, Postgres</p>
            </div>
            <div style={{textAlign: 'center', fontSize: '2.5rem', position: 'relative', bottom: '30px'}}>
              <Scrollchor to="#middlePlace" className="nav-link">
                <span className="glyphicon glyphicon-menu-down" />
              </Scrollchor>
            </div>
          </div>
        </div>
        <div className="row" style={styles.fullHeight} id="middlePlace">
          <div className="col-md-8 col-md-offset-2" style={styles.fullHeight}>
            <div style={{textAlign: 'center', fontSize: '2.5rem', position: 'relative', top: '60px'}}>
              <Scrollchor to="soundCrowd" className="nav-link">
                <span className="glyphicon glyphicon-menu-up" />
              </Scrollchor>
            </div>
            <div style={styles.container}>
              <h4>MiddePlace</h4>
              <p><a href="https://github.com/christophersk/middleplace" target="new">GitHub</a></p>
              <p style={{textAlign: 'center'}}><em>An iOS application that finds entertainment spots (restaurants, bars, etc.) near the midpoint (by travel time) of the user's current location and another user-provided location. Fullstack Academy "Stackathon" popular vote winner for "best app."</em></p>
              <img className="img img-responsive" src="http://via.placeholder.com/320x180" />
              <p style={{textAlign: 'center', paddingTop: '1rem'}}><b>Technologies:</b> React-Native, Google Directions API, Google Places API, Airbnb React Native Mapview</p>
            </div>
            <div style={{textAlign: 'center', fontSize: '2.5rem', position: 'relative', bottom: '30px'}}>
              <Scrollchor to="#forte" className="nav-link">
                <span className="glyphicon glyphicon-menu-down" />
              </Scrollchor>
            </div>
          </div>
        </div>
        <div className="row" style={styles.fullHeight} id="graceShopper">
          <div className="col-md-8 col-md-offset-2" style={styles.fullHeight}>
            <div style={{textAlign: 'center', fontSize: '2.5rem', position: 'relative', top: '60px'}}>
              <Scrollchor to="middlePlace" className="nav-link">
                <span className="glyphicon glyphicon-menu-up" />
              </Scrollchor>
            </div>
            <div style={styles.container}>
              <h4>Forte</h4>
              <p><a href="https://github.com/musicStackers/musicStack" target="new">GitHub</a></p>
              <p style={{textAlign: 'center'}}><em>An iOS application that finds entertainment spots (restaurants, bars, etc.) near the midpoint (by travel time) of the user's current location and another user-provided location. Fullstack Academy "Stackathon" popular vote winner for "best app."</em></p>
              <img className="img img-responsive" src="http://via.placeholder.com/320x180" />
              <p style={{textAlign: 'center', paddingTop: '1rem'}}><b>Technologies:</b> React-Native, Google Directions API, Google Places API, Airbnb React Native Mapview</p>
            </div>
            <div style={{textAlign: 'center', fontSize: '2.5rem', position: 'relative', bottom: '30px'}}>
              <Scrollchor to="#project1" className="nav-link">
                <span className="glyphicon glyphicon-menu-down" />
              </Scrollchor>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// <div>
// <div className="row">
//   <div className="col-md-8 col-md-offset-2" style={{marginTop: '6rem', marginBottom: '6rem'}}>
//     <hr />
//   </div>
//   <div className="col-md-8 col-md-offset-2">
//     <div style={styles.container}>
//       <h4>Personal Site</h4>
//       <img className="img img-responsive" src="http://via.placeholder.com/320x180" />
//       <p style={{textAlign: 'center', paddingTop: '1rem'}}><b>Technologies:</b> React, Server-Side React, NodeJS/ExpressJS, React-Router, React-Router-Transition</p>
//     </div>
//   </div>
//   <div className="col-md-8 col-md-offset-2" style={{marginTop: '6rem', marginBottom: '6rem'}}>
//     <hr />
//   </div>
//   <div className="col-md-8 col-md-offset-2">
//     <div style={styles.container}>
//       <h4>SoundCrowd</h4>
//       <p><a href="https://github.com/Team-Paper/soundcrowd" target="new">GitHub</a> | <a href="https://thesoundcrowd.herokuapp.com/" target="new">Website</a></p>
//       <p style={{textAlign: 'center'}}><em>An in-browser digital audio workstation plus social network.</em></p>
//       <img className="img img-responsive" src="http://via.placeholder.com/320x180" />
//       <p style={{textAlign: 'center', paddingTop: '1rem'}}><b>Technologies:</b> Web Audio API, Firebase, React, Redux, React-Redux, NodeJS/ExpressJS, React-Router, Postgres</p>
//     </div>
//   </div>
//   <div className="col-md-8 col-md-offset-2" style={{marginTop: '6rem', marginBottom: '6rem'}}>
//     <hr />
//   </div>
//   <div className="col-md-8 col-md-offset-2">
//     <div style={styles.container}>
//       <h4>MiddePlace</h4>
//       <p><a href="https://github.com/christophersk/middleplace" target="new">GitHub</a></p>
//       <p style={{textAlign: 'center'}}><em>An iOS application that finds entertainment spots (restaurants, bars, etc.) near the midpoint (by travel time) of the user's current location and another user-provided location. Fullstack Academy "Stackathon" popular vote winner for "best app."</em></p>
//       <img className="img img-responsive" src="http://via.placeholder.com/320x180" />
//       <p style={{textAlign: 'center', paddingTop: '1rem'}}><b>Technologies:</b> React-Native, Google Directions API, Google Places API, Airbnb React Native Mapview</p>
//     </div>
//   </div>
// </div>
// </div>
