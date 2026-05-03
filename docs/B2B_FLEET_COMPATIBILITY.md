# B2B & Fleet Compatibility System

This file documents the rules, features, and workflows for B2B customers and Fleet management within the Compatibility Engine.

It covers how large businesses, garages, companies, and fleet operators can manage multiple vehicles, receive custom compatibility results, and benefit from specialized tools.
---

## 1. Account Structure & Types

### 1.1 Supported B2B Account Types
The system must support the following types of B2B accounts:

- Small independent garages
- Multi-branch mechanic shops and service centers (including paint shops, body shops, and spare parts stores)
- Large fleet companies (bus fleets, hospital fleets, taxi fleets, delivery fleets, logistics companies)
- Rental companies (cars, trucks, buses, vans, motorcycles, bicycles, trailers, and RVs)
- Dealerships and multi-branch dealerships (including those with integrated workshops and parts stores)
- Emergency and public service fleets (ambulances, fire departments, police)
- Construction and heavy equipment fleets
- Government and municipal fleets
- Educational institutions (school bus fleets, university vehicle fleets)
- Corporate and private company fleets

### 1.2 B2B Account Levels
The system must support different levels of B2B accounts based on the following criteria:

- Size of the business
- Total number of vehicles managed
- Volume of sales and repeat purchases
- Number of bookings and service history
- Private vs non-private / commercial status

Recommended account levels include:
- **Basic B2B**
- **Professional Fleet**
- **Enterprise Fleet**
- **Government / Public Sector**

Each level can have different features, pricing, and limits. The Admin must be able to adjust these levels flexibly.

### 1.3 Sub-Accounts & Branch Management
B2B accounts must be able to create multiple sub-accounts. This allows one main company to manage different branches, departments, or locations under a single main account while maintaining separate permissions and visibility where needed.

## 2. Vehicle Management

### 2.1 Adding & Managing Vehicles
Fleet customers must be able to add and manage vehicles using multiple methods:

- Adding vehicles one by one manually
- Uploading a list of vehicles using CSV or Excel files
- Connecting directly to their own vehicle management system through an approved API

Any API integration must first go through approval and testing by Autopro staff before activation.

### 2.2 Vehicle Profiles
Each vehicle in a fleet must have its own separate profile with full individual history. The system must **not** group all fleet vehicles under one shared history. Every vehicle is treated independently.

### 2.3 Vehicle Grouping
Fleet managers must be able to create flexible groups of vehicles (e.g., “Delivery Vans”, “Executive Cars”, “Heavy Trucks”, “Ambulances”). Grouping must be fully automated and customizable by the fleet account.

## 3. Compatibility & Ordering Features

### 3.1 B2B-Specific Compatibility Experience
The Compatibility Engine must behave differently for B2B and Fleet users by showing:

- Bulk pricing and volume discounts
- Installation options and service packages
- Delivery to multiple locations or warehouses
- Clear comparison between normal pricing per vehicle and fleet program savings

### 3.2 Standard Part Lists
Fleet customers must be able to create “Standard Part Lists” — pre-approved lists of parts that are compatible with specific vehicle groups (e.g., all Toyota Corollas in the fleet). These lists must be fully flexible and automated.

### 3.3 Order Approval Workflow
The system must allow fleet managers to approve or reject orders placed by their employees. This approval process must be simple, fully automated, and flexible according to the company’s internal structure.

## 4. Permissions & Access

### 4.1 Internal Permission Levels
B2B/Fleet accounts must support customizable permission levels such as:

- Fleet Manager
- Procurement Officer
- Mechanic / Technician
- Accountant
- Viewer / Read-only

The system must offer two options:
- Use Autopro’s standard permission templates
- Create fully custom roles based on the company’s own structure

Permissions must be fully flexible — the account owner can add, remove, or modify roles at any time.

### 4.2 Role-Based Information Visibility
Different employees within the same fleet company must see different information based on their role. For example:

- Mechanics see technical specifications and compatibility details
- Accountants see pricing, invoices, and payment history
- Managers see full overview and approval tools

This visibility must be fully automated and based on the roles the user defines.

### 4.3 Internal Staff Permissions System
Fleet accounts must have their own internal “Staff Permissions” system similar to Autopro’s main platform. This allows fleet companies to manage access and responsibilities for their own team members independently.
