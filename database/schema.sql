-- Portfolio Database Schema
-- PostgreSQL (Supabase compatible)

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Projects Table
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    tech VARCHAR(500),
    github VARCHAR(255),
    demo VARCHAR(255),
    category VARCHAR(100),
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact Messages Table
CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    read_status BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Skills Table
CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    proficiency VARCHAR(50),
    icon VARCHAR(255),
    display_order INT DEFAULT 0
);

-- Create indexes for better performance
CREATE INDEX idx_projects_category ON projects(category);
CREATE INDEX idx_skills_category ON skills(category);
CREATE INDEX idx_skills_display_order ON skills(display_order);

-- Insert sample data
INSERT INTO projects (title, description, tech, github, demo, category) VALUES
('E-Commerce Platform', 'Full-stack e-commerce solution with React, Node.js, Express, and MongoDB', 'React,Node.js,MongoDB,Express,Tailwind', 'https://github.com', 'https://demo.com', 'Full Stack'),
('Student Management System', 'Desktop application for managing student records, grades, and attendance', 'Java,MySQL,JavaFX', 'https://github.com', '', 'Desktop'),
('ML Pipeline Automation', 'Automated ML model training and deployment pipeline', 'Python,Docker,MLflow,AWS', 'https://github.com', '', 'MLOps'),
('Real-time Chat Application', 'WebSocket-based chat application with rooms and file sharing', 'React,Socket.io,Node.js,MongoDB', 'https://github.com', 'https://demo.com', 'Full Stack'),
('Portfolio Website', 'Personal portfolio showcasing projects and skills', 'Next.js,TypeScript,Tailwind,Framer Motion', 'https://github.com', 'https://demo.com', 'Web'),
('API Gateway Service', 'RESTful API gateway with rate limiting and authentication', 'Node.js,Express,Redis,JWT', 'https://github.com', '', 'Backend');

INSERT INTO skills (name, category, proficiency, icon, display_order) VALUES
-- Frontend
('React', 'Frontend', 'Intermediate', 'react', 1),
('Next.js', 'Frontend', 'Intermediate', 'nextjs', 2),
('TypeScript', 'Frontend', 'Intermediate', 'typescript', 3),
('Tailwind CSS', 'Frontend', 'Advanced', 'tailwind', 4),
('JavaScript', 'Frontend', 'Advanced', 'javascript', 5),
-- Backend
('Node.js', 'Backend', 'Intermediate', 'nodejs', 1),
('Express', 'Backend', 'Intermediate', 'express', 2),
('Python', 'Backend', 'Intermediate', 'python', 3),
('Java', 'Backend', 'Intermediate', 'java', 4),
('C++', 'Backend', 'Intermediate', 'cpp', 5),
-- Database
('PostgreSQL', 'Database', 'Intermediate', 'postgresql', 1),
('MySQL', 'Database', 'Intermediate', 'mysql', 2),
('MongoDB', 'Database', 'Intermediate', 'mongodb', 3),
-- Tools
('Git', 'Tools', 'Advanced', 'git', 1),
('Docker', 'Tools', 'Basic', 'docker', 2),
('AWS', 'Tools', 'Basic', 'aws', 3),
('Linux', 'Tools', 'Intermediate', 'linux', 4);