import axios from 'axios';

export async function POST(request: Request) {
    // MAILCHIMP POST REQUEST
    const requestData = await request.text();
    const requestBody = JSON.parse(requestData);

    const email = requestBody.email;

    if (!email || !email.length) {
        return Response.json({ message: 'Email is required' }, { status: 400 });
    }

    const API_KEY = '04735796c1b000cf5a914ff5b1aee706-us11';
    const API_SERVER = 'us11';
    const AUDIENCE_ID = 'e40ee2ad75';

    /*const API_KEY = 'a2cf5cff1a0154ed4826fae3563f7c0b-us21';
    const API_SERVER = 'us21';
    const AUDIENCE_ID = '924fd7c70e';*/

    const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const data = {
        email_address: email,
        status: 'subscribed',
    };

    const options = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `api_key ${API_KEY}`,
        },
    };

    try {
        const response = await axios.post(url, data, options);

        if (response.status >= 400) {
            return Response.json({ message: `There was an error subscribing to the newsletter. Send an email at antonia@wingman.ch and We'll add you to the list` }, { status: 400 });
        }

        return Response.json({ message: 'Success' }, { status: 201 });
    } catch (error: any) {
        // console.error(error);
        if (error.code == 'ERR_BAD_REQUEST') {
            return Response.json({ message: `The provided email is already subscribed to the newsletter.` }, { status: 400 });
        }
        return Response.json({ message: 'An unexpected error occurred. Please try again later.' }, { status: 500 });
    }
};
