import React, { Component } from 'react'

const PracticeInfo = [
  {
  CasaPedaitrics: {
    VirginaLocations: {
      location: 'Casa Pediatrics',
      url: 'casapeds.com',
      googleMapsUrl:  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.0147583845583!2d-77.3156926848253!3d38.64854097960975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6563f61477871%3A0x8647823a44a16897!2s14130+Noblewood+Plaza%2C+Woodbridge%2C+VA+22193!5e0!3m2!1sen!2sus!4v1508953760652'
    }
  }
},
{
  TheHealthyHeartCenter: {
    MarylandLocations: {
      location: 'Cambridge Pediatrics',
      url: '',
      googleMapsUrl:  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.4049603302565!2d-76.9177576848263!3d38.61656397961506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7a0d2ebe530e7%3A0x1b6cd671aaa31cb9!2sCambridge+Pediatrics%2C+LLC!5e0!3m2!1sen!2sus!4v1508959375172" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>'
    }
  }
}
]

const MedicalPracticeLocations = (props) =>{
let size  = window.innerWidth > 600 ? 600 : '100%'
console.log(props);
  return (
    <div  >
      <h1>{props.match.params.id}</h1>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3116.0147583845583!2d-77.3156926848253!3d38.64854097960975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6563f61477871%3A0x8647823a44a16897!2s14130+Noblewood+Plaza%2C+Woodbridge%2C+VA+22193!5e0!3m2!1sen!2sus!4v1508953760652"
       style={{width: size, height: size}}
       frameBorder="0"
       allowFullScreen></iframe>
    </div>
  )
}
export default MedicalPracticeLocations
