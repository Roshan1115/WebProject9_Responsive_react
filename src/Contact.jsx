import React, { useState } from 'react'

const Contact = () => {
      const [data, setData] = useState({
            email : "",
            number : "",
            message : ""
      });

      const InputEvent = (event) => {
            setData(previous => {
                  return {
                        ...previous,
                        [event.target.name] : event.target.value
                  }
            })
      }

      const Submit = (event) => {
            event.preventDefault();
            alert(`email is ${data.email}, number is ${data.number} and message is ${data.message}`)
      }

      return (
            <div className="container-fluid my-5 col-lg-6">

                  <form onSubmit={Submit}>
                        <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Email address</label>
                              <input type="email" class="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" onChange={InputEvent}/>
                        </div>
                        <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Your Contact Number</label>
                              <input type="number" class="form-control" id="Number" name="number" aria-describedby="emailHelp" onChange={InputEvent}/>
                        </div>
                        <div class="mb-3">
                              <label for="exampleInputEmail1" class="form-label">Send Your Message</label>
                              <textarea type="text" class="form-control" name="message" id="message" aria-describedby="emailHelp" onChange={InputEvent}/>
                        </div>

                        <div id="emailHelp" class="form-text mb-3">We'll never shareyour email with anyone else.</div>

                        <button type="submit" class="btn btn-danger">Send</button>
                  </form>

             </div>
      )
}
export default Contact;