import { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { debounce } from 'lodash';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});

export default function Admin() {
    const [texts, setTexts] = useState([]);
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Authenticate User
    useEffect(() => {
        const authenticate = async () => {
            const username = prompt('Enter username');
            const password = prompt('Enter password');

            try {
                const response = await fetch('/api/auth', {
                    method: 'POST',
                    headers: new Headers({
                        'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
                        'Content-Type': 'application/json'
                    }),
                });

                if (response.ok) {
                    setIsAuthenticated(true);
                    fetchData();
                } else {
                    alert('Authentication failed!');
                }
            } catch (error) {
                console.error('Authentication error:', error);
            }
        };

        authenticate();
    }, []);

    // Fetch Data from the Database
    const fetchData = async () => {
        try {
            const response = await fetch('/api/select');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setTexts(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setShowErrorToast(true);
            setTimeout(() => setShowErrorToast(false), 3000);
        }
    };

    // Handle Submit
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
                throw new Error('Network response was not ok');
            }
            localStorage.removeItem('texts');
            setShowSuccessToast(true);
            setTimeout(() => setShowSuccessToast(false), 3000);
        } catch (error) {
            console.error('Error updating data:', error);
            setShowErrorToast(true);
            setTimeout(() => setShowErrorToast(false), 3000);
        }
    };

    // Handle Input Change
    const handleInputChange = useCallback(debounce((key, value) => {
        setTexts(prevTexts => prevTexts.map(text => text.text_key === key ? { ...text, value } : text));
    }, 500), []);

    // Render Admin Page
    if (!isAuthenticated) {
        return <div>Authenticating...</div>;
    }

    return (
        <div className={'container mx-auto flex flex-col gap-4 my-4'}>
            {texts.length > 0 ? (
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
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg w-[300px] text-center fixed bottom-2 py-2 right-2">
                        Submit
                    </button>
                </form>
            ) : 'No texts'}

            {showSuccessToast && (
                <div className="bg-green-500 text-white p-4 rounded-md w-[300px] text-center fixed bottom-2 py-2 left-2">
                    Update successful!
                </div>
            )}

            {showErrorToast && (
                <div className="bg-red-500 text-white p-4 rounded-md w-[300px] text-center fixed bottom-2 py-2 left-2">
                    Error updating texts!
                </div>
            )}
        </div>
    );
}
