import React from 'react';

export default function Home() {
  const styles = {
    background: {
      position: 'fixed',
      height: '100%',
      width: '100%',
      backgroundImage: 'url(\'/images/kari-shea-272383.jpg\')',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      top: 0,
      left: 0,
      filter: 'blur(1px) brightness(100%) grayscale(100%)',
    },
    parent: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
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
    <div style={styles.parent}>
      <div className="row" style={styles.fullHeight}>
        <div className="col-md-8 col-md-offset-2" style={styles.fullHeight}>
          <div style={styles.container}>
            <h1 style={{fontSize: '4rem', textShadow: '2px 2px 20px #000000', color: '#ECEBE7', textAlign: 'center', marginTop: '-6rem'}}>Chris Skene</h1>
            <h2 style={{color: '#ECEBE7', textAlign: 'center', textShadow: '2px 2px 20px #000000'}}>Web Developer</h2>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
