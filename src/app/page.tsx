"use client"
import { useState } from 'react';
import WheelComponent from 'react-wheel-of-prizes';

export default function RoletaSorteio() {
  // Lista de alunos para o sorteio
  const [alunos, setAlunos] = useState([
    'Ana',
    'Bruno',
    'Carla',
    'Diego',
    'Eduarda',
    'Felipe',
    'Gabriela',
    'Henrique',
  ]);

  // Estado para o nome do aluno sorteado
  const [ganhador, setGanhador] = useState(null);

  // Cores para os segmentos da roleta
  const colors = ['#FFC107', '#03A9F4', '#4CAF50', '#E91E63', '#FFEB3B', '#9C27B0', '#FF5722', '#8BC34A'];

  // Função chamada quando a roleta para
  const handleGanhador = (ganhador) => {
    setGanhador(ganhador);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Sorteio de Apresentação</h1>
      
      {/* Componente da roleta */}
      <WheelComponent
        segments={alunos}
        segColors={colors}
        winningSegment={null} // sorteia de forma aleatória
        onFinished={(ganhador) => handleGanhador(ganhador)}
        primaryColor="black"
        contrastColor="white"
        buttonText="Girar"
        isOnlyOnce={false}
        size={250}
        upDuration={100}
        downDuration={1000}
      />
      
      {ganhador && (
        <div style={{ marginTop: '20px', fontSize: '24px', fontWeight: 'bold' }}>
          Aluno Sorteado: {ganhador}
        </div>
      )}
    </div>
  );
}

