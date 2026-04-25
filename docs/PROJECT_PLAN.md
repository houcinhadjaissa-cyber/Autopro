# Autopro Project Plan

Autopro is a full e-commerce platform for selling car parts online.

## Main goal

Create a professional car parts website where customers can search, browse, and buy parts, while the business owner can manage products, stock, orders, and customers from an admin dashboard.

## Type of website

Autopro will be a multi-layer e-commerce website.

The main layers are:

1. Customer storefront
2. Admin dashboard
3. Backend API
4. Database
5. Payment system
6. Deployment/hosting

---

# 1. Customer Storefront

The storefront is the public website that customers see.

## Storefront pages

### Home page

Purpose:

- Welcome users
- Show popular categories
- Show featured products
- Show search by vehicle
- Show promotions

Possible sections:

- Hero banner
- Search by car
- Popular categories
- Best sellers
- New arrivals
- Trust badges
- Footer

### Product catalog page

Purpose:

- Show all available car parts
- Allow filtering and sorting

Filters may include:

- Category
- Brand
- Vehicle make
- Vehicle model
- Year
- Price range
- Availability
- Rating

### Product details page

Purpose:

- Show full information about one product

Product information may include:

- Product name
- Images
- Price
- Stock status
- Brand
- Part number
- Compatible vehicles
- Description
- Specifications
- Shipping information
- Reviews
- Add to cart button

### Search results page

Purpose:

- Show products based on customer search

Search types:

- Text search
- Part number search
- Vehicle-based search

### Cart page

Purpose:

- Show items the customer wants to buy

Features:

- View cart items
- Increase/decrease quantity
- Remove items
- Show subtotal
- Proceed to checkout

### Checkout page

Purpose:

- Collect order and payment information

Checkout may include:

- Customer information
- Shipping address
- Delivery method
- Payment method
- Order summary

### Customer account pages

Purpose:

- Let customers manage their profile and orders

Pages may include:

- Sign up
- Login
- My account
- Order history
- Saved addresses
- Wishlist

---

# 2. Admin Dashboard

The admin dashboard is private and used by the business owner/staff.

## Admin pages

### Admin login

Purpose:

- Secure access to admin area

### Admin home/dashboard

Purpose:

- Show business overview

Possible information:

- Total sales
- New orders
- Low stock products
- Recent customers
- Recent orders

### Products management

Purpose:

- Add, edit, and remove products

Product fields may include:

- Name
- Description
- Category
- Brand
- Price
- Stock quantity
- Images
- SKU
- Part number
- Compatible vehicles
- Specifications

### Categories management

Purpose:

- Manage product categories

Examples:

- Engine parts
- Brake system
- Suspension
- Electrical
- Filters
- Tires
- Body parts
- Interior accessories

### Inventory management

Purpose:

- Track stock levels

Features:

- Stock quantity
- Low stock alerts
- Out of stock status
- Restock notes

### Orders management

Purpose:

- View and process customer orders

Order statuses:

- Pending
- Paid
- Processing
- Shipped
- Delivered
- Cancelled
- Refunded

### Customers management

Purpose:

- View customers and their order history

### Vehicle compatibility management

Purpose:

- Manage which parts fit which vehicles

Vehicle data may include:

- Make
- Model
- Year
- Engine
- Trim

---

# 3. Backend API

The backend API connects the website, admin dashboard, database, and payment system.

## API responsibilities

The API will handle:

- Products
- Categories
- Vehicle compatibility
- Users
- Authentication
- Cart
- Orders
- Payments
- Admin actions
- Inventory

## Example API areas

- Product API
- Category API
- User API
- Auth API
- Cart API
- Order API
- Payment API
- Admin API

---

# 4. Database

The database stores the website information.

## Main database tables/collections

Possible database sections:

- Users
- Products
- Categories
- Brands
- Vehicles
- Product compatibility
- Carts
- Orders
- Order items
- Payments
- Inventory
- Reviews

---

# 5. Payments

The website will eventually need a payment provider.

Recommended option:

- Stripe

Payment features may include:

- Card payments
- Payment confirmation
- Refunds
- Payment status tracking

---

# 6. Hosting and deployment

The website will eventually be placed online.

Possible hosting tools:

- Vercel for frontend
- Render or Railway for backend
- Supabase, Neon, or Railway for PostgreSQL database

Final choices will be made later.

---

# Development phases

## Phase 1: Project setup

- Create GitHub repository
- Create README
- Create project documentation
- Create folder structure
- Choose technology stack

## Phase 2: Storefront prototype

- Build homepage
- Build product listing page
- Build product details page
- Add sample products

## Phase 3: Cart and checkout prototype

- Add cart
- Add checkout page
- Save orders in test mode

## Phase 4: Backend and database

- Create API
- Connect database
- Store real products and orders

## Phase 5: Admin dashboard

- Add admin login
- Add product management
- Add order management
- Add inventory management

## Phase 6: Payments

- Connect Stripe
- Test payments
- Save payment status

## Phase 7: Deployment

- Deploy website online
- Test on phone and desktop
- Fix issues
- Prepare launch

---

# Current next step

After this plan is created, the next step is to create the basic folder structure for the project.
