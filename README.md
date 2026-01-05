# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
 <div className="bgimg bg-white min-h-screen flex items-center justify-center px-6 lg:px-20 py-24 font-sans">
      <motion.section
        className="w-full max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.span
          className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-bold mb-4"
          variants={itemVariants}
        >
          Trusted by 23K+ users
        </motion.span>

        {/* Avatar */}
        <motion.div
          className="flex justify-center items-center mb-4"
          variants={itemVariants}
        >
          <img
            src={img1}
            alt="User 1"
            className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full shadow-lg"
          />
        </motion.div>

        {/* Subheadline */}
        <motion.p
          className="text-green-600 text-lg sm:text-xl font-semibold mb-3"
          variants={itemVariants}
        >
          Your Electricity Bill is Burning a Hole in Your Wallet
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4"
          variants={itemVariants}
        >
          Switch to <span className="italic text-green-600">clean</span> energy
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto mb-8"
          variants={itemVariants}
        >
          Cost-saving solar energy before the next rate hike.
          <br />
          Power your home or business with India’s most trusted solar experts.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            type="button"
            className="group bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-7 py-3 text-lg inline-flex items-center gap-2 transition-all duration-300"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/Contact">Get Free Solar Consultation</Link>
            <motion.span
              className="inline-block"
              animate={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <FaArrowRight />
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.section>