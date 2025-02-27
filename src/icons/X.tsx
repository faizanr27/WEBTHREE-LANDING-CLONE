
interface Icon {
    w: string;
    h: string;
  }
export default function X(props: Icon) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.w}
        height={props.h}
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07l-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
        ></path>
      </svg>
    </>
  );
}
