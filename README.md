# Sanjay Thomas | Data Scientist Portfolio Website

A premium, recruiter-focused personal portfolio website for **Sanjay Thomas** built with React, Vite, Tailwind CSS, Framer Motion, and Recharts.

---

## 🚀 Quick Start

Follow these steps to run the portfolio website on your local machine:

### 1. Set Up the Project Card Images
I have generated high-quality custom graphics for each of your projects. Since terminal shell executions are restricted in this environment, please copy the generated image assets from the AI brain folder and place them inside the `src/assets/` directory:

* Copy `C:\Users\sanja\.gemini\antigravity\brain\2c971736-16d1-4272-b569-6db181ae8086\car_price_pred_1783142655990.png` $\rightarrow$ rename and save as `src/assets/car_price.png`
* Copy `C:\Users\sanja\.gemini\antigravity\brain\2c971736-16d1-4272-b569-6db181ae8086\house_price_pred_1783142668085.png` $\rightarrow$ rename and save as `src/assets/house_price.png`
* Copy `C:\Users\sanja\.gemini\antigravity\brain\2c971736-16d1-4272-b569-6db181ae8086\expense_sharing_img_1783142680878.png` $\rightarrow$ rename and save as `src/assets/expense_manager.png`
* Copy `C:\Users\sanja\.gemini\antigravity\brain\2c971736-16d1-4272-b569-6db181ae8086\iris_classification_img_1783142695284.png` $\rightarrow$ rename and save as `src/assets/iris_flower.png`

*(Note: If the images are missing, the website's image tags include dynamic SVG fallbacks so the site will load properly without breaking.)*

### 2. Install Dependencies
Open your PowerShell or Command Prompt terminal in this directory (`c:\Users\sanja\Downloads\Portfolio-1`) and run:
```bash
npm install
```

### 3. Start Development Server
Run the local Vite development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

### 4. Build for Production
To generate the optimized production build (e.g. for deployment to Netlify or Vercel):
```bash
npm run build
```
The output will be generated inside the `dist/` directory.

---

## 🛠️ Features Built In

* **Interactive Data Science Playground**: 
  * *Iris Flower Classifier*: Visitors adjust morphometrics sliders to classify Iris species in real-time, tracked on a Recharts scatter plot.
  * *Car Price Estimator*: Adjust features like mileage, engine displacement, and manufacturing year to see prices computed in real-time.
  * *Expense settlement engine*: Visualizes greedy debt-settlement simplifications.
* **Technical Skills Radar**: Recharts Radar Chart illustrating Sanjay's domain distributions across Data Prep, ML, Viz, and SQL.
* **Premium Glassmorphism styling**: Modern glass effects with custom light/dark modes that adjust to system schemes automatically.
* **Fully Responsive**: Optimized for mobile and desktop screens.
* **Contact Form Validation**: Full client-side input validation and custom animation state on submission.
* **Recruiter-Focused Resume Details**: Displays structured achievements, internship timelines, and certification modules.
