import { useEffect, useState } from 'react';

const useToggleDisplay = (ref) => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    if (!ref.current) return;
    const childNodes = ref.current.childNodes;
    setNodes(childNodes);

    const numNodesToHide = Math.ceil(childNodes.length * 0.05);
    for (let i = 0; i < numNodesToHide; i++) {
      const randomIndex = Math.floor(Math.random() * childNodes.length);
      childNodes[randomIndex].style.display = 'none';
    }
  }, [ref]);

  useEffect(() => {
    if (!nodes.length) return;
    const newElements = [...nodes];
    const randomIndex = Math.floor(Math.random() * nodes.length);
    const randomInterval = Math.floor(Math.random() * (7000 - 1000 + 1) + 1000);

    const intervalId = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * (2 - 1 + 1) + 1);
      nodes[randomIndex].style.display = randomNumber === 1 ? 'none' : 'block';
      setNodes(newElements);
    }, randomInterval);

    return () => clearInterval(intervalId);
  }, [nodes]);
}

export default useToggleDisplay;