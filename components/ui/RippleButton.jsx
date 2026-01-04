'use client';

const RippleButton = ({
  text = 'Know me more',
  hoverText = 'About me',
  bgColor,
  circleColor,
  width,
  height,
}) => {
  return (
    <>
      <button
        className="ripple-btn text-black dark:text-white px-8 py-3 rounded-full border border-black dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-sm font-medium"
        style={{
          backgroundColor: bgColor || undefined,
          width: width,
          height: height,
        }}
      >
        <span className="fill" aria-hidden="true" />
        <span className="ripple-circle circle1" />
        <span className="ripple-circle circle2" />
        <span className="ripple-circle circle3" />
        <span className="ripple-circle circle4" />
        <span className="ripple-circle circle5" />

        <span className="label label-primary">{text}</span>
        <span className="label label-hover">{hoverText}</span>
      </button>

      <style jsx>{`
        .ripple-btn {
          --btn-bg: #ffffff;
          --btn-fg: #000000;
          --btn-hover-bg: #000000;
          --btn-hover-fg: #ffffff;

          font-family: Arial, Helvetica, sans-serif;
          font-weight: bold;
          padding: 1em 2em;
          border-radius: 0.6rem;
          position: relative;
          cursor: pointer;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          background-color: var(--btn-bg);
          color: var(--btn-fg);
        }

        .dark .ripple-btn {
          --btn-bg: #000000;
          --btn-fg: #ffffff;
          --btn-hover-bg: #ffffff;
          --btn-hover-fg: #000000;
        }

        .ripple-btn:hover {
          color: var(--btn-hover-fg);
        }

        .fill {
          position: absolute;
          inset: 0;
          background-color: var(--btn-hover-bg);
          transform: translateY(110%);
          border-radius: inherit;
          transition: transform 0.35s ease;
          z-index: 1;
        }

        .ripple-btn:hover .fill {
          transform: translateY(0%);
        }

        .ripple-circle {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          height: 30px;
          width: 30px;
          background-color: ${circleColor || '#173eff'};
          border-radius: 50%;
          transition: 0.6s ease;
          pointer-events: none;
          z-index: 0;
        }

        .circle1 {
          transform: translate(-3.3em, -4em);
        }

        .circle2 {
          transform: translate(-6em, 1.3em);
        }

        .circle3 {
          transform: translate(-0.2em, 1.8em);
        }

        .circle4 {
          transform: translate(3.5em, 1.4em);
        }

        .circle5 {
          transform: translate(3.5em, -3.8em);
        }

        .ripple-btn:hover .ripple-circle {
          transform: translate(-50%, -50%) scale(4);
          transition: 1.5s ease;
        }

        .label {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          transition: transform 0.35s ease, opacity 0.35s ease;
          white-space: nowrap;
          pointer-events: none;
        }

        .label-primary {
          opacity: 1;
        }

        .label-hover {
          opacity: 0;
          transform: translate(-50%, 70%);
        }

        .ripple-btn:hover .label-primary {
          opacity: 0;
          transform: translate(-50%, -150%);
        }

        .ripple-btn:hover .label-hover {
          opacity: 1;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  );
};

export default RippleButton;
