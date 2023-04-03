import React from 'react';
import styles from './header.module.css';

function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img
            className="responsive"
            src="./JoelHiltonHeadshot.jpg"
            alt="companylogo"
          />
        </div>

        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>{props.title}</h1>
        </div>
      </div>
    </>
  );
}
export default TopBanner;
