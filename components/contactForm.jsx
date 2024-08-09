export default function ContactForm() {
    return (
        <>
            <div className="formCont">
                <form>
                    <div className="input-box">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="Name" id="name" required />
                    </div>
                    <div className="subCont">
                        <div className="input-box">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="Email" id="email" required />
                        </div>
                        <div className="input-box">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" name="Phone" id="phone" required />
                        </div>
                    </div>
                    <div className="input-box">
                        <label htmlFor="msg">Message</label>
                        <textarea name="message" id="msg" rows="4" />
                    </div>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        </>
    )
}