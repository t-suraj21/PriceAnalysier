Price Analysis & Product Tracking Platform

🚀 Features
For Users
🔍 Search Products via API

📌 Add to Watchlist and track price changes

📊 Compare Prices across multiple websites

👤 User Profile management

For Admins
📂 Manage Users

🛍 Manage Products

📈 Price Analysis Dashboard

📂 Project Structure
bash
Copy
Edit
frontend/
│── 📂 src/
│   ├── 📂 components/      # Reusable components (Navbar, Sidebar, ProductCard, Loader, ProtectedRoute)
│   ├── 📂 pages/           # Pages for User and Admin
│   ├── 📂 layouts/         # Layouts for User and Admin
│   ├── 📂 hooks/           # Custom hooks (Authentication, Fetch)
│   ├── 📂 context/         # Global state (AuthContext)
│   ├── 📂 utils/           # Helper functions (API calls, formatting)
│   ├── 📂 assets/          # Images, logos, placeholders
│   ├── App.js              # Main app file
│   ├── index.js            # Entry point
│   ├── routes.js           # All route definitions
│── package.json
│── tailwind.config.js
│── .env
⚙️ Tech Stack
Frontend: React.js, Tailwind CSS, React Router

State Management: Context API

API Calls: Fetch API / Axios

Authentication: JWT-based (Protected Routes)

Icons: Heroicons / React Icons

🛠 Installation & Setup
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/techtrack.git
cd techtrack/frontend
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Configure Environment Variables
Create a .env file in the root:

bash
Copy
Edit
REACT_APP_API_BASE_URL=http://localhost:5000/api
4️⃣ Start Development Server
bash
Copy
Edit
npm start
📌 Available Pages
User Pages
Page	Path	Description
Home	/	Product listing & featured products
Search	/search	Search for products
Watchlist	/watchlist	Saved products with price alerts
Compare	/compare	Compare product prices
Profile	/profile	Manage user account

Admin Pages
Page	Path	Description
Dashboard	/admin	Overview stats & reports
Manage Users	/admin/users	Add/remove/manage users
Manage Products	/admin/products	Add/remove/update products
Price Analysis	/admin/analysis	View pricing trends

📦 Scripts
Command	Description
npm start	Runs development server
npm run build	Builds production version
npm run lint	Lints project

📸 Screenshots
Add UI screenshots here after deployment.

📄 License
This project is licensed under the MIT License.