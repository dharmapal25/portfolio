import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import "../styles/Form.css"
import { BiSend } from "react-icons/bi"
import { CgClose } from "react-icons/cg"
import { BsFillSendFill, BsSendArrowUpFill } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import axios from "axios"

// const SERVICE_ID  = "service_mvw7xmd"  
// const TEMPLATE_ID = "template_k1vhqq7"  
// const PUBLIC_KEY  = "ksB79qmU9rNmAFFgY"  

// const SERVICE_ID  = "service_wx2k95d"  
// const TEMPLATE_ID = "template_lb2jrdi"  
// const PUBLIC_KEY  = "uuMpXSO4AHtEJBAgU"  

const Form = ({ isOpen, onClose }) => {
    const formRef = useRef()
    const [status, setStatus] = useState(null) 
    const [formData, setFormData] = useState({
    from_email: "",
    from_role: "",
    message: "",
});

    if (!isOpen) return null

const handleSubmit = (e) => {
    e.preventDefault()
    // setStatus("sending")
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    setFormData(data);
    console.log(data);

    axios.post("http://localhost:5000/send-msg",{data})
    .then((res)=> {
        console.log( "Response : ",res)
        
        setStatus("success")
        formRef.current.reset()
        setTimeout(onClose, 2000)


    })
    .catch((err)=>{
         console.log("Error : ", err )
         setStatus("error")
})

    // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
    //     publicKey: PUBLIC_KEY,
    // })
    // .then(() => {
    //     setStatus("success")
    //     formRef.current.reset()
    //     setTimeout(onClose, 2000)
    // })
    // .catch((err) => {
    //     console.error("EmailJS error:", err)
    //     setStatus("error")
    // })
}

    return (
        <div className="form-overlay" onClick={onClose}>
            <div className="form-modal" onClick={(e) => e.stopPropagation()}>

                {/* Modal Header */}
                <div className="form-header">
                    <div>
                        <h2 className="form-title">Let's <span>Connect</span></h2>
                    </div>
                    <button className="form-close" onClick={onClose} aria-label="Close">
                        <AiOutlineClose/>
                    </button>
                </div>

                <div className="form-divider" />

                {/* Form Fields */}
                <form ref={formRef} className="form-body" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">
                            <span className="field-label">Email</span>
                            <div className="input-wrapper">
                                <svg className="input-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="M2 7l10 7 10-7" />
                                </svg>
                                <input type="email" placeholder="your@email.com" id="email" name="from_email" required />
                            </div>
                        </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="role">
                            <span className="field-label">Role</span>
                            <div className="input-wrapper">
                                <svg className="input-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                                <input type="text" placeholder="Designer / Developer" id="role" name="from_role" required />
                            </div>
                        </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">
                            <span className="field-label">Message</span>
                            <textarea placeholder="What's on your mind..." id="message" name="message" rows="4" required />
                        </label>
                    </div>

                    {status === "error" && (
                        <p style={{ color: "crimson", fontSize: "13px", margin: "0" }}>
                            Something went wrong. Please try again.
                        </p>
                    )}
                    {status === "success" && (
                        <p style={{ color: "green", fontSize: "13px", margin: "0" }}>
                            Message sent! Closing...
                        </p>
                    )}

                    <button
                        type="submit"
                        className="btn-primary form-submit"
                        disabled={status === "sending"}
                    >
                        {status === "sending" ? "Sending..." : "Send Message"}
                        {/* <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                        </svg> */}
                        <BsFillSendFill/>
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Form