import React from 'react';
import { useRef, useState, useEffect } from 'react';

const BalanceCalculate = () => {
  const [status, setStatus] = useState('input');

  //cash app drag
  const [dragCashappStart, setDragCashappStart] = useState(0);
  const [dragCashappEnd, setDragCashappEnd] = useState(0);

  //cash app jessica
  const [jessicaCashappStart, setJessicaCashappStart] = useState(0);
  const [jessicaCashappEnd, setjessicaCashappEnd] = useState(0);

  //drag fire kirin
  const [dragFireStart, setDragFireStart] = useState(0);
  const [dragFireEnd, setDragFireEnd] = useState(0);

  // Jessica fire
  const [jessicaFireStart, setjessicaFireStart] = useState(0);
  const [jessicaFireEnd, setjessicaFireEnd] = useState(0);

  //Juwa
  const [juwaStart, setJuwaStart] = useState(0);
  const [juwaEnd, setJuwaEnd] = useState(0);

  // old Cash app in
  const [oldCashapp, setOldCashapp] = useState(0);

  //other Cash app cash Out
  const [otherCashout, setOtherCashOut] = useState(0);

  // Drag Cassh app Difference
  const [diffDragCash, setDiffDragCash] = useState(0);

  //Jessica Cash app Difference
  const [diffJessicaCash, setDiffJessicaCash] = useState(0);

  //Drag FireCoin Difference
  const [diffDragFire, setDiffDragFire] = useState(0);

  //Jessica Coin Difference
  const [diffJesscaCoin, setDiffJessicaCoin] = useState(0);

  //Jessica Coin Difference
  const [diffJuwaCoin, setDiffJuwaCoin] = useState(0);

  //coin income
  const [coinIncome, setCoinIncome] = useState(0);

  //cash app income
  const [cashIncome, setCashIncome] = useState(0);

  //calculation
  const [balance, setBalance] = useState(0);

  const onEdit = (e) => {
    e.preventDefault();

    setStatus('input');

    console.log('is onSubmitfrom clicked');
  };

  useEffect(() => {}, []);

  useEffect(() => {
   
    calculate();
   // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log('useEffect');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    diffDragCash,
    diffJessicaCash,
    diffDragFire,
    diffJesscaCoin,
    diffJuwaCoin,
    coinIncome,
    cashIncome,
    status,
    balance,
  ]);
  
   function caluclate() {
    setDiffDragCash(dragCashappEnd - dragCashappStart);
    setDiffJessicaCash(jessicaCashappEnd - jessicaCashappStart);
    setDiffDragFire(dragFireStart - dragFireEnd);
    setDiffJessicaCoin(jessicaFireStart - jessicaFireEnd);
    setDiffJuwaCoin(juwaStart - juwaEnd);
    setCoinIncome(diffDragFire + diffJesscaCoin + diffJuwaCoin);
    setCashIncome(diffDragCash + diffJessicaCash + oldCashapp - otherCashout);
    setBalance(cashIncome - coinIncome);
  };

  const onReset = (e) => {
    e.preventDefault();
    setDragCashappStart(0);
    setDragCashappEnd(0);
    setJessicaCashappStart(0);
    setjessicaCashappEnd(0);
    setDragFireStart(0);
    setDragFireEnd(0);
    setjessicaFireStart(0);
    setjessicaFireEnd(0);
    setJuwaStart(0);
    setJuwaEnd(0);
    setOldCashapp(0);
    setOtherCashOut(0);
    setDiffDragCash(0);
    setDiffJessicaCash(0);
    setDiffDragFire(0);
    setDiffJessicaCoin(0);
    setDiffJuwaCoin(0);
    setCoinIncome(0);
    setCashIncome(0);
    setStatus('input');
    console.log('is onSubmitfrom clicked');
  };

  
  const onSubmitform = (e) => {
    e.preventDefault();
    console.log('is onSubmitfrom clicked');
    caluclate();
    setStatus('calculate');
    console.log('Drag Cash difference ' + diffDragCash);
    console.log('Jessica difference ' + diffJessicaCash);
    console.log('Drag fire difference ' + diffDragFire);
    console.log('Jessica fire difference ' + diffJesscaCoin);
    console.log('Juwa Coin difference ' + diffJuwaCoin);
    console.log('Coin Income ' + coinIncome);
    console.log('CashappIncome ' + cashIncome);
    console.log('balance ', balance);
  };

  return (
    <>
      {status === 'input' ? (
        <div className="App">
          <section>
            <table>
              <thead>
                <tr>
                  <th>Details</th>
                  <th>Start</th>
                  <th>End</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Drag Cash App</td>
                  <td>
                    <input
                      type="number"
                      id="dragCashaapStart"
                      autoComplete="off"
                      onChange={(e) => setDragCashappStart(e.target.value)}
                      value={dragCashappStart}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="dragCashaapEnd"
                      autoComplete="off"
                      onChange={(e) => setDragCashappEnd(e.target.value)}
                      value={dragCashappEnd}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>Jessica Cash App</td>
                  <td>
                    <input
                      type="text"
                      id="juwaStart"
                      autoComplete="off"
                      onChange={(e) => setJessicaCashappStart(e.target.value)}
                      value={jessicaCashappStart}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="jessicaCashappEnd"
                      autoComplete="off"
                      onChange={(e) => setjessicaCashappEnd(e.target.value)}
                      value={jessicaCashappEnd}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>Juwa Coin</td>
                  <td>
                    <input
                      type="text"
                      id="juwaStart"
                      autoComplete="off"
                      onChange={(e) => setJuwaStart(e.target.value)}
                      value={juwaStart}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="juwaEnd"
                      autoComplete="off"
                      onChange={(e) => setJuwaEnd(e.target.value)}
                      value={juwaEnd}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>Drag fire</td>
                  <td>
                    <input
                      type="text"
                      id="dragFireStart"
                      autoComplete="off"
                      onChange={(e) => setDragFireStart(e.target.value)}
                      value={dragFireStart}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      id="dragFireEnd"
                      autoComplete="off"
                      onChange={(e) => setDragFireEnd(e.target.value)}
                      value={dragFireEnd}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>Jessica Fire</td>
                  <td>
                    <input
                      type="text"
                      id="jessicaFireStart"
                      autoComplete="off"
                      onChange={(e) => setjessicaFireStart(e.target.value)}
                      value={jessicaFireStart}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      id="jessicaFireEnd"
                      autoComplete="off"
                      onChange={(e) => setjessicaFireEnd(e.target.value)}
                      value={jessicaFireEnd}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>Old CashApp In</td>
                  <td></td>
                  <td>
                    <input
                      type="text"
                      id="oldCashapp"
                      autoComplete="off"
                      onChange={(e) => setOldCashapp(e.target.value)}
                      value={oldCashapp}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>Other Cash Cash Out</td>
                  <td></td>
                  <td>
                    <input
                      type="text"
                      id="otherCashout"
                      autoComplete="off"
                      onChange={(e) => setOtherCashOut(e.target.value)}
                      value={otherCashout}
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <button onClick={onSubmitform}>Calculate</button>
          </section>
        </div>
      ) : status === 'calculate' ? (
        <div className="App">
          <section>
            <table>
              <thead>
                <tr>
                  <th>Details</th>
                  <th>Start</th>
                  <th>End</th>
                  <th> Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Drag Cash App</td>
                  <td>{dragCashappStart}</td>
                  <td>{dragCashappEnd}</td>
                  <td>{diffDragCash}</td>
                </tr>
                <tr>
                  <td>Jessica Cash App</td>
                  <td>{jessicaCashappStart}</td>
                  <td>{jessicaCashappEnd}</td>
                  <td>{diffJessicaCash}</td>
                </tr>
                <tr>
                  <td>Juwa Coin</td>
                  <td>{juwaStart}</td>
                  <td>{juwaEnd}</td>
                  <td>{diffJuwaCoin}</td>
                </tr>
                <tr>
                  <td>Drag fire</td>
                  <td>{dragFireStart}</td>
                  <td>{dragFireEnd}</td>
                  <td>{diffDragFire}</td>
                </tr>
                <tr>
                  <td>Jessica Fire</td>
                  <td>{jessicaFireStart}</td>
                  <td>{jessicaFireEnd}</td>
                  <td>{diffJesscaCoin}</td>
                </tr>
                <tr>
                  <td>Old CashApp In</td>
                  <td></td>
                  <td>{oldCashapp}</td>
                </tr>
                <tr>
                  <td>Other Cash Cash Out</td>
                  <td></td>
                  <td>{otherCashout}</td>
                </tr>
                <tr>
                  <td>Total Coin Income</td>
                  <td>{coinIncome}</td>
                  <td>Total Cash Income</td>

                  <td>{cashIncome}</td>
                </tr>
                <tr>
                  <td>Difference</td>

                  <td>{balance}</td>
                  <td>
                    {balance < 0 ? 'Short' : balance > 0 ? 'Over' : 'Even'}
                  </td>
                </tr>
              </tbody>
            </table>
            <button onClick={onReset}>Reset</button>
            <button onClick={onEdit}>Edit</button>
          </section>
        </div>
      ) : (
        <div> Calualte</div>
      )}
    </>
  );
};

export default BalanceCalculate;
