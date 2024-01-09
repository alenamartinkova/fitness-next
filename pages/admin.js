import { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { debounce } from 'lodash';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading...</p>, // Optional: add a loading placeholder
});

export default function Admin() {
    const [texts, setTexts] = useState([]);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);

    useEffect(() => {
        // Fetch data from the database -> call the function from index.js
        const fetchData = async () => {
            try {
                const response = await fetch('/api/select');
                const data = await response.json();
                setTexts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const updatedTexts = texts.map(text => ({
                text_key: text.text_key,
                value: text.value
            }));

            const response = await fetch('/api/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTexts),
            });

            if (!response.ok) {
                setShowErrorToast(true);
                setTimeout(() => setShowErrorToast(false), 3000);
                throw new Error('Network response was not ok');
            } else {
                setShowSuccessToast(true);
                setTimeout(() => setShowSuccessToast(false), 3000);
            }
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    const handleInputChange = useCallback(debounce((key, value) => {
        setTexts(prevTexts => prevTexts.map(text => {
            if (text.text_key === key) {
                return { ...text, value };
            }
            return text;
        }));
    }, 500), []);

    return (
        <div className={'container mx-auto flex flex-col gap-4 my-4'}>
            {texts.length > 0 ?
                <form onSubmit={handleSubmit}>
                    {texts.map(text => (
                        <div key={text.text_key} className={'mb-4'}>
                            <label className="block mb-2 font-medium">{text.text_key}</label>
                            <ReactQuill
                                theme="snow"
                                value={text.value}
                                onChange={(value) => handleInputChange(text.text_key, value)}
                            />
                        </div>
                    ))}
                    <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg w-[300px] text-center fixed bottom-2 py-2 right-2" type="submit">Submit</button>
                </form>
            : 'No texts'}

            {showSuccessToast && (
                <div className="bg-green-500 text-white p-4 rounded-md mb-4">
                    Update successful!
                </div>
            )}

            {showErrorToast && (
                <div className="bg-red-500 text-white p-4 rounded-md mb-4">
                    Error updating texts!
                </div>
            )}
        </div>
    );
}
