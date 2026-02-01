# ## 📌 Overview
This project implements a simple Role-Based Access Control (RBAC) system with
Multi-Factor Authentication (MFA) enforcement using JavaScript.

The goal of the project is to demonstrate how access decisions can be made based on:
- whether a user’s role is recognised by the system
- whether MFA is enabled
- predefined access levels for each role

The logic follows a security-first approach, denying access by default unless all
conditions are met.

---

## 🎯 Features
- Validates user roles against an approved role list
- Enforces MFA before granting any level of access
- Assigns Full Access or Limited Access based on role
- Denies access for unknown roles or when MFA is disabled
- Uses clean, modular functions for maintainability

---

## 🛠️ Technologies Used
- JavaScript 
- No external libraries or frameworks

---

## 🧠 Concepts Demonstrated
- Role-Based Access Control (RBAC)
- Multi-Factor Authentication (MFA) enforcement
- Secure default logic (deny by default)
- Functions and helper functions
- Arrays and loops
- Conditional logic and return-based decision making

---

## 📂 Project Structure
├── accessControl.js # Core RBAC and MFA logic
└── README.md # Project documentation


---

## 🧪 How It Works

### Valid Roles
```js
const roles = ['admin', 'editor', 'viewer'];
Access Rules
Role	MFA Enabled	Access Result
admin	true	Full Access
editor	true	Limited Access
viewer	true	Limited Access
any	false	Access Denied
unknown	true	Access Denied

▶️ Example Usage
checkAccess('admin', true);    // "Full Access"
checkAccess('editor', true);  // "Limited Access"
checkAccess('viewer', false); // "Access Denied"
checkAccess('guest', true);   // "Access Denied"
🔒 Security Considerations
Access is denied by default unless explicitly allowed

MFA is enforced before any role-based decision

Unrecognised roles are rejected

Logic is structured to be easily extended with additional security checks

🚀 Possible Enhancements
Return structured decision objects (e.g. { access, reason })

Add audit logging for access decisions

Externalise roles into a configuration file

Expand rules to support multiple roles per user

📘 Learning Outcome
This project was built to practice and demonstrate:

secure decision-making logic

clear separation of concerns using helper functions

foundational access control concepts relevant to cybersecurity and backend systems

👤 Author
Built by Mohsena Dewan Prithil as part of hands-on JavaScript and cybersecurity fundamentals practice.


---








