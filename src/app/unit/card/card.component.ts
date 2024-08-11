import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  department=[
    {
      id:1,
      title:"Aerospace & Defence",
      image:"https://i.postimg.cc/vZR01wYV/aero-1.jpg",
      description:" Advanced solutions enhancing operational efficiency, safety, and innovation in aerospace and defence sectors.",
    },
    {
      id:2,
      title:"Banking & Financial Service",
      image:"https://i.postimg.cc/KjWx7vqF/bank-1.jpg",
      description:"Cutting-edge technologies for secure, efficient, and customer-centric banking and financial services.",
    },
    {
      id:3,
      title:"Healthcare",
      image:"https://i.postimg.cc/nhRgCwWb/health-1.jpg",
      description:"Innovative digital solutions transforming patient care, medical data management, and healthcare operations.",
    },
    {
      id:4,
      title:"Insurance",
      image:"https://i.postimg.cc/k5yVQKxm/insurance-1.jpg",
      description:"Comprehensive digital services optimizing claims processing, policy management, and customer engagement.",
    },
    {
      id:5,
      title:"Locomotive",
      image:"https://i.postimg.cc/tCHYMB2j/locomotive-1.jpg",
      description:"Modernizing locomotive systems for improved safety, performance, and operational efficiency.",
    },
    {
      id:6,
      title:"Industrial",
      image:"https://i.postimg.cc/1zFk2rvk/industrial-1.png",
      description:" Smart technologies driving automation, productivity, and efficiency in industrial operations.",
    },
    {
      id:7,
      title:"Mobility",
      image:"https://i.postimg.cc/1Xb0kwCd/mobility-1.jpg",
      description:"Advanced mobility solutions ensuring seamless connectivity, user engagement, and flexibility.",
    },
    {
      id:8,
      title:"Security",
      image:"https://i.postimg.cc/j5pQ9ykF/security-1.jpg",
      description:"Robust cybersecurity measures protecting data, infrastructure, and operations across industries.",
    }
  ];
}
