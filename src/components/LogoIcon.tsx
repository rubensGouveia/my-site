interface LogoIconProps {
  height?: number;
}

export const LogoIcon = ({ height = 60 }: LogoIconProps) => {
  return (
    <svg height={height} viewBox="0 0 656 549">
      <svg
        width="656"
        height="600"
        viewBox="0 0 656 549"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
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
  );
};
