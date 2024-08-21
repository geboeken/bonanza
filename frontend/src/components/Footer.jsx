const Footer = () => {
  return (
    <footer className="p-4 bg-black text-white">
      <div className="flex justify-between items-center">
        <div>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{" "}
          |
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
        <div>
          <a href="/terms" className="hover:underline">
            Terms of Use
          </a>{" "}
          |
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>&copy; 2024 Bookish Bonanza</p>
        <p
          className="hover:underline cursor-pointer"
          onClick={() => window.open("https://github.com/your-repo", "_blank")}
        >
          v1.0
        </p>
      </div>
    </footer>
  );
};

export default Footer;
