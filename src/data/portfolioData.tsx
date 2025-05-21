import { PortfolioItem } from './dataDef';

import porfolioImage1 from '../images/portfolio/autofixweb.webp';
import porfolioImage2 from '../images/portfolio/smart-car.webp';
import porfolioImage3 from '../images/portfolio/smart-gate.webp';
import porfolioImage4 from '../images/portfolio/iot-monitoring.webp';
import porfolioImage5 from '../images/portfolio/wind-monitoring.webp';
import porfolioImage6 from '../images/portfolio/ems.webp';

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'IoT Monitoring for Renewable Energy Systems',
    description:
      'A professional solution for monitoring photovoltaic plants, cogenerators, and EV charging stations using IoT and cloud technologies.',
    image: porfolioImage4,
    modalText:
      'This professional project leverages advanced IoT and cloud technologies to monitor photovoltaic systems, cogenerators, and electric vehicle charging stations. Using AWS Greengrass and Python on edge devices (Linux-based IoT systems), the solution collects, processes, and streams data to the cloud via AWS IoT Core. Cloud services like S3, Timestream, AWS Lambda, and QuickSight enable real-time data visualization and analytics. The dashboard provides users with insights into system performance, including efficiency, reliability, and aggregated production metrics. It also forecasts future energy yields and tracks key KPIs such as daily, weekly, and monthly outputs, as well as charging statistics for EV stations.',
  },
  {
    title: 'Advanced Energy Management System (EMS)',
    description:
      'A professional EMS solution for real-time energy optimization, leveraging IoT, edge computing, and AWS cloud technologies.',
    image: porfolioImage6,
    modalText:
      'This project introduces an innovative and scalable Energy Management System (EMS) designed to optimize the management of complex energy assets, reduce operational costs and CO₂ emissions, and ensure high efficiency and reliability. Its primary goal is to provide intelligent and effective energy resource management through advanced optimizations and machine learning techniques, improving both real-time operations and forecast-based performance. The system is structured into two main layers: the edge layer, which directly interacts with field devices such as photovoltaic systems, energy storage systems, cogenerators, microturbines, EV charging stations, and various loads, and the cloud layer, which handles strategic functions and advanced computations. The edge layer collects real-time data, performs local optimizations using deterministic algorithms when discrepancies are detected between real conditions and the plans received from the cloud (e.g., variations in loads, renewable generation, or prolonged offline periods), validates operating conditions through supervised classification models, identifies anomalies, and ensures operational continuity even without cloud connectivity. The cloud layer, on the other hand, performs ex-ante optimizations using genetic algorithms to identify the best operational solutions, minimizing costs and CO₂ emissions. These optimizations rely on forecasts of loads and renewable generation for the next 24 hours, developed through automatically trained regression models, and incorporate electricity market prices. The cloud also enables the training and deployment of supervised classification models for local monitoring and offers advanced functionalities for calculating asset performance KPIs, visualizing real-time data, and managing continuous learning workflows to update and validate models. Optimization plans generated in the cloud are sent to the edge layer for execution, ensuring a synergistic and optimal operation of assets. Developed with React for the frontend and Python for the backend and machine learning models, the system leverages AWS technologies such as IoT Core, Lambda, S3, EC2, EFS, and DynamoDB to provide a robust and comprehensive solution. This EMS represents a cutting-edge, intelligent system designed to maximize efficiency, sustainability, and reliability across a wide range of operational scenarios.',
  },
  {
    title: 'Smart Roadster Automation',
    description:
      'A hobby project using Arduino and MIT App Inventor to fully automate a smart roadster with Bluetooth smartphone controls.',
    image: porfolioImage2,
    modalText:
      "This hobby project was entirely developed by me, encompassing both the software and hardware integration with the car. Using Arduino (edge) and MIT App Inventor (Android), the system transforms a smart roadster into a fully automated vehicle. Bluetooth-enabled smartphone controls allow ignition, engine start/stop, horn activation, and lights. Additionally, a button in the car provides dashboard and engine control, making the key redundant. A unique security feature triggers rhythmic light and horn signals if the dashboard is activated without disarming the system via the smartphone. Developed with Arduino's pseudo C language and block programming in MIT App Inventor.",
  },
  {
    title: 'Empowering Automotive Repairs with Technology',
    description:
      'A web platform aimed at simplifying diagnostics and repair processes in the automotive sector, leveraging modern technologies like React, Node.js, and Express, and fostering collaboration.',
    image: porfolioImage1,
    modalText:
      'This project focuses on creating an innovative digital platform to assist professionals in the automotive repair industry. By integrating technologies such as React for an intuitive frontend and Node.js with Express for a robust backend, it offers advanced tools and resources to streamline complex technical tasks. The platform promotes collaboration, knowledge sharing, and modernizes repair practices, making them more efficient and accessible.',
  },
  {
    title: 'Wind Turbine Performance Monitoring and ML Deployment',
    description:
      'A professional system for monitoring wind turbine performance and deploying machine learning models for predictive analysis.',
    image: porfolioImage5,
    modalText:
      'This professional project delivers a comprehensive solution for monitoring wind turbine performance and facilitating machine learning workflows. It tracks KPIs such as reliability, daily production, and RUL (Remaining Useful Life) while enabling users to train and validate machine learning models tailored to wind turbines. The system evaluates model accuracy against real data, providing metrics such as R², RMSE, MAPE, and MSE. A user-friendly dashboard allows the upload of models to the cloud and their deployment to IoT devices. The backend, built with Flask, and the frontend, developed using Node-RED, are hosted in Docker containers on a server, with MySQL for data management. The cloud infrastructure, powered by AWS IoT Core, IoT Rules, and S3, ensures secure storage of models and metadata. Using MQTT from IoT Core, the server communicates deployment instructions to IoT devices, which autonomously download models with payload-provided credentials.',
  },
  {
    title: 'Smart Gate Automation',
    description: 'A hobby project using Arduino and MIT App Inventor to automate gate control via smartphone.',
    image: porfolioImage3,
    modalText:
      "This hobby project was fully developed by me, covering both the software and hardware integration. Using Arduino and MIT App Inventor, the system automates the opening and closing of a gate. An Arduino-based web API, paired with a relay shield and integration with the gate’s original remote control, allows seamless smartphone control for gate operations. The software was written in Arduino's pseudo C language, while the Android application was created using block programming in MIT App Inventor.",
  },
];
