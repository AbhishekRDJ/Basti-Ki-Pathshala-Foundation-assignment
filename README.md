# Volunteer Registration App
# For accessing the admin dashboard:
## - **Username**: `Admin`
## - **Password**: `Admin`
  
A full-stack MERN application for managing volunteer registrations with a public registration form and an admin dashboard for managing applicants.

## 📋 Project Overview


This application consists of three main components:
- **Public Registration Form**: Allows volunteers to register by submitting their details, skills, and motivation
- **Admin Dashboard**: Secure interface for administrators to view and manage volunteer applications
- **REST API Backend**: Node.js/Express server with MongoDB for data persistence and JWT authentication

The system enables organizations to collect volunteer applications efficiently while providing administrators with tools to review and manage submissions.

## 🛠 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React** - User interface library
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

### Architecture
- **User App**: Public-facing registration form
- **Admin App**: Protected dashboard for managing applications
- **API Server**: Centralized backend serving both applications

## ✨ Features

### Public Registration
- User-friendly registration form
- Field validation (name, email, skills, motivation)
- Real-time form submission feedback
- Responsive design for all devices

### Admin Dashboard
- Secure login system with JWT authentication
- View all volunteer applications in a table format
- Click on any row to view detailed motivation
- Search and filter capabilities
- Logout functionality with session management

### API Endpoints
- `POST /api/applicants` - Submit volunteer registration
- `POST /api/auth/login` - Admin authentication
- `GET /api/applicants` - Fetch all applications (protected)

## 🔐 Admin Credentials

## 🚀 Local Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### Step 1: Clone the Repository
```bash
git clone git@github.com:AbhishekRDJ/Basti-Ki-Pathshala-Foundation-assignment.git
cd volunteer-registration-app
```
# Terminal 1: Start MongoDB (if using local installation)
mongod

# Terminal 2: Start Backend Server
``` bash
cd server
npm run dev
# or
pnpm run dev
``` 

# Terminal 3: Start User Frontend
``` bash
cd user
npm run dev
# or
pnpm run dev
``` 

# Terminal 4: Start Admin Frontend 
``` bash
cd admin

npm run dev
# or
pnpm run dev
```
### Access the Applications
- **User Registration**: http://localhost:5173
- **Admin Dashboard**: http://localhost:5174
- **API Server**: http://localhost:5000

## 🔧 Environment Variables

### Backend (.env)
| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/volunteer-app` |
| `ADMIN_USER` | Admin username | `Admin` |
| `ADMIN_PASS` | Admin password | `Admin` |
| `JWT_SECRET` | Secret key for JWT signing | `your-super-secret-jwt-key` |
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment mode | `development` |

### Frontend (.env)
| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_API_URL` | Backend API base URL | `http://localhost:5000` |

## 🧪 Testing with Postman

### 1. Admin Login
```http
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "username": "Admin",
  "password": "Admin"
}
```

**Expected Response:**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 2. Submit Volunteer Registration
```http
POST http://localhost:5000/api/applicants
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "skills": ["JavaScript", "React", "Node.js"],
  "motivation": "I want to contribute to meaningful projects and help the community."
}
```

### 3. Fetch All Applicants (Protected)
```http
GET http://localhost:5000/api/applicants
Authorization: Bearer YOUR_JWT_TOKEN_HERE
```

### Postman Collection
You can import this collection for quick testing:
```json
{
  "info": {
    "name": "Volunteer Registration API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Admin Login",
      "request": {
        "method": "POST",
        "header": [{"key": "Content-Type", "value": "application/json"}],
        "body": {
          "mode": "raw",
          "raw": "{\"username\":\"Admin\",\"password\":\"Admin\"}"
        },
        "url": "{{baseUrl}}/api/auth/login"
      }
    }
  ],
  "variable": [
    {
      "key": "baseUrl",
      "value": "http://localhost:5000"
    }
  ]
}
```

## 🌐 Deployment to Cloud

### Backend Deployment (Heroku/Render)

