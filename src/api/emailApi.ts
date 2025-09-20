
import axios from 'axios';

// --- SETUP AXIOS INSTANCE ---
// This ensures the auth token is sent with every request automatically.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


// --- EMAIL API CALLS ---

export const getEmails = async () => {
  const { data } = await api.get('/emails');
  return data;
};

// --- THIS IS THE CORRECTED FUNCTION ---
export const analyzeEmail = async (messageId: string) => {
  // The URL now uses a slash before the messageId
  const { data } = await api.post(`/emails/analyze/${messageId}`);
  return data;
};

export const sendEmail = async (payload: {
  to: string;
  subject: string;
  body: string;
  threadId: string;
  inReplyTo: string;
  references: string;
}) => {
  const { data } = await api.post('/emails/send', payload);
  return data;
};


// --- CALENDAR API CALLS ---

export const checkAvailability = async (start: string, end: string) => {
  const { data } = await api.post('/emails/calendar/check-availability', { start, end });
  return data;
};

export const createCalendarEvent = async (eventData: {
  summary: string;
  description: string;
  start: string;
  end: string;
  attendees: string[];
}) => {
  const { data } = await api.post('/emails/calendar/create-event', eventData);
  return data;
};