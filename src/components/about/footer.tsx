import Link from "next/link";

const Footer = () => {
  return (
    <p className="text-wrap text-xs">
      <span>this site was built using next.js and shadcn/ui components.</span>
      <br />
      <span>
        inspired by the{" "}
        <Link
          href="https://shadcn.com/"
          className="underline underline-offset-4"
        >
          shadcn portfolio
        </Link>
        .
      </span>
    </p>
  );
};

export default Footer;
