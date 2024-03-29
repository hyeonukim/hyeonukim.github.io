import {
    mobile,
    unity,
    unreal,
    game_dev,
    data_sci,
    sfu,
    hnt,
    git,
    github,
    figma,
    csharp,
    unreal_nobg,
    unity_nobg,
    python,
    cpp,
    c,
    latex,
    matlab,
    react,
    r,
    linux,
    carrent,
    jobit,
    usan,
    zombie,
    turret,
    dodgeball,
    undead,
    tapestry,
    youtube,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "project",
      title: "Projects",
    },
  ];
  
  const services = [
    {
      title: "Game Developer",
      icon: game_dev,
    },
    {
      title: "Unity",
      icon: unity,
    },
    {
      title: "Unreal Engine",
      icon: unreal,
    },
    {
      title: "Data Science",
      icon: data_sci,
    },
  ];
  
  const technologies = [
    {
      name: "unreal",
      icon: unreal_nobg,
    },
    {
      name: "unity",
      icon: unity_nobg,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "cpp",
      icon: cpp,
    },
    {
      name: "csharp",
      icon: csharp,
    },
    {
      name: "c",
      icon: c,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "github",
      icon: github,
    },
    {
      name: "latex",
      icon: latex,
    },
    {
      name: "matlab",
      icon: matlab,
    },
  ];
  
  const experiences = [
    {
      title: "Research Assistant",
      company_name: "Supervision under Dr.Stephen Makonin",
      icon: sfu,
      iconBg: "#b02c3c",
      date: "July 2022 - April 2023",
      points: [
        "Worked on Electric Deductive Billing case with BC Hydro under Dr.Stephen Makonin",
        "Presented results to Tap&Go Steering Committee to work with BC Hydro to get error calculation",
        "Created and Used Generative Adversarial Network(GAN) Model to construct missing time series data and analyze",
        "Used Dynamic Time Warping(DTW) Algorithm to create missing time series data and analyze",
      ],
    },
    {
      title: "Game Developer",
      company_name: "Hammer & Tong",
      icon: hnt,
      iconBg: "#E6DEDD",
      date: "April 2023 - August 2023",
      points: [
        "Developing serializable, in-editor configurable scripts for NPC behavior, animations and conditional cutscene playing",
        "Collaborating with an inter-disciplinary team of Master of Digital Media students and Hammer&Tong Artists/Writers to create a Narrative Unity game in C#",
        "Managing GitLab repository for collaborative work",
        "Writing technical documentation for the entire code base, managing Version Control, and Pipeline workflow",
      ],
    },
  ];
   
  const projects = [
    {
      name: "Tapestry (Hammer&Tong)",
      description:
        "The project tests the mechanics of a narrative-driven game where players unravel the story of the game by interacting with the world and the characters in it",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C sharp",
          color: "green-text-gradient",
        },
        {
          name: "Hammer&Tong",
          color: "pink-text-gradient",
        },
      ],
      image: tapestry,
      source_img:  youtube,
      source_code_link: "https://www.youtube.com/watch?v=U6YLE0IdX7A",
      video_code_link: "https://www.youtube.com/"
    },
    {
      name: "Undead Suvivor",
      description:
        "A rogue like game built with C# Unity where player has to survive 5 minutes of unlimited waves of undeads in Endless environments",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C sharp",
          color: "green-text-gradient",
        },
        {
          name: "Object Oriented Programming",
          color: "pink-text-gradient",
        },
      ],
      image: undead,
      source_img: github,
      source_code_link: "https://github.com/hyeonukim/UndeadSurvivor",
      video_code_link: "https://www.youtube.com/"
    },
    {
      name: "Usan",
      description:
        "A third person souls like game built with C++/Blueprint in Unreal Engine 5.",
      tags: [
        {
          name: "UE5",
          color: "blue-text-gradient",
        },
        {
          name: "C++/Blueprint",
          color: "green-text-gradient",
        },
        {
          name: "Niagara Effects",
          color: "pink-text-gradient",
        },
      ],
      image: usan,
      source_img: github,
      source_code_link: "https://github.com/hyeonukim/Usan",
      video_code_link: "https://www.youtube.com/"
    },
    {
      name: "Dodgeball",
      description:
        "A top down game where A player has to dodge around the enemies' projectiles attempting to finish the maze. The main purpose for this project was to test/learn how to use UE5 with C++ classes",
      tags: [
        {
          name: "UE5",
          color: "blue-text-gradient",
        },
        {
          name: "C++/Blueprint",
          color: "green-text-gradient",
        },
      ],
      image: dodgeball,
      source_img: github,
      source_code_link: "https://github.com/hyeonukim/Dodgeball",
      video_code_link: "https://www.youtube.com/"
    },
    {
      name: "Zombie Shooter",
      description:
        "A top-down multiplayer shooter game built with C# in Unity where player must shoot different types and waves of zombies",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C sharp",
          color: "green-text-gradient",
        },
        {
          name: "Object Oriented Programming",
          color: "pink-text-gradient",
        },
      ],
      image: zombie,
      source_img: github,
      source_code_link: "https://github.com/hyeonukim/Zombie",
    },
    {
      name: "Tower Defence",
      description:
        "A tower defence game where player has to eliminate wave of enemies in time with limited income, and each buy with randomness to make the players have different experiences",
        tags: [
          {
            name: "Unity",
            color: "blue-text-gradient",
          },
          {
            name: "C sharp",
            color: "green-text-gradient",
          },
          {
            name: "Object Oriented Programming",
            color: "pink-text-gradient",
          },
        ],
        image: turret,
        source_img: github,
        source_code_link: "https://github.com/hyeonukim/TowerDefence",
    },
  ];
  
  export { services, technologies, experiences, projects };