#### Option A: Heroku
```bash
# Install Heroku CLI and login
heroku login

# Create new Heroku app
heroku create your-volunteer-app-api

# Set environment variables
heroku config:set MONGODB_URI="your-mongodb-atlas-uri"
heroku config:set ADMIN_USER="Admin"
heroku config:set ADMIN_PASS="Admin"
heroku config:set JWT_SECRET="your-production-jwt-secret"
heroku config:set NODE_ENV="production"

# Deploy
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

#### Option B: Render
1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables in Render dashboard:
   - `MONGODB_URI`
   - `ADMIN_USER=Admin`
   - `ADMIN_PASS=Admin`
   - `JWT_SECRET`
   - `NODE_ENV=production`

### Frontend Deployment (Vercel/Netlify)

#### User App - Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to user frontend
cd frontend-user

# Update environment variable
echo "REACT_APP_API_URL=https://your-volunteer-app-api.herokuapp.com" > .env

# Deploy
vercel --prod
```

#### Admin App - Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Navigate to admin frontend
cd frontend-admin

# Build the app
npm run build

# Deploy
netlify deploy --prod --dir=build

# Set environment variable in Netlify dashboard
# REACT_APP_API_URL=https://your-volunteer-app-api.herokuapp.com
```

### MongoDB Atlas Setup
1. Create account at [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a new cluster
3. Create database user
4. Get connection string
5. Update `MONGODB_URI` in your environment variables

## 🛠 Troubleshooting & FAQs

### Common Issues

#### 1. CORS Errors
**Error**: `Access to fetch at 'API_URL' from origin 'FRONTEND_URL' has been blocked by CORS policy`

**Solution**: 
- Ensure CORS is properly configured in your backend
- Check that your frontend URL is allowed in CORS settings
- Verify API URL is correct in frontend environment variables

```javascript
// backend/server.js
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'https://your-frontend-domain.com'],
  credentials: true
}));
```

#### 2. JWT Token Invalid
**Error**: `Invalid token` or `401 Unauthorized`

**Solution**:
- Check that JWT_SECRET is the same across environments
- Ensure token is being sent in Authorization header
- Verify token hasn't expired

#### 3. MongoDB Connection Failed
**Error**: `MongoNetworkError` or connection timeout

**Solution**:
- Check MongoDB URI format
- Ensure MongoDB service is running (local) or accessible (Atlas)
- Verify network access in MongoDB Atlas
- Check firewall settings

#### 4. Environment Variables Not Loading
**Error**: Variables showing as `undefined`

**Solution**:
- Ensure `.env` file is in the correct directory
- Check `.env` file syntax (no spaces around `=`)
- Restart development server after changing `.env`
- For React apps, ensure variables start with `REACT_APP_`

#### 5. Port Already in Use
**Error**: `EADDRINUSE: address already in use`

**Solution**:
```bash
# Find process using port
lsof -ti:5000

# Kill process
kill -9 <PID>

# Or use different port
PORT=5001 npm start
```

### Deployment Issues

#### 1. Build Failures
- Check Node.js version compatibility
- Ensure all dependencies are in `package.json`
- Review build logs for specific errors

#### 2. Environment Variables in Production
- Double-check all environment variables are set in deployment platform
- Ensure production API URLs are correct
- Verify MongoDB Atlas IP whitelist includes deployment platform

#### 3. HTTPS/HTTP Mixed Content
- Ensure all API calls use HTTPS in production
- Update CORS settings for production domains
- Check for hardcoded HTTP URLs

### Performance Optimization

1. **Database Indexing**:
```javascript
// Add indexes for better query performance
db.applicants.createIndex({ "email": 1 })
db.applicants.createIndex({ "appliedAt": -1 })
```

2. **Frontend Optimization**:
- Implement pagination for large datasets
- Add loading states for better UX
- Optimize images and assets

3. **Backend Optimization**:
- Implement request rate limiting
- Add request/response compression
- Use connection pooling for MongoDB

### Security Best Practices

1. **JWT Security**:
- Use strong, unique JWT secrets
- Implement token expiration
- Consider refresh token mechanism

2. **Input Validation**:
- Sanitize all user inputs
- Implement proper email validation
- Add rate limiting for form submissions

3. **Environment Security**:
- Never commit `.env` files
- Use different secrets for different environments
- Regularly rotate JWT secrets

### Getting Help

If you encounter issues not covered here:

1. Check the [Issues](https://github.com/yourusername/volunteer-registration-app/issues) page
2. Search [Stack Overflow](https://stackoverflow.com) for similar problems
3. Review official documentation:
   - [Express.js](https://expressjs.com/)
   - [React](https://reactjs.org/)
   - [MongoDB](https://docs.mongodb.com/)
   - [Mongoose](https://mongoosejs.com/)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@yourorganization.com or create an issue in the GitHub repository.
