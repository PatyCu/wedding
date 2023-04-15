import { Link } from "react-router-dom";

const Historia = () => {
  return (
    <div id="container" className="my-0 mx-auto w-full p-10">
      <h2 className="pb-5 text-center text-2xl text-gold md:my-0 md:mx-auto">
        Historia
      </h2>
      <div className="flex flex-row flex-wrap">
        <div className="my-0 mr-10 md:w-2/5 md:w-1/5">
          <img
            src="../img/parella.jpg"
            className="rounded-full shadow-2xl shadow-slate-500"
            alt="selfie de l'Oriol i la Paty junts"
          />
        </div>
        <div className="mt-10 md:w-3/5">
          <p>Ens vam conèixer ara farà 7 anys, el 14 d'Octubre del 2016.</p>
          <p className="mt-4">
            Era un divendres, i l'Oriol va arribar mitja hora tard. Però tenia
            excusa perquè venia "de fora", va pensar la Paty.
          </p>
          <p className="mt-4">
            Vam anar a fer una copa de vi primer, que sempre va bé començar
            light per tenir ruta d'escapatòria fàcil si la cosa no qualla. Però
            va quallar, i la nit va seguir...
          </p>
          <p className="mt-8">
            La Paty va sentir una connexió immediata amb aquest noi més català
            que el pà amb tomàquet, es va prendre amb humor això que fós de
            l'Espanyol (ningú no és perfecte) i li va semblar molt pintoresc que
            fós del Penedès i li apassionés el vi. Ella només era conscient
            d'una forma molt abstracta que hi hagués gaire més a fer amb una
            copa que aixecar-ne el colze!
          </p>
          <p className="mt-4">L'Oriol...</p>
          <p className="mt-8">
            Va anar passar el temps, i l'amistat amb química del principi va
            anar evolucionant. Molt a poc a poc, sense fer gaire soroll i sense
            moviments bruscos per no espantar ningú -sobre tot l'Oriol. Pel camí
            vam tenir alguna que altra ensotregada, però sent honestos ara no
            seríem aquí sense elles.
          </p>
          <p className="mt-4">
            Ell vivia sol a Vilafranca, ella a Barcelona, a un petit (molt
            petit) pis al carrer Elisi acompanyada pel seu estimat petit gran
            gat Mr Darcy. Al principi, en Darcy no acabava de veure clar haver
            de compartir espai i a la seva humana amb aquest home rialler que
            s'afincava al piset els caps de setmana.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Historia;
