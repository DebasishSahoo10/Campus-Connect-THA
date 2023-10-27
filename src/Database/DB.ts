import {v4 as uuid} from 'uuid'

export type JobPosts = {
  _id : string;
  title: string;
  description: string;
  category: "Design" | "ML" | "Marketing" | "Finance" | "Technology" | "Engineering" | "Business" | "Human Resource";
  type: "Project" | "Internship" | "Startup";
  payType: "Equity" | "Partnership/Collab" | "Stipend";
  createdBy: string;
}


export const posts : JobPosts[] = [
  {
    _id : uuid(),
    title: "Need a team mate for agri-tech project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur eos labore distinctio aut quaerat, quod mollitia nam eaque impedit neque odio ut, delectus officiis sequi amet quia ipsum laudantium?",
    category: "Design",
    type: "Project",
    payType: "Partnership/Collab",
    createdBy: "Sudeep Bhurat",
  },
  {
    _id : uuid(),
    title: "Machine Learning Internship",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur eos labore distinctio aut quaerat, quod mollitia nam eaque impedit neque odio ut, delectus officiis sequi amet quia ipsum laudantium?",
    category: "ML",
    type: "Internship",
    payType: "Equity",
    createdBy: "Will Witnor",
  },
  {
    _id : uuid(),
    title: "Looking for a Co-Founder for my 3D Gen Startup",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur eos labore distinctio aut quaerat, quod mollitia nam eaque impedit neque odio ut, delectus officiis sequi amet quia ipsum laudantium?",
    category: "Marketing",
    type: "Startup",
    payType: "Stipend",
    createdBy: "Microsoft",
  },
  {
    _id : uuid(),
    title: "Seeking a Collaborator for a Fin-Tech Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur eos labore distinctio aut quaerat, quod mollitia nam eaque impedit neque odio ut, delectus officiis sequi amet quia ipsum laudantium?",
    category: "Finance",
    type: "Project",
    payType: "Stipend",
    createdBy: "Sourabh Kumar",
  },
  {
    _id : uuid(),
    title: "Frontend Engineer Intern",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur eos labore distinctio aut quaerat, quod mollitia nam eaque impedit neque odio ut, delectus officiis sequi amet quia ipsum laudantium?",
    category: "Technology",
    type: "Internship",
    payType: "Equity",
    createdBy: "Debasish Sahoo",
  },
  {
    _id : uuid(),
    title: "Need Lead Mechanical Engineer for EV Startup",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur eos labore distinctio aut quaerat, quod mollitia nam eaque impedit neque odio ut, delectus officiis sequi amet quia ipsum laudantium?",
    category: "Engineering",
    type: "Startup",
    payType: "Partnership/Collab",
    createdBy: "Abhisek Mohanty",
  },
  {
    _id : uuid(),
    title: "Product Design Manager Required",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur eos labore distinctio aut quaerat, quod mollitia nam eaque impedit neque odio ut, delectus officiis sequi amet quia ipsum laudantium?",
    category: "Business",
    type: "Project",
    payType: "Partnership/Collab",
    createdBy: "Google",
  },
  {
    _id : uuid(),
    title: "HR Person needed with 1+ Experience",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur eos labore distinctio aut quaerat, quod mollitia nam eaque impedit neque odio ut, delectus officiis sequi amet quia ipsum laudantium?",
    category: "Human Resource",
    type: "Internship",
    payType: "Stipend",
    createdBy: "Peerlist",
  },
];

export const categories = posts.reduce((acc: string[], curr) => {
  if (!acc.includes(curr.category)) {
    acc.push(curr.category);
  }
  return acc;
}, []);

export const types = posts.reduce((acc: string[], curr) => {
  if (!acc.includes(curr.type)) {
    acc.push(curr.type);
  }
  return acc;
}, []);

export const payTypes = posts.reduce((acc: string[], curr) => {
  if (!acc.includes(curr.payType)) {
    acc.push(curr.payType);
  }
  return acc;
}, []);
