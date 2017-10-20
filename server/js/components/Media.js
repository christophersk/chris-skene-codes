import React from 'react';

export default function Media() {
  const styles = {
    background: {
      backgroundImage: '/images/madison-bilsborough-382093.jpg'
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },
    videoWrapper: {
      position: 'relative',
      paddingBottom: '56.25%',
      height: 0,
    }
  };
  return (
    <div className="container" style={styles.background}>
      <div className="row" style={{marginTop: '6rem'}}>
        <div className="col-md-8 col-md-offset-2">
          <div style={styles.container}>
          <h3>Fullstack Academy Tech Talk:</h3>
          <h4>Implementing Server-Side React</h4>
          <p>9/21/17</p>
            <div style={{width: '100%'}}>
              <div style={styles.videoWrapper}>
                <iframe style={{position: 'absolute', top: 0, left: 0}} height="100%" width="100%" frameBorder="0" type="text/html" src="https://www.youtube.com/embed/c9TT9PS5IyM" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
