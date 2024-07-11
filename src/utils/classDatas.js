const classDatas = [
    {
        "id": 1,
        "course": "Introduction to Python",
        "instructor": "John Doe",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-12T10:00:00",
        "booked": true,
        "assignments": [
            {
                "title": "Variables and Data Types",
                "deadline": "2024-07-15T23:59:00"
            },
            {
                "title": "Control Flow",
                "deadline": "2024-07-20T23:59:00"
            }
        ]
    },
    {
        "id": 2,
        "course": "Data Science with R",
        "instructor": "Jane Smith",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-12T15:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Introduction to R",
                "deadline": "2024-07-18T23:59:00"
            },
            {
                "title": "Data Manipulation with dplyr",
                "deadline": "2024-07-25T23:59:00"
            }
        ]
    },
    {
        "id": 3,
        "course": "Machine Learning Basics",
        "instructor": "Alice Johnson",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-13T11:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Supervised Learning",
                "deadline": "2024-07-22T23:59:00"
            },
            {
                "title": "Unsupervised Learning",
                "deadline": "2024-07-29T23:59:00"
            }
        ]
    },
    {
        "id": 4,
        "course": "Web Development with JavaScript",
        "instructor": "Bob Brown",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-13T14:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "JavaScript Basics",
                "deadline": "2024-07-19T23:59:00"
            },
            {
                "title": "DOM Manipulation",
                "deadline": "2024-07-26T23:59:00"
            }
        ]
    },
    {
        "id": 5,
        "course": "Advanced Java Programming",
        "instructor": "Charlie Green",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-14T09:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Object-Oriented Programming",
                "deadline": "2024-07-21T23:59:00"
            },
            {
                "title": "Data Structures",
                "deadline": "2024-07-28T23:59:00"
            }
        ]
    },
    {
        "id": 6,
        "course": "Database Management Systems",
        "instructor": "Dana White",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-14T13:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "SQL Basics",
                "deadline": "2024-07-20T23:59:00"
            },
            {
                "title": "Normalization",
                "deadline": "2024-07-27T23:59:00"
            }
        ]
    },
    {
        "id": 7,
        "course": "Network Security Fundamentals",
        "instructor": "Eve Black",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-15T12:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Basic Cryptography",
                "deadline": "2024-07-22T23:59:00"
            },
            {
                "title": "Network Attacks",
                "deadline": "2024-07-29T23:59:00"
            }
        ]
    },
    {
        "id": 8,
        "course": "Cloud Computing with AWS",
        "instructor": "Frank Martin",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-15T16:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "AWS Basics",
                "deadline": "2024-07-24T23:59:00"
            },
            {
                "title": "EC2 and S3",
                "deadline": "2024-07-31T23:59:00"
            }
        ]
    },
    {
        "id": 9,
        "course": "Introduction to Data Structures",
        "instructor": "Grace Lee",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-16T10:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Arrays and Linked Lists",
                "deadline": "2024-07-23T23:59:00"
            },
            {
                "title": "Stacks and Queues",
                "deadline": "2024-07-30T23:59:00"
            }
        ]
    },
    {
        "id": 10,
        "course": "Introduction to AI",
        "instructor": "Henry Scott",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-16T14:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "AI Basics",
                "deadline": "2024-07-25T23:59:00"
            },
            {
                "title": "Machine Learning Overview",
                "deadline": "2024-08-01T23:59:00"
            }
        ]
    },
    {
        "id": 11,
        "course": "HTML & CSS Fundamentals",
        "instructor": "Ivy Thompson",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-17T11:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "HTML Basics",
                "deadline": "2024-07-24T23:59:00"
            },
            {
                "title": "CSS Styling",
                "deadline": "2024-07-31T23:59:00"
            }
        ]
    },
    {
        "id": 12,
        "course": "Agile Project Management",
        "instructor": "Jack White",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-17T15:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Introduction to Agile",
                "deadline": "2024-07-26T23:59:00"
            },
            {
                "title": "Scrum Framework",
                "deadline": "2024-08-02T23:59:00"
            }
        ]
    },
    {
        "id": 13,
        "course": "React Development",
        "instructor": "Kelly Brown",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-18T09:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "React Basics",
                "deadline": "2024-07-25T23:59:00"
            },
            {
                "title": "Component Lifecycle",
                "deadline": "2024-08-01T23:59:00"
            }
        ]
    },
    {
        "id": 14,
        "course": "Introduction to Cybersecurity",
        "instructor": "Leo Adams",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-18T13:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Cybersecurity Basics",
                "deadline": "2024-07-27T23:59:00"
            },
            {
                "title": "Threats and Vulnerabilities",
                "deadline": "2024-08-03T23:59:00"
            }
        ]
    },
    {
        "id": 15,
        "course": "UI/UX Design Principles",
        "instructor": "Mia Davis",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-19T10:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Design Basics",
                "deadline": "2024-07-28T23:59:00"
            },
            {
                "title": "User Research",
                "deadline": "2024-08-04T23:59:00"
            }
        ]
    },
    {
        "id": 16,
        "course": "Blockchain Technology",
        "instructor": "Nick Evans",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-19T14:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Blockchain Basics",
                "deadline": "2024-07-29T23:59:00"
            },
            {
                "title": "Cryptocurrency",
                "deadline": "2024-08-05T23:59:00"
            }
        ]
    },
    {
        "id": 17,
        "course": "Kubernetes for Developers",
        "instructor": "Olivia Garcia",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-20T11:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Kubernetes Basics",
                "deadline": "2024-07-29T23:59:00"
            },
            {
                "title": "Pod and Service Management",
                "deadline": "2024-08-06T23:59:00"
            }
        ]
    },
    {
        "id": 18,
        "course": "Digital Marketing",
        "instructor": "Paul Harris",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-20T15:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "SEO Basics",
                "deadline": "2024-07-30T23:59:00"
            },
            {
                "title": "Content Marketing",
                "deadline": "2024-08-07T23:59:00"
            }
        ]
    },
    {
        "id": 19,
        "course": "DevOps Fundamentals",
        "instructor": "Quinn Martinez",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-21T09:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "CI/CD Pipelines",
                "deadline": "2024-07-30T23:59:00"
            },
            {
                "title": "Infrastructure as Code",
                "deadline": "2024-08-08T23:59:00"
            }
        ]
    },
    {
        "id": 20,
        "course": "Game Development with Unity",
        "instructor": "Ryan King",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-21T13:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Unity Basics",
                "deadline": "2024-07-31T23:59:00"
            },
            {
                "title": "Game Physics",
                "deadline": "2024-08-09T23:59:00"
            }
        ]
    },
    {
        "id": 21,
        "course": "Big Data Analytics",
        "instructor": "Sophia Lee",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-22T10:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Hadoop Ecosystem",
                "deadline": "2024-08-01T23:59:00"
            },
            {
                "title": "Spark and Kafka",
                "deadline": "2024-08-10T23:59:00"
            }
        ]
    },
    {
        "id": 22,
        "course": "Mobile App Development",
        "instructor": "Tom Nelson",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-22T14:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Android Basics",
                "deadline": "2024-08-02T23:59:00"
            },
            {
                "title": "iOS Basics",
                "deadline": "2024-08-11T23:59:00"
            }
        ]
    },
    {
        "id": 23,
        "course": "Python for Data Science",
        "instructor": "Uma Patel",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-23T11:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "NumPy and Pandas",
                "deadline": "2024-08-03T23:59:00"
            },
            {
                "title": "Data Visualization",
                "deadline": "2024-08-12T23:59:00"
            }
        ]
    },
    {
        "id": 24,
        "course": "Ethical Hacking",
        "instructor": "Victor Brown",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-23T15:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Penetration Testing Basics",
                "deadline": "2024-08-04T23:59:00"
            },
            {
                "title": "Exploitation Techniques",
                "deadline": "2024-08-13T23:59:00"
            }
        ]
    },
    {
        "id": 25,
        "course": "AWS Certified Solutions Architect",
        "instructor": "Wendy Harris",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-24T10:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "AWS Architecture",
                "deadline": "2024-08-05T23:59:00"
            },
            {
                "title": "High Availability",
                "deadline": "2024-08-14T23:59:00"
            }
        ]
    },
    {
        "id": 26,
        "course": "Full-Stack Web Development",
        "instructor": "Xavier Lopez",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-24T14:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Frontend Basics",
                "deadline": "2024-08-06T23:59:00"
            },
            {
                "title": "Backend Development",
                "deadline": "2024-08-15T23:59:00"
            }
        ]
    },
    {
        "id": 27,
        "course": "AI for Healthcare",
        "instructor": "Yara Morgan",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-25T09:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "AI in Medical Imaging",
                "deadline": "2024-08-07T23:59:00"
            },
            {
                "title": "Predictive Analytics",
                "deadline": "2024-08-16T23:59:00"
            }
        ]
    },
    {
        "id": 28,
        "course": "Data Visualization with D3.js",
        "instructor": "Zachary Scott",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-25T13:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "D3.js Basics",
                "deadline": "2024-08-08T23:59:00"
            },
            {
                "title": "Interactive Charts",
                "deadline": "2024-08-17T23:59:00"
            }
        ]
    },
    {
        "id": 29,
        "course": "AI and Machine Learning",
        "instructor": "Alice Walker",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-26T11:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Machine Learning Basics",
                "deadline": "2024-08-09T23:59:00"
            },
            {
                "title": "Deep Learning",
                "deadline": "2024-08-18T23:59:00"
            }
        ]
    },
    {
        "id": 30,
        "course": "Software Testing and QA",
        "instructor": "Brian Young",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-26T15:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Testing Basics",
                "deadline": "2024-08-10T23:59:00"
            },
            {
                "title": "Automation Testing",
                "deadline": "2024-08-19T23:59:00"
            }
        ]
    },
    {
        "id": 31,
        "course": "IoT Fundamentals",
        "instructor": "Charlotte Williams",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-27T10:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "IoT Basics",
                "deadline": "2024-08-11T23:59:00"
            },
            {
                "title": "IoT Protocols",
                "deadline": "2024-08-20T23:59:00"
            }
        ]
    },
    {
        "id": 32,
        "course": "Natural Language Processing",
        "instructor": "David Lewis",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-27T14:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "NLP Basics",
                "deadline": "2024-08-12T23:59:00"
            },
            {
                "title": "Text Classification",
                "deadline": "2024-08-21T23:59:00"
            }
        ]
    },
    {
        "id": 33,
        "course": "Software Architecture",
        "instructor": "Emma Martinez",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-28T11:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Design Patterns",
                "deadline": "2024-08-13T23:59:00"
            },
            {
                "title": "Microservices",
                "deadline": "2024-08-22T23:59:00"
            }
        ]
    },
    {
        "id": 34,
        "course": "Embedded Systems",
        "instructor": "Frank White",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-28T15:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Embedded C Programming",
                "deadline": "2024-08-14T23:59:00"
            },
            {
                "title": "Real-Time Operating Systems",
                "deadline": "2024-08-23T23:59:00"
            }
        ]
    },
    {
        "id": 35,
        "course": "Deep Learning with TensorFlow",
        "instructor": "Grace Brown",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-29T09:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "TensorFlow Basics",
                "deadline": "2024-08-15T23:59:00"
            },
            {
                "title": "Neural Networks",
                "deadline": "2024-08-24T23:59:00"
            }
        ]
    },
    {
        "id": 36,
        "course": "Computer Vision with OpenCV",
        "instructor": "Henry Martinez",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-29T13:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "OpenCV Basics",
                "deadline": "2024-08-16T23:59:00"
            },
            {
                "title": "Image Processing",
                "deadline": "2024-08-25T23:59:00"
            }
        ]
    },
    {
        "id": 37,
        "course": "Quantum Computing",
        "instructor": "Isabella Harris",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-30T10:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Quantum Mechanics Basics",
                "deadline": "2024-08-17T23:59:00"
            },
            {
                "title": "Quantum Algorithms",
                "deadline": "2024-08-26T23:59:00"
            }
        ]
    },
    {
        "id": 38,
        "course": "Computer Graphics",
        "instructor": "James Lee",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-30T14:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Graphics Basics",
                "deadline": "2024-08-18T23:59:00"
            },
            {
                "title": "Rendering Techniques",
                "deadline": "2024-08-27T23:59:00"
            }
        ]
    },
    {
        "id": 39,
        "course": "Artificial Intelligence Ethics",
        "instructor": "Karen Clark",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_f.png",
        "time": "2024-07-31T11:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "Ethical AI",
                "deadline": "2024-08-19T23:59:00"
            },
            {
                "title": "Bias and Fairness",
                "deadline": "2024-08-28T23:59:00"
            }
        ]
    },
    {
        "id": 40,
        "course": "Augmented Reality Development",
        "instructor": "Lucas Robinson",
        "profile_Pic": "https://res.cloudinary.com/di9yf5j0d/image/upload/v1720677467/test/avatar_m.png",
        "time": "2024-07-31T15:00:00",
        "booked": false,
        "assignments": [
            {
                "title": "AR Basics",
                "deadline": "2024-08-20T23:59:00"
            },
            {
                "title": "ARKit and ARCore",
                "deadline": "2024-08-29T23:59:00"
            }
        ]
    }
]

export default classDatas;