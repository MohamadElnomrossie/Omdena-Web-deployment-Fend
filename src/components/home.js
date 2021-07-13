import React from "react";
import Card from './card'
import CarouselButton from "./carouselButton"
export default function Home() {
  return (
    <div className="container-fluid p-5">
      <div className="container justify-content-center">
        <div id="aboutUs">

          <h1 className="text-start" >About Yarub</h1>
          <p className="fs-4 about" >
            Yarub, "يعرب" is an Arabic word meaning to be an Arab. Yarub is an open source natural language processing, NLP, toolkit. It was initiated by Omdena
            to build tools to utilize artificial intelligence to process the Arabic language. Yarub was built through eight weeks of diligent efforts by a team of several developers of diverse
            backgrounds and regions namely Egypt, Iraq, India, Morocco, and Pakistan to be the first project that comprehensively applies AI technologies to the Arabic language. The project has
            three deliverables; firstly, a webapp to allow end users to use different APIs to process the Arabic language. Secondly, a python module to allow developers to download the datasets used to
            develop and train the artificial intelligence models of this project. Thirdly, a python module to allow NLP developers to utilize the project models to fit their use cases
          </p>
        </div>
          <br/>
          <br/>
          <br/>
        <div className="task-carousel col mx-auto px-auto">
          <div
            id="carouselExampleIndicators"
            className="carousel slide col-12"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              {/* <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button> */}
              <CarouselButton index={"1"} slideName={"Slide 2"}/>
              <CarouselButton index={"2"} slideName={"Slide 3"}/>
              <CarouselButton index={"3"} slideName={"Slide 4"}/>
              <CarouselButton index={"4"} slideName={"Slide 5"}/>
              <CarouselButton index={"5"} slideName={"Slide 6"}/>
              <CarouselButton index={"6"} slideName={"Slide 7"}/>
              <CarouselButton index={"7"} slideName={"Slide 8"}/>
            </div>

            <h1 className="text-start ">Tasks</h1>
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* ================================= */}
                <Card title={'Sentiment analysis'}
                imagePath={'images/sentiment.png'}
                description={"Detection of emotion polarity in a given text."}
                path={'/sentiment'}/>
              {/* =================================== */}
            
              </div>
              <div className="carousel-item">
                <Card title={'Dialect Identification'}
                imagePath={'images/flags2.png'}
                description={"Detection of the dialect and region of any given text"}
                path={'/dialect'}/>
                {/* =============================================== */}
              </div>
              <div className="carousel-item">
               {/* =============================== */}
               <Card
               imagePath={"images/gender4.png"}
               path="/gender"
               title="Gender Identification"
               description="Gender identification of the Arabic words and texts"/>
               {/* =============================== */}
              </div>

              {/* ========================================================== */}
              <div className="carousel-item">
               {/* =============================== */}
               <Card
               imagePath={"images/wordCloud.png"}
               path="/lemmatization"
               title="Lemmatization"
               description="Text lemmatization"/>
               {/* =============================== */}
              </div>

              <div className="carousel-item">
               {/* =============================== */}
               <Card
               imagePath={"images/tokenization.png"}
               path="/tokenization"
               title="Tokenization"
               description="Text Tokenization"/>
               {/* =============================== */}
              </div>
              <div className="carousel-item">
               {/* =============================== */}
               <Card
               imagePath={"images/ner.png"}
               path="/ner"
               title="Named Entity Recognition"
               description="Detection of entities in any given text"/>
               {/* =============================== */}
              </div>
              <div className="carousel-item">
               {/* =============================== */}
               <Card
               imagePath={"images/pos.jpg"}
               path="/pos"
               title="Parts of Speech Tagging"
               description="Detection of parts of speech in any given text"/>
               {/* =============================== */}
              </div>
              <div className="carousel-item">
               {/* =============================== */}
               <Card
               imagePath={"images/similar.jpeg"}
               path="/similar"
               title="Word Similarity"
               description="Generating words similar to the words in a given text"/>
               {/* =============================== */}
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="mx-auto">
          <h1 className="text-start">Testimonials</h1>
        
        <div className="test">
          <img src="images/avatar.jpg" className="test-avatar" alt='avatar'/>
            <p className='test-text fs-4'>lorem ipsum dolor lorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolorlorem ipsum dolor

            </p>

<div className="row justify-content-center">

  <div className="card col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-5 col-8 bg-dark mx-2 mt-2" >
  <img src="images/avatar.jpg" className="test-avatar mx-2 mt-2" alt="..."/>
  <div className="card-body">
    <p className="card-text test-font-title">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div className="card col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-5 col-8 bg-dark mx-2 mt-2" >
  <img src="images/avatar.jpg" className="test-avatar mx-2 mt-2" alt="..."/>
  <div className="card-body">
    <p className="card-text test-font-title">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>

</div>
        </div>
  
      
        </div>
      </div>
    </div>
  );
}
