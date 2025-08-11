import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  //toggle menu open/close
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  //contact form open/close
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <div>
      <header className="absolute z-50 transition-all duration-300 w-full">
        <div className="container mx-auto px-4 sm:px-2 lg:px-4 flex items-center justify-between h-16 md:h-20">
          {/* logo */}{" "}
          {/* using framer motion for the first time the initial animate and transition elements derive the animation for future referance use yt or gpt for more animations */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3,
              duration: 1.2,
            }}
            className="flex items-center"
          >
            <div className="flex items-center justify-center bg-gradient-to-r from-gray-500 to-gray-100 font-bold h-10 w-10 rounded-xl text-xl mr-3 text-purple-600">
              Sd
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text">
              Sagar Dabas
            </span>
          </motion.div>
          {/* Desktop navigation */}
          {/* here we are using the map function to list all our items of the navigation bar instead of writting and styling them one by one  */}
          <nav className="lg:flex hidden space-x-8">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item, index) => (
                <motion.a
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.9 + index * 0.1,
                  }}
                  href="#"
                  key={item}
                  className=" group relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 "
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              )
            )}
          </nav>
          {/* social icons */}
          <div className="lg:flex hidden items-center space-x-4">
            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              href=""
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 duration-300"
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              href=""
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 duration-300"
            >
              <FiTwitter className="w-5 h-5" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              href=""
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 duration-300"
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>

            <motion.button
              onClick={openContactForm}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 10,
                delay: 0.3,
                duration: 0.7,
              }}
              className=" px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration:500"
            >
              Hire Me
            </motion.button>
          </div>
          {/* Mobile hambergur button */}
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="text-gray-300"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <FiX className="h-7 w-7" />
              ) : (
                <FiMenu className="h-7 w-7" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu Items */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.5 }}
          className="lg:hidden bg-white dark:bg-gray-900 shadow-l px-4 py-5 space-y-5"
        >
          <nav className="flex flex-col space-y-3  ">
            {["Home", "About", "Services", "Projects", "Contact"].map(
              (item) => (
                <a
                  onClick={toggleMenu}
                  className="text-gray-300 font-medium py-2"
                  href=""
                  key={item}
                >
                  {item}
                </a>
              )
            )}
          </nav>

          <div className="border-t bg-gray-200 dark:bg-gray-700"></div>

          {/* Social icons and hire me button */}
          <div className="lg:hidden flex items-center space-x-4">
            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, dealy: 0.8 }}
              href=""
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 duration-300"
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, dealy: 0.8 }}
              href=""
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 duration-300"
            >
              <FiTwitter className="w-5 h-5" />
            </motion.a>

            <motion.a
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, dealy: 0.8 }}
              href=""
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 duration-300"
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>
          </div>
          <motion.button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 10,
              delay: 0.3,
              duration: 0.7,
            }}
            className=" px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration:500 w-full"
          >
            Hire Me
          </motion.button>
        </motion.div>

        {/* Contact form here we used animatepresence to make sure our exit animaton worked */}
        <AnimatePresence>
          {contactFormOpen && (
            <div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ dealy: 0.5 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center "
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 30 }}
                transition={{
                  delay: 0.3,
                  duration: 0.7,
                }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6 "
              >
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold text-gray-300 ">
                    Get In Touch
                  </h1>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={closeContactForm}
                  >
                    <FiX className="h-7 w-7" />
                  </motion.button>
                </div>

                {/* input fields */}

                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1 "
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1 "
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your email"
                      className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1 "
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      id="name"
                      placeholder="Leave a message"
                      className="w-full h-32 border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 outline-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-800 rounded-lg shadow-md hover:shadow-violet-600/50"
                  >
                    send message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

export default Header;
