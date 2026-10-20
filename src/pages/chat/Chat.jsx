
import React, { useState } from "react";
import "./Chat.css";
const contacts = [
  { id: 1, name: "Pro Murtaza", online: true },
  { id: 2, name: "ahmadi khan", online: true },
  { id: 3, name: "noman khan", online: true },
  { id: 4, name: "noman khan", online: false },
  { id: 5, name: "noman khan", online: true },
];

function Chat() {
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [activeContact, setActiveContact] = useState(contacts[1]);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi hope you feel better", sender: "other" },
    { id: 2, text: "Hi hope you feel better", sender: "other" },
    { id: 3, text: "Hi hope you feel better", sender: "other" },
  ]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages((previous) => [
      ...previous,
      { id: Date.now(), text: message.trim(), sender: "me" },
    ]);
    setMessage("");
  };

  return (
    <div className="chat-page">
      <header className="chat-topbar">
        <div>
          <div className="breadcrumbs">⌂ / Chat</div>
          <h2>Chat</h2>
        </div>
        <div className="topbar-right">
          <input placeholder="⌕ Type here..." />
          <span>☻ Log out</span>
          <span>⚙</span>
          <span>♟</span>
        </div>
      </header>

      <main className="chat-layout">
        <aside className="contacts-panel">
          <div className="contacts-heading">
            <div className="profile-circle">P</div>
            <div>
              <strong>Pro Murtaza</strong>
              <p className="online">● online</p>
            </div>
            <button className="edit-button" title="Edit">✎</button>
          </div>

          <div className="contact-search">
            <input
              placeholder="Search Contacts"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <span>⌕</span>
          </div>

          <div className="contacts-list">
            {filteredContacts.map((contact) => (
              <button
                key={contact.id}
                className={`contact-item ${
                  activeContact.id === contact.id ? "selected" : ""
                }`}
                onClick={() => {
                  setActiveContact(contact);
                  setMessages([]);
                }}
              >
                <div className="profile-circle">👤</div>
                <div className="contact-info">
                  <strong>{contact.name}</strong>
                  <p>{contact.online ? "short message here..." : "Last seen"}</p>
                </div>
                <small>2:30</small>
              </button>
            ))}
          </div>
        </aside>

        <section className="conversation-panel">
          <div className="conversation-header">
            <div className="profile-circle">👤</div>
            <div className="conversation-user">
              <strong>{activeContact.name}</strong>
              <p className={activeContact.online ? "online" : ""}>
                {activeContact.online ? "● online" : "offline"}
              </p>
            </div>
            <div className="call-actions">
              <button title="Video call">▣</button>
              <button title="Voice call">☎</button>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message-row ${
                  msg.sender === "me" ? "my-message-row" : ""
                }`}
              >
                {msg.sender === "other" && (
                  <div className="small-avatar">👤</div>
                )}
                <div
                  className={`message-bubble ${
                    msg.sender === "me" ? "my-message" : ""
                  }`}
                >
                  {msg.sender === "other" && (
                    <strong>{activeContact.name}</strong>
                  )}
                  <p>{msg.text}</p>
                </div>
                <small>2:30</small>
              </div>
            ))}
          </div>

          <div className="message-input-area">
            <input
              type="text"
              placeholder="Enter Message..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") sendMessage();
              }}
            />
            <button onClick={sendMessage} title="Send message">➤</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Chat;
