import React,{useState} from 'react'
import { AnimatePresence,motion,useInView } from 'framer-motion';
import { useRef,useEffect ,forwardRef } from 'react';



function useToggle() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((o) => !o);
  return [open, toggle];
}

const boxVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};
function Framer() {
     const [isOpen, toggle] = useToggle(); 
      const inputRef1 = useRef();
      const [value, setValue] = useState('');
  const timeoutRef = useRef(null);
    const [count, setCount] = useState(0);
  const prevCount = useRef(null);
      const inputRef = useRef(null);
      const ref = useRef(null);
  const isInView = useInView(ref);
      const [isVisible, setIsVisible] = useState(true);
        const countRef = useRef(0);
          const inputRef2 = useRef();

  const handleSelect = () => {
    const input = inputRef2.current;
    input.focus();
    input.setSelectionRange(0, input.value.length);
  };


//   useEffect(() => {
//     const id = setInterval(() => {
//       countRef.current++;
//       console.log('Count:', countRef.current);
//     }, 1000);

//     return () => {
//       clearInterval(id);
//     };
//   }, []);

        const handleChange = (e) => {
    clearTimeout(timeoutRef.current);

    const newValue = e.target.value;
    timeoutRef.current = setTimeout(() => {
      console.log("Sending request with:", newValue);
    }, 500);

    setValue(newValue);
  };
       useEffect(() => {
    prevCount.current = count;
  }, [count]);

        useEffect(() => {
    inputRef.current.focus(); // Focus the input on mount
  }, []);
  return (
   <div  className='bg-gray-400'>
     <div className='text-2xl text-center'>Framer</div>
       <motion.div
     initial =  {{opacity : .2 , scale : 0.5}}
     animate = {{opacity : 1 , scale : 1}}
        exit = {{opacity : 0 , scale : 0.5}}
        transition = {{duration : .5}}
        className='bg-green-300 w-full p-4 rounded-lg shadow-lg '
    />
    <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  Click Me
</motion.button>

   <div>
    <motion.div
      className="bg-blue-500 text-white p-4 rounded-lg"
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      Animated Box
    </motion.div>
   </div>

      <button
        onClick={() => setIsVisible(v => !v)}
        className="mb-4 bg-blue-500 text-white p-2 rounded"
      >
        Toggle Box
      </button>
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="bg-red-500  text-black p-4 rounded-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          This box will animate in and out
        </motion.div>
      )}
    </AnimatePresence>


<motion.div
  drag
  dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
  className="w-32 h-32 bg-green-400"
/>

    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
        className="bg-yellow-500 text-white p-4 rounded-lg"
    >
      I appear on scroll!
    </motion.div>

 <input ref={inputRef} placeholder="Focus on mount" />;

     <div>
      <p>Now: {count}</p>
      <p>Before: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>

      <FancyInput ref={inputRef1} />
      <button onClick={() => inputRef1.current.focus()}>Focus</button>

      <div>
         <input ref={inputRef2} defaultValue="Select this text" />
      <button onClick={handleSelect}>Select All</button>
      </div>

       <div>
      <button onClick={toggle}>
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>

      {isOpen && (
        <div className="sidebar">
          <p className='text-2xl font-bold bg-green-400'>This is the sidebar content.</p>
        </div>
      )}
    </div>
      



   </div>
  )
}

export default Framer

const FancyInput = forwardRef((props, ref) => {
  return <input ref={ref} className="fancy-input" {...props} />;
});