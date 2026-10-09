# Aviraj Virape — Portfolio

> *"I don't wait for the future. I build it."*

Personal portfolio of **Aviraj Virape**, a final-year AI & Data Science student (CGPA 9.2) who builds end-to-end machine learning: EDA, scikit-learn / XGBoost models, and deployed apps. Built from scratch with vanilla HTML, CSS, and JavaScript.

🔗 **Live:** [aviraj1805.github.io/portfolio](https://aviraj1805.github.io/portfolio/)

---

## What's Inside

| Section | Description |
|---|---|
| **Hero** | Intro with animated ID card and role typewriter |
| **About** | Background, education, and key stats (CGPA, LeetCode, live apps) |
| **Arsenal** | Skills across Foundations, Data Science, AI & ML, and Tools |
| **Missions** | Four featured live apps, led by MahaGuru AI, plus a grid of six more projects (two with hosted dashboards) |
| **Journey** | MahaGuru AI (startup, then an open-source rebuild that is live today), internship (Innovexis), and INMEC-2026 research |
| **Contact** | Email, LinkedIn, GitHub, LeetCode, Instagram |

---

## Projects

### MahaGuru AI — AI mentor and personalised classroom (flagship)
An open-source platform for college students with two products. **StudentGPT** is a reflective mentor that asks before it advises, with English and Hinglish safety screening on every message. **Classroom** turns a goal into a diagnostic, a personalised roadmap, generated lessons with an AI teacher, quizzes and adaptive mastery tracking. FastAPI and React monorepo, streamed replies, provider-agnostic LLM layer, one Docker image, CI with end-to-end tests.
[Live demo](https://mahaguru-ai.onrender.com) · [Source](https://github.com/aviraj1805/MahaGuru-V1) · [Research](https://mahaguru-ai.onrender.com/research) · [CI](https://github.com/aviraj1805/MahaGuru-V1/actions/workflows/ci.yml)
`FastAPI` `React` `TypeScript` `PostgreSQL` `Gemini` `Docker` `Playwright`

### Customer Churn Prediction — Kaggle Playground S6E3
XGBoost and LightGBM on ~594K telecom records with 5-fold stratified CV; XGBoost reached 0.916 mean ROC-AUC.
[Live demo](https://churn-predictor-aviraj.onrender.com/) · [Source](https://github.com/aviraj1805/Customer-Churn-Prediction)
`Python` `XGBoost` `LightGBM` `scikit-learn` `Pandas` `Seaborn`

### CreditWise — Loan Approval Prediction
Class-balanced Random Forest in a scikit-learn pipeline: 0.91 F1 and 0.98 ROC-AUC, deployed as a Streamlit app with confidence scores and feature importance.
[Live demo](https://creditwiseloanapprovall.streamlit.app/) · [Source](https://github.com/aviraj1805/CreditWise-Loan-Approval-System)
`Python` `scikit-learn` `Pandas` `NumPy` `Streamlit`

### IAMARS — Drone Detection and Tracking
YOLOv8n fine-tuned on VisioDECT (0.965 mAP@0.5 on a 1,800-image held-out set), ByteTrack tracking, 88.5 FPS on an RTX 2050.
[Live demo](https://huggingface.co/spaces/AvirajV/iamars-drone-tracking) · [Source](https://github.com/aviraj1805/intelligent-aerial-monitoring)
`Python` `YOLOv8` `ByteTrack` `OpenCV` `NumPy`

### More projects
| Project | Highlights | Links |
|---|---|---|
| PhonePe Pulse Insights | 2018–2024 Pulse data → 9-table MySQL, 10 SQL business queries, Streamlit + Plotly | [Live charts](https://aviraj1805.github.io/portfolio/demos/phonepe/) · [Source](https://github.com/aviraj1805/PhonePe) |
| Mental Health in Tech — EDA | 1,251 survey responses, interactive Plotly dashboard | [Live dashboard](https://aviraj1805.github.io/portfolio/demos/mental-health/) · [Source](https://github.com/aviraj1805/mental-health-survey-eda) |
| Tesla Stock Price Forecasting | SimpleRNN vs LSTM, 1/5/10-day horizons; SimpleRNN 3.1% MAPE (1 day) | [Source](https://github.com/aviraj1805/Tesla-Stock-Price-Prediction) |
| SmartCart Customer Segmentation | 2,240 customers, PCA (84.5% variance), 4 Ward clusters | [Source](https://github.com/aviraj1805/Smartcart-Customer-Clustering) |
| Off-road Scene Segmentation | YOLO Hackathon 2026, DINOv2 + ConvNeXt head, 0.432 mIoU | [Source](https://github.com/aviraj1805/yolo_hackathon_MIT) |
| Used Car Price Prediction | Random Forest R² 0.962 vs Linear Regression 0.849 | [Source](https://github.com/aviraj1805/Car-Price-Prediction) |

---

## Tech Stack

Built with **zero frameworks** — pure HTML, CSS, and vanilla JS. Deployed on **GitHub Pages**.

---

## Run Locally

```bash
git clone https://github.com/aviraj1805/portfolio.git
cd portfolio
# open index.html in your browser
```

No build step. No dependencies. Just open `index.html`.

`demos/` holds hosted copies of the PhonePe and Mental Health dashboards; they share one local Plotly bundle (`demos/plotly.min.js`).

---

## Connect

- Email — [virapeaviraj@gmail.com](mailto:virapeaviraj@gmail.com)
- LinkedIn — [/in/avirajvirape](https://www.linkedin.com/in/avirajvirape/)
- GitHub — [/aviraj1805](https://github.com/aviraj1805)
- LeetCode — [/aviraj_virape](https://leetcode.com/u/aviraj_virape/)

---

© 2026 Aviraj Virape.
