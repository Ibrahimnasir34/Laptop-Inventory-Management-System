import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

function CreateBookForm() {
    const [formData, setFormData] = useState({
        name: '',
        gen: '',
        price: '',
        image: null
    });

    const hnavigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, image: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('gen', formData.gen);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('image', formData.image);

        try {
            const response = await fetch('http://localhost:8081/laptopsop', {
                method: 'POST',
                body: formDataToSend
            });
            if (response.ok) {
                history.push('/laptopsop'); // Redirect to the laptop table after successful submission
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Create New Laptop</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Description:
                    <input
                        type="text"
                        name="gen"
                        value={formData.gen}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Image:
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            <Link to="/createbookform">Back to Laptop Table</Link>
        </div>
    );
}

export default CreateBookForm;
