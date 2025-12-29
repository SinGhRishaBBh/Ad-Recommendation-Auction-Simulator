🧠 Real-Time Ad Recommendation & Auction Platform

This project is a full-stack advertisement recommendation and auction system that simulates how modern ad-tech platforms (such as Google Ads or Meta Ads) decide which advertisement to show to a user in real time. The system combines a machine learning–based CTR prediction model, a second-price auction mechanism, and a real-time serving API, with a modern frontend interface for interaction and visualization.

🚀 Project Overview

When a user opens a page or application, multiple advertisers compete to display their ads. This platform:

Predicts the probability that a user will click on an ad (CTR)

Ranks ads using bid, predicted CTR, and quality

Runs a second-price auction to select the winning advertiser

Serves the winning ad in real time

Tracks business metrics such as revenue, CTR, CPC, and RPM

The system is designed to be scalable, realistic, and production-inspired, closely mirroring real-world ad platforms.

🖥️ Frontend (UI Layer)
Technology

Next.js (App Router)

TypeScript

Tailwind CSS

v0.dev for rapid UI prototyping

Responsibility

Displays the ad platform interface

Provides a clean and modern UI for interacting with the system

Acts as the presentation layer only

Important:
The frontend UI was generated using v0 for rapid development and design consistency.
All machine learning, backend logic, auction simulation, and real-time serving were designed and implemented by me.

🧠 Machine Learning & Backend (Designed and Implemented by Me)
Core ML System

Model: LightGBM (Gradient Boosted Decision Trees)

Task: CTR (Click-Through Rate) prediction

Datasets:

Criteo Display Advertising Dataset (primary)

Avazu (used for fine-tuning and validation in extended versions)

Feature Engineering

Numerical feature log transforms

Interaction features

Smoothed target encoding for categorical features

Careful handling of missing values

No data leakage between train and validation

Training Strategy

Heavy offline training on millions of rows

CPU-optimized training using all available cores

Proper early stopping and validation

AUC-based evaluation

🏆 Ad Ranking & Auction System
Ad Ranking Formula
Ad Rank = Bid × Predicted CTR × Quality Score

Auction Mechanism

Second-price auction

The winning advertiser pays just enough to beat the second-highest competitor

Encourages honest bidding

Prevents budget exhaustion

Stabilizes long-term revenue

⚡ Real-Time Serving System

The trained model is deployed in a real-time serving setup where:

A user request arrives

Features are processed instantly

CTR is predicted using the trained LightGBM model

Ads are ranked and auctioned

The winning ad is returned in milliseconds

Key Properties

Low latency (sub-20ms decision time)

In-memory budget tracking

Stateless prediction with stateful budget updates

Production-style API design

📊 Business Evaluation Metrics

The system is evaluated not only on ML accuracy but also on business impact:

Clicks

Impressions

CTR (Click-Through Rate)

Revenue

Average CPC (Cost Per Click)

RPM (Revenue per 1000 impressions)

Budget utilization

This ensures the model is commercially viable, not just technically accurate.

📂 Repository Structure
ad-platform-model/
├── app/                # Next.js App Router pages
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/         # UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
├── styles/             # Global styles
├── package.json
├── next.config.mjs
└── tsconfig.json


The ML training scripts, auction simulation, and real-time backend are maintained as a separate ML system, designed and implemented by me.

🧩 How This Fits Together

Frontend: User interaction & visualization (v0 + Next.js)

ML Pipeline: CTR prediction, feature engineering, training (LightGBM)

Auction Engine: Second-price auction with ranking

Serving Layer: Real-time API for ad decisions

Evaluation: Offline ML metrics + online business metrics

🏁 Key Highlights

Realistic ad-tech system design

Scalable ML training pipeline

Business-aware evaluation

Production-style real-time serving

Clear separation of frontend and ML/backend responsibilities

📌 Attribution

Frontend UI: Generated using v0.dev

System Design, ML Models, Training, Auctions, Evaluation, and Real-Time Logic:
Designed and implemented by me

📈 Future Improvements

Redis-based shared budget management

User and advertiser embeddings

Reinforcement learning for bidding optimization

Multi-slot auctions

Live dashboard for metrics

A/B testing framework

🧠 One-Line Summary

A production-inspired real-time ad recommendation and auction system combining machine learning, second-price auctions, and a modern frontend interface.
