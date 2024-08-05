import React from 'react'
import { useParams } from 'react-router-dom';

function BallooningPage() {
  const { balloonId } = useParams();

  return (
    <div>Ballooning Page {balloonId}</div>
  )
}

export default BallooningPage