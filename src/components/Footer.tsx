// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 body-font flex w-full justify-center">
      <div className="container px-5 py-8 flex items-center sm:flex-row flex-col justify-between ">
        <span className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <svg height="60" viewBox="0 0 656 863">
            <svg
              width="656"
              height="863"
              viewBox="0 0 656 863"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.5 862.2H0.900024V578.6C0.900024 549 14.7 534.2 42.3 534.2H68.3C95.9667 534.2 109.8 549 109.8 578.6V862.2H75.2V752.9H35.5V862.2ZM75.2 721.5V580.7C75.2 570.633 70.1334 565.6 60 565.6H50.6C40.5334 565.6 35.5 570.633 35.5 580.7V721.5H75.2Z"
                fill="#FEFEFE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M143.9 534.2H211.8C238.267 534.2 251.5 549 251.5 578.6V697C251.5 719.6 245.2 733.9 231.5 739.9L251.5 862.2H216.8L199.5 752.9H178.6V862.2H143.9V534.2ZM178.6 721.5H201.3C211.633 721.567 216.8 715.333 216.8 702.8V584.4C216.8 571.867 211.633 565.6 201.3 565.6H178.6V721.5Z"
                fill="#FEFEFE"
              />
              <path
                d="M390.9 780.3V818.2C390.9 847.533 377.067 862.2 349.4 862.2H327.1C299.433 862.2 285.6 847.533 285.6 818.2V578.2C285.6 548.867 299.433 534.2 327.1 534.2H349.4C377.067 534.2 390.9 548.867 390.9 578.2V616.2H356.3V580.8C356.3 570.667 351.133 565.6 340.8 565.6H333.9C324.767 565.6 320.2 570.667 320.2 580.8V815.7C320.2 825.767 324.767 830.8 333.9 830.8H342.6C351.733 830.8 356.3 825.767 356.3 815.7V780.3H390.9Z"
                fill="#FEFEFE"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M466.9 862.2C439.033 862.2 425.1 847.533 425.1 818.2V578.6C425.1 549 438.933 534.2 466.6 534.2H499.8C527.467 534.2 541.3 549 541.3 578.6V818.2C541.3 847.533 527.333 862.2 499.4 862.2H466.9ZM475.2 830.8H492.9C502.033 830.8 506.6 825.767 506.6 815.7V580.8C506.6 570.667 501.433 565.6 491.1 565.6H474.8C464.733 565.6 459.7 570.667 459.7 580.8V815.7C459.7 825.767 464.867 830.8 475.2 830.8Z"
                fill="#FEFEFE"
              />
              <path
                d="M655.7 721.5V752.9H610.3V862.2H575.6V534.2H655.7V565.6H610.3V721.5H655.7Z"
                fill="#FEFEFE"
              />
              <path
                d="M328.3 38.4L543.4 162.6V410.9L576.7 430.1V143.4L328.3 0L79.9 143.4V430.1L113.2 410.9V162.6L328.3 38.4Z"
                fill="#FEFEFE"
              />
              <path
                d="M435.2 225L401.9 244.3L345 211.4V400.6L328.3 410.2L311.7 400.6V211.3L254.7 244.3L221.4 225L328.3 163.3L435.2 225Z"
                fill="#FEFEFE"
              />
              <path
                d="M416.2 315.4L505.9 263.5V389.3L328.3 491.9L150.7 389.3V184.2L328.3 81.7L505.9 184.2L472.7 203.4L328.3 120.1L183.9 203.4V370.1L328.3 453.4L472.7 370.1V321.2L449.4 334.6L416.2 315.4Z"
                fill="#FEFEFE"
              />
            </svg>
          </svg>
        </span>

        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4 text-center">
          © Copyright {currentYear}, All Rights Reserved by <br />
          GL Arcof Tecnologia LTDA <br />
          <span className="text-gray-500 ml-1">CNPJ 37.428.522/0001-07</span>
        </p>
        <span className="inline-flex sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://www.instagram.com/arcofdigital/"
            target="_blank"
            className="ml-3 text-gray-400"
            aria-label="acessar o instagram da arcof"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1-3h.01"></path>
            </svg>
          </a>
          {/* <a
            href="https://www.linkedin.com/in/rubens-gouveia-7394b2159/"
            target="_blank"
            className="ml-3 text-gray-400"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 00-6 6v6h4v-6a2 2 0 014 0v6h4v-6a6 6 0 00-6-6z"
              ></path>
              <path stroke="none" d="M2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a> */}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
