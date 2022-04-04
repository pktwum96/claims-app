import "../styles/ContactUs.css";

export const ContactUs = () => {
    return (
        <div className="container contact-us">
            <h2>
                Welcome
                <br /> A member of our Team will respond to you shortly after submission
            </h2>
            <p>Fill-in your details and a representative will be in touch with you shortly.</p>

            <form>
                <div className="form-group">
                    <label htmlFor="formControlInputName">Full Name</label>
                    <input type="name" className="form-control" id="formControlInputName" placeholder="John Snow" />
                </div>
                <div className="form-group">
                    <label htmlFor="formControlInputEmail">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>

                <div className="form-group">
                    <label htmlFor="formControlTextarea1">Talk to Us</label>
                    <textarea className="form-control" id="formControlTextarea1" rows={3}></textarea>
                </div>

                <button type="submit" className="btn btn-primary mx-auto d-block">
                    Submit
                </button>
            </form>
        </div>
    );
};
