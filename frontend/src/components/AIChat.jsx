import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import axios from 'axios';
import { useBrand } from '../context/BrandContext';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const TOPICS = [
  { value: 'signup', label: 'Sign Up Process' },
  { value: 'billing', label: 'Billing & Subscriptions' },
  { value: 'upgrades', label: 'Upgrading Plans' },
  { value: 'downgrades', label: 'Downgrading Plans' },
  { value: 'cancellations', label: 'Cancellations' },
  { value: 'records', label: 'Record Keeping & Reports' },
  { value: 'navigation', label: 'Website Navigation' },
  { value: 'general', label: 'General Questions' }
];

export const AIChat = () => {
  const brand = useBrand();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const [isLoading, setIsLoading] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [supportForm, setSupportForm] = useState({ name: '', email: '', phone: '', message: '' });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      setMessages([{
        role: 'assistant',
        content: `Hi! I'm here to help answer your questions about ${brand.appName}. You can select a topic below or just ask me anything!`,
        timestamp: new Date()
      }]);
    }
  }, [isOpen, brand.appName]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await axios.post(`${API}/chat/message`, {
        session_id: sessionId,
        message: inputMessage,
        topic: selectedTopic || undefined
      });

      const assistantMessage = {
        role: 'assistant',
        content: response.data.message,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        role: 'assistant',
        content: 'Sorry, I\'m having trouble connecting right now. Please try again or contact support.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    const topicLabel = TOPICS.find(t => t.value === topic)?.label;
    if (topicLabel) {
      sendQuickMessage(`I have a question about: ${topicLabel}`);
    }
  };

  const sendQuickMessage = async (message) => {
    const userMessage = {
      role: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await axios.post(`${API}/chat/message`, {
        session_id: sessionId,
        message: message,
        topic: selectedTopic || undefined
      });

      const assistantMessage = {
        role: 'assistant',
        content: response.data.message,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const submitSupportRequest = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.post(`${API}/chat/support`, {
        ...supportForm,
        session_id: sessionId
      });

      const successMessage = {
        role: 'assistant',
        content: 'Thank you! Your support request has been submitted. Our team will get back to you within 24 hours.',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, successMessage]);
      setShowSupport(false);
      setSupportForm({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting support request:', error);
      alert('Sorry, there was an error submitting your request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all p-0 hover:opacity-90"
          style={{ backgroundColor: brand.colors.primary }}
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200">
          {/* Header */}
          <div className="text-white p-4 rounded-t-2xl flex items-center justify-between" style={{ backgroundColor: brand.colors.primary }}>
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6" />
              <div>
                <h3 className="font-semibold">{brand.appName} Support</h3>
                <p className="text-xs opacity-80">AI Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:opacity-80 rounded-full p-1 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Topic Selection */}
          {!showSupport && (
            <div className="p-4 border-b border-gray-200">
              <Select value={selectedTopic} onValueChange={handleTopicSelect}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a topic (optional)" />
                </SelectTrigger>
                <SelectContent>
                  {TOPICS.map((topic) => (
                    <SelectItem key={topic.value} value={topic.value}>
                      {topic.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Messages or Support Form */}
          {!showSupport ? (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.role === 'assistant' && (
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${brand.colors.primary}20` }}>
                        <Bot className="h-5 w-5" style={{ color: brand.colors.primary }} />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] rounded-lg p-3 ${
                        message.role === 'user'
                          ? 'text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                      style={message.role === 'user' ? { backgroundColor: brand.colors.primary } : {}}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                    {message.role === 'user' && (
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <User className="h-5 w-5 text-gray-600" />
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-2 justify-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${brand.colors.primary}20` }}>
                      <Bot className="h-5 w-5" style={{ color: brand.colors.primary }} />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2 mb-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your message..."
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={isLoading || !inputMessage.trim()}
                    className="text-white hover:opacity-90"
                    style={{ backgroundColor: brand.colors.primary }}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <button
                  onClick={() => setShowSupport(true)}
                  className="text-xs hover:opacity-80 flex items-center gap-1 transition-colors"
                  style={{ color: brand.colors.primary }}
                >
                  <AlertCircle className="h-3 w-3" />
                  Need human support? Click here
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Support Form */}
              <div className="flex-1 overflow-y-auto p-4">
                <h4 className="font-semibold text-gray-900 mb-4">Contact Human Support</h4>
                <form onSubmit={submitSupportRequest} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Name *</label>
                    <Input
                      value={supportForm.name}
                      onChange={(e) => setSupportForm({ ...supportForm, name: e.target.value })}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Email *</label>
                    <Input
                      type="email"
                      value={supportForm.email}
                      onChange={(e) => setSupportForm({ ...supportForm, email: e.target.value })}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Phone (optional)</label>
                    <Input
                      value={supportForm.phone}
                      onChange={(e) => setSupportForm({ ...supportForm, phone: e.target.value })}
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Message *</label>
                    <Textarea
                      value={supportForm.message}
                      onChange={(e) => setSupportForm({ ...supportForm, message: e.target.value })}
                      required
                      placeholder="How can we help?"
                      rows={4}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 text-white hover:opacity-90"
                      style={{ backgroundColor: brand.colors.primary }}
                    >
                      Submit Request
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setShowSupport(false)}
                      variant="outline"
                      className="flex-1"
                    >
                      Back to Chat
                    </Button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
