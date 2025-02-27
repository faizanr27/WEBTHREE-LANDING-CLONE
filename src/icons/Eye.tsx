interface Icon {
    w: string;
    h: string;
  }
  
  export default function Eye(props: Icon) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 10000 4100"
        width={props.w}
        height={props.h}
        preserveAspectRatio="xMidYMid meet"
        className="flex-shrink-0"
      >
        <defs>
          <clipPath id="__lottie_element_2">
            <rect width="10000" height="4150" x="0" y="0"></rect>
          </clipPath>
          <g id="__lottie_element_3">
            <g transform="matrix(17.037,0,0,17.037,5000,1928)" opacity="1">
              <g opacity="1">
                <path
                  fill="rgb(220,220,220)"
                  fillOpacity="1"
                  d="M0,-105 C121.5,-105 220,0 220,0 C220,0 121.5,105 0,105 C-121.5,105 -220,0 -220,0 C-220,0 -121.5,-105 0,-105z"
                ></path>
              </g>
            </g>
          </g>
          <mask id="__lottie_element_3_1" mask-Type="alpha">
            <use xlinkHref="#__lottie_element_3"></use>
          </mask>
        </defs>
        <g clipPath="url(#__lottie_element_2)">
          <g transform="matrix(17.037,0,0,17.037,5000,1928)" opacity="1">
            <g opacity="1">
              <path
                fill="rgb(220,220,220)"
                fillOpacity="1"
                d="M0,-105 C121.5,-105 220,0 220,0 C220,0 121.5,105 0,105 C-121.5,105 -220,0 -220,0 C-220,0 -121.5,-105 0,-105z"
              ></path>
            </g>
          </g>
          <g mask="url(#__lottie_element_3_1)">
            <g transform="matrix(17.037,0,0,17.037,5000,1928)" opacity="1">
              <g opacity="1">
                <path
                  fill="rgb(149,255,0)"
                  fillOpacity="1"
                  d="M0,-110 C60.75,-110 110,-60.75 110,0 C110,60.75 60.75,110 0,110 C-60.75,110 -110,60.75 -110,0 C-110,-60.75 -60.75,-110 0,-110z"
                ></path>
              </g>
              <g opacity="1">
                <path
                  fill="rgb(8,2,1)"
                  fillOpacity="1"
                  d="M0,-47 C25.95,-47 47,-25.95 47,0 C47,25.95 25.95,47 0,47 C-25.95,47 -47,25.95 -47,0 C-47,-25.95 -25.95,-47 0,-47z"
                ></path>
              </g>
              <g opacity="1">
                <g opacity="1">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d="M32,-52.8 C42.8,-52.8 51.5,-44 51.5,-33.2 C51.5,-22.4 42.8,-13.6 32,-13.6 C21.2,-13.6 12.4,-22.4 12.4,-33.2 C12.4,-44 21.2,-52.8 32,-52.8z"
                  ></path>
                </g>
                <g opacity="1">
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity="1"
                    d="M22.7,-5.6 C27,-5.6 30.5,-2.1 30.5,2.2 C30.5,6.5 27,10 22.7,10 C18.4,10 14.9,6.5 14.9,2.2 C14.9,-2.1 18.4,-5.6 22.7,-5.6z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
  