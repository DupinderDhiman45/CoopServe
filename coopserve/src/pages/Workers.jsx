import { Link, useParams } from 'react-router-dom'
import {useState} from 'react'

  export const workers = {

  plumbing: [
  {
    name: "Raj Kumar",
    job: "Plumber",
    specialization: "Pipe Leakage Repair",
    rating: 4.8,
    distance: "1.2 km",
    status: "Available",
    experience: "8 years",
    price: "₹400"
  },
  {
    name: "Amit Sharma",
    job: "Plumber",
    specialization: "Tap & Faucet Repair",
    rating: 4.5,
    distance: "2.5 km",
    status: "Available",
    experience: "5 years",
    price: "₹350"
  },
  {
    name: "Sunil Kumar",
    job: "Plumber",
    specialization: "Bathroom Plumbing",
    rating: 4.2,
    distance: "3.8 km",
    status: "Busy",
    experience: "6 years",
    price: "₹375"
  },
  {
    name: "Deepak Singh",
    job: "Plumber",
    specialization: "Water Tank Installation",
    rating: 4.9,
    distance: "4.1 km",
    status: "Available",
    experience: "10 years",
    price: "₹450"
  },
  {
    name: "Ravi Kumar",
    job: "Plumber",
    specialization: "Drainage Repair",
    rating: 4.1,
    distance: "1.8 km",
    status: "Available",
    experience: "4 years",
    price: "₹300"
  },
  {
    name: "Vijay Sharma",
    job: "Plumber",
    specialization: "Kitchen Plumbing",
    rating: 4.6,
    distance: "5.2 km",
    status: "Available",
    experience: "7 years",
    price: "₹425"
  },
  {
    name: "Mohit Verma",
    job: "Plumber",
    specialization: "Pipe Installation",
    rating: 3.9,
    distance: "2.1 km",
    status: "Busy",
    experience: "3 years",
    price: "₹280"
  },
  {
    name: "Sandeep Kumar",
    job: "Plumber",
    specialization: "Water Connection",
    rating: 4.4,
    distance: "6.3 km",
    status: "Available",
    experience: "5 years",
    price: "₹325"
  },
  {
    name: "Manoj Singh",
    job: "Plumber",
    specialization: "Bathroom Fitting",
    rating: 4.7,
    distance: "3.4 km",
    status: "Available",
    experience: "9 years",
    price: "₹500"
  },
  {
    name: "Pankaj Kumar",
    job: "Plumber",
    specialization: "Water Pressure Repair",
    rating: 4.0,
    distance: "4.7 km",
    status: "Available",
    experience: "4 years",
    price: "₹310"
  },
  {
    name: "Rohit Sharma",
    job: "Plumber",
    specialization: "Pipe Leakage Repair",
    rating: 4.3,
    distance: "2.9 km",
    status: "Busy",
    experience: "6 years",
    price: "₹390"
  },
  {
    name: "Naveen Kumar",
    job: "Plumber",
    specialization: "Water Heater Plumbing",
    rating: 4.8,
    distance: "7.1 km",
    status: "Available",
    experience: "8 years",
    price: "₹550"
  },
  {
    name: "Ashok Singh",
    job: "Plumber",
    specialization: "Drain Cleaning",
    rating: 3.8,
    distance: "1.5 km",
    status: "Available",
    experience: "3 years",
    price: "₹250"
  },
  {
    name: "Karan Verma",
    job: "Plumber",
    specialization: "Kitchen Sink Repair",
    rating: 4.5,
    distance: "5.8 km",
    status: "Available",
    experience: "7 years",
    price: "₹375"
  },
  {
    name: "Anil Kumar",
    job: "Plumber",
    specialization: "Water Tank Repair",
    rating: 4.1,
    distance: "3.2 km",
    status: "Busy",
    experience: "5 years",
    price: "₹350"
  },
  {
    name: "Harish Sharma",
    job: "Plumber",
    specialization: "Bathroom Pipe Repair",
    rating: 4.6,
    distance: "4.4 km",
    status: "Available",
    experience: "8 years",
    price: "₹425"
  },
  {
    name: "Sachin Kumar",
    job: "Plumber",
    specialization: "Main Pipeline Repair",
    rating: 4.9,
    distance: "8.2 km",
    status: "Available",
    experience: "12 years",
    price: "₹600"
  },
  {
    name: "Gaurav Singh",
    job: "Plumber",
    specialization: "Tap Installation",
    rating: 3.7,
    distance: "2.7 km",
    status: "Available",
    experience: "2 years",
    price: "₹275"
  },
  {
    name: "Dinesh Kumar",
    job: "Plumber",
    specialization: "Emergency Plumbing",
    rating: 4.7,
    distance: "6.8 km",
    status: "Available",
    experience: "9 years",
    price: "₹525"
  },
  {
    name: "Arun Sharma",
    job: "Plumber",
    specialization: "General Plumbing",
    rating: 4.0,
    distance: "3.6 km",
    status: "Busy",
    experience: "4 years",
    price: "₹320"
  }
],electrical: [
  {
    name: "Vikas Kumar",
    job: "Electrician",
    specialization: "House Wiring",
    rating: 4.8,
    distance: "1.4 km",
    status: "Available",
    experience: "8 years",
    price: "₹500"
  },
  {
    name: "Manoj Sharma",
    job: "Electrician",
    specialization: "Switch & Socket Repair",
    rating: 4.5,
    distance: "2.3 km",
    status: "Available",
    experience: "6 years",
    price: "₹400"
  },
  {
    name: "Rohit Kumar",
    job: "Electrician",
    specialization: "Fan Installation",
    rating: 4.2,
    distance: "3.7 km",
    status: "Busy",
    experience: "5 years",
    price: "₹350"
  },
  {
    name: "Suresh Singh",
    job: "Electrician",
    specialization: "Electrical Panel Repair",
    rating: 4.9,
    distance: "4.6 km",
    status: "Available",
    experience: "11 years",
    price: "₹650"
  },
  {
    name: "Pankaj Kumar",
    job: "Electrician",
    specialization: "Light Installation",
    rating: 4.1,
    distance: "1.9 km",
    status: "Available",
    experience: "4 years",
    price: "₹300"
  },
  {
    name: "Aakash Sharma",
    job: "Electrician",
    specialization: "Inverter Installation",
    rating: 4.6,
    distance: "5.1 km",
    status: "Available",
    experience: "7 years",
    price: "₹550"
  },
  {
    name: "Ravi Singh",
    job: "Electrician",
    specialization: "Short Circuit Repair",
    rating: 3.9,
    distance: "2.8 km",
    status: "Busy",
    experience: "3 years",
    price: "₹325"
  },
  {
    name: "Deepak Kumar",
    job: "Electrician",
    specialization: "Meter Installation",
    rating: 4.4,
    distance: "6.2 km",
    status: "Available",
    experience: "6 years",
    price: "₹450"
  },
  {
    name: "Mohit Sharma",
    job: "Electrician",
    specialization: "AC Wiring",
    rating: 4.7,
    distance: "3.3 km",
    status: "Available",
    experience: "9 years",
    price: "₹600"
  },
  {
    name: "Sandeep Kumar",
    job: "Electrician",
    specialization: "Home Electrical Repair",
    rating: 4.0,
    distance: "4.2 km",
    status: "Available",
    experience: "4 years",
    price: "₹375"
  },
  {
    name: "Naveen Singh",
    job: "Electrician",
    specialization: "Geyser Installation",
    rating: 4.3,
    distance: "2.6 km",
    status: "Busy",
    experience: "5 years",
    price: "₹425"
  },
  {
    name: "Karan Kumar",
    job: "Electrician",
    specialization: "Ceiling Fan Repair",
    rating: 4.8,
    distance: "7.3 km",
    status: "Available",
    experience: "10 years",
    price: "₹475"
  },
  {
    name: "Anil Sharma",
    job: "Electrician",
    specialization: "Doorbell Installation",
    rating: 3.8,
    distance: "1.6 km",
    status: "Available",
    experience: "2 years",
    price: "₹250"
  },
  {
    name: "Harish Kumar",
    job: "Electrician",
    specialization: "Wiring Replacement",
    rating: 4.5,
    distance: "5.7 km",
    status: "Available",
    experience: "8 years",
    price: "₹575"
  },
  {
    name: "Sachin Singh",
    job: "Electrician",
    specialization: "MCB Repair",
    rating: 4.1,
    distance: "3.1 km",
    status: "Busy",
    experience: "5 years",
    price: "₹400"
  },
  {
    name: "Gaurav Kumar",
    job: "Electrician",
    specialization: "LED Light Installation",
    rating: 4.6,
    distance: "4.8 km",
    status: "Available",
    experience: "7 years",
    price: "₹350"
  },
  {
    name: "Dinesh Sharma",
    job: "Electrician",
    specialization: "Emergency Electrical Repair",
    rating: 4.9,
    distance: "8.4 km",
    status: "Available",
    experience: "12 years",
    price: "₹700"
  },
  {
    name: "Arun Kumar",
    job: "Electrician",
    specialization: "Socket Installation",
    rating: 3.7,
    distance: "2.1 km",
    status: "Available",
    experience: "2 years",
    price: "₹275"
  },
  {
    name: "Vijay Singh",
    job: "Electrician",
    specialization: "Solar Panel Wiring",
    rating: 4.7,
    distance: "6.9 km",
    status: "Available",
    experience: "9 years",
    price: "₹625"
  },
  {
    name: "Ashok Kumar",
    job: "Electrician",
    specialization: "General Electrical Repair",
    rating: 4.0,
    distance: "3.5 km",
    status: "Busy",
    experience: "4 years",
    price: "₹330"
  }
],carpentry: [
  {
    name: "Ramesh Kumar",
    job: "Carpenter",
    specialization: "Furniture Repair",
    rating: 4.8,
    distance: "1.3 km",
    status: "Available",
    experience: "9 years",
    price: "₹450"
  },
  {
    name: "Amit Verma",
    job: "Carpenter",
    specialization: "Door Repair",
    rating: 4.5,
    distance: "2.4 km",
    status: "Available",
    experience: "6 years",
    price: "₹350"
  },
  {
    name: "Sunil Sharma",
    job: "Carpenter",
    specialization: "Wooden Furniture",
    rating: 4.2,
    distance: "3.6 km",
    status: "Busy",
    experience: "5 years",
    price: "₹400"
  },
  {
    name: "Deepak Kumar",
    job: "Carpenter",
    specialization: "Modular Furniture",
    rating: 4.9,
    distance: "4.5 km",
    status: "Available",
    experience: "11 years",
    price: "₹650"
  },
  {
    name: "Ravi Singh",
    job: "Carpenter",
    specialization: "Table & Chair Repair",
    rating: 4.1,
    distance: "1.7 km",
    status: "Available",
    experience: "4 years",
    price: "₹300"
  },
  {
    name: "Vijay Kumar",
    job: "Carpenter",
    specialization: "Kitchen Cabinets",
    rating: 4.6,
    distance: "5.2 km",
    status: "Available",
    experience: "8 years",
    price: "₹550"
  },
  {
    name: "Mohit Sharma",
    job: "Carpenter",
    specialization: "Wood Polishing",
    rating: 3.9,
    distance: "2.8 km",
    status: "Busy",
    experience: "3 years",
    price: "₹275"
  },
  {
    name: "Sandeep Kumar",
    job: "Carpenter",
    specialization: "Bed Repair",
    rating: 4.4,
    distance: "6.1 km",
    status: "Available",
    experience: "6 years",
    price: "₹425"
  },
  {
    name: "Manoj Singh",
    job: "Carpenter",
    specialization: "Wardrobe Installation",
    rating: 4.7,
    distance: "3.4 km",
    status: "Available",
    experience: "9 years",
    price: "₹600"
  },
  {
    name: "Pankaj Sharma",
    job: "Carpenter",
    specialization: "Window Repair",
    rating: 4.0,
    distance: "4.3 km",
    status: "Available",
    experience: "4 years",
    price: "₹325"
  },
  {
    name: "Rohit Kumar",
    job: "Carpenter",
    specialization: "Door Installation",
    rating: 4.3,
    distance: "2.6 km",
    status: "Busy",
    experience: "5 years",
    price: "₹450"
  },
  {
    name: "Naveen Singh",
    job: "Carpenter",
    specialization: "Office Furniture",
    rating: 4.8,
    distance: "7.2 km",
    status: "Available",
    experience: "10 years",
    price: "₹700"
  },
  {
    name: "Ashok Kumar",
    job: "Carpenter",
    specialization: "Shelf Installation",
    rating: 3.8,
    distance: "1.5 km",
    status: "Available",
    experience: "2 years",
    price: "₹250"
  },
  {
    name: "Karan Sharma",
    job: "Carpenter",
    specialization: "Wooden Flooring",
    rating: 4.5,
    distance: "5.8 km",
    status: "Available",
    experience: "7 years",
    price: "₹575"
  },
  {
    name: "Anil Singh",
    job: "Carpenter",
    specialization: "Furniture Assembly",
    rating: 4.1,
    distance: "3.2 km",
    status: "Busy",
    experience: "5 years",
    price: "₹350"
  },
  {
    name: "Harish Kumar",
    job: "Carpenter",
    specialization: "Wooden Partition",
    rating: 4.6,
    distance: "4.7 km",
    status: "Available",
    experience: "8 years",
    price: "₹500"
  },
  {
    name: "Sachin Verma",
    job: "Carpenter",
    specialization: "Custom Furniture",
    rating: 4.9,
    distance: "8.1 km",
    status: "Available",
    experience: "12 years",
    price: "₹750"
  },
  {
    name: "Gaurav Kumar",
    job: "Carpenter",
    specialization: "Small Woodwork",
    rating: 3.7,
    distance: "2.2 km",
    status: "Available",
    experience: "2 years",
    price: "₹225"
  },
  {
    name: "Dinesh Sharma",
    job: "Carpenter",
    specialization: "Emergency Furniture Repair",
    rating: 4.7,
    distance: "6.7 km",
    status: "Available",
    experience: "9 years",
    price: "₹525"
  },
  {
    name: "Arun Singh",
    job: "Carpenter",
    specialization: "General Carpentry",
    rating: 4.0,
    distance: "3.5 km",
    status: "Busy",
    experience: "4 years",
    price: "₹325"
  }
],cleaning: [
  {
    name: "Rajesh Kumar",
    job: "Cleaner",
    specialization: "Home Deep Cleaning",
    rating: 4.8,
    distance: "1.2 km",
    status: "Available",
    experience: "7 years",
    price: "₹450"
  },
  {
    name: "Amit Sharma",
    job: "Cleaner",
    specialization: "Kitchen Cleaning",
    rating: 4.5,
    distance: "2.6 km",
    status: "Available",
    experience: "5 years",
    price: "₹300"
  },
  {
    name: "Sunil Kumar",
    job: "Cleaner",
    specialization: "Bathroom Cleaning",
    rating: 4.1,
    distance: "3.4 km",
    status: "Busy",
    experience: "4 years",
    price: "₹275"
  },
  {
    name: "Deepak Singh",
    job: "Cleaner",
    specialization: "Full House Cleaning",
    rating: 4.9,
    distance: "4.8 km",
    status: "Available",
    experience: "10 years",
    price: "₹600"
  },
  {
    name: "Ravi Kumar",
    job: "Cleaner",
    specialization: "Floor Cleaning",
    rating: 4.2,
    distance: "1.7 km",
    status: "Available",
    experience: "3 years",
    price: "₹250"
  },
  {
    name: "Vijay Sharma",
    job: "Cleaner",
    specialization: "Sofa Cleaning",
    rating: 4.6,
    distance: "5.3 km",
    status: "Available",
    experience: "6 years",
    price: "₹500"
  },
  {
    name: "Mohit Verma",
    job: "Cleaner",
    specialization: "Window Cleaning",
    rating: 3.9,
    distance: "2.3 km",
    status: "Busy",
    experience: "2 years",
    price: "₹225"
  },
  {
    name: "Sandeep Kumar",
    job: "Cleaner",
    specialization: "Office Cleaning",
    rating: 4.4,
    distance: "6.1 km",
    status: "Available",
    experience: "6 years",
    price: "₹550"
  },
  {
    name: "Manoj Singh",
    job: "Cleaner",
    specialization: "Carpet Cleaning",
    rating: 4.7,
    distance: "3.1 km",
    status: "Available",
    experience: "8 years",
    price: "₹475"
  },
  {
    name: "Pankaj Kumar",
    job: "Cleaner",
    specialization: "Dust Removal",
    rating: 4.0,
    distance: "4.2 km",
    status: "Available",
    experience: "3 years",
    price: "₹275"
  },
  {
    name: "Rohit Sharma",
    job: "Cleaner",
    specialization: "Post-Construction Cleaning",
    rating: 4.3,
    distance: "7.2 km",
    status: "Busy",
    experience: "5 years",
    price: "₹650"
  },
  {
    name: "Naveen Kumar",
    job: "Cleaner",
    specialization: "Kitchen Deep Cleaning",
    rating: 4.8,
    distance: "2.9 km",
    status: "Available",
    experience: "9 years",
    price: "₹525"
  },
  {
    name: "Ashok Singh",
    job: "Cleaner",
    specialization: "Bathroom Deep Cleaning",
    rating: 3.8,
    distance: "1.5 km",
    status: "Available",
    experience: "2 years",
    price: "₹250"
  },
  {
    name: "Karan Verma",
    job: "Cleaner",
    specialization: "Window & Glass Cleaning",
    rating: 4.5,
    distance: "5.7 km",
    status: "Available",
    experience: "7 years",
    price: "₹400"
  },
  {
    name: "Anil Kumar",
    job: "Cleaner",
    specialization: "Garden Cleaning",
    rating: 4.1,
    distance: "3.8 km",
    status: "Busy",
    experience: "4 years",
    price: "₹350"
  },
  {
    name: "Harish Sharma",
    job: "Cleaner",
    specialization: "Commercial Cleaning",
    rating: 4.6,
    distance: "4.5 km",
    status: "Available",
    experience: "8 years",
    price: "₹575"
  },
  {
    name: "Sachin Kumar",
    job: "Cleaner",
    specialization: "Emergency Cleaning",
    rating: 4.9,
    distance: "8.3 km",
    status: "Available",
    experience: "11 years",
    price: "₹700"
  },
  {
    name: "Gaurav Singh",
    job: "Cleaner",
    specialization: "Basic Home Cleaning",
    rating: 3.7,
    distance: "2.0 km",
    status: "Available",
    experience: "2 years",
    price: "₹200"
  },
  {
    name: "Dinesh Kumar",
    job: "Cleaner",
    specialization: "Move-In Cleaning",
    rating: 4.7,
    distance: "6.6 km",
    status: "Available",
    experience: "9 years",
    price: "₹625"
  },
  {
    name: "Arun Sharma",
    job: "Cleaner",
    specialization: "General Cleaning",
    rating: 4.0,
    distance: "3.5 km",
    status: "Busy",
    experience: "4 years",
    price: "₹300"
  }
],painting: [
  {
    name: "Rajesh Kumar",
    job: "Painter",
    specialization: "Interior Wall Painting",
    rating: 4.8,
    distance: "1.4 km",
    status: "Available",
    experience: "8 years",
    price: "₹500"
  },
  {
    name: "Amit Sharma",
    job: "Painter",
    specialization: "Exterior Painting",
    rating: 4.5,
    distance: "2.7 km",
    status: "Available",
    experience: "6 years",
    price: "₹450"
  },
  {
    name: "Sunil Singh",
    job: "Painter",
    specialization: "Room Painting",
    rating: 4.2,
    distance: "3.5 km",
    status: "Busy",
    experience: "5 years",
    price: "₹350"
  },
  {
    name: "Deepak Kumar",
    job: "Painter",
    specialization: "House Painting",
    rating: 4.9,
    distance: "4.8 km",
    status: "Available",
    experience: "12 years",
    price: "₹700"
  },
  {
    name: "Ravi Sharma",
    job: "Painter",
    specialization: "Wall Texture Painting",
    rating: 4.1,
    distance: "1.8 km",
    status: "Available",
    experience: "4 years",
    price: "₹400"
  },
  {
    name: "Vijay Kumar",
    job: "Painter",
    specialization: "Ceiling Painting",
    rating: 4.6,
    distance: "5.3 km",
    status: "Available",
    experience: "7 years",
    price: "₹550"
  },
  {
    name: "Mohit Verma",
    job: "Painter",
    specialization: "Door & Window Painting",
    rating: 3.9,
    distance: "2.2 km",
    status: "Busy",
    experience: "3 years",
    price: "₹300"
  },
  {
    name: "Sandeep Singh",
    job: "Painter",
    specialization: "Commercial Painting",
    rating: 4.4,
    distance: "6.2 km",
    status: "Available",
    experience: "7 years",
    price: "₹650"
  },
  {
    name: "Manoj Kumar",
    job: "Painter",
    specialization: "Bedroom Painting",
    rating: 4.7,
    distance: "3.1 km",
    status: "Available",
    experience: "9 years",
    price: "₹475"
  },
  {
    name: "Pankaj Sharma",
    job: "Painter",
    specialization: "Kitchen Painting",
    rating: 4.0,
    distance: "4.4 km",
    status: "Available",
    experience: "4 years",
    price: "₹325"
  },
  {
    name: "Rohit Singh",
    job: "Painter",
    specialization: "Waterproof Painting",
    rating: 4.3,
    distance: "2.9 km",
    status: "Busy",
    experience: "6 years",
    price: "₹600"
  },
  {
    name: "Naveen Kumar",
    job: "Painter",
    specialization: "Decorative Painting",
    rating: 4.8,
    distance: "7.1 km",
    status: "Available",
    experience: "10 years",
    price: "₹750"
  },
  {
    name: "Ashok Sharma",
    job: "Painter",
    specialization: "Basic Wall Painting",
    rating: 3.8,
    distance: "1.5 km",
    status: "Available",
    experience: "2 years",
    price: "₹250"
  },
  {
    name: "Karan Singh",
    job: "Painter",
    specialization: "Furniture Painting",
    rating: 4.5,
    distance: "5.7 km",
    status: "Available",
    experience: "8 years",
    price: "₹425"
  },
  {
    name: "Anil Kumar",
    job: "Painter",
    specialization: "Wood Painting",
    rating: 4.1,
    distance: "3.8 km",
    status: "Busy",
    experience: "5 years",
    price: "₹375"
  },
  {
    name: "Harish Sharma",
    job: "Painter",
    specialization: "Office Painting",
    rating: 4.6,
    distance: "4.6 km",
    status: "Available",
    experience: "8 years",
    price: "₹575"
  },
  {
    name: "Sachin Kumar",
    job: "Painter",
    specialization: "Premium Interior Painting",
    rating: 4.9,
    distance: "8.2 km",
    status: "Available",
    experience: "13 years",
    price: "₹850"
  },
  {
    name: "Gaurav Singh",
    job: "Painter",
    specialization: "Small Room Painting",
    rating: 3.7,
    distance: "2.1 km",
    status: "Available",
    experience: "2 years",
    price: "₹275"
  },
  {
    name: "Dinesh Kumar",
    job: "Painter",
    specialization: "Emergency Paint Repair",
    rating: 4.7,
    distance: "6.8 km",
    status: "Available",
    experience: "9 years",
    price: "₹525"
  },
  {
    name: "Arun Sharma",
    job: "Painter",
    specialization: "General Painting",
    rating: 4.0,
    distance: "3.6 km",
    status: "Busy",
    experience: "4 years",
    price: "₹350"
  }
],
appliance: [
  {
    name: "Raj Kumar",
    job: "Appliance Repair Technician",
    specialization: "Washing Machine Repair",
    rating: 4.8,
    distance: "1.3 km",
    status: "Available",
    experience: "8 years",
    price: "₹450"
  },
  {
    name: "Amit Sharma",
    job: "Appliance Repair Technician",
    specialization: "Refrigerator Repair",
    rating: 4.5,
    distance: "2.6 km",
    status: "Available",
    experience: "6 years",
    price: "₹500"
  },
  {
    name: "Sunil Kumar",
    job: "Appliance Repair Technician",
    specialization: "Microwave Repair",
    rating: 4.2,
    distance: "3.7 km",
    status: "Busy",
    experience: "5 years",
    price: "₹350"
  },
  {
    name: "Deepak Singh",
    job: "Appliance Repair Technician",
    specialization: "AC Repair",
    rating: 4.9,
    distance: "4.5 km",
    status: "Available",
    experience: "11 years",
    price: "₹700"
  },
  {
    name: "Ravi Kumar",
    job: "Appliance Repair Technician",
    specialization: "Cooler Repair",
    rating: 4.1,
    distance: "1.8 km",
    status: "Available",
    experience: "4 years",
    price: "₹300"
  },
  {
    name: "Vijay Sharma",
    job: "Appliance Repair Technician",
    specialization: "TV Repair",
    rating: 4.6,
    distance: "5.2 km",
    status: "Available",
    experience: "7 years",
    price: "₹550"
  },
  {
    name: "Mohit Verma",
    job: "Appliance Repair Technician",
    specialization: "Geyser Repair",
    rating: 3.9,
    distance: "2.4 km",
    status: "Busy",
    experience: "3 years",
    price: "₹325"
  },
  {
    name: "Sandeep Kumar",
    job: "Appliance Repair Technician",
    specialization: "Water Purifier Repair",
    rating: 4.4,
    distance: "6.1 km",
    status: "Available",
    experience: "6 years",
    price: "₹400"
  },
  {
    name: "Manoj Singh",
    job: "Appliance Repair Technician",
    specialization: "Air Conditioner Service",
    rating: 4.7,
    distance: "3.3 km",
    status: "Available",
    experience: "9 years",
    price: "₹600"
  },
  {
    name: "Pankaj Kumar",
    job: "Appliance Repair Technician",
    specialization: "Mixer Grinder Repair",
    rating: 4.0,
    distance: "4.1 km",
    status: "Available",
    experience: "4 years",
    price: "₹250"
  },
  {
    name: "Rohit Sharma",
    job: "Appliance Repair Technician",
    specialization: "Washing Machine Installation",
    rating: 4.3,
    distance: "2.8 km",
    status: "Busy",
    experience: "5 years",
    price: "₹375"
  },
  {
    name: "Naveen Kumar",
    job: "Appliance Repair Technician",
    specialization: "Refrigerator Gas Refill",
    rating: 4.8,
    distance: "7.3 km",
    status: "Available",
    experience: "10 years",
    price: "₹650"
  },
  {
    name: "Ashok Singh",
    job: "Appliance Repair Technician",
    specialization: "Fan Repair",
    rating: 3.8,
    distance: "1.5 km",
    status: "Available",
    experience: "2 years",
    price: "₹225"
  },
  {
    name: "Karan Verma",
    job: "Appliance Repair Technician",
    specialization: "Chimney Repair",
    rating: 4.5,
    distance: "5.7 km",
    status: "Available",
    experience: "7 years",
    price: "₹475"
  },
  {
    name: "Anil Kumar",
    job: "Appliance Repair Technician",
    specialization: "Induction Repair",
    rating: 4.1,
    distance: "3.4 km",
    status: "Busy",
    experience: "4 years",
    price: "₹275"
  },
  {
    name: "Harish Sharma",
    job: "Appliance Repair Technician",
    specialization: "AC Installation",
    rating: 4.6,
    distance: "4.8 km",
    status: "Available",
    experience: "8 years",
    price: "₹750"
  },
  {
    name: "Sachin Kumar",
    job: "Appliance Repair Technician",
    specialization: "Home Appliance Maintenance",
    rating: 4.9,
    distance: "8.2 km",
    status: "Available",
    experience: "13 years",
    price: "₹800"
  },
  {
    name: "Gaurav Singh",
    job: "Appliance Repair Technician",
    specialization: "Small Appliance Repair",
    rating: 3.7,
    distance: "2.1 km",
    status: "Available",
    experience: "2 years",
    price: "₹200"
  },
  {
    name: "Dinesh Kumar",
    job: "Appliance Repair Technician",
    specialization: "Emergency Appliance Repair",
    rating: 4.7,
    distance: "6.6 km",
    status: "Available",
    experience: "9 years",
    price: "₹575"
  },
  {
    name: "Arun Sharma",
    job: "Appliance Repair Technician",
    specialization: "General Appliance Repair",
    rating: 4.0,
    distance: "3.6 km",
    status: "Busy",
    experience: "4 years",
    price: "₹350"
  }
],construction: [
  {
    name: "Raj Kumar",
    job: "Mason",
    specialization: "Brick Masonry",
    rating: 4.8,
    distance: "1.5 km",
    status: "Available",
    experience: "9 years",
    price: "₹650"
  },
  {
    name: "Amit Sharma",
    job: "Mason",
    specialization: "Wall Construction",
    rating: 4.5,
    distance: "2.8 km",
    status: "Available",
    experience: "7 years",
    price: "₹600"
  },
  {
    name: "Sunil Kumar",
    job: "Mason",
    specialization: "Floor Construction",
    rating: 4.2,
    distance: "3.6 km",
    status: "Busy",
    experience: "5 years",
    price: "₹550"
  },
  {
    name: "Deepak Singh",
    job: "Mason",
    specialization: "Concrete Work",
    rating: 4.9,
    distance: "4.7 km",
    status: "Available",
    experience: "12 years",
    price: "₹900"
  },
  {
    name: "Ravi Kumar",
    job: "Mason",
    specialization: "Plastering Work",
    rating: 4.1,
    distance: "1.9 km",
    status: "Available",
    experience: "4 years",
    price: "₹450"
  },
  {
    name: "Vijay Sharma",
    job: "Mason",
    specialization: "Tile Installation",
    rating: 4.6,
    distance: "5.1 km",
    status: "Available",
    experience: "8 years",
    price: "₹700"
  },
  {
    name: "Mohit Verma",
    job: "Construction Worker",
    specialization: "Cement Work",
    rating: 3.9,
    distance: "2.3 km",
    status: "Busy",
    experience: "3 years",
    price: "₹400"
  },
  {
    name: "Sandeep Kumar",
    job: "Mason",
    specialization: "House Renovation",
    rating: 4.4,
    distance: "6.2 km",
    status: "Available",
    experience: "7 years",
    price: "₹750"
  },
  {
    name: "Manoj Singh",
    job: "Mason",
    specialization: "Bathroom Construction",
    rating: 4.7,
    distance: "3.2 km",
    status: "Available",
    experience: "10 years",
    price: "₹800"
  },
  {
    name: "Pankaj Kumar",
    job: "Construction Worker",
    specialization: "Small Repair Work",
    rating: 4.0,
    distance: "4.4 km",
    status: "Available",
    experience: "4 years",
    price: "₹350"
  },
  {
    name: "Rohit Sharma",
    job: "Mason",
    specialization: "Boundary Wall Construction",
    rating: 4.3,
    distance: "2.7 km",
    status: "Busy",
    experience: "6 years",
    price: "₹650"
  },
  {
    name: "Naveen Kumar",
    job: "Mason",
    specialization: "Roof Construction",
    rating: 4.8,
    distance: "7.3 km",
    status: "Available",
    experience: "11 years",
    price: "₹950"
  },
  {
    name: "Ashok Singh",
    job: "Construction Worker",
    specialization: "Brick Repair",
    rating: 3.8,
    distance: "1.6 km",
    status: "Available",
    experience: "2 years",
    price: "₹300"
  },
  {
    name: "Karan Verma",
    job: "Mason",
    specialization: "Kitchen Construction",
    rating: 4.5,
    distance: "5.6 km",
    status: "Available",
    experience: "8 years",
    price: "₹750"
  },
  {
    name: "Anil Kumar",
    job: "Mason",
    specialization: "Drainage Construction",
    rating: 4.1,
    distance: "3.8 km",
    status: "Busy",
    experience: "5 years",
    price: "₹500"
  },
  {
    name: "Harish Sharma",
    job: "Mason",
    specialization: "House Extension",
    rating: 4.6,
    distance: "4.9 km",
    status: "Available",
    experience: "9 years",
    price: "₹850"
  },
  {
    name: "Sachin Kumar",
    job: "Mason",
    specialization: "Complete House Construction",
    rating: 4.9,
    distance: "8.4 km",
    status: "Available",
    experience: "14 years",
    price: "₹1200"
  },
  {
    name: "Gaurav Singh",
    job: "Construction Worker",
    specialization: "Basic Masonry Work",
    rating: 3.7,
    distance: "2.1 km",
    status: "Available",
    experience: "2 years",
    price: "₹325"
  },
  {
    name: "Dinesh Kumar",
    job: "Mason",
    specialization: "Emergency Repair Work",
    rating: 4.7,
    distance: "6.7 km",
    status: "Available",
    experience: "9 years",
    price: "₹700"
  },
  {
    name: "Arun Sharma",
    job: "Mason",
    specialization: "General Construction Work",
    rating: 4.0,
    distance: "3.5 km",
    status: "Busy",
    experience: "4 years",
    price: "₹450"
  }
],welding: [
  {
    name: "Raj Kumar",
    job: "Welder",
    specialization: "Gate Welding",
    rating: 4.8,
    distance: "1.4 km",
    status: "Available",
    experience: "9 years",
    price: "₹500"
  },
  {
    name: "Amit Sharma",
    job: "Welder",
    specialization: "Grill Fabrication",
    rating: 4.5,
    distance: "2.7 km",
    status: "Available",
    experience: "7 years",
    price: "₹450"
  },
  {
    name: "Sunil Kumar",
    job: "Welder",
    specialization: "Metal Repair",
    rating: 4.2,
    distance: "3.6 km",
    status: "Busy",
    experience: "5 years",
    price: "₹350"
  },
  {
    name: "Deepak Singh",
    job: "Welder",
    specialization: "Steel Gate Fabrication",
    rating: 4.9,
    distance: "4.8 km",
    status: "Available",
    experience: "12 years",
    price: "₹750"
  },
  {
    name: "Ravi Kumar",
    job: "Welder",
    specialization: "Iron Pipe Welding",
    rating: 4.1,
    distance: "1.8 km",
    status: "Available",
    experience: "4 years",
    price: "₹300"
  },
  {
    name: "Vijay Sharma",
    job: "Welder",
    specialization: "Window Grill Welding",
    rating: 4.6,
    distance: "5.2 km",
    status: "Available",
    experience: "8 years",
    price: "₹550"
  },
  {
    name: "Mohit Verma",
    job: "Welder",
    specialization: "Small Metal Repair",
    rating: 3.9,
    distance: "2.3 km",
    status: "Busy",
    experience: "3 years",
    price: "₹275"
  },
  {
    name: "Sandeep Kumar",
    job: "Welder",
    specialization: "Staircase Fabrication",
    rating: 4.4,
    distance: "6.1 km",
    status: "Available",
    experience: "7 years",
    price: "₹700"
  },
  {
    name: "Manoj Singh",
    job: "Welder",
    specialization: "Shed Fabrication",
    rating: 4.7,
    distance: "3.3 km",
    status: "Available",
    experience: "10 years",
    price: "₹650"
  },
  {
    name: "Pankaj Kumar",
    job: "Welder",
    specialization: "Furniture Metal Work",
    rating: 4.0,
    distance: "4.5 km",
    status: "Available",
    experience: "4 years",
    price: "₹400"
  },
  {
    name: "Rohit Sharma",
    job: "Welder",
    specialization: "Bike & Vehicle Welding",
    rating: 4.3,
    distance: "2.8 km",
    status: "Busy",
    experience: "6 years",
    price: "₹450"
  },
  {
    name: "Naveen Kumar",
    job: "Welder",
    specialization: "Heavy Steel Fabrication",
    rating: 4.8,
    distance: "7.2 km",
    status: "Available",
    experience: "11 years",
    price: "₹900"
  },
  {
    name: "Ashok Singh",
    job: "Welder",
    specialization: "Iron Grill Repair",
    rating: 3.8,
    distance: "1.6 km",
    status: "Available",
    experience: "2 years",
    price: "₹250"
  },
  {
    name: "Karan Verma",
    job: "Welder",
    specialization: "Metal Door Fabrication",
    rating: 4.5,
    distance: "5.7 km",
    status: "Available",
    experience: "8 years",
    price: "₹600"
  },
  {
    name: "Anil Kumar",
    job: "Welder",
    specialization: "Pipe Joint Welding",
    rating: 4.1,
    distance: "3.5 km",
    status: "Busy",
    experience: "5 years",
    price: "₹375"
  },
  {
    name: "Harish Sharma",
    job: "Welder",
    specialization: "Industrial Welding",
    rating: 4.6,
    distance: "4.7 km",
    status: "Available",
    experience: "9 years",
    price: "₹800"
  },
  {
    name: "Sachin Kumar",
    job: "Welder",
    specialization: "Custom Metal Fabrication",
    rating: 4.9,
    distance: "8.3 km",
    status: "Available",
    experience: "14 years",
    price: "₹1000"
  },
  {
    name: "Gaurav Singh",
    job: "Welder",
    specialization: "Basic Welding Work",
    rating: 3.7,
    distance: "2.1 km",
    status: "Available",
    experience: "2 years",
    price: "₹225"
  },
  {
    name: "Dinesh Kumar",
    job: "Welder",
    specialization: "Emergency Metal Repair",
    rating: 4.7,
    distance: "6.6 km",
    status: "Available",
    experience: "9 years",
    price: "₹575"
  },
  {
    name: "Arun Sharma",
    job: "Welder",
    specialization: "General Welding Work",
    rating: 4.0,
    distance: "3.4 km",
    status: "Busy",
    experience: "4 years",
    price: "₹325"
  }
],vehicle: [
  {
    name: "Raj Kumar",
    job: "Vehicle Mechanic",
    specialization: "Car Engine Repair",
    rating: 4.8,
    distance: "1.3 km",
    status: "Available",
    experience: "9 years",
    price: "₹600"
  },
  {
    name: "Amit Sharma",
    job: "Vehicle Mechanic",
    specialization: "Bike Repair",
    rating: 4.5,
    distance: "2.5 km",
    status: "Available",
    experience: "6 years",
    price: "₹350"
  },
  {
    name: "Sunil Kumar",
    job: "Vehicle Mechanic",
    specialization: "Brake Repair",
    rating: 4.2,
    distance: "3.7 km",
    status: "Busy",
    experience: "5 years",
    price: "₹400"
  },
  {
    name: "Deepak Singh",
    job: "Vehicle Mechanic",
    specialization: "Car Electrical Repair",
    rating: 4.9,
    distance: "4.6 km",
    status: "Available",
    experience: "12 years",
    price: "₹750"
  },
  {
    name: "Ravi Kumar",
    job: "Vehicle Mechanic",
    specialization: "Bike Engine Repair",
    rating: 4.1,
    distance: "1.8 km",
    status: "Available",
    experience: "4 years",
    price: "₹300"
  },
  {
    name: "Vijay Sharma",
    job: "Vehicle Mechanic",
    specialization: "Car AC Repair",
    rating: 4.6,
    distance: "5.2 km",
    status: "Available",
    experience: "8 years",
    price: "₹650"
  },
  {
    name: "Mohit Verma",
    job: "Vehicle Mechanic",
    specialization: "Tyre Replacement",
    rating: 3.9,
    distance: "2.2 km",
    status: "Busy",
    experience: "3 years",
    price: "₹250"
  },
  {
    name: "Sandeep Kumar",
    job: "Vehicle Mechanic",
    specialization: "Battery Replacement",
    rating: 4.4,
    distance: "6.1 km",
    status: "Available",
    experience: "7 years",
    price: "₹450"
  },
  {
    name: "Manoj Singh",
    job: "Vehicle Mechanic",
    specialization: "Car Servicing",
    rating: 4.7,
    distance: "3.4 km",
    status: "Available",
    experience: "10 years",
    price: "₹800"
  },
  {
    name: "Pankaj Kumar",
    job: "Vehicle Mechanic",
    specialization: "Oil Change & Service",
    rating: 4.0,
    distance: "4.1 km",
    status: "Available",
    experience: "4 years",
    price: "₹275"
  },
  {
    name: "Rohit Sharma",
    job: "Vehicle Mechanic",
    specialization: "Scooter Repair",
    rating: 4.3,
    distance: "2.7 km",
    status: "Busy",
    experience: "5 years",
    price: "₹325"
  },
  {
    name: "Naveen Kumar",
    job: "Vehicle Mechanic",
    specialization: "Car Suspension Repair",
    rating: 4.8,
    distance: "7.2 km",
    status: "Available",
    experience: "11 years",
    price: "₹700"
  },
  {
    name: "Ashok Singh",
    job: "Vehicle Mechanic",
    specialization: "Bike Brake Repair",
    rating: 3.8,
    distance: "1.5 km",
    status: "Available",
    experience: "2 years",
    price: "₹225"
  },
  {
    name: "Karan Verma",
    job: "Vehicle Mechanic",
    specialization: "Car Dent Repair",
    rating: 4.5,
    distance: "5.8 km",
    status: "Available",
    experience: "8 years",
    price: "₹900"
  },
  {
    name: "Anil Kumar",
    job: "Vehicle Mechanic",
    specialization: "Headlight & Wiring Repair",
    rating: 4.1,
    distance: "3.3 km",
    status: "Busy",
    experience: "5 years",
    price: "₹350"
  },
  {
    name: "Harish Sharma",
    job: "Vehicle Mechanic",
    specialization: "Car Brake Service",
    rating: 4.6,
    distance: "4.8 km",
    status: "Available",
    experience: "9 years",
    price: "₹550"
  },
  {
    name: "Sachin Kumar",
    job: "Vehicle Mechanic",
    specialization: "Complete Car Service",
    rating: 4.9,
    distance: "8.3 km",
    status: "Available",
    experience: "14 years",
    price: "₹1000"
  },
  {
    name: "Gaurav Singh",
    job: "Vehicle Mechanic",
    specialization: "Basic Bike Service",
    rating: 3.7,
    distance: "2.0 km",
    status: "Available",
    experience: "2 years",
    price: "₹200"
  },
  {
    name: "Dinesh Kumar",
    job: "Vehicle Mechanic",
    specialization: "Emergency Vehicle Repair",
    rating: 4.7,
    distance: "6.5 km",
    status: "Available",
    experience: "9 years",
    price: "₹600"
  },
  {
    name: "Arun Sharma",
    job: "Vehicle Mechanic",
    specialization: "General Vehicle Service",
    rating: 4.0,
    distance: "3.5 km",
    status: "Busy",
    experience: "4 years",
    price: "₹300"
  }
],gardening: [
  {
    name: "Raj Kumar",
    job: "Gardener",
    specialization: "Home Garden Maintenance",
    rating: 4.8,
    distance: "1.2 km",
    status: "Available",
    experience: "8 years",
    price: "₹350"
  },
  {
    name: "Amit Sharma",
    job: "Gardener",
    specialization: "Lawn Maintenance",
    rating: 4.5,
    distance: "2.5 km",
    status: "Available",
    experience: "6 years",
    price: "₹400"
  },
  {
    name: "Sunil Kumar",
    job: "Gardener",
    specialization: "Plant Care",
    rating: 4.2,
    distance: "3.6 km",
    status: "Busy",
    experience: "5 years",
    price: "₹300"
  },
  {
    name: "Deepak Singh",
    job: "Landscaping Worker",
    specialization: "Garden Landscaping",
    rating: 4.9,
    distance: "4.7 km",
    status: "Available",
    experience: "11 years",
    price: "₹750"
  },
  {
    name: "Ravi Kumar",
    job: "Gardener",
    specialization: "Tree Trimming",
    rating: 4.1,
    distance: "1.7 km",
    status: "Available",
    experience: "4 years",
    price: "₹275"
  },
  {
    name: "Vijay Sharma",
    job: "Gardener",
    specialization: "Flower Garden Care",
    rating: 4.6,
    distance: "5.1 km",
    status: "Available",
    experience: "7 years",
    price: "₹450"
  },
  {
    name: "Mohit Verma",
    job: "Gardener",
    specialization: "Grass Cutting",
    rating: 3.9,
    distance: "2.3 km",
    status: "Busy",
    experience: "3 years",
    price: "₹200"
  },
  {
    name: "Sandeep Kumar",
    job: "Landscaping Worker",
    specialization: "Landscape Design",
    rating: 4.4,
    distance: "6.2 km",
    status: "Available",
    experience: "6 years",
    price: "₹600"
  },
  {
    name: "Manoj Singh",
    job: "Gardener",
    specialization: "Terrace Garden Setup",
    rating: 4.7,
    distance: "3.4 km",
    status: "Available",
    experience: "9 years",
    price: "₹650"
  },
  {
    name: "Pankaj Kumar",
    job: "Gardener",
    specialization: "Plant Pruning",
    rating: 4.0,
    distance: "4.2 km",
    status: "Available",
    experience: "4 years",
    price: "₹250"
  },
  {
    name: "Rohit Sharma",
    job: "Gardener",
    specialization: "Hedge Trimming",
    rating: 4.3,
    distance: "2.8 km",
    status: "Busy",
    experience: "5 years",
    price: "₹325"
  },
  {
    name: "Naveen Kumar",
    job: "Landscaping Worker",
    specialization: "Outdoor Landscaping",
    rating: 4.8,
    distance: "7.3 km",
    status: "Available",
    experience: "10 years",
    price: "₹800"
  },
  {
    name: "Ashok Singh",
    job: "Gardener",
    specialization: "Basic Garden Cleaning",
    rating: 3.8,
    distance: "1.5 km",
    status: "Available",
    experience: "2 years",
    price: "₹175"
  },
  {
    name: "Karan Verma",
    job: "Gardener",
    specialization: "Vegetable Garden Care",
    rating: 4.5,
    distance: "5.6 km",
    status: "Available",
    experience: "8 years",
    price: "₹425"
  },
  {
    name: "Anil Kumar",
    job: "Gardener",
    specialization: "Tree Planting",
    rating: 4.1,
    distance: "3.3 km",
    status: "Busy",
    experience: "5 years",
    price: "₹350"
  },
  {
    name: "Harish Sharma",
    job: "Landscaping Worker",
    specialization: "Complete Garden Setup",
    rating: 4.6,
    distance: "4.8 km",
    status: "Available",
    experience: "9 years",
    price: "₹700"
  },
  {
    name: "Sachin Kumar",
    job: "Landscape Designer",
    specialization: "Premium Landscape Design",
    rating: 4.9,
    distance: "8.1 km",
    status: "Available",
    experience: "13 years",
    price: "₹1000"
  },
  {
    name: "Gaurav Singh",
    job: "Gardener",
    specialization: "Small Garden Maintenance",
    rating: 3.7,
    distance: "2.0 km",
    status: "Available",
    experience: "2 years",
    price: "₹150"
  },
  {
    name: "Dinesh Kumar",
    job: "Gardener",
    specialization: "Emergency Garden Cleanup",
    rating: 4.7,
    distance: "6.5 km",
    status: "Available",
    experience: "9 years",
    price: "₹500"
  },
  {
    name: "Arun Sharma",
    job: "Gardener",
    specialization: "General Gardening",
    rating: 4.0,
    distance: "3.5 km",
    status: "Busy",
    experience: "4 years",
    price: "₹275"
  }
],moving: [
  {
    name: "Raj Kumar",
    job: "Moving & Loading Worker",
    specialization: "House Shifting",
    rating: 4.8,
    distance: "1.3 km",
    status: "Available",
    experience: "8 years",
    price: "₹600"
  },
  {
    name: "Amit Sharma",
    job: "Moving & Loading Worker",
    specialization: "Furniture Moving",
    rating: 4.5,
    distance: "2.6 km",
    status: "Available",
    experience: "6 years",
    price: "₹450"
  },
  {
    name: "Sunil Kumar",
    job: "Loading Worker",
    specialization: "Household Loading",
    rating: 4.2,
    distance: "3.5 km",
    status: "Busy",
    experience: "5 years",
    price: "₹350"
  },
  {
    name: "Deepak Singh",
    job: "Moving Worker",
    specialization: "Complete House Relocation",
    rating: 4.9,
    distance: "4.8 km",
    status: "Available",
    experience: "11 years",
    price: "₹900"
  },
  {
    name: "Ravi Kumar",
    job: "Loading Worker",
    specialization: "Heavy Item Loading",
    rating: 4.1,
    distance: "1.7 km",
    status: "Available",
    experience: "4 years",
    price: "₹300"
  },
  {
    name: "Vijay Sharma",
    job: "Moving Worker",
    specialization: "Office Shifting",
    rating: 4.6,
    distance: "5.2 km",
    status: "Available",
    experience: "7 years",
    price: "₹700"
  },
  {
    name: "Mohit Verma",
    job: "Loading Worker",
    specialization: "Small Item Loading",
    rating: 3.9,
    distance: "2.2 km",
    status: "Busy",
    experience: "3 years",
    price: "₹250"
  },
  {
    name: "Sandeep Kumar",
    job: "Moving Worker",
    specialization: "Furniture Shifting",
    rating: 4.4,
    distance: "6.1 km",
    status: "Available",
    experience: "6 years",
    price: "₹550"
  },
  {
    name: "Manoj Singh",
    job: "Moving & Loading Worker",
    specialization: "Apartment Shifting",
    rating: 4.7,
    distance: "3.3 km",
    status: "Available",
    experience: "9 years",
    price: "₹750"
  },
  {
    name: "Pankaj Kumar",
    job: "Loading Worker",
    specialization: "Appliance Loading",
    rating: 4.0,
    distance: "4.4 km",
    status: "Available",
    experience: "4 years",
    price: "₹375"
  },
  {
    name: "Rohit Sharma",
    job: "Moving Worker",
    specialization: "Local House Shifting",
    rating: 4.3,
    distance: "2.8 km",
    status: "Busy",
    experience: "5 years",
    price: "₹500"
  },
  {
    name: "Naveen Kumar",
    job: "Moving & Loading Worker",
    specialization: "Long Distance Moving",
    rating: 4.8,
    distance: "7.4 km",
    status: "Available",
    experience: "10 years",
    price: "₹1000"
  },
  {
    name: "Ashok Singh",
    job: "Loading Worker",
    specialization: "Basic Loading Service",
    rating: 3.8,
    distance: "1.5 km",
    status: "Available",
    experience: "2 years",
    price: "₹200"
  },
  {
    name: "Karan Verma",
    job: "Moving Worker",
    specialization: "Kitchen Shifting",
    rating: 4.5,
    distance: "5.7 km",
    status: "Available",
    experience: "8 years",
    price: "₹600"
  },
  {
    name: "Anil Kumar",
    job: "Loading Worker",
    specialization: "Construction Material Loading",
    rating: 4.1,
    distance: "3.4 km",
    status: "Busy",
    experience: "5 years",
    price: "₹425"
  },
  {
    name: "Harish Sharma",
    job: "Moving & Loading Worker",
    specialization: "Commercial Relocation",
    rating: 4.6,
    distance: "4.9 km",
    status: "Available",
    experience: "8 years",
    price: "₹850"
  },
  {
    name: "Sachin Kumar",
    job: "Moving & Loading Worker",
    specialization: "Premium Relocation Service",
    rating: 4.9,
    distance: "8.2 km",
    status: "Available",
    experience: "13 years",
    price: "₹1200"
  },
  {
    name: "Gaurav Singh",
    job: "Loading Worker",
    specialization: "Small Shifting Jobs",
    rating: 3.7,
    distance: "2.0 km",
    status: "Available",
    experience: "2 years",
    price: "₹225"
  },
  {
    name: "Dinesh Kumar",
    job: "Moving Worker",
    specialization: "Emergency Shifting",
    rating: 4.7,
    distance: "6.6 km",
    status: "Available",
    experience: "9 years",
    price: "₹650"
  },
  {
    name: "Arun Sharma",
    job: "Moving & Loading Worker",
    specialization: "General Moving Service",
    rating: 4.0,
    distance: "3.6 km",
    status: "Busy",
    experience: "4 years",
    price: "₹350"
  }
],tailoring: [
  {
    name: "Raj Kumar",
    job: "Tailor",
    specialization: "Shirt & Pant Stitching",
    rating: 4.8,
    distance: "1.2 km",
    status: "Available",
    experience: "8 years",
    price: "₹400"
  },
  {
    name: "Amit Sharma",
    job: "Tailor",
    specialization: "Clothes Alteration",
    rating: 4.5,
    distance: "2.5 km",
    status: "Available",
    experience: "6 years",
    price: "₹250"
  },
  {
    name: "Sunil Kumar",
    job: "Tailor",
    specialization: "Kurta Stitching",
    rating: 4.2,
    distance: "3.6 km",
    status: "Busy",
    experience: "5 years",
    price: "₹350"
  },
  {
    name: "Deepak Singh",
    job: "Tailor",
    specialization: "Wedding Dress Stitching",
    rating: 4.9,
    distance: "4.8 km",
    status: "Available",
    experience: "12 years",
    price: "₹900"
  },
  {
    name: "Ravi Kumar",
    job: "Tailor",
    specialization: "Pant Alteration",
    rating: 4.1,
    distance: "1.7 km",
    status: "Available",
    experience: "4 years",
    price: "₹150"
  },
  {
    name: "Vijay Sharma",
    job: "Tailor",
    specialization: "Blouse Stitching",
    rating: 4.6,
    distance: "5.2 km",
    status: "Available",
    experience: "7 years",
    price: "₹300"
  },
  {
    name: "Mohit Verma",
    job: "Tailor",
    specialization: "Basic Alteration",
    rating: 3.9,
    distance: "2.3 km",
    status: "Busy",
    experience: "3 years",
    price: "₹100"
  },
  {
    name: "Sandeep Kumar",
    job: "Tailor",
    specialization: "School Uniform Stitching",
    rating: 4.4,
    distance: "6.1 km",
    status: "Available",
    experience: "6 years",
    price: "₹350"
  },
  {
    name: "Manoj Singh",
    job: "Tailor",
    specialization: "Suit Stitching",
    rating: 4.7,
    distance: "3.3 km",
    status: "Available",
    experience: "10 years",
    price: "₹800"
  },
  {
    name: "Pankaj Kumar",
    job: "Tailor",
    specialization: "Shirt Alteration",
    rating: 4.0,
    distance: "4.2 km",
    status: "Available",
    experience: "4 years",
    price: "₹175"
  },
  {
    name: "Rohit Sharma",
    job: "Tailor",
    specialization: "Jeans Alteration",
    rating: 4.3,
    distance: "2.8 km",
    status: "Busy",
    experience: "5 years",
    price: "₹200"
  },
  {
    name: "Naveen Kumar",
    job: "Tailor",
    specialization: "Traditional Dress Stitching",
    rating: 4.8,
    distance: "7.2 km",
    status: "Available",
    experience: "11 years",
    price: "₹650"
  },
  {
    name: "Ashok Singh",
    job: "Tailor",
    specialization: "Simple Clothing Repair",
    rating: 3.8,
    distance: "1.5 km",
    status: "Available",
    experience: "2 years",
    price: "₹80"
  },
  {
    name: "Karan Verma",
    job: "Tailor",
    specialization: "Ladies Dress Stitching",
    rating: 4.5,
    distance: "5.7 km",
    status: "Available",
    experience: "8 years",
    price: "₹450"
  },
  {
    name: "Anil Kumar",
    job: "Tailor",
    specialization: "Curtain Stitching",
    rating: 4.1,
    distance: "3.4 km",
    status: "Busy",
    experience: "5 years",
    price: "₹300"
  },
  {
    name: "Harish Sharma",
    job: "Tailor",
    specialization: "Custom Clothing",
    rating: 4.6,
    distance: "4.8 km",
    status: "Available",
    experience: "9 years",
    price: "₹600"
  },
  {
    name: "Sachin Kumar",
    job: "Tailor",
    specialization: "Premium Suit & Dress Stitching",
    rating: 4.9,
    distance: "8.2 km",
    status: "Available",
    experience: "14 years",
    price: "₹1200"
  },
  {
    name: "Gaurav Singh",
    job: "Tailor",
    specialization: "Small Clothing Repairs",
    rating: 3.7,
    distance: "2.0 km",
    status: "Available",
    experience: "2 years",
    price: "₹75"
  },
  {
    name: "Dinesh Kumar",
    job: "Tailor",
    specialization: "Emergency Alteration",
    rating: 4.7,
    distance: "6.6 km",
    status: "Available",
    experience: "9 years",
    price: "₹350"
  },
  {
    name: "Arun Sharma",
    job: "Tailor",
    specialization: "General Tailoring",
    rating: 4.0,
    distance: "3.5 km",
    status: "Busy",
    experience: "4 years",
    price: "₹200"
  }
],}
    
  

function Workers() {

  const { service } = useParams()
  const [search, setSearch] = useState("")


  const selectedWorkers = workers[service] || []

  const filterWorkers = selectedWorkers.filter((worker) => worker.name.toLowerCase().includes(search.toLowerCase()) || worker.specialization.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="workers-page">

      <h1>Available Workers</h1>

      <p>
        Verified workers available for your selected service
      </p>
       

      <input
        type="text"
        placeholder="Search workers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="worker-list">

        {filterWorkers.map((worker, index) => (

          <div className="worker-card" key={index}>

            <div className="worker-icon">
              👨‍🔧
            </div>

            <div className="worker-info">

              <h2>{worker.name}</h2>

              <p>🔧 {worker.job}</p>

              <p>🛠️ {worker.specialization}</p>

              <p>⭐ {worker.rating} • {worker.distance} away</p>
              
              <p>
                {worker.status === "Available"
                  ? "🟢 Available"
                  : "🔴 Busy"}
              </p>
             
              <p>💼 {worker.experience} experience</p>
              <p>💰 {worker.price}</p>
            </div>

            <Link to={`/worker/${worker.name.toLowerCase().replace(" ", "-")}`}>
              <button>View Profile</button>
            </Link>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Workers
