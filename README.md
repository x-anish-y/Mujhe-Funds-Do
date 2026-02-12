# 💰 Mujhe-Funds-Do  
### A Full-Stack Crowdfunding Platform

Mujhe-Funds-Do is a scalable crowdfunding web application built using **Next.js (App Router)** and **MongoDB**.  
The platform enables users to create fundraising campaigns while allowing contributors to securely support causes through an intuitive digital interface.

<br>

![MFD Architecture](public/Screenshot%202025-12-25%20225934.png)

---

## 📌 Project Overview

Mujhe-Funds-Do is designed as a two-sided platform:

- **Campaign Creators** can launch and manage fundraising initiatives.
- **Supporters** can explore and contribute to verified campaigns.

The system ensures structured data storage, dynamic routing, and seamless frontend-backend interaction.

---

## 🚀 Core Features

- Campaign creation and management system  
- Dynamic campaign listing and detail pages  
- RESTful API integration using Next.js API routes  
- MongoDB-based persistent storage  
- Clean, responsive, mobile-friendly UI  
- Modular and scalable project architecture  
- Payment gateway integration-ready structure  

---

## 🛠 Technology Stack

| Layer        | Technology Used |
|--------------|-----------------|
| Frontend     | Next.js 14, React |
| Backend      | Next.js API Routes |
| Database     | MongoDB |
| Styling      | CSS / Tailwind CSS |
| Deployment   | Vercel (Optimized) |

---

## ⚙️ Application Workflow

1. A user creates a fundraising campaign via a structured form.
2. Campaign data is validated and stored in MongoDB.
3. Campaigns are dynamically fetched and displayed.
4. Contributors can select and support campaigns.
5. The system updates campaign data in real time.

The architecture supports easy extension for payment gateway integration and authentication modules.

---

## 📂 Project Structure

```
Mujhe-Funds-Do/
│
├── app/
│   ├── api/                # Backend API routes
│   ├── create/page.js      # Campaign creation page
│   ├── campaigns/page.js   # Campaign listing page
│   └── page.js             # Home page
│
├── components/             # Reusable UI components
├── lib/
│   └── mongodb.js          # MongoDB configuration
│
├── public/                 # Static assets
└── package.json
```

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Mujhe-Funds-Do.git
cd Mujhe-Funds-Do
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
```

### 4️⃣ Run the Development Server

```bash
npm run dev
```

Access the application at:

```
http://localhost:3000
```

---

## 📌 API Endpoints

| Method | Endpoint            | Description |
|--------|--------------------|-------------|
| POST   | /api/create        | Create a new campaign |
| GET    | /api/campaigns     | Retrieve all campaigns |

---

## 🌍 Deployment

The application is optimized for deployment on:

- **Vercel** (recommended)
- Any Node.js-compatible hosting platform

Ensure environment variables are configured before deployment.

---

## 📈 Future Enhancements

- Razorpay / Stripe payment gateway integration  
- User authentication and personalized dashboard  
- Campaign progress visualization  
- Donation history tracking  
- Admin moderation panel  
- Campaign approval workflow  
- Real-time transaction status updates  

---

## 🎯 Learning Outcomes

This project demonstrates:

- Full-stack development using Next.js App Router  
- REST API design and backend logic integration  
- MongoDB database modeling and CRUD operations  
- Dynamic routing and state management  
- Scalable web application architecture  

---

## 👨‍💻 Author

Developed as a full-stack crowdfunding platform using Next.js and MongoDB.

---

## 📜 License

This project is licensed under the MIT License.
