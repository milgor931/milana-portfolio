// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./ContactForm.css"

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mldbnpga");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type="text" placeholder="Name" />
            </label>
            <label>
                <input type="text" placeholder="Email Address" />
            </label>

            <label>
                <textarea type="text" placeholder="Message" />
            </label>

            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button class="red" type="submit" disabled={state.submitting}><i class="icon ion-md-lock"></i> 
                Send Message
            </button>
        </form>
    );
}