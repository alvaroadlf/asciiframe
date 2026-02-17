export interface WireframeTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  content: string;
}

export const TEMPLATES: WireframeTemplate[] = [
  {
    id: "ios-app",
    name: "iOS App",
    description: "iPhone mobile application layout",
    icon: "📱",
    content: `# My iOS App

## Navigation Bar

[ ← Back ]  Title  [ ••• ]

---

## Profile

![Avatar](avatar.png)

### John Doe
john@example.com

---

## Settings

[x] Push Notifications
[x] Dark Mode
[ ] Location Services
[ ] Analytics

---

## Menu

### Home
View your feed and updates.

### Search
[____________________________]

### Messages
3 unread conversations.

### Profile
Edit your personal information.

---

[ Log Out ]
`,
  },
  {
    id: "android-app",
    name: "Android App",
    description: "Android mobile application layout",
    icon: "🤖",
    content: `# Android App

## Top App Bar

[ ☰ ]  App Title  [ 🔍 ]  [ ⋮ ]

---

## Featured

![Banner](banner.png)

### Welcome Back!
Check out what's new today.

---

## Quick Actions

[ 📷 Camera ]  [ 📁 Files ]  [ 📊 Stats ]

---

## Recent Items

### Document 1.pdf
Modified 2 hours ago

### Photo_2024.jpg
Modified yesterday

### Report.xlsx
Modified 3 days ago

---

## Bottom Navigation

( ) Home
(o) Explore
( ) Library
( ) Profile
`,
  },
  {
    id: "desktop-web",
    name: "Desktop Web",
    description: "Desktop website with sidebar navigation",
    icon: "🖥️",
    content: `# Desktop Web App

## Header

[ Logo ]  Home  Products  About  Contact  [ Sign In ]  [ Sign Up ]

---

## Hero Section

### Build Something Amazing
Start your journey with our powerful platform.

[ Get Started ]  [ Learn More ]

---

## Features

### Fast Performance
Lightning quick load times.

### Secure
Enterprise-grade security.

### Scalable
Grows with your needs.

---

## Newsletter

Subscribe to our newsletter
Email [____________________________]
[ Subscribe ]

---

## Footer

© 2025 Company Name  |  Privacy  |  Terms  |  Contact
`,
  },
  {
    id: "tablet-web",
    name: "Tablet Web",
    description: "Tablet-optimized web layout",
    icon: "📋",
    content: `# Tablet Dashboard

## Top Bar

[ ☰ Menu ]  Dashboard  [ 🔔 ]  [ 👤 ]

---

## Stats Overview

### Users          Revenue         Orders
   12,450         $45,200         1,234

---

## Recent Activity

### New user registration
Sarah joined 5 minutes ago.

### Order #1234 completed
Payment received successfully.

### System update
Version 2.1 deployed.

---

## Quick Actions

[ New Post ]  [ Add User ]  [ Reports ]  [ Settings ]

---

## Data Table

### Name            Email                Status
    John Doe        john@email.com       Active
    Jane Smith      jane@email.com       Active
    Bob Wilson      bob@email.com        Inactive
`,
  },
  {
    id: "vertical-mobile",
    name: "Vertical Mobile",
    description: "Vertical scrolling mobile layout",
    icon: "📲",
    content: `# Mobile App

## Status Bar

9:41 AM                    100%

---

## Header

[ ← ]  Screen Title  [ ⚙ ]

---

## Content Card

![Hero Image](hero.png)

### Article Title
A brief description of the content goes here with some preview text.

[ Read More ]

---

## Form Section

Name
[____________________________]

Email
[____________________________]

Phone
[____________________________]

Message
[____________________________]
[____________________________]
[____________________________]

[ Submit ]

---

## Bottom Tab Bar

(o) Home
( ) Search
( ) Favorites
( ) Profile
`,
  },
  {
    id: "horizontal-tablet",
    name: "Horizontal Tablet",
    description: "Landscape tablet layout with side panel",
    icon: "🔄",
    content: `# Landscape App

## Toolbar

[ ☰ ]  Application Name  [ 🔍 Search... ]  [ 🔔 ]  [ 👤 Admin ]

---

## Sidebar

### Navigation
(o) Dashboard
( ) Projects
( ) Team
( ) Calendar
( ) Documents
( ) Settings

---

## Main Content

### Project Overview

#### Active Projects: 12
#### Completed: 45
#### In Review: 8

---

### Recent Projects

### E-Commerce Redesign
Status: In Progress  |  Due: March 15

### Mobile App v2
Status: Review  |  Due: April 1

### API Integration
Status: Planning  |  Due: May 10

---

[ Create Project ]  [ View All ]
`,
  },
  {
    id: "login-form",
    name: "Login Page",
    description: "User authentication screen",
    icon: "🔐",
    content: `# ASCII Frame

## Welcome Back

Sign in to your account

---

Email
[____________________________]

Password
[____________________________]

[x] Remember me

[ Sign In ]

---

( ) Sign in with Google
( ) Sign in with GitHub
( ) Sign in with Apple

---

Don't have an account?
{Sign up here}(#signup)

---

{Forgot password?}(#reset)
`,
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    description: "Online store product page",
    icon: "🛒",
    content: `# Online Store

## Header

[ 🏠 ]  Categories  Deals  [ 🔍 Search... ]  [ 🛒 Cart (3) ]  [ 👤 ]

---

## Product

![Product Image](product.png)

### Wireless Headphones Pro
$149.99  ~~$199.99~~  25% OFF

### Rating: ★★★★☆ (4.2)
128 reviews

---

## Options

### Color
(o) Black
( ) White
( ) Blue

### Size
( ) Small
(o) Medium
( ) Large

---

## Quantity
[1___]

[ Add to Cart ]  [ Buy Now ]

---

## Description
Premium wireless headphones with noise cancellation.

### Features
[x] Active Noise Cancellation
[x] 30-hour battery life
[x] Bluetooth 5.0
[ ] Wired mode
`,
  },
  {
    id: "dashboard",
    name: "Dashboard",
    description: "Admin dashboard with metrics",
    icon: "📊",
    content: `# Admin Dashboard

## Top Bar

[ ☰ ]  Dashboard  [ 🔍 Search ]  [ 🔔 3 ]  [ 👤 Admin ]

---

## Metrics

### Total Users     Revenue       Orders      Growth
   24,500          $128,400      3,456       +12.5%

---

## Charts Section

### Revenue Over Time
![Chart](revenue-chart.png)

### User Growth
![Chart](user-chart.png)

---

## Recent Orders

### #ORD-001  |  John Doe  |  $245.00  |  Completed
### #ORD-002  |  Jane Smith  |  $189.50  |  Processing
### #ORD-003  |  Bob Wilson  |  $432.00  |  Shipped

---

## Quick Actions

[ Export Report ]  [ Add Product ]  [ Manage Users ]

---

## Activity Feed

### New user registered
2 minutes ago

### Order #1234 shipped
15 minutes ago

### Payment received
1 hour ago
`,
  },
  {
    id: "landing-page",
    name: "Landing Page",
    description: "Marketing landing page layout",
    icon: "🚀",
    content: `# Product Name

## Navigation

Logo  Features  Pricing  About  [ Get Started ]

---

## Hero

### Transform Your Workflow
The all-in-one platform for modern teams.

[ Start Free Trial ]  [ Watch Demo ]

---

## Trusted By

### 10,000+ teams worldwide

---

## Features

### ⚡ Lightning Fast
Built for speed and performance.

### 🔒 Enterprise Security
Bank-level encryption and compliance.

### 🔄 Seamless Integration
Connect with 100+ tools.

### 📊 Advanced Analytics
Data-driven insights at your fingertips.

---

## Pricing

### Free           Pro            Enterprise
   $0/mo          $29/mo         Custom
   5 projects     Unlimited      Unlimited
   1 GB storage   100 GB         Unlimited
   [ Start ]      [ Subscribe ]  [ Contact Us ]

---

## CTA

### Ready to get started?
Email [____________________________]
[ Join Now ]

---

## Footer

© 2025 Product Name  |  Privacy  |  Terms  |  Support
`,
  },
];
