import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="main">
      <h1 className="p-4 bg-gray-500 text-white text-xl">Not Found</h1>
      <div className="p-4">ページが存在しません</div>
      <div className="p-4">URLを確認のうえ、再度アクセスしてください</div>
      <div className="p-4">
        <Link href="/" className="text-link">
          Home
        </Link>
      </div>
    </div>
  );
}
