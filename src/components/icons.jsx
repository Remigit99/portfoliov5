import React from "react";

const icons = () => {
  return (
    <div>
      {/* TAILWINDCSS ICON */}
      <svg viewBox="0 0 24 24" fill="none" class="w-full h-full">
        <path
          d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C13.37 10.8 14.33 12 16 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C14.63 7.2 13.67 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.37 16.8 9.33 18 11 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C9.63 13.2 8.67 12 7 12z"
          fill="#06B6D4"
        ></path>
      </svg>
      {/* REACT ICON */}
      <svg viewBox="0 0 24 24" fill="none" class="w-full h-full">
        <circle cx="12" cy="12" r="2.5" fill="#61DAFB"></circle>
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="#61DAFB"
          stroke-width="1.2"
          fill="none"
        ></ellipse>
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="#61DAFB"
          stroke-width="1.2"
          fill="none"
          transform="rotate(60 12 12)"
        ></ellipse>
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4"
          stroke="#61DAFB"
          stroke-width="1.2"
          fill="none"
          transform="rotate(120 12 12)"
        ></ellipse>
      </svg>
      {/* NEXTJS ICON */}
      <svg viewBox="0 0 24 24" fill="none" class="w-full h-full">
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="#ffffff10"
          stroke="#ffffff40"
          stroke-width="1"
        ></circle>
        <path
          d="M7 17V7l8 10V7"
          stroke="#ffffff"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M14 7h3"
          stroke="#ffffff"
          stroke-width="1.8"
          stroke-linecap="round"
        ></path>
      </svg>
      {/* TYPESCRIPT ICON */}
      <svg viewBox="0 0 24 24" class="w-full h-full">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6"></rect>
        <path
          d="M13.5 11H10v1.5h1.5V17h1.5v-4.5H14.5V11H13.5z"
          fill="white"
        ></path>
        <path d="M8 11v1h1.5v5h1.5v-5H12.5v-1H8z" fill="white"></path>
      </svg>
      {/* PYTHON ICON */}
      <svg viewBox="0 0 24 24" fill="none" class="w-full h-full">
        <path
          d="M12 2C9.5 2 7.5 3 7.5 5v2H12v1H5.5C3.5 8 2 9.5 2 12s1.5 4 3.5 4H7v-2.5C7 11.5 9 10 12 10s5 1.5 5 3.5V16h1.5c2 0 3.5-1.5 3.5-4s-1.5-4-3.5-4H17V5C17 3 15 2 12 2z"
          fill="#3776AB"
        ></path>
        <path
          d="M12 22c2.5 0 4.5-1 4.5-3v-2H12v-1h6.5c2 0 3.5-1.5 3.5-4s-1.5-4-3.5-4H17v2.5C17 12.5 15 14 12 14s-5-1.5-5-3.5V8H5.5C3.5 8 2 9.5 2 12s1.5 4 3.5 4H7v3c0 2 2 3 5 3z"
          fill="#FFD43B"
        ></path>
        <circle cx="10" cy="5.5" r="1" fill="white"></circle>
        <circle cx="14" cy="18.5" r="1" fill="white"></circle>
      </svg>
      {/* DOCKER */}
      <svg viewBox="0 0 24 24" fill="none" class="w-full h-full">
        <path
          d="M13 8h2v2h-2V8zM10 8h2v2h-2V8zM7 8h2v2H7V8zM10 5h2v2h-2V5zM13 5h2v2h-2V5z"
          fill="#2496ED"
        ></path>
        <path
          d="M22 11.5c-.5-.5-1.5-.7-2.3-.5-.2-.8-.8-1.5-1.7-1.8l-.4-.1-.2.4c-.3.6-.3 1.5 0 2.1-.4.2-1 .4-1.5.4H2.1l-.1.4c-.2 1.1 0 2.5.8 3.5.8 1 2 1.5 3.6 1.5 3.4 0 5.9-1.5 7.1-4.3.5.1 1.5.1 2-.5.3-.3.5-.8.5-1.3l-.1-.4-.4.1z"
          fill="#2496ED"
        ></path>
      </svg>
      {/* GITHUB ICON */}
      <svg viewBox="0 0 24 24" fill="none" class="w-full h-full">
        <path
          d="M21.7 11.3l-9-9a1 1 0 00-1.4 0l-2 2 2.5 2.5a1.2 1.2 0 011.5 1.5l2.4 2.4a1.2 1.2 0 011.1 2 1.2 1.2 0 01-2.3-.5l-2.3-2.3v6a1.2 1.2 0 01.8 2.2 1.2 1.2 0 01-2.4 0 1.2 1.2 0 01.8-1.1V10a1.2 1.2 0 01-.8-1.6L9.9 6 2.3 13.7a1 1 0 000 1.4l9 9a1 1 0 001.4 0l9-9a1 1 0 000-1.7z"
          fill="#F05032"
        ></path>
      </svg>
      FASTAPI ICON
      <svg viewBox="0 0 24 24" fill="none" class="w-full h-full">
        <circle cx="12" cy="12" r="10" fill="#009688"></circle>
        <path d="M13 4l-5 9h4l-1 7 5-9h-4l1-7z" fill="white"></path>
      </svg>
      {/* NODEJS ICON */}
      <svg viewBox="0 0 24 24" fill="none" class="w-full h-full">
        <path
          d="M12 2L3 7v10l9 5 9-5V7L12 2z"
          fill="#339933"
          fill-opacity="0.2"
          stroke="#339933"
          stroke-width="1.2"
        ></path>
        <path
          d="M12 6v6l5 3"
          stroke="#339933"
          stroke-width="1.5"
          stroke-linecap="round"
        ></path>
      </svg>
      {/* LINKEDIN ICON */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-linkedin w-4 h-4"
        style="color: rgb(0, 119, 181);"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </div>
  );
};

export default icons;
