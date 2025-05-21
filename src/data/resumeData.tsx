import {TimelineItem} from './dataDef';

export const education: TimelineItem[] = [
  {
    date: 'June 2024',
    location: 'Università Niccolò Cusano',
    title: 'Master in Web Programming and Development',
    grade: '110 cum laude/110',
    highlights: [],
  },
  {
    date: 'June 2022',
    location: 'Università Mercatorum',
    title: "Bachelor's Degree in Computer Engineering",
    grade: '88/110',
    highlights: [],
  },
  {
    date: 'July 2012',
    location: 'Istituto Tecnico Commerciale Paritario "Giacomo Leopardi"',
    title: 'High school diploma in accounting and business administration',
    grade: '70/100',
    highlights: [],
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'September 2024 - Present',
    location: 'Idea75, Bari (BA)',
    title: 'Senior Backend Developer',
    grade: null,
    highlights: [
      'Design and development of software solutions for monitoring and intelligent control of energy plants, including requirement definition and architecture.',
      'Implementation of predictive models and genetic algorithms for operational efficiency optimization.',
      'Coordination of frontend and backend activities to ensure maintainability and high code quality.',
      'Team management through task planning, code review, and best practice definition.',
      'Design and implementation of DevOps workflows, focusing on automated testing, CI/CD, build, and cloud deployment.',
      'Integration of field devices with the cloud, ensuring reliable data ingestion and system stability.',
      'Extensive use of Kubernetes, Docker, and GitLab CI/CD for application orchestration and management.',
    ],
  },
  {
    date: 'March 2024 - September 2024',
    location: 'Idea75, Bari (BA)',
    title: 'Backend Developer',
    grade: null,
    highlights: [
      'Development and optimization of software solutions for monitoring and controlling energy plants, with a focus on economic and environmental impact reduction.',
      'Asset trend prediction using genetic algorithms to enhance operational efficiency.',
      'Integration of field devices for remote management, ensuring seamless communication between edge and cloud systems.',
      'Backend application development and maintenance using Python and Node.js, with data management in MySQL, PostgreSQL, InfluxDB, and MongoDB.',
      'Creation of dynamic and interactive user interfaces with React.',
      'Utilization of AWS DynamoDB, Timestream, and QuickSight for data visualization and analytics.',
      'Deployment of containerized applications using Docker in cloud and on-premise environments.',
    ],
  },
  {
    date: 'April 2022 - March 2024',
    location: 'Intelab, Rome (RM)',
    title: 'Software Developer and Cloud Specialist',
    grade: null,
    highlights: [
      'Design and implementation of monitoring and analytics pipelines for energy plants, including photovoltaics, wind farms, BESS, and EV charging stations.',
      'Edge-to-cloud integration for seamless data collection and processing.',
      'Scalable cloud architecture on AWS using IoT Core, Lambda, S3, QuickSight, and EC2.',
      'Database design and maintenance using MySQL, PostgreSQL, and MongoDB.',
      'Implementation of communication protocols with field devices using HTTP, MQTT, OPC-UA, and Modbus.',
    ],
  },
  {
    date: 'November 2017 - March 2024',
    location: 'SaoloTech - Automotive Services, Bovalino (RC)',
    title: 'Mechatronics Business Owner',
    grade: null,
    highlights: [
      'Business management and expansion in the mechatronics sector, specializing in car diagnostics, repair, and customization.',
      'Supervision of technical and administrative operations, implementing innovative solutions for automotive services.',
      'Optimization of business processes to enhance operational efficiency and customer satisfaction.',
    ],
  },
  {
    date: 'January 2009 - November 2017',
    location: 'Auto Officina Meccanica Saolo, Bovalino (RC)',
    title: 'Apprentice Mechatronics (Collaboration)',
    grade: null,
    highlights: [
      'Development of problem-solving skills, task organization, and workflow management.',
      'Hands-on experience in vehicle diagnostics, component replacement, and preventive maintenance.',
      'Refinement of manual skills and technical expertise under the guidance of senior mechanics.',
    ],
  },
];
