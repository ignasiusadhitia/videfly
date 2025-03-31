import { useEffect, useRef } from 'react';

import { Features, LiveDemo, Navbar, Tutorial, ValuePoint } from '@sections';

function App() {
  // To store section reference, will be used on Intersection Observer
  const sections = useRef([]);

  useEffect(() => {
    // tT set smooth scrolling to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';

    // Create Intersection Observer to detect and add animation if the section enter viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When section enter viewport delete opacity-0 and translate-y-10 class
            // Add opacity-100 and translate-y-0 class
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      {
        threshold: 0.1, // Execute when 10% of the element enter viewport
      }
    );

    // Add observer to each section
    sections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup function to delete the observer
    return () => {
      sections.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  /**
   * Helper function to add element to refs
   * @param {HTMLElement} el - Element DOM that will be observed
   */
  const addToRefs = (el) => {
    if (el && !sections.current.includes(el)) {
      sections.current.push(el);
    }
  };

  return (
    <>
      <header className="mb-[100px]">
        <Navbar />

        {/* 
        LiveDemo Section:
        - Initial state: opacity-0 (transparent) and translate-y-10 (40px to bottom)
        - Transition: 700ms duration with easing ease-out
        - Without delay (the first section)
        */}
        <div
          ref={addToRefs}
          className="transition-all duration-700 ease-out opacity-0 translate-y-10"
        >
          <LiveDemo />
        </div>
      </header>
      <main className="grid grid-cols-1 gap-[100px] mb-[61px]">
        {/* 
        Features Section:
        - Similar animation 
        - Delay 100ms
         */}
        <div
          ref={addToRefs}
          className="transition-all duration-700 ease-out opacity-0 translate-y-10 delay-100"
        >
          <Features />
        </div>

        {/* 
        Tutorial Section:
        - Similar animation 
        - Delay 200ms
         */}
        <div
          ref={addToRefs}
          className="transition-all duration-700 ease-out opacity-0 translate-y-10 delay-200"
        >
          <Tutorial />
        </div>

        {/* 
        ValuePoint Section:
        - Similar animation 
        - Delay 300ms
         */}
        <div
          ref={addToRefs}
          className="transition-all duration-700 ease-out opacity-0 translate-y-10 delay-300"
        >
          <ValuePoint />
        </div>
      </main>
    </>
  );
}

export default App;
