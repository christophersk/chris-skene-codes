import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
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
      alignItems: 'center',
      height: '100%',
    },
    fullHeight: {
      height: '100%',
    }
  };

  return (
    <div>
    <div style={styles.background} />
    <div className="container" style={styles.parent}>
      <div className="row" style={{marginTop: '3rem', height: '100%'}}>
        <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12" style={styles.fullHeight}>
          <div style={styles.container}>
            <div style={{padding: '2rem', textShadow: '0px 0px 1px #ffffff', textAlign: 'center', borderRadius: '5rem', fontSize: '1.7rem', color: '#1D1A21', marginTop: '-8rem'}}><h2>About</h2><hr/><p>Hello! I'm Chris Skene—a web developer and <a href="http://www.chrisskenemusic.com" target="new">musician</a> currently living in Tallahassee, FL. I enjoy building web and mobile applications, listening to and playing music, learning new things, and spending time with friends and family.</p><hr/>
            <p style={{fontSize: '3 rem'}}>
            <Link to="/projects">Projects</Link> | <Link to="/media">Media</Link> | <a href="https://github.com/christophersk" target="new">Github</a> | <a href="https://www.linkedin.com/in/chrisskene/" target="new">LinkedIn</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
