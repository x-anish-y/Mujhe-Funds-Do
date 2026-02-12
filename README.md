# 💰 Mujhe-Funds-Do – Crowdfunding Web Application

Mujhe-Funds-Do is a full-stack crowdfunding web application built using Next.js and MongoDB.  
It allows users to create fundraising campaigns and enables others to support them by contributing funds. <br>
<br>![MFD Architecture](public/Screenshot%202025-12-25%20225934.png)


---

## 🚀 Features

- Create and manage fundraising campaigns
- View all active campaigns
- Secure backend integration
- MongoDB database storage
- Dynamic routing using Next.js App Router
- Responsive and clean UI
- API routes for handling data

---

## 🛠 Tech Stack

- Frontend: Next.js 14, React
- Backend: Next.js API Routes
- Database: MongoDB
- Styling: CSS / Tailwind (if used)
- Deployment: Vercel compatible

---

## ⚙️ How It Works

1. User creates a fundraising campaign.
2. Campaign details are stored in MongoDB.
3. Other users can view campaigns.
4. Users can contribute funds (integration ready for payment gateway).
5. Campaign data updates dynamically.

---

## 🔧 Installation & Setup

1. Clone the repository

   git clone https://github.com/your-username/Mujhe-Funds-Do.git  
   cd Mujhe-Funds-Do  

2. Install dependencies

   npm install  

3. Create a .env.local file in the root directory:

   MONGODB_URI=your_mongodb_connection_string

4. Run the development server

   npm run dev  

Open http://localhost:3000

---

## 📌 API Endpoints

Example:

POST /api/create  
Create a new campaign

GET /api/campaigns  
Fetch all campaigns

---

## 🌍 Deployment

Deploy easily on Vercel or any Node.js hosting platform.  
Configure environment variables in the deployment dashboard before deploying.

---

## 📈 Future Improvements

- Payment gateway integration (Razorpay/Stripe)
- User authentication & dashboard
- Campaign progress tracking
- Donation history
- Admin panel
- Campaign approval system

---

## 👨‍💻 Author

Developed as a full-stack crowdfunding project using Next.js and MongoDB.

---

## 📜 License

This project is open-source under the MIT License.
