// import "../styles/glassFrame.scss";

// export default function GlassFrame({ children }) {
//   return (
//     <div className="glass-frame">
//       <div className="glass-content">
//         {children}
//       </div>
//     </div>
//   );
// }

import "../styles/glassFrame.scss";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassFrame({ children, isVisible = true }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="glass-frame"
          initial={{ opacity: 1, scale: 0.95, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 1, scale: 0.95, y: 30 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div
            className="glass-content"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.1, delayChildren: 0.1 },
              },
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}