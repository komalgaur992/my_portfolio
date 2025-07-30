import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className="py-6 bg-black dark:bg-gray-900 text-center border-t border-gray-700">
      <div className="mb-2">
        <SocialIcons className="justify-center" />
      </div>
      <p className="text-sm text-pastel-blue">
        &copy; {new Date().getFullYear()} Komal. All rights reserved.
      </p>
    </footer>
  );
}