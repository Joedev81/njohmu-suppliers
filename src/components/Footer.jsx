import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 py-10">
        <div className="w-full px-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://njohmu-suppliers.com/" className="flex items-center">
                <img src="/logo/njo.png" className="h-25 me-3" alt="Njohmu Logo" />
                <span className="text-heading self-center text-gray-300 text-2xl font-semibold whitespace-nowrap">
                  NJOHMU SUPPLIERS
                </span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase">Resources</h2>
                <ul className="text-gray-300 font-medium space-y-4">
                  <li>
                    <Link to="/projects" className="hover:underline">
                      Our Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="/equipment" className="hover:underline">
                      Equipment Rentals
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-300 text-heading uppercase">Follow Us</h2>
                <ul className="text-body text-gray-300 font-medium">
                  <li className="mb-4">
                    <a href="https://facebook.com" className="hover:underline">Facebook</a>
                  </li>
                  <li>
                    <a href="https://instagram.com" className="hover:underline">Instagram</a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-300 text-heading uppercase">Legal</h2>
                <ul className="text-body text-gray-300 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-6 border-default sm:mx-auto lg:my-8" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-body text-gray-300 sm:text-center">
              © 2026 <a href="https://flowbite.com/" className="hover:underline">Njohmu Suppliers™</a>. All Rights Reserved.
            </span>

            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="https://facebook.com" className="text-gray-300 hover:text-white" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.05h-2.1V12h2.1V9.8c0-2.1 1.25-3.25 3.16-3.25.92 0 1.88.17 1.88.17v2.06h-1.06c-1.04 0-1.36.64-1.36 1.3V12h2.3l-.37 2.9h-1.93v7.05A10 10 0 0 0 22 12z" />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>

              <a href="https://instagram.com" className="text-gray-300 hover:text-white ms-5" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.055 1.95.24 2.41.405a4.92 4.92 0 0 1 1.785 1.044 4.92 4.92 0 0 1 1.044 1.785c.165.46.35 1.24.405 2.41.058 1.267.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.95-.405 2.41a4.92 4.92 0 0 1-1.044 1.785 4.92 4.92 0 0 1-1.785 1.044c-.46.165-1.24.35-2.41.405-1.267.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.95-.24-2.41-.405a4.92 4.92 0 0 1-1.785-1.044 4.92 4.92 0 0 1-1.044-1.785c-.165-.46-.35-1.24-.405-2.41C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.85c.055-1.17.24-1.95.405-2.41a4.92 4.92 0 0 1 1.044-1.785 4.92 4.92 0 0 1 1.785-1.044c.46-.165 1.24-.35 2.41-.405C8.416 2.172 8.8 2.16 12 2.16zm0 1.74c-3.15 0-3.517.012-4.755.068-1.036.048-1.597.217-1.963.362a3.17 3.17 0 0 0-1.15.743 3.17 3.17 0 0 0-.743 1.15c-.145.366-.314.927-.362 1.963-.056 1.238-.068 1.605-.068 4.755s.012 3.517.068 4.755c.048 1.036.217 1.597.362 1.963.164.444.37.833.743 1.15.317.317.706.579 1.15.743.366.145.927.314 1.963.362 1.238.056 1.605.068 4.755.068s3.517-.012 4.755-.068c1.036-.048 1.597-.217 1.963-.362a3.17 3.17 0 0 0 1.15-.743 3.17 3.17 0 0 0 .743-1.15c.145-.366.314-.927.362-1.963.056-1.238.068-1.605.068-4.755s-.012-3.517-.068-4.755c-.048-1.036-.217-1.597-.362-1.963a3.17 3.17 0 0 0-.743-1.15 3.17 3.17 0 0 0-1.15-.743c-.366-.145-.927-.314-1.963-.362C15.517 3.912 15.15 3.9 12 3.9zm0 4.86a4.14 4.14 0 1 1 0 8.28 4.14 4.14 0 0 1 0-8.28zm0 1.74a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8zm4.8-3.48a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>

              <a href="https://twitter.com" className="text-gray-300 hover:text-white ms-5" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0 1.95-2.48 10.86 10.86 0 0 1-3.44 1.32 4.52 4.52 0 0 0-7.72 4.13A12.84 12.84 0 0 1 1.64 2.16a4.52 4.52 0 0 0 1.4 6.04 4.5 4.5 0 0 1-2.05-.57v.06a4.52 4.52 0 0 0 3.63 4.43 4.52 4.52 0 0 1-2.04.08 4.52 4.52 0 0 0 4.22 3.14 9.07 9.07 0 0 1-5.62 1.94A9.29 9.29 0 0 1 0 19.54 12.8 12.8 0 0 0 6.92 21c8.3 0 12.85-6.87 12.85-12.85 0-.2 0-.39-.01-.58A9.2 9.2 0 0 0 23 3z" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>

              <a href="https://wa.me/254720839534" className="text-gray-300 hover:text-white ms-5" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.52 3.48A11.92 11.92 0 0 0 12 0C5.373 0 0 5.373 0 12a11.92 11.92 0 0 0 3.48 8.52L0 24l3.48-3.48A11.92 11.92 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.192-1.237-6.19-3.48-8.52zm-1.89 12.12c-.28.78-1.58 1.5-2.23 1.58-.57.07-1.02.07-1.59-.13a6.68 6.68 0 0 1-2.46-1.27 10.38 10.38 0 0 1-1.93-2.26c-.21-.35-.41-.36-.76-.34-.34.02-1.39.21-2.1 1.01-.71.79-2.46 2.48-2.46 2.48s-.33.44.42.88c.74.44 1.64 1.11 3.13 1.69 1.49.58 3.08.95 3.87 1.06.78.11 1.52.1 2.07-.35.55-.45.95-.91 1.2-1.26.25-.35.26-.61.18-.71-.08-.1-.29-.15-.57-.26z" />
                </svg>
                <span className="sr-only">WhatsApp</span>
              </a>

              <a href="https://tiktok.com" className="text-gray-300 hover:text-white ms-5" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c6.627 0 12 5.373 12 12a12 12 0 0 1-12 12c-3.313 0-6.313-1.313-8.485-3.515C1.313 18.313 0 15.313 0 12 0 5.373 5.373 0 12 0zm4.5 6.75c-.188.563-.563 1.063-1.063 1.406s-1.125.5-1.688.563v3.188a4.5 4.5 0 1 1-4.5-4.5V6a6 6 0 1 0 6 6v-5.438z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}