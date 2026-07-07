import './problem.css';
import shield from './../assets/shield.png';
import deal from './../assets/deal.png';
import bricks from './../assets/bricks.png';
import authenticity from './../assets/authenticity.png';


export default function Problem() {
    return (
        <div className='problem' id='why-cycle'>
            <p className="problemMainTitle">Why People Don’t Cycle More</p>
            <p className="problemMainDsc">Many people would like to cycle more often, but common concerns hold them back.</p>
            <div className='problemBoxes'>
                <div className='problemBox'>
                    <img className="problemImg" src={shield} alt="Security shield"/>
                    <h2 className='problemTitle'>Feeling Unsafe Alone</h2>
                    <p className='problemDsc'>Riding alone can <br /> feel intimidating, <br /> especially on <br /> unfamiliar routes <br /> or at night.</p>
                </div>

                <div className='problemBox'>
                    <img className="problemImg" src={deal} alt="Security deal"/>
                    <h2 className='problemTitle'>Hard to Meet <br /> Cycling Partners</h2>
                    <p className='problemDsc'>It isn't always easy to  <br />find friends or people <br /> with similar schedules <br /> who want to ride.</p>
                </div>

                <div className='problemBox'>
                    <img className="problemImg" src={bricks} alt="Security bricks"/>
                    <h2 className='problemTitle'>Psychological Barriers</h2>
                    <p className='problemDsc'>Many people <br />hesitate because <br />they lack confidence, <br />experience, or <br />motivation.</p>
                </div>

                <div className='problemBox'>
                    <img className="problemImg" src={authenticity} alt="Security authenticity"/>
                    <h2 className='problemTitle'>Cycling Benefits Are <br />Often Overlooked</h2>
                    <p className='problemDsc'>People may not realize <br />how cycling improves <br />health, reduces stress, <br />and supports a greener <br />environment.</p>
                </div>
            </div>
            
        </div>
    )
}