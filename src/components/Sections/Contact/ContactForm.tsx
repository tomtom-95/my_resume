import {FC, memo, useCallback, useMemo, useState, useRef} from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC = memo(() => {
  const defaultData = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    [],
  );

  const [data, setData] = useState<FormData>(defaultData);
  const [feedback, setFeedback] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;
      const fieldData: Partial<FormData> = {[name]: value};
      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const botToken = '7335325551:AAEKtdlUbGq4fLHE2v7i4yKKsSd8Zl3e2Bw';
      const chatId = '822149520';
      const message = `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`;

      const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

      try {
        const response = await fetch(telegramUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        });

        if (response.ok) {
          setFeedback('Message sent successfully');
          setData(defaultData); // Reset the state
          formRef.current?.reset(); // Reset the form fields
        } else {
          setFeedback('Error sending message');
        }
      } catch (error) {
        setFeedback('Error sending message');
      }

      // Hide feedback after 5 seconds
      setTimeout(() => setFeedback(null), 5000);
    },
    [data, defaultData],
  );

  const inputClasses =
    'bg-white border border-gray-300 focus:border-orange-600 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder-gray-400 placeholder:text-sm text-gray-800 text-sm';

  return (
    <div>
      <form ref={formRef} className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
        <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text" />
        <input
          autoComplete="email"
          className={inputClasses}
          name="email"
          onChange={onChange}
          placeholder="Email"
          required
          type="email"
        />
        <textarea
          className={inputClasses}
          maxLength={250}
          name="message"
          onChange={onChange}
          placeholder="Message"
          required
          rows={6}
        />
        <button
          aria-label="Submit contact form"
          className="w-max rounded-full border-2 border-orange-600 bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-orange-500 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-white"
          type="submit">
          Send Message
        </button>
      </form>
      {feedback && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            <p>{feedback}</p>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setFeedback(null)}
                className="w-max rounded-full border-2 border-orange-600 bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-orange-500 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-white">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
