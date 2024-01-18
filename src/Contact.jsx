import React from 'react'
import './styles/contact.scss'

function Contact() {
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
        <h2>Contact Me 👋🏼</h2>
        <div className='form-wrapper'>
        {
            result == "" ?
            <form onSubmit={onSubmit}>
                <label>
                    Your name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Your email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Your message:
                    <textarea name="message"></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
            : result == "Success" ?
            <div className='message-sent'>
                <h3>Thanks for your message! I'll get back to you soon</h3> 
                <button onClick={() => setResult("")}>Send another</button>
            </div>
            : result == "Error" ?
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
