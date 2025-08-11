import { motion } from "framer-motion";

const HERO = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 overflow-hidden">
      {/* Left section */}
      <div className="z-40 xl:mb-0 mb-[20%]"> 
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            duration: 1.5,
            delay: 1.3,
          }}
          className="text-3xl md:text-4xl lg:text-6xl font-bold z-10 mb-6"
        >
          Building Fast <br />
          Reliable Results
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            duration: 1.5,
            delay: 1.8,
          }}
          className="text-xl md:text-xl lg:text-2xl text-purple-200 max-w-2xl"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
          repudiandae cupiditate, accusamus ipsa dolores corrupti ea tempore quo
          quia consectetur commodi maiores, architecto quaerat dicta reiciendis
          tenetur inventore eveniet eius.lorem Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Perferendis.
        </motion.p>
          </div>

          {/* Right section */}
          <section className="mt-20 lg:mt-0">
              <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                      type: "string",
                      stiffness: 40,
                      damping: 25,
                      delay: 0.8,
                      duration:1.3
                  }}
                  className="bg-black w-32 h-32  rounded-full flex justify-center items-center">
              <h1>Spline Got Paid</h1>
          </motion.div>
          </section>
    </section>
  );
};

export default HERO;
