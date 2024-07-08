import { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { FiArrowRight } from 'react-icons/fi';

import landingPageImage from '/src/assets/images/landingPage.avif';
import avatarImage from '../assets/images/avatar.avif';
import avatarImage2 from '../assets/images/avatar2.avif';
import avatarImage3 from '../assets/images/avatar3.avif';
import { useAuth } from '../context/AuthProvider';

const COLORS_TOP = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

const LandingPage = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const [order, setOrder] = useState(['front', 'middle', 'back']);
  const navigate = useNavigate();
  const { checkUser } = useAuth();

  // useEffect(() => {
  //   checkUser();
  // }, []);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`0.2px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const handleShuffle = () => {
    const orderCopy = [...order];
    orderCopy.unshift(orderCopy.pop());
    setOrder(orderCopy);
  };

  const handleJoinCultClick = () => {
    navigate('/register');
  };

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-svh place-content-center place-items-center overflow-hidden bg-gray-950 px-4 pt-5 text-gray-200 md:pt-10">
      <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center font-cthulhumbus text-3xl font-medium leading-tight text-transparent sm:text-5xl md:text-6xl">
        Train Like an <br />
        Ancient God
      </h1>
      <img src={landingPageImage} alt="Landing Page Image" className="w-full md:w-1/2" />
      <div className="relative z-10 flex flex-col items-center">
        <motion.button
          style={{ border, boxShadow }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
          onClick={handleJoinCultClick}>
          Join the Cult
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
        <p className="mt-4 text-xs text-slate-400">
          Already have an account?{' '}
          <Link to="/login" className="text-teal-600 underline">
            Login
          </Link>
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
      <div className="px-8 text-slate-50 md:py-4">
        <div className="relative -ml-[100px] h-[450px] w-[350px] scale-75 md:-ml-[175px]">
          <Card
            imgUrl={avatarImage2}
            testimonial="My workout plan was very... transformative..."
            author="Jenn F. - Marketing Director"
            handleShuffle={handleShuffle}
            position={order[0]}
          />
          <Card
            imgUrl={avatarImage}
            testimonial="Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn"
            author="Kevin"
            handleShuffle={handleShuffle}
            position={order[1]}
          />
          <Card
            imgUrl={avatarImage3}
            testimonial="Listen to the siren call & join us at the Elder Gym Bro!"
            author="Y'Golonac - Personal Trainer"
            handleShuffle={handleShuffle}
            position={order[2]}
          />
        </div>
      </div>
    </motion.section>
  );
};

const Card = ({ handleShuffle, testimonial, position, imgUrl, author }) => {
  const mousePosRef = useRef(0);

  const onDragStart = (e) => {
    mousePosRef.current = e.clientX;
  };

  const onDragEnd = (e) => {
    const diff = mousePosRef.current - e.clientX;

    if (diff > 150) {
      handleShuffle();
    }

    mousePosRef.current = 0;
  };

  const x = position === 'front' ? '0%' : position === 'middle' ? '33%' : '66%';
  const rotateZ = position === 'front' ? '-6deg' : position === 'middle' ? '0deg' : '6deg';
  const zIndex = position === 'front' ? '2' : position === 'middle' ? '1' : '0';

  const draggable = position === 'front';

  return (
    <motion.div
      style={{ zIndex }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md ${
        draggable ? 'cursor-grab active:cursor-grabbing' : ''
      }`}>
      <img
        src={imgUrl}
        alt={`Image of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-slate-700 bg-slate-200 object-cover"
      />
      <span className="text-center text-2xl italic text-slate-400">&quot;{testimonial}&quot;</span>
      <span className="text-center font-medium text-indigo-400">{author}</span>
    </motion.div>
  );
};

export default LandingPage;
