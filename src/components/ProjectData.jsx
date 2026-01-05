// src/data/projectData.js
import {
  Building2, Home, Landmark, Globe, Store, LayoutGrid
} from "lucide-react";

import Project1 from "../Images/Project1.jpg";
import Project2 from "../Images/Project2.jpg";
import Project3 from "../Images/Project3.jpeg";
import Project4 from "../Images/Project4.jpeg";
import Project5 from "../Images/Project5.JPG";
import Project6 from "../Images/Project6.jpg";
import Project7 from "../Images/Project7.jpg";
import Project8 from "../Images/Project8.jpg";
import Project9 from "../Images/Project9.jpg";
import Project10 from "../Images/Project10.jpg";
import Project11 from "../Images/Project11.jpg";
import stall4 from "../Images/stall4.JPG";
import stall7 from "../Images/stall7.JPG";
import stall8 from "../Images/stall8.JPG";
import so1 from "../Images/so1.JPG";
import so2 from "../Images/so2.JPG";
import so3 from "../Images/so3.JPG";
import so4 from "../Images/so4.jpg";
import so5 from "../Images/so5.jpg";
import gov1 from "../Images/gov1.JPG";
import gov2 from "../Images/gov2.JPG";
import gov3 from "../Images/gov3.JPG";
import gov4 from "../Images/gov4.JPG";
import gov5 from "../Images/gov5.JPG";
import gove1 from "../Images/gove1.png";
import gove2 from "../Images/gove2.png";
import gove3 from "../Images/gove3.jpg";


export const categories = [
  "All",
  "Residential",
  "Commercial",
  "Govt Affiliates"
];


export const iconMap = {
  Residential: <Home className="text-[#C4302C] w-6 h-6" />,
  Commercial: <Building2 className="text-[#C4302C] w-6 h-6" />,
  "Govt Affiliates": <Landmark className="text-[#C4302C] w-6 h-6" />,
  Exhibitions: <Globe className="text-[#C4302C] w-6 h-6" />,
  Stalls: <Store className="text-[#C4302C] w-6 h-6" />,
  All: <LayoutGrid className="text-[#C4302C] w-6 h-6" />,
};
export const projects = [
  {
    id: 1,
    title: "Ansal sonipoat",
    category: "Residential",
    kwp: "N/A",
    image: Project1
  },
  {
    id: 2,
    title: "BKT Bhiwandi",
    category: "Commercial",
    kwp: "N/A",
    image: Project2
  },
  {
    id: 3,
    title: "Kumheera Net Zero Village",
    category: "Govt Affiliates",
    kwp: "1440",
    image: gove1
  },
  {
    id: 4,
    title: "Kumheera Net Zero Village",
    category: "Govt Affiliates",
    kwp: "450",
    image: gove2
  },
  {
    id: 6,
    title: "LR College",
    category: "Commercial",
    kwp: "1000",
    image: Project6
  },
  {
    id: 7,
    title: "Orient System",
    category: "Commercial",
    kwp: "1450",
    image: Project7
  },
  {
    id: 8,
    title: "PVS Polymers",
    category: "Commercial",
    kwp: "100",
    image: Project8
  },
  {
    id: 9,
    title: "Rangeeli Mahal Barsana",
    category: "Residential",
    kwp: "100",
    image: Project9
  },
  {
    id: 10,
    title: "Build Bharat Expo",
    category: "Exhibitions and stalls",
    kwp: "N/A",
    image: stall4
  },
  {
    id: 11,
    title: "Utkarsh ke 8 varsh Kavi Nagar Event",
    category: "Exhibitions and stalls",
    kwp: "N/A",
    image: stall7
  },
  {
  id: 12,
  title: "Build Bharat Expo",
  category: "Exhibitions and stalls",
  kwp: "N/A",
  image: so1
},
{
  id: 13,
  title: "Utkarsh ke 8 varsh Kavi Nagar Event",
  category: "Exhibitions and stalls",
  kwp: "N/A",
  image: gove3
},
{
  id: 14,
  title: "MGR Exhibition",
  category: "Exhibitions and stalls",
  kwp: "N/A",
  image: so3
},
{
  id: 15,
  title: "Rooftop",
  category: "Residential",
  kwp: "N/A",
  image: so4
},
{
  id: 16,
  title: "OS cool Home",
  category: "Commercial",
  kwp: "N/A",
  image: so5
}
];

