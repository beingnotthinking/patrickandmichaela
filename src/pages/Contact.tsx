import "./Contact.css";

export const Contact = () => (
<div>
    <p className="contactTitle">Fill out this form and we will get back to you as long as we get it</p>
    <form name="contact" method="POST" data-netlify="true" >
    <input type="hidden" name="form-name" value="contact" />
      <p>
        <label> Name
          <input type="text" name="name"></input>
        </label>
      </p>
      <p>
        <label> Email
          <input type="text" name="email"></input>
        </label>
      </p>
      <p>
        <label> Phone
          <input type="text" name="phone"></input>
        </label>
      </p>
      <p>
        <label> Message
          <textarea name="message"></textarea>
        </label>        
      </p>
      <p>
        <button type="submit">Send Message</button>
      </p>
    </form>
  </div>
);

