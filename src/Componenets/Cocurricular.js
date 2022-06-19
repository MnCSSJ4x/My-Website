import React from 'react'
import './Cocurricular.css'
const Cocurricular = () => {
  return (
    <div className='curr-main'>
      <h1 className="heading">
        Co-curricular and Volunteering 
      </h1>
      <div className="list">
        <h2 className="list-heading">Teaching Assistant</h2>
        <ul className="list-points">
          <li className="list-items">
            Teaching Assitant for Digital Design Course @ IIITB during November 2021-April 2022 session. 
          </li>
        </ul>
        <h2 className="list-heading">Organiser</h2>
        <ul className="list-points">
          <li className="list-items">
            Organiser for the 5th iteration of TEDxIIITBangalore 
          </li>
         <li className="list-items"> Managed and overseen 2 departments (Speaker Curation and Marketing)</li>
          <li className="list-items">Led 15+ members for the 5th iteration of the annual event to work towards goals that improve and promote new ideas</li>
        </ul>
        <h2 className="list-heading">Marketing and Outreach Lead</h2>
        <ul className="list-points">
          <li className="list-items">
          Marketing and Outreach Lead @ Google Developer Students Club 
          </li>
         <li className="list-items"> Organised Android Study Jams from November 2021 - January 2022</li>
          <li className="list-items">Organised Flutter Festivals from March 2022 - April 2022</li>
        </ul>
        <h2 className="list-heading">Lead</h2>
        <ul className="list-points">
          <li className="list-items">
          Lead @ Anuvhava : The official IIITB career blog
          </li>
         <li className="list-items"> Handle content curation for blogs</li>
        </ul>
        <h2 className="list-heading">Event Lead</h2>
        <ul className="list-points">
          <li className="list-items">
          Event Lead @ SquareOne
          </li>
         <li className="list-items"> Organised the official induction session for the upcoming batch</li>
          <li className="list-items">Handled event logistic from November to December 2021</li>
        </ul>
        

      </div>
    </div>
  )
}

export default Cocurricular