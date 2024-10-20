import React, { useState } from "react";
import "./stylecontact.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Obrigado, ${name}! Sua mensagem foi enviada.`);
        setName("");
        setEmail("");
        setMessage("");
        setSubmitted(true);
    };

    return (
        <div className="containerhome">
          <div className="principal">
            <h1>Contato</h1>
            {submitted && <p className="success-message">Mensagem enviada com sucesso!</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensagem:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
            </div>
        </div>
    );
};

export default Contact;
