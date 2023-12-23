import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

interface EmailOptions {
    from: string;
    to: string[];
    subject: string;
    html: string;
    text?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { email, subject, message } = req.body;

        const emailContent = `
      <h1>${subject}</h1>
      <p>Thank you for contacting us!</p>
      <p>New message submitted:</p>
      <p>${message}</p>
    `;

        const emailOptions: EmailOptions = {
            from: fromEmail || 'donotdisturb124@gmail.com', 
            to: [fromEmail || 'bubwub04@gmail.com'], 
            subject: subject || 'Subject',
            html: emailContent || 'Content',
        };

        // Sending email using Resend library
        const data = await resend.emails.send(emailOptions);

        return res.status(200).json({ message: 'Email sent successfully', data });
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error', details: error });
    }
}