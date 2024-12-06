![Без имени-1122123](https://github.com/user-attachments/assets/536f2c37-dcea-453a-b85a-30c68e131db6)
# 🌟 **Sveya**  

**Sveya** is a web application built with Django that provides tools for managing tests, viewing results, and handling media uploads efficiently.  

---

## 🌟 Features  

### ✅ Core Features  

- **Home Page**:  
  - Intuitive design with easy navigation to main sections.  

- **Admin Panel**:  
  - Centralized control for managing videos, materials, and user interactions.  

- **Video and Materials Sections**:  
  - Access to masterclass videos and tutorials.  
  - Sewing patterns and high-quality photos for reference.  

- **Sewing Masterclass**:  
  - Step-by-step guidance on sewing projects for users of all skill levels.  

### 📱 Adaptability  

- Fully responsive design ensures the application works seamlessly on both smartphones and desktops.  

### 🌐 Multilingual Support  

- Easy language switching between Ukrainian and English to cater to a broader audience.  

### 🚀 Additional Functionalities  

- **Chat with Admin**:  
  - AI-powered support for helping users with questions and guidance.  

- **User Guide**:  
  - Comprehensive instructions for users to navigate and utilize the platform effectively.  

- **Open-Source Code**:  
  - Repository with well-documented source code and a detailed README file.
---

## 📂 **Project Structure**  

```plaintext
Sveya-main/
├── Main_page/        # Static files and templates
├── db.sqlite3        # SQLite database file
├── manage.py         # Django management script
├── media/            # Directory for uploaded files
├── shveya/           # Core app logic and configurations
│   ├── settings.py   # Project settings
│   ├── urls.py       # URL routing
│   ├── asgi.py       # ASGI configuration
│   ├── wsgi.py       # WSGI configuration
└── requirements.txt  # Python dependencies
```
## **🛠️ Installation**
# Steps to Get Started:
## 1.Clone the Repository:

```bash
git clone https://github.com/yourusername/sveya.git
cd sveya
```
## 2.**Set Up a Virtual Environment**:

```bash
python -m venv venv
source venv/bin/activate  # For Linux/Mac
venv\Scripts\activate     # For Windows
```
## 3.**Install Dependencies**:

```bash
pip install -r requirements.txt
```
## 4.**Apply Migrations**:

```bash

python manage.py migrate
```
## 5.**Run the Development Server**:

```bash
python manage.py runserver
```
## 6.**Access the Application**:
Open your browser and navigate to http://127.0.0.1:8000/.

---

# 🛠️ Technologies
### **Backend**: Django, SQLite.
### **Frontend**: HTML, CSS, JavaScript (if applicable).
### **Styling and Animations**: Built-in Django templating and CSS.
