import imgParella from "../img/parella.jpg";

const Historia = () => {
  return (
    <div id="container" className="my-0 mx-auto w-full p-10">
      <h2 className="md:my-0 md:mx-auto">Historia</h2>
      <div className="flex flex-row flex-wrap">
        <div className="my-0 px-5 md:w-2/6 lg:max-w-xl">
          <img
            src={imgParella}
            className="rounded-full shadow-2xl shadow-slate-500"
            alt="selfie de l'Oriol i la Paty junts"
          />
        </div>
        <div className="mt-10 ml-10 md:w-3/6">
          <p>
            Ens vam conèixer ara farà 7 anys, el 14 d&apos;Octubre del 2016.
          </p>
          <p className="mt-4">
            Era un divendres, i l&apos;Oriol va arribar mitja hora tard. Però
            tenia excusa perquè venia &ldquo;de fora&rdquo;, va pensar la Paty.
          </p>
          <p className="mt-4">
            Spoiler alert: l&apos;Oriol va arribar tard a cada cita, sens falta.
          </p>
          <p className="mt-8">
            La Paty va sentir una connexió immediata amb aquest noi més català
            que el pà amb tomàquet, es va prendre amb humor això que fós de
            l&apos;Espanyol (ningú no és perfecte) i li va semblar molt
            pintoresc que fós del Penedès i li apassionés el vi. Ella només era
            conscient d&apos;una forma molt abstracta que hi hagués gaire més a
            fer amb una copa que aixecar-ne el colze!
          </p>
          <p className="mt-4">L&apos;Oriol...</p>
          <p className="mt-8">
            Va anar passar el temps, i l&apos;amistat amb química del principi
            va anar evolucionant. Molt a poc a poc, sense fer gaire soroll i
            sense moviments bruscos per no espantar ningú -sobre tot
            l&apos;Oriol. Pel camí vam tenir alguna que altra ensotregada, però
            sent honestos ara no seríem aquí sense elles.
          </p>
          <p className="mt-4">
            Ell vivia sol a Vilafranca, ella a Barcelona, a un petit (molt
            petit) pis al carrer Elisi acompanyada pel seu estimat petit gran
            gat Mr Darcy. Al principi, en Darcy no acabava de veure clar haver
            de compartir espai i a la seva humana amb aquest home rialler que
            s&apos;afincava al piset els caps de setmana.
          </p>
          <p className="mt-8">
            Però va passar el temps, i dels caps de setmana vam passar a viure
            plegats al petit pis del carrer Elisi. Quan diem petit volem dir
            <strong> PETIT</strong>: 39 metres quadrats sense cap balcó. Al
            principi amb allò d&apos;estar enamorats i de què el tamany no
            importa no se&apos;ns feia tant petit. Però llavors va arribar el
            2020 i el maleït COVID, i de convivència vam passar a també ser
            companys d&apos;oficina. 39 metres quadrats, dos adults i els seus
            portàtils, un gat-catifa de 7Kg i les 5 ampolles de vi que consumíem
            cada cap de setmana: el tamany va començar a importar.
          </p>
          <p className="mt-8">
            Fast forward a 2023: el gat-catifa ja no hi és de cos present (però
            sempre hi serà en esperit), el petit pis tampoc. Ara vivim en un pis
            força més gran, amb balcó i finestres a un gran parc i espai per ser
            companys d&apos;oficina (a més de room-mates) sense matar-nos. I un
            gran petit gat ens omple el pis de pèl i els matins de corredisses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Historia;
