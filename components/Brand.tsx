import Image from 'next/image';
import Link from 'next/link';
import officialLogo from '../public/images/official-logo.png';

export default function Brand() {
  return (
    <Link href="/" className="brand brand-lockup footer-brand" aria-label="AMY MILITO COLLECTION home">
      <Image src={officialLogo} alt="" sizes="160px" />
      <div>AMY MILITO<span>COLLECTION</span></div>
    </Link>
  );
}
