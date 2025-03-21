import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import api from '../utils/axios';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const initialEvents = {
  'DSA SmackDown': [],
  'UI/UX Design (Team Event)': [],
  'Technoseek (Team Event)': [],
  'Coding Relay (Team Event)': [],
  'TypeMaster': [],
  'Valorant': []
};

function CatalysisTitle() {
  const navigate = useNavigate();
  return (
    <h1 
      onClick={() => navigate('/')} 
      className="text-[#ff1f53] text-2xl md:text-3xl font-stat font-bold relative tracking-wide cursor-pointer"
    >
      {Array.from("CATALYSIS ADMIN").map((letter, index) => (
        <span key={index} className="relative inline-block mx-0.5">
          <span className="absolute top-[2px] right-[2px] text-black">
            {letter}
          </span>
          <span className="relative text-[#ff1f53]">{letter}</span>
        </span>
      ))}
    </h1>
  );
}

export function Admin() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('DSA SmackDown');
  const [searchTerm, setSearchTerm] = useState('');
  const [participants, setParticipants] = useState(initialEvents);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [error, setError] = useState(null);

  // Fetch participants data from backend
  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await api.get('/events');
        console.log('API Response:', response.data); 
        
        // Group participants by event
        const groupedParticipants = response.data.reduce((acc, participant) => {
          participant.event.forEach(eventName => {
            if (!acc[eventName]) acc[eventName] = [];
            acc[eventName].push(participant);
          });
          return acc;
        }, {});
        
        console.log('Grouped Participants:', groupedParticipants); // Debug log
        setParticipants(groupedParticipants);
      } catch (error) {
        if (error.response?.status === 401) {
          logout();
          navigate('/login');
        }
        setError(error.message);
      }
    };

    fetchParticipants();
  }, []);

  // Debug log for current state
  useEffect(() => {
    console.log('Current activeTab:', activeTab);
    console.log('Current participants:', participants);
    console.log('Filtered participants:', participants[activeTab]);
  }, [activeTab, participants]);

  const events = Object.keys(initialEvents).map(name => ({
    id: name,
    name: name.replace(/([A-Z])/g, ' $1').trim() // Add spaces between camel case
  }));

  const filteredParticipants = (participants[activeTab] || []).filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.phone.includes(searchTerm)
  );

  const totalParticipants = (participants[activeTab] || []).length;
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm py-3 px-4">
        <div className="flex items-center justify-center relative">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-amber-100 rounded-lg md:hidden absolute left-0"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <CatalysisTitle />
          <button
            onClick={handleLogout}
            className="p-2 hover:bg-amber-100 rounded-lg absolute right-0"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={`
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          fixed md:relative
          z-20 md:z-0
          w-64 bg-white shadow-lg
          transition-transform duration-300
          h-[calc(100vh-4rem)] md:h-auto
        `}>
          <div className="p-4">
            <h2 className="text-xl font-bold text-amber-900 mb-4">Events</h2>
            <nav className="space-y-2">
              {events.map(event => (
                <button
                  key={event.id}
                  onClick={() => {
                    setActiveTab(event.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-colors ${
                    activeTab === event.id
                      ? 'bg-amber-500 text-white'
                      : 'text-amber-700 hover:bg-amber-100'
                  }`}
                >
                  {event.name}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 overflow-auto">
          {/* Search and Stats Container */}
          <div className="flex justify-between items-start mb-6">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="text-right">
              <p className="text-amber-900 font-medium">
                Total Registrations: {totalParticipants}
              </p>
            </div>
          </div>

          {/* Participants Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-amber-100">
                  <tr>
                    <th className="px-6 py-3 text-center text-sm font-semibold text-amber-900">Name</th>
                    <th className="px-6 py-3 text-center text-sm font-semibold text-amber-900">Email</th>
                    <th className="px-6 py-3 text-center text-sm font-semibold text-amber-900">Phone</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredParticipants.length > 0 ? (
                    filteredParticipants.map((participant) => (
                      <tr key={participant._id} className="hover:bg-amber-50">
                        <td className="px-6 py-4 text-sm text-gray-900">{participant.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{participant.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{participant.phone}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="px-6 py-8 text-center text-gray-500 italic">
                        No registrations for now :)
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}