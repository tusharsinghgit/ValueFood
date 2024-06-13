import React from 'react';

function Awareness() {
  return (
    <div>
      {/* <header className="_pin-header">
        <h1>Raise Awareness</h1>
        <p>Join us in spreading awareness about important global issues.</p>
      </header> */}

      <main className="_pin-gallery">
        <section className="_pin-section _pin-food-wastage">
          <h2 className="_pin-section-title">Global Food Wastage</h2>
          <div className="_pin-card-container">
            <div className="_pin-card">
              <img src="img/fwaware1.jfif" alt="Food Wastage 1" className="_pin-card-image" />
              <div className="_pin-card-content">
                {/* <p>Image Description 1</p> */}
              </div>
            </div>
            <div className="_pin-card">
              <img src="img/fwaware2.jfif" alt="Food Wastage 2" className="_pin-card-image" />
              <div className="_pin-card-content">
                {/* <p>Image Description 2</p> */}
              </div>
            </div>
            <div className="_pin-card">
              <video controls className="_pin-card-video">
                <source src="img/fwawarevid1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="_pin-card-content">
                {/* <p>Video Description</p> */}
              </div>
            </div>
          </div>
        </section>

        {/* Add more sections for other topics */}

        <section className="_pin-section _pin-food-wastage">
          <h2 className="_pin-section-title">Reduce Food Wastage</h2>
          <div className="_pin-card-container">
            <div className="_pin-card">
              <img src="img/fwaware10.jpg" alt="Food Wastage 1" className="_pin-card-image" />
              <div className="_pin-card-content">
                {/* <p>Image Description 1</p> */}
              </div>
            </div>
            <div className="_pin-card">
              <img src="img/fwaware11.jfif" alt="Food Wastage 2" className="_pin-card-image" />
              <div className="_pin-card-content">
                {/* <p>Image Description 2</p> */}
              </div>
            </div>
            <div className="_pin-card">
              <video controls className="_pin-card-video">
                <source src="img/fwawarevid2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="_pin-card-content">
                {/* <p>Video Description</p> */}
              </div>
            </div>
          </div>
        </section>

        {/* Add more sections for other topics */}
        <section className="_pin-section _pin-food-wastage">
          <h2 className="_pin-section-title">Global Hunger</h2>
          <div className="_pin-card-container">
            <div className="_pin-card">
              <img src="img/fwaware3.jfif" alt="Food Wastage 1" className="_pin-card-image" />
              <div className="_pin-card-content">
                {/* <p>Image Description 1</p> */}
              </div>
            </div>
            <div className="_pin-card">
              <img src="img/fwbanner8.jpg" alt="Food Wastage 2" className="_pin-card-image" />
              <div className="_pin-card-content">
                {/* <p>Image Description 2</p> */}
              </div>
            </div>
            <div className="_pin-card">
              <video controls className="_pin-card-video">
                <source src="img/fwawarevid5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="_pin-card-content">
                {/* <p>Video Description</p> */}
              </div>
            </div>
          </div>
        </section>

        {/* Add more sections for other topics */}

        <section className="_pin-section _pin-food-wastage">
          <h2 className="_pin-section-title">Food Donation</h2>
          <div className="_pin-card-container">
            <div className="_pin-card">
              <img src="img/fwbanner3.jpg" alt="Food Wastage 1" className="_pin-card-image" />
              <div className="_pin-card-content">
                {/* <p>Image Description 1</p> */}
              </div>
            </div>
            <div className="_pin-card">
              <img src="img/fwaware7.gif" alt="Food Wastage 2" className="_pin-card-image" />
              <div className="_pin-card-content">
                {/* <p>Image Description 2</p> */}
              </div>
            </div>
            <div className="_pin-card">
              <video controls className="_pin-card-video">
                <source src="img/fwawarevid3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="_pin-card-content">
                {/* <p>Video Description</p> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <footer className="_pin-footer">
        <p>&copy; 2024 Awareness Campaign. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default Awareness;
