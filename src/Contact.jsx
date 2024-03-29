import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


function Contact() {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "02c23ae9-ae07-4089-9c29-1520d195435f");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        setResult("Success");
      } else {
        setResult("Error");
      }
    };

  return (
    <section id="contact-section" className='scroll-section'>
      <h2>Drop a Message <FontAwesomeIcon icon={faPaperPlane} /></h2>
        <div className='form-wrapper'>
        {
            result == "" ?
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                <span className='input-label'> Your name: <span className='error-message'>{errors.name?.message}</span></span>
                    <input type="text" name="name" {...register("name", {required: "*Required",})} />
                </label>
                <label>
                    <span className='input-label'>Your email: <span className='error-message'>{errors.email?.message}</span></span>
                    <input type="email" name="email"  {...register("email", {required: "*Required",})} />
                </label>
                <label>
                    <span className='input-label'> Your message: <span className='error-message'>{errors.message?.message}</span></span>
                    <textarea name="message" {...register("message", {required: "*What did you wanna say?",})} />
                </label>
                <button type="submit">Send</button>
            </form>
            : result === "Success" ?
            <div className='message-sent'>
                <h3>Thanks for your message! I'll get back to you soon</h3> 
                <button onClick={() => setResult("")}>Send another</button>
            </div>
            : result === "Error" ?
            <div className='message-sent'>
                <h3>Hmm.. Something went wrong. Try again later!</h3>
                <button onClick={() => setResult("")}>Try again</button>
            </div>
            : ''
        }
        </div>
    </section>
  )
}

export default Contact
