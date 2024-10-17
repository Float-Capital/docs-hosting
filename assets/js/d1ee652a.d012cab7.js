(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[143],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=o,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2381:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],l={id:"trading",title:"Trading",sidebar_label:"Trading",slug:"/trading"},c=void 0,s={unversionedId:"trading",id:"trading",isDocsHomePage:!1,title:"Trading",description:"For security, actions made in Float Arctic are executed in trade batches. When you make a trade it gets added to a batch alongside all other trades submitted since the last price was received. Trades in this batch will only be executed once the next price is received.",source:"@site/docs/trading.md",sourceDirName:".",slug:"/trading",permalink:"/docs/trading",editUrl:"https://github.com/Float-Capital/docs/trading.md",version:"current",frontMatter:{id:"trading",title:"Trading",sidebar_label:"Trading",slug:"/trading"},sidebar:"someSidebar",previous:{title:"Risks",permalink:"/docs/risks"},next:{title:"Triggers",permalink:"/docs/triggers"}},u=[{value:"Minting",id:"minting",children:[]},{value:"Redeeming",id:"redeeming",children:[]},{value:"Shifting",id:"shifting",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"For security, actions made in Float Arctic are executed in ",(0,i.kt)("a",{parentName:"em",href:"/docs/trade-batches"},"trade batches"),". When you make a trade it gets added to a batch alongside all other trades submitted since the last price was received. Trades in this batch will only be executed once the next price is received.")),(0,i.kt)("h2",{id:"minting"},"Minting"),(0,i.kt)("p",null,"You can mint tokens by adding collateral to pools in Float Arctic."),(0,i.kt)("p",null,"In the UI, select the type of collateral you will use to mint your position. Next, enter the amount you wish to deposit, or click 'max' to use your entire balance of that collateral type. For the Arctic Games the only collateral are valueless Arctic Fake Coins."),(0,i.kt)("p",null,"Next, select the leveraged tokens you want to mint. For each asset offered in Float there are a range of long and short tokens, with options of 1x, 3x and 5x leverage. For each of these tokens, there is a corresponding pool, to which your collateral will be deposited."),(0,i.kt)("img",{src:"/doc-assets/mint-screenshot.png",alt:"mint UI",width:"50%"}),(0,i.kt)("p",null,"Once you've selected the tokens you want, click the mint button."),(0,i.kt)("p",null,"Your mint will be executed when the next price is received, along with all other user actions submitted since the last price update. Your collateral will get added to the chosen pool, and you will receive ERC20 tokens representing your position."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"redeeming"},"Redeeming"),(0,i.kt)("p",null,"If you want to close a position in Float Arctic, you can redeem your tokens for their value in the underlying collateral."),(0,i.kt)("p",null,"To do this, select your open position in the app, then select the amount of tokens you wish to redeem."),(0,i.kt)("p",null,"Finally, select the collateral token you want to receive and click redeem."),(0,i.kt)("img",{src:"/doc-assets/redeem-screenshot.png",alt:"redeem UI",width:"50%"}),(0,i.kt)("p",null,"At the next price epoch your redeem will be executed and the tokens from your open position will be burnt."),(0,i.kt)("p",null,"Once the redeem transaction has been executed, go to your profile. Click the withdraw button and the tokens will be transferred to your public address."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"shifting"},"Shifting"),(0,i.kt)("p",null,"In Float Arctic you can shift from your open position to any other position offered by the protocol."),(0,i.kt)("p",null,"To do this, select your open position in the UI. Then select the amount of those tokens that you want to shift."),(0,i.kt)("p",null,"Then select the position you want to shift to."),(0,i.kt)("p",null,"Finally, click shift."),(0,i.kt)("img",{src:"/doc-assets/shift-screenshot.png",alt:"shift UI",width:"50%"}),(0,i.kt)("p",null,"After clicking 'shift', the protocol performs two actions, using another Shifter smart contract (note this contract has not yet been audited - it may or may not be audited before the protocol is deployed and it should be used with extreme caution)."),(0,i.kt)("p",null,"It will first performe a redeem transaction. Your existing position (e.g. SOL 5x Short) is redeemed back into the underlying collateral type at the end of the current trade batch. Once your position is redeemed, the shifter contract will open a new position (e.g. ETH 3x Long), to the value of the redeemed collateral. Your new position will be minted when the next trade batch executes."),(0,i.kt)("p",null,"Please consider trade batches when shifting positions. Shifting from any-to-any position in the protocol requires two ",(0,i.kt)("a",{parentName:"p",href:"/docs/trade-batches"},"trade batches"),"."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Once you mint, redeem or shift a position in Float Arctic, you can view your portfolio in your ",(0,i.kt)("a",{parentName:"p",href:"/docs/user-profiles"},"Float Profile"),"."))}p.isMDXComponent=!0}}]);