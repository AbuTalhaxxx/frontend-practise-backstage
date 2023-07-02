import logo from "./assets/logo.png";
import { useRef, useEffect, useState } from "react";
import issue_7 from "./assets/issue_7.png";
import issue_6 from "./assets/issue_6.png";
import issue_5 from "./assets/issue_5.png";
import issue_4 from "./assets/issue_4.png";
import issue_3 from "./assets/issue_3.png";
import issue_2 from "./assets/cover2017.png";
import issue_1 from "./assets/cover2016.png";
import { useInView } from "react-intersection-observer";

function App() {
  const [colorState, setColorState] = useState("bg-[#ff608c]");
  const [linkState, setLinkState] = useState("text-white");
  const [count, setCount] = useState(0);
  const [footerRef, footerInView, entryFooter] = useInView({
    threshold:0.2,
  });
  const [sevenRef, sevenInView, entrySeven] = useInView({
    threshold: 0.39,
  });
  const [sixRef, sixInView, entrySix] = useInView({
    threshold: 0.39,
  });
  const [fiveRef, fiveInView, entryFive] = useInView({
    threshold: 0.39,
  });
  const [fourRef, fourInView, entryFour] = useInView({
    threshold: 0.39,
  });
  const [threeRef, threeInView, entryThree] = useInView({
    threshold: 0.39,
  });
  const [twoRef, twoInView, entryTwo] = useInView({
    threshold: 0.39,
  });
  const [oneRef, oneInView, entryOne] = useInView({
    threshold: 0.39,
  });
  
  
  function setBgColor(){


    if(sevenInView){
     setColorState("bg-[#ff608c]");
    }

    if(sixInView){
       setColorState("bg-white");
    }

    if(fiveInView){
       setColorState("bg-[#00c1b5]");
    }

    if(fourInView){
      setColorState("bg-[#ff6519]");
    }

    if(threeInView){
      setColorState("bg-[#ffbe00]");
    }

    if(twoInView){
      setColorState("bg-[#1d3fbb]");
    }

    if(oneInView){
      setColorState("bg-[#E30512]");
    }
    
    if(footerInView){
      setColorState("bg-[#E30512]"); 
    }
    
  }


  useEffect(()=>{
    setBgColor();
  },[oneInView, twoInView, threeInView, fourInView, fiveInView, sixInView, sevenInView, footerInView]);


  function getTextColor(){
    return sixInView ? "text-[#e568ac]":"text-white";
  }

  return (
    <div
      className={`w-full  transition-[background-color] duration-500 ${colorState}`}
    >
      <img src={logo} alt="logo" className="block w-[170px] md:w-[275px] contain pt-5 pl-4" />
      <AnIssue importedAsset={issue_7} reference={sevenRef} view={sevenInView} />
      <IssueInfo issueInfo="Issue #7" textColor={getTextColor()} issueNumber={7} />
      <AnIssue importedAsset={issue_6} reference={sixRef} view={sixInView} />
      <IssueInfo issueInfo="Issue #6" textColor={getTextColor()} issueNumber={6} />
      <AnIssue importedAsset={issue_5} reference={fiveRef} view={fiveInView} />
      <IssueInfo issueInfo="Issue #5" textColor={getTextColor()} issueNumber={5} />
      <AnIssue importedAsset={issue_4} reference={fourRef} view={fourInView} issueInfo="Issue #4 is sold out." textColor={getTextColor()} issueNumber={4}/>
      <IssueInfo issueInfo="Issue #4 is sold out." textColor={getTextColor()} issueNumber={4} />
      <AnIssue importedAsset={issue_3} reference={threeRef} view={threeInView} issueInfo="Issue #3" textColor={getTextColor()} issueNumber={3}/>
      <IssueInfo issueInfo="Issue #3" textColor={getTextColor()} issueNumber={3} />
      <AnIssue importedAsset={issue_2} reference={twoRef} view={twoInView} issueInfo="Issue #2" textColor={getTextColor()} issueNumber={2}/>
      <IssueInfo issueInfo="Issue #2" textColor={getTextColor()} issueNumber={2} />
      <AnIssue importedAsset={issue_1} reference={oneRef} view={oneInView} issueInfo="Issue #1 is sold out." textColor={getTextColor()} issueNumber={1}/>
      <IssueInfo issueInfo="Issue #1 is sold out." textColor={getTextColor()} issueNumber={1} />
      <footer ref={footerRef} className={`transition-[background-color] duration-500 ${colorState} text-center text-black font-bold text-base font-bold`}>
        <p className="leading-6 md:w-[30%] md:max-w-[280px] text-xl mx-3 md:text-left">
          Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk. <br/>
          <span className="text-xs font-normal">© 2023 <a href="#" className="hover:underline">Published by Büro Milk</a></span>
        </p>
        <div className="md:mx-3 pb-10 pt-7 md:flex md:flex-row md:justify-between md:pb-3">
          <a href="#" className=" text-base font-bold text-black hover:underline block md:inline-block text-xl">Privacy Policy</a>
          <a href="#" className=" text-base font-bold text-black hover:underline block md:inline-block mt-9 md:mt-0 text-xl">info@backstagetalks.com</a>
        </div>
      </footer>
    </div>
  );
}

function AnIssue({importedAsset, reference, view, issueInfo, textColor, issueNumber}){

  return (
        <div className="w-full flex flex-row justify-center">
          <img 
            src={importedAsset}
            ref={reference}
            className={`w-[80%] max-w-[420px] block`}
          />
        </div>
    );
}

function IssueInfo({issueNumber, issueInfo, textColor}){

console.log(issueNumber);

let selectedStore = (
  <p className={`${[7, 6, 5, 3, 2].includes(issueNumber) ? "block" : "hidden"} mt-4`}>
    <span className="text-sm font-bold">or in</span> <ColoredLinks buyHere={false} textColor={textColor}/>
  </p>
);
  
let lucky = (
  <p className={`${[4, 1].includes(issueNumber) ? "block" : "hidden"} text-sm font-bold`}>
    if you are lucky, you may get the last pieces in <ColoredLinks buyHere={false} textColor={textColor}/>.
  </p>
);

  let issueSevenLinks = (
  <p className={`${issueNumber === 7 ? "block" : "hidden"} text-center mb-4`}>
    {issueNumber === 7 && (
      <>
        <ColoredLinks buyHere={true} textColor={textColor}/> <span className="text-black text-base font-bold">(Europe)</span> <br/>
        <ColoredLinks buyHere={true} textColor={textColor}/> <span className="text-black text-base font-bold">(UK & Overseas)</span>
      </>
    )}
  </p>
);

          
       return   (<div className="flex flex-col justify-start items-center pb-14">
          <p className="mb-4 font-bold text-base">{issueInfo}</p>
          {issueSevenLinks}
          <p className={`${([6,5,3,2].includes(issueNumber)) ? "block": "hidden"}`}><ColoredLinks buyHere={true} textColor={textColor}/></p>
          {selectedStore}
          {lucky}
          </div>);

}

function ColoredLinks({buyHere, textColor}){

     return (<a href="#" className={`${textColor} hover:underline font-bold ${buyHere ? "text-base":"text-sm"}`}>{buyHere ? "BUY HERE":"selected stores"}</a>);
}

export default App;

