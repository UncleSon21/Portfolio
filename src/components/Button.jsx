/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section whose id is `target`.
 * (It used to look for an "#counter" section that no longer exists, so it did nothing.)
 */

const Button = ({ text, className, target }) => {
  return (
    <a
      href={target ? `#${target}` : undefined}
      onClick={(e) => {
        e.preventDefault(); // Stop the link from jumping instantly

        const section = target && document.getElementById(target);

        // scroll-margin-top in index.css keeps the section clear of the navbar
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }}
      className={`${className ?? ""} cta-wrapper`} // Add base + extra class names
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="" />
        </div>
      </div>
    </a>
  );
};

export default Button;
