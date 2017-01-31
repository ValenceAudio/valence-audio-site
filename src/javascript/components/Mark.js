import React from 'react'
import '../../scss/components/Mark.scss'

const Mark = (props) => {
  return (
    <section id="cover">
      <div id="cover-caption">
        <div className="container">
          <div className="col-sm-10 sm-offset-1">
            <h1 className="Mark__body">Welcome to valence audio</h1>
              <p className="Mark__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic incidunt magni eligendi sapiente minus, cupiditate. Harum culpa voluptatem, doloremque doloribus voluptatum nostrum quidem assumenda, est quas nobis tenetur. Omnis, deleniti!</p>
              <button type="button" className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mark;
