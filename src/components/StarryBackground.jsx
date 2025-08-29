'use client'
import { useEffect } from 'react';

const StarryBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('starry-sky');
    const cursor = document.getElementById('custom-cursor');
    const ctx = canvas.getContext('2d');

    let mouseX = 0;
    let mouseY = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;
    const cursorTrailParticles = [];
    const TRAIL_LENGTH = 20;
    const CURSOR_SIZE = 4; // Increased cursor size
    const GLOW_RADIUS = 6; // Increased glow radius

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    window.addEventListener('mousemove', (e) => {
      prevMouseX = mouseX;
      prevMouseY = mouseY;
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursor) {
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
      }

      cursorTrailParticles.push({
        x: mouseX,
        y: mouseY,
        size: CURSOR_SIZE,
        opacity: 1,
        speedX: (mouseX - prevMouseX) * 0.3,
        speedY: (mouseY - prevMouseY) * 0.3
      });

      if (cursorTrailParticles.length > TRAIL_LENGTH) {
        cursorTrailParticles.shift();
      }
    });

    const stars = [];
    const shootingStars = [];
    const STAR_COUNT = 200;
    const SHOOTING_STAR_COUNT = 4;
    const STAR_SIZE = 1.2;

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * STAR_SIZE,
        opacity: Math.random(),
        twinkleSpeed: 0.003 + Math.random() * 0.015,
        twinkleDirection: 1
      });
    }

    const createShootingStar = () => ({
      x: Math.random() * canvas.width,
      y: 0,
      length: 20,
      speed: 8 + Math.random() * 5,
      opacity: 1,
      size: Math.random() * STAR_SIZE
    });

    for (let i = 0; i < SHOOTING_STAR_COUNT; i++) {
      shootingStars.push(createShootingStar());
    }

    const drawCursorTrail = () => {
      cursorTrailParticles.forEach((particle, index) => {
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * GLOW_RADIUS
        );
        gradient.addColorStop(0, `rgba(64, 224, 208, ${particle.opacity})`);
        gradient.addColorStop(0.5, `rgba(64, 224, 208, ${particle.opacity * 0.5})`);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size * GLOW_RADIUS, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.size *= 0.95;
        particle.opacity *= 0.95;
        particle.speedX *= 0.95;
        particle.speedY *= 0.95;
      });
    };

    const animate = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawCursorTrail();

      stars.forEach(star => {
        star.opacity += star.twinkleSpeed * star.twinkleDirection;
        if (star.opacity >= 1) {
          star.twinkleDirection = -1;
        } else if (star.opacity <= 0.3) {
          star.twinkleDirection = 1;
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      shootingStars.forEach((star, index) => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.x += star.speed;
        star.y += star.speed;
        star.opacity -= 0.008;

        if (star.y > canvas.height || star.opacity <= 0) {
          shootingStars[index] = createShootingStar();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', null);
    };
  }, []);

  return (
    <>
      <canvas
        id="starry-sky"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
          background: 'black',
          cursor: 'default'
        }}
      />
      <div
        id="custom-cursor"
        style={{
          position: 'fixed',
          width: '20px',
          height: '20px',
          backgroundColor: 'rgba(64, 224, 208, 0.8)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 20px 10px rgba(64, 224, 208, 0.3)'
        }}
      />
    </>
  );
};

export default StarryBackground;
