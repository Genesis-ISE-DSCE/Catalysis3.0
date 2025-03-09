# Contains the backend of the website

---

# How to run?

### install the dependencies

```
npm install
```

### running on localhost 8080

```
npm run dev
```

# Routes

- `http://localhost:8080/register` : registeration of the event

---

# Env Variable

```
PORT=8080
MONGO_URI="mongodb://localhost:27017/catalysis"
MAIL_USER="genesis-email"
MAIL_PASSWORD="access-token-for-the-email"
```
---

## json req:

```
{
    "name": "Arpit Srivastava",
    "usn": "1DS23IS023",
    "phone": "7319738343",
    "email": "arpitsrivastava528@gmail.com",
    "semester": 4,
    "branch": "Information Science & Engineering",
    "event": ["Technoseek", "TypingMaster", "DSASmackDown"]
}
```
