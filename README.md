# 🚀 Real-Time Ad Recommendation & Auction Platform

This project is a **production-inspired ad-tech system** that demonstrates how modern advertising platforms decide **which ad to show**, **who wins the auction**, and **how much the advertiser pays**, all in real time.

The system combines a **machine learning–based CTR prediction model**, a **second-price auction mechanism**, and a **real-time serving API**, along with a modern frontend interface.

---

## 📌 Project Overview

Whenever a user opens a page or application, multiple advertisers compete to display their ads. This platform:

1. Predicts the probability that a user will click on an ad (CTR)
2. Ranks ads using bid, predicted CTR, and quality
3. Runs a **second-price auction**
4. Serves the winning ad in **real time**
5. Tracks business metrics such as revenue, CTR, CPC, and RPM

The design closely mirrors real-world ad platforms such as **Google Ads** and **Meta Ads**.

---

## 🖥️ Frontend (UI Layer)

### Technology Stack
- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **v0.dev** (UI generation)

### Role of the Frontend
- Displays the ad platform interface
- Provides a clean and responsive UI
- Acts purely as the presentation layer

> **Attribution**  
> The frontend UI was generated using **v0.dev** for rapid prototyping and design consistency.  
>  
> **All machine learning models, training pipelines, auction logic, business evaluation, and real-time serving systems were designed and implemented by me.**

---

## 🧠 Machine Learning System (Implemented by Me)

### CTR Prediction Model
- **Model:** LightGBM (Gradient Boosted Decision Trees)
- **Task:** Click-through rate (CTR) prediction
- **Primary Dataset:** Criteo Display Advertising Dataset
- **Extended Dataset:** Avazu (used for fine-tuning in advanced experiments)

### Feature Engineering
- Log transformation of numerical features
- Interaction features
- Smoothed target encoding for categorical features
- Robust handling of missing values
- Strict separation of training and validation data

### Training Strategy
- Heavy offline training on millions of rows
- CPU-optimized training using all available cores
- Early stopping and validation-based tuning
- Evaluation using AUC and ranking-aware metrics

---

## 🏆 Ad Ranking & Auction Logic
Ad Rank = Bid × Predicted CTR × Quality Score


### Auction Type
- **Second-price auction**
- The highest-ranked advertiser wins
- The winner pays just enough to beat the second-highest competitor

This mechanism encourages truthful bidding, prevents overbidding, and ensures stable long-term revenue.

---

## ⚡ Real-Time Ad Serving

The trained model is deployed in a **real-time serving flow**:

1. A user request arrives
2. Features are processed instantly
3. CTR is predicted using the trained LightGBM model
4. Ads are ranked and auctioned
5. The winning ad is returned within milliseconds

### Key Characteristics
- Low-latency decisions (milliseconds)
- In-memory budget tracking
- Stateless prediction with stateful budget updates
- Production-style API design

---

## 📊 Business Evaluation

Beyond ML accuracy, the system evaluates **real business impact** using:

- Impressions
- Clicks
- CTR (Click-Through Rate)
- Revenue
- Average CPC (Cost Per Click)
- RPM (Revenue per 1,000 impressions)
- Advertiser budget utilization

This ensures the model is **commercially meaningful**, not just technically accurate.

---

## 📂 Repository Structure

Ad-Recommendation-Auction-Simulator/
├── app/ # Next.js App Router pages
│ ├── layout.tsx
│ ├── page.tsx
│ └── globals.css
├── components/ # Reusable UI components
├── hooks/ # Custom React hooks
├── lib/ # Utility functions
├── public/ # Static assets
├── styles/ # Global styles
├── package.json
├── next.config.mjs
└── tsconfig.json


> **Note:**  
> The ML training scripts, auction simulation, and real-time backend are part of a separate ML system developed and maintained by me.

---

## ⭐ Key Highlights

- Realistic ad-tech system design
- Scalable ML training pipeline
- Business-aware evaluation metrics
- Production-style real-time serving
- Clear separation of frontend and ML responsibilities

---

## 🔮 Future Improvements

- Redis-based shared budget management
- User and advertiser embeddings
- Reinforcement learning for bid optimization
- Multi-slot ad auctions
- Live dashboards for metrics
- A/B testing framework

---

## 🧠 One-Line Summary

> **A production-inspired real-time ad recommendation and auction platform combining machine learning, second-price auctions, and a modern frontend interface.**


### Ad Ranking Formula
