import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted data:', formData);

        setFormData({ name: '', email: '' });
    };

    return (
        <div>
            <h1>Conatct From set</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label><br />
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>

                <div>
                    <label>Email:</label><br />
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;