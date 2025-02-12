# SadikVerse - Personal Portfolio

SadikVerse is a **modern, responsive, and professional** portfolio website built with **Next.js, TypeScript, Tailwind CSS, and ShadCN UI**. It features **dark & light mode, project showcases, blogs, authentication, and an admin dashboard**.

🔗 **Live Site:** [SadikVerse](https://sadikverse.vercel.app/)  
💻 **Frontend Repo:** [GitHub](https://github.com/SadikRa/portfolio-sadikVerse.git)  
⚙️ **Backend Repo:** [GitHub](https://github.com/SadikRa/portfolio-sadikVerse-server.git)

---

## 🚀 **Getting Started**

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/SadikRa/portfolio-sadikVerse.git
cd portfolio-sadikVerse

2️. Install Dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install

3. Set Up Environment Variables

Create a .env.local file in the root directory and add the following:

GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_secret

GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_secret

NEXTAUTH_SECRET=your_nextauth_secret

BACKEND_URL=https://portfolio-server-kappa-ashen.vercel.app


Features

✅ Modern & Responsive UI - Built with Next.js, Tailwind CSS, and ShadCN UI
✅ Dark & Light Mode - Seamless theme switching for better accessibility
✅ Project Showcase - Display projects with full-page previews & scrollable frames
✅ Blog System - CRUD operations for creating and managing developer blogs
✅ Authentication - Login with GitHub & Google via NextAuth.js
✅ Admin Dashboard - Manage blogs & projects with secured access
✅ Optimized Performance - Uses Next.js Image Optimization for fast loading
✅ SEO Ready - Metadata, OG tags, and structured data for better search rankings


Deployment

The project is deployed using Vercel. You can deploy your own instance with: 🔗 Deploy on Vercel



---

### **🔹 What’s Improved?**
✅ **Organized sections** with clear headers
✅ **Installation guide** with `npm install` and `.env` setup
✅ **Project features** explained concisely
✅ **Deployment instructions** with Vercel

Let me know if you need any edits! 🚀🔥


## file path
📂 Route (app) - Size & First Load JS
├── /                                    41.9 kB         192 kB
├── /_not-found                          154 B           106 kB
├── /api/auth/[...nextauth]              154 B           106 kB
│
├── /blogs
│   ├── /blogs                           1.73 kB         133 kB
│   ├── /blogs/[blogId]                  1.58 kB         129 kB
│
├── /contact                             875 B           106 kB
│
├── /dashboard
│   ├── /dashboard                       176 B           111 kB
│   ├── /dashboard/blog                  2.75 kB         139 kB
│   ├── /dashboard/blog/[blogId]         2.73 kB         156 kB
│   ├── /dashboard/blog/create           2.59 kB         156 kB
│   ├── /dashboard/project               2.78 kB         139 kB
│   ├── /dashboard/project/[projectId]   2.83 kB         157 kB
│   ├── /dashboard/project/create        10.3 kB         182 kB
│
├── /login                               5.28 kB         204 kB
├── /register                            3.9 kB          188 kB
│
├── /project
│   ├── /project                         1.98 kB         134 kB
│   ├── /project/[projectId]             1.8 kB          130 kB
│
📂 First Load JS Shared by All           105 kB
├── chunks/4bd1b696-5e53300bd9539d94.js  53 kB
├── chunks/517-348891d2eb056c22.js       50.4 kB
└── other shared chunks (total)          1.97 kB
```


##  Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** NextAuth (Google, GitHub OAuth), JWT
- **Hosting:** Vercel (Frontend & Backend)